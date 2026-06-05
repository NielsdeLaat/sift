# Changelog

## [0.1.1] — 2026-06-05

Stable design refresh. No new content or question types; focus is on visual polish and architecture clean-up ahead of further development.

### Design system

- Replaced the previous ad-hoc colour palette with a structured token system: `primary` (blue), `accent` (orange + green/red variants), `neutral` (base / light / border), `contrast` (default / dark / blue)
- Migrated all 31 component and page files to the new token names
- Updated glow shadows to match the new primary hue
- CSS custom properties exposed in `globals.css` for use outside Tailwind

### Visual changes

- **Roadmap nodes** — active/current nodes gain an inner-top shadow; current (play) node enlarged; check icon switched to a bolder stroke style; play icon scaled up
- **Lesson header** — redesigned progress bar using the new colour tokens
- **Lesson questions** — Yes/No buttons both use solid primary blue; Yes always left, No always right; correct feedback uses `accent-green`, incorrect uses `accent-red`
- **Profile page** — stat card icons wrapped in `neutral-border` pill containers; XP pill gains a border; avatar border made subtler; Add Friends button taller

### Under the hood

- Lesson routing changed from `/lesson/[nodeId]` to `/lesson/[sectionId]`; lesson type (regular vs. flag/test) is now explicit via a `?type=test` query param instead of an implicit node-type check
- Questions now carry an `introSection` field so they only enter the pool once the player has reached that section
- Removed the `isFlagNode()` helper; dropped corresponding dead code

---

## [0.1] — 2026-06-04

Initial release for the _Information Disorder during Crisis_ project (Resilient Society / Futures Lab).

### Features

- **Roadmap home screen** — serpentine path of 13 lesson nodes across 3 sections; sticky section banner; XP bar and streak counter
- **Lesson flow** — 3 randomly selected questions per session; per-question progress bar; correct/incorrect feedback with explanation; XP completion overlay
- **7 question types**
  - `manipulation-tactics` — identify the bias or framing technique in a news article
  - `evidence-checking` — highlight the passage that supports (or refutes) a headline claim
  - `ai-detection` — decide whether an image is AI-generated and mark the visual tell
  - `source-investigation` — evaluate a social media post's trustworthiness
  - `image-verification` — decide whether an image matches its headline and mark the tell
  - `collaboration` — browse an external URL in-app, then answer Yes/No
  - `feed-test` — triage a multi-post social feed (true / misleading / false) used at section checkpoints
- **11 question items** based on real news articles and social media posts, plus one 7-post Delaney Hall feed-test checkpoint
- **XP & progression** — completing a lesson unlocks the next node and awards XP; persisted in `localStorage`
- **Section info modal** — tap a section divider to see a description and overview of all sections
- **Image lightbox** — tap any question image to enlarge (desktop-optimised)
- **Reset demo** button — wipes progress back to node 1 for demo purposes
- **Standalone test page** — `/test?q=<id>` for testing individual questions without random selection

### Known limitations

- All state is client-side (`localStorage`); no backend or authentication
- Leaderboard and Puzzles pages are scaffolded but not implemented
- Image lightbox not optimised for mobile (deferred)
