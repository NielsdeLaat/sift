// TEMPORARY: These are machine-translated versions of the Dutch questions.
// Content is Dutch-context specific and has not been adapted for an English-speaking audience.

import type { NameTrickQuestion } from "../../questions";
import { social } from "../helpers";

export const nameTrickQuestions: NameTrickQuestion[] = [
  // ─────────────────────────── DIFFICULTY 1 ───────────────────────────

  {
    id: "nt-d1-1",
    type: "name-trick",
    xp: 50,
    difficulty: 1,
    content: social("nt-d1-1", {
      sourceName: "Food Safety Now",
      handle: "@foodsafetynow",
      followerCount: "5.3K followers",
      text: "🚨 STOP EATING!! Spinach from Albert Heijn CONTAMINATED with dangerous E.coli — my neighbour has already been admitted to hospital!! THROW IT AWAY and warn everyone near you!! This is URGENT!!",
    }),
    options: [
      "Plays on fear",
      "Says you only have two options",
      "Points to one group as responsible",
      "Asks suspicious questions",
    ],
    correctIndex: 0,
    explanation:
      "This post makes you afraid with capitals, exclamation marks and an anonymous story about a neighbour — but without any official recall, name or source. Fear replaces the evidence here.",
  },

  {
    id: "nt-d1-2",
    type: "name-trick",
    xp: 50,
    difficulty: 1,
    content: social("nt-d1-2", {
      sourceName: "Travellers Rights NL",
      handle: "@travellersrights",
      followerCount: "9.1K followers",
      text: "A former employee of the national rail operator told me that the constant train delays are being deliberately maintained to justify extra subsidies. This has apparently been going on for years. They don't want this to come out.",
    }),
    options: [
      "Makes you afraid",
      "Relies on someone you cannot verify",
      "Blames one group for everything",
      "Suggests there are only two choices",
    ],
    correctIndex: 1,
    explanation:
      "The post mentions a 'former employee' but gives no name, position or evidence, so you cannot verify whether that person exists or said this. An unknown expert is not evidence.",
  },

  {
    id: "nt-d1-3",
    type: "name-trick",
    xp: 50,
    difficulty: 1,
    content: social("nt-d1-3", {
      sourceName: "Care for Citizens",
      handle: "@carenl",
      followerCount: "16K followers",
      text: "GP waiting lists this long? Simple: practices are overcrowded with people who have never paid health insurance here. Dutch patients have been paying the price for years. That's how the system works.",
    }),
    options: [
      "Stirs up fear",
      "Asks questions instead of making accusations",
      "Blames one group for a complex problem",
      "Cites an expert you cannot verify",
    ],
    correctIndex: 2,
    explanation:
      "Waiting lists have complex causes — staff shortages, an ageing population, budgets — but the post puts it all on one group in one sentence. That's how scapegoating works: a complicated problem gets an easy target.",
  },

  {
    id: "nt-d1-4",
    type: "name-trick",
    xp: 50,
    difficulty: 1,
    content: social("nt-d1-4", {
      sourceName: "Housing Market NL",
      handle: "@housingmarketnl",
      followerCount: "28K followers",
      text: "Choose: you pay €1,600 rent per month and lose everything financially, or you buy a house for €450,000 and go deeply into debt for decades. These are your only two options in 2025. Good luck with that.",
    }),
    options: [
      "Plays on your emotions",
      "Cites an unknown expert",
      "Blames a group",
      "Says there are only two choices",
    ],
    correctIndex: 3,
    explanation:
      "The post names two extreme options as the only choices, while there are more possibilities: housing benefit, social housing, shared ownership or moving to another region. By leaving out alternatives, a false sense of hopelessness is created.",
  },

  // ─────────────────────────── DIFFICULTY 2 ───────────────────────────

  {
    id: "nt-d2-1",
    type: "name-trick",
    xp: 80,
    difficulty: 2,
    content: social("nt-d2-1", {
      sourceName: "Groningen Speaks",
      handle: "@groningenspeaks",
      followerCount: "12K followers",
      text: "I'm not saying it was deliberate. But isn't it striking that the most severe earthquakes in Groningen coincided exactly with the peak years of gas extraction? And that the same politicians who approved the extraction now declare there is 'insufficient evidence' for a link? I'm just asking questions. #Groningen #gasextraction 🤔",
    }),
    options: [
      "Asks accusatory questions without having to prove anything",
      "Plays on fear and uncertainty",
      "Points to one party as the culprit",
      "Names an unverifiable expert",
      "Sketches a false dilemma",
    ],
    correctIndex: 0,
    explanation:
      "The post only asks questions and never draws a conclusion, but the questions together suggest deliberate intent and deception. By never claiming anything, the writer has nothing to prove — the reader draws the conclusion themselves.",
  },

  {
    id: "nt-d2-2",
    type: "name-trick",
    xp: 80,
    difficulty: 2,
    content: social("nt-d2-2", {
      sourceName: "Climate & Rights NL",
      handle: "@climaterights",
      followerCount: "23K followers",
      text: "Yesterday, students in their early twenties were forcibly dragged off the street while peacefully demonstrating for their future. They got tear gas in their faces. Ordinary young people who did nothing more than shout that they want to survive. Can you imagine how scared they were? This touches me to the core. Share this if you are also outraged.",
    }),
    options: [
      "Points to the government as the culprit",
      "Stirs up outrage as a substitute for evidence",
      "Cites an unverifiable witness",
      "Sketches a false dilemma",
      "Asks accusatory questions",
    ],
    correctIndex: 1,
    explanation:
      "The post uses vivid details to stir up outrage, but names no source, report or person. The emotional power of the story is intended to make verification seem unnecessary.",
  },

  {
    id: "nt-d2-3",
    type: "name-trick",
    xp: 80,
    difficulty: 2,
    content: social("nt-d2-3", {
      sourceName: "Energy Watchdog",
      handle: "@energywatchdog",
      followerCount: "7.8K followers",
      text: "A former director of a major energy company — who wants to remain anonymous out of fear for his pension — told me that energy prices have been artificially inflated by at least 40% over the past three years. Profit margins for shareholders have never been higher. He doesn't dare to come out publicly. That says enough.",
    }),
    options: [
      "Plays on fear and urgency",
      "Asks accusatory questions",
      "Names an anonymous, unverifiable expert",
      "Sketches a false dilemma: only two options",
      "Points to one industry as the culprit",
    ],
    correctIndex: 2,
    explanation:
      "The post cites a 'former director' who remains anonymous, so you cannot verify his identity, position and the figure of 40%. The more specific an anonymous source sounds, the more credible it seems — but anonymous remains anonymous.",
  },

  {
    id: "nt-d2-4",
    type: "name-trick",
    xp: 80,
    difficulty: 2,
    content: social("nt-d2-4", {
      sourceName: "Patient Voice NL",
      handle: "@patientvoicenl",
      followerCount: "18K followers",
      text: "The situation is clear: either the cabinet intervenes this week and forces pharmaceutical companies to provide immediate delivery of insulin and other life-saving medicines, or there will be deaths among chronically ill people in the coming months. There is no third option. Politicians, the ball is in your court.",
    }),
    options: [
      "Plays on fear",
      "Names an unverifiable expert",
      "Points to the pharmaceutical industry as the culprit",
      "Sketches a false dilemma: as if there are only two options",
      "Asks accusatory questions",
    ],
    correctIndex: 3,
    explanation:
      "The post presents two options as if there are no alternatives: immediate intervention or people die, while there are more paths such as emergency stockpiles, European procurement or temporary arrangements. The false dilemma creates artificial urgency.",
  },

  // ─────────────────────────── DIFFICULTY 3 ───────────────────────────

  {
    id: "nt-d3-1",
    type: "name-trick",
    xp: 110,
    difficulty: 3,
    content: social("nt-d3-1", {
      sourceName: "Free & Independent NL",
      handle: "@freenl",
      followerCount: "54K followers",
      text: "The explosion in energy costs, unaffordable groceries, the housing market that is permanently locked: these are not coincidences. They are the direct result of a climate policy that was implemented without a mandate and whose bill falls on the ordinary citizen. The closure of the Groningen gas fields, the wind turbines, the nitrogen rules — they are links in the same chain. While multinationals pocket billions in subsidies, the average household pays the price. The politicians who defend this policy do so because their financiers benefit from it.",
    }),
    options: [
      "Emotional manipulation through outrage",
      "Scapegoating: multiple complex problems attributed to one agenda",
      "False dilemma: only two options presented",
      "Just asking questions: accusations packaged as questions",
      "Unverifiable expert cited",
    ],
    correctIndex: 1,
    explanation:
      "The post connects diverse problems — energy, food, housing, nitrogen — to one cause: climate policy, while each problem has its own causes and context. When everything is reduced to the same agenda without evidence per problem, that is scapegoating.",
  },

  {
    id: "nt-d3-2",
    type: "name-trick",
    xp: 110,
    difficulty: 3,
    content: social("nt-d3-2", {
      sourceName: "Housing Rights Research",
      handle: "@housingrights",
      followerCount: "31K followers",
      text: "The housing shortage is officially at 400,000 homes. But who keeps those statistics? Statistics Netherlands (CBS) — which reports to the same government that determined the policy. How is it possible that a country that had housing surpluses twenty years ago now suddenly has half a million homes short? Is it a coincidence that this shortage coincides with the years in which the government itself stopped housing construction? I'm not saying there is a deliberate plan. But why are those questions not asked in Parliament? What does the government have to hide?",
    }),
    options: [
      "Emotional manipulation: outrage as evidence",
      "Scapegoating: complex problems attributed to one cause",
      "False dilemma: only two options presented",
      "Unverifiable expert cited as authority",
      "Just asking questions: packaging accusations as neutral questions",
    ],
    correctIndex: 4,
    explanation:
      "The post asks six rhetorical questions but never makes a direct claim, so every suggestion — Statistics Netherlands is not independent, the government is hiding something — lingers without evidence. The final 'what does the government have to hide?' is an accusation packaged as a question.",
  },

  {
    id: "nt-d3-3",
    type: "name-trick",
    xp: 110,
    difficulty: 3,
    content: social("nt-d3-3", {
      sourceName: "Healthcare Victim NL",
      handle: "@healthcarevictim",
      followerCount: "44K followers",
      text: "My mother was on a waiting list for a hip operation for 14 months. During that time she fell three times. She can now barely walk. She is 73 years old, has paid her health insurance premium faithfully for 47 years and this is what she gets back. Meanwhile politicians tell me there is 'no money' — while the healthcare allowance has been cut and premiums rise every year. She is not the only one: hundreds of thousands of elderly people are in the same situation. I will keep posting this until someone in The Hague wakes up.",
    }),
    options: [
      "Emotional manipulation: personal stories as a substitute for evidence",
      "False dilemma: two options, no middle ground",
      "Scapegoating: one group pointed to as the culprit",
      "Just asking questions: making accusations as questions",
      "Unverifiable expert cited as authority",
    ],
    correctIndex: 0,
    explanation:
      "The post tells a compelling, detailed personal story, but there are no official waiting list figures, no name and no medical source. The story may be sincere, but the emotional power here replaces verification.",
  },

  {
    id: "nt-d3-4",
    type: "name-trick",
    xp: 110,
    difficulty: 3,
    content: social("nt-d3-4", {
      sourceName: "Groningen Research Platform",
      handle: "@gronresearch",
      followerCount: "8.2K followers",
      text: "Dr. Peter Claassen, geophysicist and former advisor at a Scandinavian energy company, has published his findings on his personal research site. His conclusion: the earthquakes in Groningen are more severe than officially reported and will increase in strength over the next ten years, regardless of whether gas extraction stops. 'The damage to the subsurface is irreversible,' says Claassen. 'Residents are being systematically misled about the actual safety risks.' The report has been circulating for weeks, but is acknowledged by neither the KNMI nor the ministry. That says enough.",
    }),
    options: [
      "Emotional manipulation through fear and outrage",
      "False dilemma: only two options presented",
      "Unverifiable expert: specifically sounding authority without verifiable background",
      "Scapegoating: one institution pointed to as the culprit",
      "Just asking questions: accusations packaged as questions",
    ],
    correctIndex: 2,
    explanation:
      "'Dr. Peter Claassen' sounds authoritative with his title, position and concrete figures, but you cannot find his report, background or institute anywhere. The more specific an expert sounds, the more credible he seems — but that doesn't make him verifiable.",
  },
];
