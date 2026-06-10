# Sift — Prototype v0.2

A gamified fact-checking trainer built for the **Information Disorder during Crisis** project by the Resilient Society team at Futures Lab.

Users work through short, Duolingo-style lessons that teach core media-literacy skills: spotting AI-generated images, evaluating sources, identifying manipulation tactics, and verifying context.

---

## Tech stack

| Layer     | Choice                            |
| --------- | --------------------------------- |
| Framework | Next.js 15 (App Router)           |
| Language  | TypeScript                        |
| Styling   | Tailwind CSS v3                   |
| State     | React `useState` / `localStorage` |
| Fonts     | Nunito Sans (Google Fonts)        |

---

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Features

### Home screen

- Serpentine roadmap of lesson nodes across 12 sections (Chapter 1)
- Sticky section banner that updates as you scroll
- XP bar and streak counter in the status bar
- Demo menu (bottom-right): skip to any section, jump to a section test, or reset progress

### Lesson flow

- 5 questions per lesson, selected with type-variety constraints (no two of the same type in a row; max 2 per type)
- Questions are difficulty-gated — each section unlocks harder variants
- Progress bar advances per answered question, highlighted green/red after locking in
- Correct/incorrect feedback banner with explanation after each question
- Completion overlay with XP earned
- Section tests require ≥ 60 % to pass; failing shows a "Try Again" screen

### Question types

| Type             | Mechanic                                                                     |
| ---------------- | ---------------------------------------------------------------------------- |
| `name-trick`     | Pick the rhetorical or naming trick used in a headline or post               |
| `real-or-ai`     | Decide if an image is real or AI-generated; optionally mark the tell         |
| `leave-the-page` | Choose the right search query, then pick the result that proves the claim    |
| `who-says`       | Open the article and tap the sentence that contains (or lacks) a source      |
| `under-the-hood` | Tap the metadata item or reverse-search result that flags the image as fake  |
| `when-or-where`  | Given an image or post, select the correct date or location from options     |
| `weak-link`      | Identify which of the 5W pillars (who/what/when/where/why) is unverified     |
| `feed-test`      | Multi-post social feed; triage each post as true, misleading, or false       |

### Language support

- Dutch and English, switchable at any time in **Settings**
- All UI strings, question prompts, and section metadata are fully translated
- Language preference is persisted in `localStorage`

### Progression & demo

- Completing a lesson advances the roadmap node and adds XP — both persisted in `localStorage`
- **Demo menu** (bottom-right on home screen): skip to the start of any section, jump directly to a section test, or wipe all progress

---

## URL testing

Test a specific question type directly without going through the lesson flow:

```
/test?q=nt-fox-agitators          — exact question ID
/test?q=nt-                        — random question whose ID starts with "nt-"
/test?q=uth-                       — random under-the-hood question
```

The `q` param accepts either an exact question `id` or a prefix followed by `-`; a random match is picked when multiple questions share the prefix.

---

## Key files

```
data/
  questions.ts          — TypeScript types and getQuestions(lang) factory
  questions/
    nl/                 — Dutch question content (one file per type)
    en/                 — English question content (one file per type)
  roadmap.ts            — section and node definitions
  user.ts               — seed user profile

lib/
  lesson.ts             — getLessonQuestions(), calcXp(), SELF_CONTAINED_TYPES
  store.ts              — localStorage helpers + live roadmap computation
  i18n.ts               — translation strings + sectionTranslations
  levels.ts             — XP → level conversion table

components/
  LanguageProvider.tsx  — React context for lang / t / setLang
  lesson/               — lesson UI (header, feedback banner, ContentCard, question types)
  icons/                — SVG icon registry

app/
  page.tsx              — home screen (roadmap + status bar)
  lesson/[sectionId]/   — lesson session page
  test/                 — standalone question tester (see URL testing above)
  settings/             — language settings page
  profile/              — user profile page
```

---

## Adding content

### New questions

Add entries to the appropriate file in `data/questions/nl/` and `data/questions/en/`. Each question needs:

- `id` — unique kebab-case string
- `difficulty` — integer (1 = easiest); sections gate questions by this value
- `xp` — points awarded for a correct answer

All types are enforced by TypeScript discriminated unions in `data/questions.ts`.

### New sections / nodes

Edit `data/roadmap.ts` only. The path layout, section banner, and section info modal update automatically. Add a Dutch translation entry to the `sectionTranslations` map in `lib/i18n.ts`.

### Lesson logic

- Lesson size: `LESSON_SIZE` constant in `lib/lesson.ts` (currently 5)
- Difficulty ceiling per type per section: `typeConfig` array in each section in `data/roadmap.ts`
- Selection constraints (no consecutive same type, max 2 per type): `pickWithConstraints()` in `lib/lesson.ts`
