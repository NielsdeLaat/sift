# Thinking Trainer — Prototype

A gamified fact-checking trainer built for the **Information Disorder during Crisis** project by the Resilient Society team at Futures Lab.

Users work through short, Duolingo-style lessons that teach core media-literacy skills: spotting AI-generated images, evaluating sources, identifying manipulation tactics, and checking evidence.

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| State | React `useState` / `localStorage` |
| Fonts | Nunito Sans (Google Fonts) |

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
- Serpentine roadmap of lesson nodes across multiple sections
- Sticky section banner that updates as you scroll
- XP bar and streak counter in the status bar

### Lesson flow
- 3 randomly selected questions per lesson (configurable in `lib/lesson.ts`)
- Progress bar advances per answered question
- Correct/incorrect feedback banner with explanation after each question
- Completion overlay with XP earned

### Question types

| ID | Type | Mechanic |
|----|------|----------|
| q1 | Collaboration | Browse an external URL inside the app, then answer Yes/No |
| q2 | Manipulation tactics | Pick the bias technique from 4 options |
| q3 | Evidence checking | Highlight a passage in the article, or select "No Evidence" |
| q4 | AI detection | Decide if the image is AI-generated; mark the tell |
| q5 | Source investigation | Evaluate a social media post's trustworthiness |
| q6 | Image verification | Decide if the image matches the headline; mark the tell |

### Progression & demo
- Completing a lesson advances the roadmap and adds XP — both persisted in `localStorage`
- **Reset demo** button (bottom-right on home screen) wipes progress back to node 1

---

## URL testing

Test a specific question directly without random selection:

```
/lesson/test?q=q4
/lesson/test?q=q1,q3,q5
```

Any valid question ID from `data/questions.ts` works.

---

## Key files

```
data/
  questions.ts      — question dataset and TypeScript types
  roadmap.ts        — section and node definitions
  user.ts           — seed user profile

lib/
  lesson.ts         — getLessonQuestions() — swap point for lesson composition
  store.ts          — localStorage helpers + live roadmap computation
  levels.ts         — XP → level conversion table

components/
  lesson/           — lesson UI (header, feedback banner, question types)
  icons/            — SVG icon registry

app/
  page.tsx          — home screen (roadmap + status bar)
  lesson/[nodeId]/  — lesson session page
  profile/          — user profile page
```

---

## Adding content

- **New questions** — add entries to the `questions` array in `data/questions.ts`. All types are enforced by TypeScript discriminated unions.
- **New nodes/sections** — edit `data/roadmap.ts` only; the path layout and section banner update automatically.
- **Lesson logic** — replace the body of `getLessonQuestions()` in `lib/lesson.ts`.
