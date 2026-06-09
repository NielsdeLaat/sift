import type { WhenOrWhereQuestion } from '../questions';

export const whenOrWhereQuestions: WhenOrWhereQuestion[] = [
  {
    id: "wow-d1-1",
    type: "when-or-where",
    xp: 60,
    difficulty: 1,
    subtype: "when",
    imageUrl: "https://picsum.photos/seed/wow-d1-1/800/450",
    text:
      "[PLACEHOLDER] Heartbreaking: this photo shows the aftermath of the earthquake that struck the region last week.",
    options: [
      "Last week (as claimed)",
      "2023 — a different earthquake in the same region",
      "2019 — flooding after a cyclone in Bangladesh",
      "2015 — the Nepal earthquake",
    ],
    correctIndex: 3,
    explanation:
      "[PLACEHOLDER] A reverse image search traces this photo to coverage of the 2015 Nepal earthquake. It has been recycled at least three times since then for different crisis events.",
  },
  {
    id: "wow-d1-2",
    type: "when-or-where",
    xp: 60,
    difficulty: 1,
    subtype: "when",
    imageUrl: "https://picsum.photos/seed/wow-d1-2/800/450",
    text:
      "[PLACEHOLDER] Shocking footage — migrants crossing the Mediterranean right now.",
    options: [
      "Current week (as claimed)",
      "Summer 2021 — an earlier crossing event",
      "2015 — the height of the European refugee crisis",
      "2018 — a crossing from Libya to Italy",
    ],
    correctIndex: 2,
    explanation:
      "[PLACEHOLDER] The life jacket colour scheme and vessel type in the image match documentation from 2015 and are inconsistent with current life jacket standards that changed in 2017. Reverse image search confirms a 2015 origin.",
  },
  {
    id: "wow-d1-3",
    type: "when-or-where",
    xp: 60,
    difficulty: 1,
    subtype: "when",
    imageUrl: "https://picsum.photos/seed/wow-d1-3/800/450",
    text:
      "[PLACEHOLDER] The climate summit ended in failure — world leaders photographed leaving the venue without agreement.",
    options: [
      "This year's summit (as claimed)",
      "COP27 — 2022 summit in Sharm El-Sheikh",
      "COP26 — 2021 summit in Glasgow",
      "COP25 — 2019 summit in Madrid",
    ],
    correctIndex: 2,
    explanation:
      "[PLACEHOLDER] The venue architecture is consistent with the SEC Centre in Glasgow, host of COP26 in 2021. The current year's summit was held at a different venue. EXIF data on the original file confirms a 2021 date.",
  },
  {
    id: "wow-d2-1",
    type: "when-or-where",
    xp: 70,
    difficulty: 2,
    subtype: "where",
    imageUrl: "https://picsum.photos/seed/wow-d2-1/800/450",
    text:
      "[PLACEHOLDER] This is the scene at the border crossing in southern Texas right now.",
    options: [
      "Southern Texas, USA (as claimed)",
      "Tijuana, Mexico — US–Mexico border",
      "Calais, France — UK–France crossing",
      "Lampedusa, Italy — Mediterranean arrival point",
    ],
    correctIndex: 3,
    explanation:
      "[PLACEHOLDER] The coastguard vessel livery and the style of the rescue boats are consistent with Italian Maritime Rescue Coordination Centre operations. The coastline topography matches Lampedusa's distinctive terrain.",
  },
  {
    id: "wow-d2-2",
    type: "when-or-where",
    xp: 70,
    difficulty: 2,
    subtype: "where",
    imageUrl: "https://picsum.photos/seed/wow-d2-2/800/450",
    text:
      "[PLACEHOLDER] The devastation from last night's airstrike on a civilian neighbourhood in the city.",
    options: [
      "The city named in the post",
      "A different city in the same conflict zone",
      "A city in a different country's conflict",
      "A demolition site — no airstrike occurred",
    ],
    correctIndex: 2,
    explanation:
      "[PLACEHOLDER] Building construction style, street furniture, and visible road signage are inconsistent with the claimed country. Geolocation using satellite and street-level imagery confirms the architecture matches a city in a different country.",
  },
  {
    id: "wow-d2-3",
    type: "when-or-where",
    xp: 70,
    difficulty: 2,
    subtype: "where",
    imageUrl: "https://picsum.photos/seed/wow-d2-3/800/450",
    text:
      "[PLACEHOLDER] Enormous queue outside a food bank in London as the cost-of-living crisis deepens.",
    options: [
      "London, UK (as claimed)",
      "Manchester, UK",
      "Brussels, Belgium",
      "New York, USA",
    ],
    correctIndex: 3,
    explanation:
      "[PLACEHOLDER] Vehicle licence plates visible in the background follow the US format, not UK format. Street signage uses non-metric measurements. A landmark in the far background matches a building on Manhattan's Lower East Side.",
  },
  {
    id: "wow-d3-1",
    type: "when-or-where",
    xp: 80,
    difficulty: 3,
    subtype: "where",
    imageUrl: "https://picsum.photos/seed/wow-d3-1/800/450",
    text:
      "[PLACEHOLDER] A major chemical plant explosion in Houston, Texas — footage just in.",
    options: [
      "Houston, Texas, USA (as claimed)",
      "Baton Rouge, Louisiana, USA",
      "Tianjin, China",
      "Beirut, Lebanon",
    ],
    correctIndex: 3,
    explanation:
      "[PLACEHOLDER] The explosion pattern and port infrastructure visible in the background are consistent with the 2020 Beirut port explosion. The grain silos at the edge of the frame are distinctive to the Beirut port facility. The event was real but the location is wrong.",
  },
];
