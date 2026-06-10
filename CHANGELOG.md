# Changelog

All notable changes to this project are documented here.

---

## [0.2.0] — 2026-06-10

### Added

- **7 new question types** replacing all v0.1 types: `name-trick`, `real-or-ai`, `leave-the-page`, `who-says`, `under-the-hood`, `when-or-where`, `weak-link`
- **Dutch / English language toggle** — full i18n for all UI strings, question prompts, and section metadata; persisted in `localStorage`; switchable without reloading
- **Settings page** (`/settings`) for language selection
- **12-section Chapter 1 roadmap** with per-section difficulty configuration
- **Difficulty gating** — questions carry a `difficulty` integer; each section's `typeConfig` controls which difficulty tier is unlocked
- **Numeric scoring** — answer scores are 0–1 floats enabling partial credit; `calcXp` computes weighted XP
- **Section-test pass threshold** — tests require ≥ 60 % to pass; failing shows a dedicated "Not Quite" screen with a Try Again button
- **ContentCard** — unified content component rendering both article and social-post stimuli
- **Demo menu** — replaces the Reset button with a bottom sheet: skip to section start, jump to section test, or wipe progress
- **Type-variety constraints** in lesson selection — no two identical question types in a row; max 2 of any type per 5-question lesson
- **Multiple correct answers** — `correctIndex` / `correctFlagIndex` / `correctPillar` accept arrays for questions with more than one valid answer
- **Answer highlighting** — correct/incorrect options highlighted green/red after confirming
- Dutch and English question banks for all 7 types (separate files per locale under `data/questions/`)
- New images for `under-the-hood` questions
- `ChevronLeft` / `ChevronRight` icons

### Changed

- Lesson size increased from 3 to 5 questions
- Expandable card tappable across full surface; collapse via shrink icon only
- `/test?q=` supports prefix matching (e.g. `?q=nt-` picks a random matching question)
- `answers` state changed from `boolean | null` to `number | null` for numeric scores
- `SELF_CONTAINED_TYPES` and `calcXp` extracted to `lib/lesson.ts`

### Removed

- Question types: `collaboration`, `manipulation-tactics`, `evidence-checking`, `ai-detection`, `source-investigation`, `image-verification`
- `ArticleCardView` component (superseded by `ContentCard`)
- Comma-list `?q=id,id` syntax on the lesson page

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
