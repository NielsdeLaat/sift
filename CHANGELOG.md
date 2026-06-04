# Changelog

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
