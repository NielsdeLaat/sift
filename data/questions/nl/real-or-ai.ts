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

  // ─────────────────────────── DIFFICULTY 3 ───────────────────────────
  // D3-1: REAL image that looks cinematic — teaches restraint (anti-overflag).
  // D3-2: AI image with a small, non-central tell.

  // ── IMAGE BRIEF ──────────────────────────────────────────────────────
  // TYPE:    FIND (real photo)
  // SCENE:   Dutch highway at night, blocked by a line of tractors.
  //          Farmers have placed orange road flares on the asphalt,
  //          casting warm light across the smoke and silhouetted
  //          machines. No identifiable faces. Wide-angle, dramatic.
  //          The orange haze and cinematic composition make it look
  //          like it could have been AI-generated — but it wasn't.
  // SOURCE:  Wikimedia Commons — search "boerenblokkade 2022" or
  //          "Dutch farmers protest highway night". Multiple CC-BY
  //          images exist from the July–August 2022 nitrogen protests
  //          when farmers blocked the A28, A1 and other motorways.
  //          Also try: ANP open archive, or NOS persmateriaal (check
  //          individual licences — some are CC-BY).
  // LESSON:  Orange-lit smoke, dramatic silhouettes and sharp night
  //          photography all read as "AI" to untrained eyes. The
  //          correct answer is ECHT. Restraint is the skill being tested.
  // CRISIS:  Boerenprotesten / nitrogen crisis, 2022 (source library #4)
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "rai-d3-1",
    type: "real-or-ai",
    xp: 80,
    difficulty: 3,
    imageUrl: "https://picsum.photos/seed/rai-d3-1/800/450",
    correctAnswer: "real",
    explanation:
      "Dit is een echte persfoto van de boerenprotesten in 2022. De oranje wegfakkels, de rook en de dramatische nachtopname wekken misschien de indruk van AI, maar alle elementen kloppen fysisch: de lichtval op de tractoren, de rookverspreiding en de schaduwen zijn consistent met echte fotografie. Niet alles wat dramatisch is, is nep — te snel 'AI' roepen is precies de fout die dit spel je wil laten voorkomen.",
  },

  // ── IMAGE BRIEF ──────────────────────────────────────────────────────
  // TYPE:    GENERATE (AI image)
  // SCENE:   A quiet Dutch cemetery at dusk. Three or four gravestones
  //          visible in the foreground, fresh flowers and a few tea-
  //          light candles laid against them. Bare trees in the
  //          background, soft fading light. Sombre, still atmosphere.
  //          The scene looks peaceful and completely plausible — there
  //          is nothing obviously wrong at first glance.
  // TELL:    The inscription on the central gravestone contains garbled
  //          text — random letters and numbers instead of a real name
  //          and date (e.g. "HRKL VN 1 · WKGD 20RR" instead of a
  //          proper Dutch name and year). The stone should be clearly
  //          readable in the frame but the error only apparent on
  //          close inspection. Keep the surrounding stones legible-
  //          looking to avoid giving it away immediately.
  // PROMPT:  "Quiet Dutch cemetery at dusk, three gravestones in
  //          foreground with fresh flowers and tea-light candles,
  //          bare trees in background, soft fading light, sombre
  //          peaceful atmosphere, photorealistic"
  // CRISIS:  Bodegraven-Reeuwijk grave hoax, 2021 (source library #16)
  // ─────────────────────────────────────────────────────────────────────
  {
    id: "rai-d3-2",
    type: "real-or-ai",
    xp: 80,
    difficulty: 3,
    imageUrl: "https://picsum.photos/seed/rai-d3-2/800/450",
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
