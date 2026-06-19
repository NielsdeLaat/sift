// TEMPORARY: These are machine-translated versions of the Dutch questions.
// Content is Dutch-context specific and has not been adapted for an English-speaking audience.

import type { WhenOrWhereQuestion } from "../../questions";
import { social, article } from "../helpers";

export const whenOrWhereQuestions: WhenOrWhereQuestion[] = [
  // ─────────────────────────── DIFFICULTY 1 ───────────────────────────
  {
    id: "wow-d1-1",
    type: "when-or-where",
    xp: 60,
    difficulty: 1,
    subtype: "where",
    content: social("wow-d1-1", {
      avatarUrl:
        "https://api.dicebear.com/7.x/identicon/svg?seed=boeren_ooggetuige",
      sourceName: "Farmer Eyewitness 🚜",
      handle: "@farmer_eyewitness",
      followerCount: "4,200 followers",
      publishedAt: "14 Dec. 2022",
      text: "Farmers protesting at the Malieveld in The Hague, captured yesterday by a bystander.",
      imageUrl: "images/farmers-protest-brussels.jpg",
    }),
    options: [
      "The Hague, Netherlands (as claimed)",
      "Brussels, Belgium",
      "Amsterdam, Netherlands",
      "Paris, France",
    ],
    correctIndex: 1,
    explanation:
      "The Atomium — the iconic building from the Brussels World's Fair — is visible in the background. That is in Brussels, not in The Hague. Geolocation always starts with looking for recognisable elements in the image: buildings, monuments, street names or road signs that fix the location. Here the landmark is unmistakable.",
  },

  {
    id: "wow-d1-2",
    type: "when-or-where",
    xp: 60,
    difficulty: 1,
    subtype: "when",
    content: article("wow-d1-2", {
      sourceName: "De Gelderlander",
      domain: "gelderlander.nl",
      headline: "Flooding hits residential areas around Tiel",
      byline: "Regional Editorial",
      publishedAt: "27 Aug.",
      excerpt:
        "Heavy rainfall last August caused problems in several streets around Tiel. Residents shared footage of flooded streets and gardens.",
      imageUrl: "images/winter-flood.jpg",
    }),
    options: [
      "August, last summer (as claimed)",
      "September 2023",
      "January 2024",
      "October 2022",
    ],
    correctIndex: 2,
    explanation:
      "There is clearly snow on the roofs and cars, and the trees are bare. In August in the Netherlands it is warm — snow and bare trees belong to winter. The season of a photo is one of the easiest chronolocation checks: nature does not lie about the time of year.",
  },

  // ─────────────────────────── DIFFICULTY 2 ───────────────────────────
  {
    id: "wow-d2-1",
    type: "when-or-where",
    xp: 70,
    difficulty: 2,
    subtype: "where",
    content: article("wow-d2-1", {
      sourceName: "NRC",
      domain: "nrc.nl",
      headline:
        "Greenpeace unfolds large protest banner in the centre of The Hague",
      byline: "Thomas van den Berg",
      publishedAt: "2 Nov. 2023",
      excerpt:
        "Climate organisation Greenpeace took action on Friday in the heart of The Hague with a large banner against overconsumption.",
      imageUrl: "images/utrecht-mall-protest.jpg",
    }),
    options: ["The Hague (as claimed)", "Amsterdam", "Rotterdam", "Utrecht"],
    correctIndex: 3,
    explanation:
      "Above the entrance, the name of a shopping centre — 'Hoog Catharijne' — is clearly legible. It's a fixed location you can simply look up rather than having to recognise. One search shows it is in Utrecht, not in The Hague.",
  },
];
