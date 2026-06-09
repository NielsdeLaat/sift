import type { WhoSaysQuestion } from '../questions';

export const whoSaysQuestions: WhoSaysQuestion[] = [
  {
    id: "ws-d1-1",
    type: "who-says",
    xp: 60,
    difficulty: 1,
    excerpt:
      "[PLACEHOLDER] According to Dr. Maria Santos, a leading infectious disease specialist, the current outbreak strain 'has a mortality rate ten times higher than seasonal flu.' Santos, who advises several governments, told the conference that standard containment measures would be insufficient.",
    highlightedSource:
      "Dr. Maria Santos, a leading infectious disease specialist",
    options: [
      "The source is authoritative and independent — the claim holds",
      "The title 'leading specialist' is vague — check which institution she is affiliated with and whether the quote has a verifiable source",
      "Anonymous medical sources cannot be cited in responsible journalism",
      "The source is credible because she 'advises several governments'",
    ],
    correctIndex: 1,
    explanation:
      "[PLACEHOLDER] 'Leading infectious disease specialist' is a description, not a verifiable credential. Before accepting the claim, check: Which institution? Which governments? Is there a transcript of the conference?",
  },
  {
    id: "ws-d1-2",
    type: "who-says",
    xp: 60,
    difficulty: 1,
    excerpt:
      "[PLACEHOLDER] The report cites 'multiple government sources' as confirming that emergency powers would be extended for at least another six months. Officials from three unnamed ministries told the outlet the decision had already been made in private.",
    highlightedSource: "multiple government sources",
    options: [
      "Anonymous multi-source reporting is standard practice — the claim is credible",
      "Anonymous sources are never acceptable in journalism",
      "The source is too vague to evaluate — legitimate reporting should name the institution even if the individual is anonymous",
      "Government sources are always independent and authoritative",
    ],
    correctIndex: 2,
    explanation:
      "[PLACEHOLDER] 'Multiple government sources' with no institutional identifier makes verification impossible. Credible anonymous-source reporting typically names the ministry or department even if the individual is protected.",
  },
  {
    id: "ws-d1-3",
    type: "who-says",
    xp: 60,
    difficulty: 1,
    excerpt:
      "[PLACEHOLDER] Climate scientist Prof. James Hartley of the University of Edinburgh warned that current emissions trajectories make a 2°C warming scenario inevitable by 2040. His comments were made in a social media post, not in a peer-reviewed paper.",
    highlightedSource: "Prof. James Hartley of the University of Edinburgh",
    options: [
      "A named, institutionally affiliated scientist is a credible source for scientific claims",
      "A social media post by a scientist carries the same weight as a peer-reviewed paper",
      "The source is real and credible, but a social media post is not a peer-reviewed finding — check whether this claim appears in his published research",
      "University professors are too biased to be reliable sources on climate",
    ],
    correctIndex: 2,
    explanation:
      "[PLACEHOLDER] A named, affiliated scientist is a real, verifiable source. However, a social media post is not peer-reviewed and may not reflect the scientific consensus or the professor's own carefully qualified published position.",
  },
  {
    id: "ws-d2-1",
    type: "who-says",
    xp: 70,
    difficulty: 2,
    excerpt:
      "[PLACEHOLDER] Economists at the Peterson Institute for International Economics project that the proposed tariffs will reduce GDP by 0.8% over two years. The report was commissioned by the National Association of Manufacturers, which opposes the tariff policy.",
    highlightedSource:
      "Economists at the Peterson Institute for International Economics",
    options: [
      "The Peterson Institute is credible, but the study was commissioned by a group with a financial interest in the conclusion — this should be disclosed and weighed",
      "Think tank research is always biased and should be disregarded",
      "The commissioning organisation's position is irrelevant to the quality of the economic modelling",
      "The source is independent because Peterson Institute is a separate institution from the commissioner",
    ],
    correctIndex: 0,
    explanation:
      "[PLACEHOLDER] The Peterson Institute is a legitimate, named research body. However, research commissioned by a party with a financial stake in the outcome must be disclosed. This does not make the research wrong, but it means independent verification is important.",
  },
  {
    id: "ws-d2-2",
    type: "who-says",
    xp: 70,
    difficulty: 2,
    excerpt:
      "[PLACEHOLDER] The article states: 'According to data from the company's internal safety review, the drug has a side-effect rate of just 0.3%.' No independent regulator or academic institution is cited. The company provided the data to the journalist directly.",
    highlightedSource: "the company's internal safety review",
    options: [
      "Internal company data is always more accurate than external studies",
      "This fails the independence test — a company's self-reported safety data about its own product requires independent verification",
      "The 0.3% figure is specific enough to be credible without external verification",
      "The journalist received the data directly, which confirms its authenticity",
    ],
    correctIndex: 1,
    explanation:
      "[PLACEHOLDER] A company's own internal safety review of its own product is not independent. The figure may be accurate, but it requires corroboration from a regulator, academic study, or independent audit.",
  },
  {
    id: "ws-d2-3",
    type: "who-says",
    xp: 70,
    difficulty: 2,
    excerpt:
      "[PLACEHOLDER] The story cites 'a former senior official at the ministry who asked not to be named.' The official is described as 'directly involved in the decision.' This is the article's sole source for the claim that the policy was deliberately concealed from parliament.",
    highlightedSource:
      "a former senior official at the ministry who asked not to be named",
    options: [
      "A single anonymous source meeting IMVAIN criteria is sufficient for a claim of this seriousness",
      "A sole anonymous source for a serious allegation fails the 'multiple' test — the claim requires corroboration before being reported as established fact",
      "Former officials are not credible because they may have personal grievances",
      "The 'directly involved' description makes the source authoritative enough to stand alone",
    ],
    correctIndex: 1,
    explanation:
      "[PLACEHOLDER] A sole anonymous source for a claim about deliberate parliamentary deception should be treated as a starting point for investigation, not a confirmed fact. Responsible reporting would seek corroboration from documents or a second independent source.",
  },
  {
    id: "ws-d3-1",
    type: "who-says",
    xp: 80,
    difficulty: 3,
    excerpt:
      "[PLACEHOLDER] 'The evidence clearly shows that the economic costs of the lockdown policy far exceeded the health benefits,' wrote Prof. Anders Henriksen in the Wall Street Journal. Henriksen is a professor of economics at the University of Copenhagen and a fellow at the Cato Institute.",
    highlightedSource:
      "Prof. Anders Henriksen, University of Copenhagen / Cato Institute fellow",
    options: [
      "Both credentials are verifiable and independent — the claim is credible",
      "A Cato Institute fellowship signals a libertarian policy position — the source is real but not independent of the ideological conclusion; the analysis should be verified against non-ideologically-aligned sources",
      "The Wall Street Journal is a peer-reviewed journal — publication there validates the claim",
      "Economists are not qualified to evaluate health benefits and should not be cited",
    ],
    correctIndex: 1,
    explanation:
      "[PLACEHOLDER] The professor is a real, named, affiliated academic — this is not a fake expert. However, the Cato Institute has a consistent ideological position favouring minimal government intervention, making the source not independent on this specific question.",
  },
];
