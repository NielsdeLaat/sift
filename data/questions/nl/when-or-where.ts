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
      sourceName: "Boeren Ooggetuige 🚜",
      handle: "@boeren_ooggetuige",
      followerCount: "4,2K volgers",
      publishedAt: "14 dec. 2022",
      text: "Boeren protesteren bij het Malieveld in Den Haag, gisteren vastgelegd door een toeschouwer.",
      imageUrl: "images/farmers-protest-brussels.jpg",
    }),
    options: [
      "Den Haag, Nederland (zoals beweerd)",
      "Brussel, België",
      "Amsterdam, Nederland",
      "Parijs, Frankrijk",
    ],
    correctIndex: 1,
    explanation:
      "Het Atomium — het iconische gebouw van de Brusselse Wereldtentoonstelling — is zichtbaar op de achtergrond. Dat staat in Brussel, niet in Den Haag. Geolokalisatie begint altijd met het zoeken naar herkenbare elementen in het beeld: gebouwen, monumenten, straatnamen of verkeerstekens die de locatie vastleggen. Hier is de landmark onmiskenbaar.",
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
      headline: "Wateroverlast treft woonwijken rondom Tiel",
      byline: "Redactie Regio",
      publishedAt: "27 aug.",
      excerpt:
        "Hevige regenval zorgde afgelopen augustus voor overlast in meerdere straten rond Tiel. Bewoners deelden beelden van ondergelopen straten en tuinen.",
      imageUrl: "images/winter-flood.jpg",
    }),
    options: [
      "Augustus, afgelopen zomer (zoals beweerd)",
      "September 2023",
      "Januari 2024",
      "Oktober 2022",
    ],
    correctIndex: 2,
    explanation:
      "Op de daken en auto's ligt duidelijk sneeuw, en de bomen zijn kaal. In augustus is het in Nederland zomers warm — sneeuw en kale bomen horen bij de winter. Het seizoen van een foto is een van de makkelijkste chronolokalisaties: natuur liegt niet over de tijd van het jaar.",
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
        "Greenpeace ontvouwt groot protestspandoek in het centrum van Den Haag",
      byline: "Thomas van den Berg",
      publishedAt: "2 nov. 2023",
      excerpt:
        "Klimaatorganisatie Greenpeace voerde vrijdag actie in het stadshart van Den Haag met een groot spandoek gericht tegen overconsumptie.",
      imageUrl: "images/utrecht-mall-protest.jpg",
    }),
    options: ["Den Haag (zoals beweerd)", "Amsterdam", "Rotterdam", "Utrecht"],
    correctIndex: 3,
    explanation:
      "Boven de ingang staat duidelijk leesbaar de naam van een winkelcentrum, 'Hoog Catharijne' — een vaste plek die je gewoon kunt opzoeken in plaats van te moeten herkennen. Eén zoekopdracht laat zien dat het in Utrecht staat, niet in Den Haag.",
  },
];
