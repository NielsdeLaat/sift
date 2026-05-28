"use client";

import type { Section, LevelNode } from "@/data/roadmap";
import { LevelNode as LevelNodeComponent } from "@/components/LevelNode";
import { SectionDivider } from "@/components/SectionDivider";

// ── Layout constants ──────────────────────────────────────────────────────────
// Edit these to tune the visual spacing; the path re-generates automatically.

/** Horizontal positions (fraction 0–1) for each successive node index (mod length). */
const SERPENTINE_X = [0.6, 0.28, 0.58, 0.68, 0.36, 0.6, 0.32, 0.68, 0.44, 0.58];

const NODE_SPACING = 130; // px between successive node centres
const SECTION_DIV_HEIGHT = 72; // px reserved for the section-title row
const TOP_PAD = 32; // px above first node
const BOTTOM_PAD = 48; // px below last node

// Reference width used for SVG x-coordinates.
// With preserveAspectRatio="none" the x-axis stretches to fill the container;
// y stays in pixels (CSS height === viewBox height).
const SVG_WIDTH = 430;

// ── Types ─────────────────────────────────────────────────────────────────────

interface NodeLayout {
  node: LevelNode;
  xFrac: number; // 0–1
  y: number; // px from top of container
}

interface DividerLayout {
  title: string;
  y: number; // centre y of the divider row
}

interface BadgeLayout {
  label: string;
  xFrac: number;
  y: number;
}

// ── Layout calculation ────────────────────────────────────────────────────────

function layoutSections(sections: Section[]) {
  let y = TOP_PAD;
  let nodeIdx = 0;

  const nodes: NodeLayout[] = [];
  const dividers: DividerLayout[] = [];
  const badges: BadgeLayout[] = [];

  sections.forEach((section, si) => {
    if (si > 0) {
      // Place section divider between sections
      dividers.push({ title: section.title, y: y + SECTION_DIV_HEIGHT / 2 });
      y += SECTION_DIV_HEIGHT;
    }

    // Section badge (the small "L" circle shown at section start in the design)
    if (section.badge) {
      badges.push({
        label: section.badge,
        xFrac: 0.13,
        y: y + NODE_SPACING / 2,
      });
    }

    section.nodes.forEach((node) => {
      nodes.push({
        node,
        xFrac: SERPENTINE_X[nodeIdx % SERPENTINE_X.length],
        y: y + NODE_SPACING / 2,
      });
      y += NODE_SPACING;
      nodeIdx++;
    });
  });

  return { nodes, dividers, badges, totalHeight: y + BOTTOM_PAD };
}

// ── SVG path builder ──────────────────────────────────────────────────────────

function buildPath(nodes: NodeLayout[]): string {
  if (nodes.length < 2) return "";

  return nodes
    .map((n, i) => {
      const px = (n.xFrac * SVG_WIDTH).toFixed(1);
      const py = n.y.toFixed(1);

      if (i === 0) return `M ${px} ${py}`;

      const prev = nodes[i - 1];
      const ppx = (prev.xFrac * SVG_WIDTH).toFixed(1);
      const ppy = prev.y.toFixed(1);
      const midY = ((prev.y + n.y) / 2).toFixed(1);

      // Cubic bezier: inflect at mid-y so the curve is smooth
      return `C ${ppx} ${midY}, ${px} ${midY}, ${px} ${py}`;
    })
    .join(" ");
}

// ── Component ─────────────────────────────────────────────────────────────────

interface Props {
  sections: Section[];
}

export function RoadmapPath({ sections }: Props) {
  const { nodes, dividers, badges, totalHeight } = layoutSections(sections);

  return (
    <div className="relative w-full" style={{ height: totalHeight }}>
      {/* ── Dashed connector SVG ─────────────────────────────── */}
      {/* preserveAspectRatio="none" makes x-coords fill container width;
          vector-effect keeps the stroke from being distorted. */}
      <svg
        viewBox={`0 0 ${SVG_WIDTH} ${totalHeight}`}
        preserveAspectRatio="none"
        className="absolute inset-0 w-full pointer-events-none"
        style={{ height: totalHeight }}
        aria-hidden="true"
      >
        <path
          d={buildPath(nodes)}
          fill="none"
          stroke="var(--color-muted)"
          strokeOpacity="0.45"
          strokeWidth="3"
          strokeDasharray="10 8"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      {/* ── Section dividers ─────────────────────────────────── */}
      {dividers.map((d) => (
        <SectionDivider key={d.title} title={d.title} style={{ top: d.y }} />
      ))}

      {/* ── Level nodes ──────────────────────────────────────── */}
      {nodes.map(({ node, xFrac, y }) => (
        <LevelNodeComponent
          key={node.id}
          node={node}
          style={{ left: `${xFrac * 100}%`, top: y }}
          href={node.status === "current" ? `/lesson/${node.id}` : undefined}
        />
      ))}
    </div>
  );
}
