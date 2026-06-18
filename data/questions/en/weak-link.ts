// TEMPORARY: These are machine-translated versions of the Dutch questions.
// Content is Dutch-context specific and has not been adapted for an English-speaking audience.

import type { WeakLinkQuestion } from "../../questions";
import { social, article } from "../helpers";

export const weakLinkQuestions: WeakLinkQuestion[] = [
  // ───────────────────────── DIFFICULTY 1 ─────────────────────────

  {
    id: "wl-d1-1",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    content: social("wl-d1-1", {
      sourceName: "NOS Breaking",
      handle: "@NOS_Breaking",
      followerCount: "1.4K followers",
      text: "⚠️ BREAKING: Dike breach near Roermond confirmed — thousands of homes at risk. Residents are asked to evacuate immediately. #Roermond #highwater",
    }),
    correctPillar: "who",
    explanation:
      "This account looks like NOS but has only 1,400 followers and uses @NOS_Breaking, while the real NOS has millions and publishes on @NOS. An account that imitates a well-known medium with a small name variation is the weak link.",
  },

  {
    id: "wl-d1-2",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    content: social("wl-d1-2", {
      sourceName: "AwakeCitizen040",
      handle: "@awakecitizen040",
      followerCount: "1.2K followers",
      text: "The new mobile mast in our neighbourhood is making people sick. Since it was installed, 3 neighbours have had COVID. Coincidence?? Share this before it gets deleted!! 📡⚠️",
    }),
    correctPillar: ["who", "what"],
    explanation:
      'An anonymous account with no medical expertise links three COVID cases to a mobile mast — that is not a credible source. And "Coincidence??" confuses coincidence with causation, so both who says it and what the claim rests on is weak here.',
  },

  {
    id: "wl-d1-3",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    content: social("wl-d1-3", {
      sourceName: "PureLife Water NL",
      handle: "@purelifewaternl",
      followerCount: "15K followers",
      text: "⚠️ The tap water in Brabant is contaminated and the government is staying silent about it. Protect your family with our water filter. 40% discount today — only for the first 100 orders! 💧",
    }),
    correctPillar: ["why", "who"],
    explanation:
      "The tone sounds alarming, but the sender is selling water filters and uses a discount and 'only the first 100' to push for a quick purchase. When the source benefits from your fear, the motive is the weak link.",
  },

  {
    id: "wl-d1-4",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    content: article("wl-d1-4", {
      sourceName: "News Alert Netherlands",
      domain: "newsalert-nl.com",
      headline: "VIDEO: Dike near Roermond collapsed, water flows into the city",
      excerpt:
        "Shocking footage shows a dike giving way and a residential area flooding within a short time. According to our editors, this concerns Roermond, filmed last night.",
      imageUrl: "images/dutch-dike-flood.jpg",
    }),
    correctPillar: ["who", "what"],
    explanation:
      "The footage looks dramatic, but the sender publishes on newsalert-nl.com — not a known, reliable news domain. And a loose video proves nothing as long as you cannot determine where and when it was made, so both the source and the image are weak here.",
  },

  // ───────────────────────── DIFFICULTY 2 ─────────────────────────

  {
    id: "wl-d2-1",
    type: "weak-link",
    xp: 120,
    difficulty: 2,
    content: article("wl-d2-1", {
      sourceName: "NOS News Update",
      domain: "nos-newsupdate.net",
      headline: "RIVM: tap water in parts of North Brabant temporarily unsafe",
      excerpt:
        "The RIVM warns that tap water in multiple municipalities in Brabant may be contaminated with bacteria. Residents are advised to boil water for at least three minutes before use.",
      imageUrl: "images/tap-water.jpg",
    }),
    correctPillar: "who",
    explanation:
      "The article looks professional and cites the RIVM, but the domain is nos-newsupdate.net while the real NOS publishes on nos.nl. A trustworthy-looking logo or citation says nothing about who is publishing — the sender is the weak link.",
  },

  {
    id: "wl-d2-2",
    type: "weak-link",
    xp: 120,
    difficulty: 2,
    content: article("wl-d2-2", {
      sourceName: "The Free Investigator",
      domain: "thefreeinvestigator.nl",
      headline: "Proof: government deliberately withheld Limburg warning",
      excerpt:
        "Our investigation shows that the government deliberately delayed the evacuation warning for hours to serve a political agenda. The mainstream media are conspicuously silent about this.",
      imageUrl: "images/real-limburg-2021-aerial.jpeg",
    }),
    correctPillar: ["why", "what"],
    explanation:
      "The piece looks like investigative journalism and the slow communication in Limburg was partly real, but the core claim ('deliberately withheld for an agenda') rests on no evidence at all. The site also frames every official source as a liar — the motive drives the 'facts' here, not the other way around.",
  },

  // ───────────────────────── DIFFICULTY 3 ─────────────────────────

  {
    id: "wl-d3-1",
    type: "weak-link",
    xp: 160,
    difficulty: 3,
    content: social("wl-d3-1", {
      sourceName: "Frank | Limburg Updates",
      handle: "@franklimburg",
      followerCount: "6.7K followers",
      text: "Unbelievable… the dike near Arcen has just broken, this is my street NOW. Everyone get out!! 😰 #highwater #Limburg",
      imageUrl: "images/flooded-tram-english.jpg",
    }),
    correctPillar: "where",
    explanation:
      "The sender looks local and the timing fits the high water, but the footage shows an English tram — the text on the tram makes clear this was not filmed in Limburg, and Arcen has no tram line.",
  },
];
