import type { RealOrAiQuestion } from "../../questions";

export const realOrAiQuestions: RealOrAiQuestion[] = [
  // ─────────────────────────── DIFFICULTY 1 ───────────────────────────
  // Tell is large, central, unmistakable.
  {
    id: "rai-d1-1",
    type: "real-or-ai",
    xp: 50,
    difficulty: 1,
    imageUrl: "/images/ai-limburg-2021-rescue-hand.png",
    correctAnswer: "ai",
    tell: {
      top: 35,
      left: 20,
      width: 35,
      height: 55,
    },
    explanation:
      "Dit beeld is door AI gegenereerd. Let op de hand op de voorgrond: de persoon heeft zes of zeven vingers. AI-modellen maken structureel fouten met handen — tel de vingers als je twijfelt.",
  },
  {
    id: "rai-d1-2",
    type: "real-or-ai",
    xp: 50,
    difficulty: 1,
    imageUrl: "/images/real-limburg-2021-aerial.jpeg",
    correctAnswer: "real",
    explanation:
      "Dit is een echte luchtfoto van de overstromingen in Limburg (juli 2021). De onregelmatige waterkleur, de schaduwen op de daken en de rommelige achtergrond zijn consistent met authentiek documentatiemateriaal. Er zijn geen AI-artefacten zichtbaar.",
  },

  // ─────────────────────────── DIFFICULTY 2 ───────────────────────────
  // Tell moves to the background; requires scanning the full image.
  {
    id: "rai-d2-1",
    type: "real-or-ai",
    xp: 65,
    difficulty: 2,
    imageUrl: "/images/real-5g-tower-fire.png",
    correctAnswer: "real",
    explanation:
      "Dit is een echte persfoto van een zendmastbrand. De rookpluim, de vlammen en de brandweerauto vertonen allemaal de kleine onregelmatigheden van echte fotografie: asymmetrische rook, realistische reflecties, consistente belichting. Geen AI-artefacten aanwezig.",
  },
  {
    id: "rai-d2-2",
    type: "real-or-ai",
    xp: 65,
    difficulty: 2,
    imageUrl: "/images/ai-water-distribution-2024.jpg",
    correctAnswer: "ai",
    tell: {
      top: 0,
      left: 65,
      width: 30,
      height: 75,
    },
    explanation:
      "Dit beeld is AI-gegenereerd. Kijk naar het bord rechtsboven: de tekst imiteert de opmaak van een gemeentelijk informatiebord maar bevat willekeurige letters zonder betekenis. AI-modellen begrijpen tekst niet — ze kopiëren de visuele vorm zonder echte woorden te produceren. Tekst op borden en spandoeken in de achtergrond is een van de betrouwbaarste plekken om AI-beelden te herkennen.",
  },
  {
    id: "rai-d3-1",
    type: "real-or-ai",
    xp: 80,
    difficulty: 3,
    imageUrl: "images/real-farmer-highway-protest-2022.png",
    correctAnswer: "real",
    explanation:
      "Dit is een echte persfoto van de boerenprotesten in 2022. De oranje wegfakkels, de rook en de dramatische nachtopname wekken misschien de indruk van AI, maar alle elementen kloppen fysisch: de lichtval op de tractoren, de rookverspreiding en de schaduwen zijn consistent met echte fotografie. Niet alles wat dramatisch is, is nep — te snel 'AI' roepen is precies de fout die dit spel je wil laten voorkomen.",
  },

  {
    id: "rai-d3-2",
    type: "real-or-ai",
    xp: 80,
    difficulty: 3,
    imageUrl: "/images/ai-graveyard-hoax-2021.jpg",
    correctAnswer: "ai",
    tell: {
      top: 48,
      left: 28,
      width: 24,
      height: 22,
    },
    explanation:
      "Dit beeld is AI-gegenereerd. De sfeer en belichting zien er overtuigend uit, maar kijk goed naar de tekst op de centrale grafsteen: in plaats van een naam en een datum staat er een reeks willekeurige letters en cijfers. AI-modellen kunnen geen betekenisvolle tekst genereren — ze imiteren de visuele vorm van letters zonder de inhoud te begrijpen. Grafsteen-inscripties zijn een van de subtielere plekken om dit te spotten.",
  },
];
