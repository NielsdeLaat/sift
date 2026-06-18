// TEMPORARY: These are machine-translated versions of the Dutch questions.
// Content is Dutch-context specific and has not been adapted for an English-speaking audience.

import type { WhoSaysQuestion } from "../../questions";
import { social, article } from "../helpers";

export const whoSaysQuestions: WhoSaysQuestion[] = [
  // ─────────────────────────── DIFFICULTY 1 ───────────────────────────

  {
    id: "ws-d1-1",
    type: "who-says",
    xp: 65,
    difficulty: 1,
    content: article("ws-d1-1", {
      sourceName: "NOS News",
      domain: "nos.nl",
      headline:
        "Daily coffee drinking reduces the chance of Alzheimer's by twenty percent",
      publishedAt: "14 May 2024",
      excerpt:
        "New study focuses on the links between caffeine use and long-term cognitive health.",
    }),
    sections: [
      "Researchers from Harvard Medical School published a study yesterday in the scientific journal The Lancet. They followed 50,000 people for ten years and looked at their coffee consumption and cognitive decline.",
      "Participants who drank two to three cups of coffee daily had on average twenty percent less chance of developing Alzheimer's disease than non-coffee drinkers.",
      "A spokesperson for Douwe Egberts said they were pleased with the outcomes and indicated they want to provide further studies with financial support.",
    ],
    correctSectionIndex: 0,
    explanation:
      "The claim comes from researchers at Harvard Medical School, published in the peer-reviewed journal The Lancet — a verifiable, independent source. The spokesperson for Douwe Egberts, however, has a financial interest and is therefore not an independent source.",
  },

  {
    id: "ws-d1-2",
    type: "who-says",
    xp: 65,
    difficulty: 1,
    content: article("ws-d1-2", {
      sourceName: "FamilyGuide",
      domain: "familyguide.nl",
      headline: "Sugar causes ADHD in children, not genes",
      publishedAt: "22 March 2024",
      excerpt:
        "Dietary advice for children with behavioural problems is causing controversy among parents and educationalists.",
      imageUrl: "images/sugar.jpg",
    }),
    sections: [
      "Studies show that sugar is the real cause of ADHD in children. Genetic factors play a much smaller role than long thought.",
      "Children who eat less sugar demonstrably behave more calmly and perform better at school.",
      "Experts advise parents to completely remove sugar from the diet of young children as a first step with behavioural problems.",
    ],
    correctSectionIndex: null,
    explanation:
      "Not one paragraph names a study, institution or researcher: 'studies show' and 'experts advise' are empty phrases without a reference. Without an identifiable source there is nothing to verify — choose 'No source mentioned'.",
  },

  // ─────────────────────────── DIFFICULTY 2 ───────────────────────────

  {
    id: "ws-d2-1",
    type: "who-says",
    xp: 85,
    difficulty: 2,
    content: article("ws-d2-1", {
      sourceName: "EconomyToday",
      domain: "economytoday.nl",
      headline:
        "Report: cheap Chinese solar panels harm Dutch manufacturing industry",
      publishedAt: "3 June 2024",
      excerpt:
        "European producers are complaining about increasing competitive pressure from Chinese suppliers in the green energy market.",
      imageUrl: "images/zonnepanelen.jpg",
    }),
    sections: [
      "A new report concludes that the import of cheap solar panels from China is seriously harming the Dutch manufacturing industry and threatening thousands of jobs.",
      "The report was drawn up by the Association of the Dutch Manufacturing Industry (VNM), the trade association that represents the interests of Dutch manufacturers including solar panel producers.",
      "Scientists from TU Delft responded in a separate press release on the topic and describe the methodology used in the report as 'too limited'.",
      "The European Commission is considering import tariffs to protect European producers and is said to have received the report.",
    ],
    correctSectionIndex: 1,
    explanation:
      "The report sounds neutral, but was drawn up by the VNM — the trade organisation of precisely the manufacturers that the conclusion benefits, so the source is not independent (the I in IMVAIN). The TU Delft scientists only respond separately and are not the sender of the report itself.",
  },

  {
    id: "ws-d2-2",
    type: "who-says",
    xp: 85,
    difficulty: 2,
    content: article("ws-d2-2", {
      sourceName: "1Limburg",
      domain: "1limburg.nl",
      headline: "Boiling advice for tap water after flood in South Limburg",
      publishedAt: "19 July 2024",
      excerpt:
        "After the flood, a warning is circulating about contaminated tap water in the region. But where does that warning actually come from?",
      imageUrl: "images/easy-food.jpg",
    }),
    sections: [
      "The warning went viral after a well-known weather influencer with 600,000 followers called on people to temporarily stop drinking tap water in the flooded area.",
      "The original warning comes from water company WML, which measured elevated contamination values after the flood and issued an official boiling advice.",
      "In local Facebook groups the call was shared thousands of times, often with the addition 'share this with everyone you know'.",
    ],
    correctSectionIndex: 1,
    explanation:
      "The call is spread most loudly by a weather influencer and Facebook groups, but those are intermediaries, not the source. The warning originally comes from water company WML, which did the measurements itself — that is where the claim comes from and that is the verifiable source.",
  },
];
