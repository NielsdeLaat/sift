export type QuestionType =
  | "name-trick"
  | "real-or-ai"
  | "leave-the-page"
  | "who-says"
  | "under-the-hood"
  | "when-or-where"
  | "weak-link"
  | "feed-test";

export interface TellRegion {
  top: number;
  left: number;
  width: number;
  height: number;
  explanation: string;
}

export interface SocialPost {
  avatarUrl: string;
  sourceName: string;
  handle: string;
  followerCount: string;
  postText: string;
  postImageUrl?: string;
}

export interface SearchResultCard {
  title: string;
  source: string;
  snippet: string;
}

export interface EvidenceItem {
  label: string;
  value: string;
}

export type WeakPillar = "who" | "what" | "when" | "where" | "why";

export interface PillarCheck {
  pillar: WeakPillar;
  label: string;
  evidence: string;
}

interface BaseQuestion {
  id: string;
  type: QuestionType;
  xp: number;
  /** 1 = easiest; higher = harder. Sections gate questions by this value. */
  difficulty: number;
  /** Earliest section where this question enters the pool. */
  introSection: string;
  /** Override the default question prompt shown above the answer controls. */
  question?: string;
}

export interface NameTrickQuestion extends BaseQuestion {
  type: "name-trick";
  post: SocialPost;
  options: [string, string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3 | 4;
  explanation: string;
}

export interface RealOrAiQuestion extends BaseQuestion {
  type: "real-or-ai";
  imageUrl: string;
  correctAnswer: "real" | "ai";
  /** Optional interactive tell shown via TellReveal after a correct AI identification. */
  tell?: TellRegion;
  explanation: string;
}

export interface LeaveThePageQuestion extends BaseQuestion {
  type: "leave-the-page";
  scenario: string;
  cards: SearchResultCard[];
  correctCardIndex: number;
  explanation: string;
}

export interface WhoSaysQuestion extends BaseQuestion {
  type: "who-says";
  excerpt: string;
  highlightedSource: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface UnderTheHoodQuestion extends BaseQuestion {
  type: "under-the-hood";
  imageUrl: string;
  /** All tappable evidence items (metadata rows + reverse-search result). */
  items: EvidenceItem[];
  correctFlagIndex: number;
  explanation: string;
}

export interface WhenOrWhereQuestion extends BaseQuestion {
  type: "when-or-where";
  subtype: "when" | "where";
  imageUrl?: string;
  postText?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface WeakLinkQuestion extends BaseQuestion {
  type: "weak-link";
  post: SocialPost;
  /** Always five pillars in order: who, what, when, where, why. */
  pillars: [PillarCheck, PillarCheck, PillarCheck, PillarCheck, PillarCheck];
  correctPillar: WeakPillar;
  verdictOptions: [string, string, string];
  correctVerdictIndex: 0 | 1 | 2;
  /** Shown inline after the player selects the correct pillar, before the verdict step. */
  pillarExplanation: string;
  /** Shown in the FeedbackBanner after the full two-step round. */
  explanation: string;
}

export type FeedVerdict = "true" | "false" | "misleading";

export interface FeedPost {
  id: string;
  source: string;
  timeAgo: string;
  headline: string;
  imageUrl: string;
  body: string;
  correctVerdict: FeedVerdict;
  explanation: string;
}

export interface FeedTestQuestion extends BaseQuestion {
  type: "feed-test";
  /** When set, this question is only served to this specific roadmap section's test. */
  sectionId?: string;
  posts: FeedPost[];
}

export type Question =
  | NameTrickQuestion
  | RealOrAiQuestion
  | LeaveThePageQuestion
  | WhoSaysQuestion
  | UnderTheHoodQuestion
  | WhenOrWhereQuestion
  | WeakLinkQuestion
  | FeedTestQuestion;

// ─────────────────────────────────────────────────────────────────────────────
// PLACEHOLDER QUESTIONS
// All question content below is placeholder. Replace each entry with real
// content; the data shape (interfaces above) and question IDs are stable.
// Placeholder text is prefixed with [PLACEHOLDER] for easy search/replace.
// ─────────────────────────────────────────────────────────────────────────────
export const questions: Question[] = [

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 1 — THE PAUSE  (introduces all four base types at difficulty 1)
  // Types: name-trick(1), real-or-ai(1), leave-the-page(1), weak-link(1)
  // ═══════════════════════════════════════════════════════════════════════════

  // ── name-trick d1 ──────────────────────────────────────────────────────────
  {
    id: "nt-s1-1",
    type: "name-trick",
    xp: 50,
    difficulty: 1,
    introSection: "section-1",
    post: {
      avatarUrl: "https://picsum.photos/seed/nt-s1-1/80/80",
      sourceName: "[PLACEHOLDER] Crisis Alert Network",
      handle: "@CrisisAlertNet",
      followerCount: "14.2K followers",
      postText: "[PLACEHOLDER] BREAKING: Three government whistleblowers confirm the official flood death toll is being suppressed. The real number is ten times higher. SHARE before this gets deleted.",
    },
    options: [
      "Emotion — uses panic and urgency to bypass critical thinking",
      "False dilemma — presents only two extreme choices",
      "Fake expert — invokes unnamed 'whistleblowers' as authority",
      "Scapegoating — blames a specific group for the disaster",
      "Just asking questions — frames accusations as innocent curiosity",
    ],
    correctIndex: 0,
    explanation: "[PLACEHOLDER] 'BREAKING', 'SHARE before this gets deleted', and 'ten times higher' are emotional triggers designed to provoke fear and urgency, bypassing slower critical thinking. The emotion technique works by making you act before you verify.",
  },
  {
    id: "nt-s1-2",
    type: "name-trick",
    xp: 50,
    difficulty: 1,
    introSection: "section-1",
    post: {
      avatarUrl: "https://picsum.photos/seed/nt-s1-2/80/80",
      sourceName: "[PLACEHOLDER] PatriotVoice Today",
      handle: "@PatriotVoiceToday",
      followerCount: "89K followers",
      postText: "[PLACEHOLDER] Either we close the border entirely and stop the disease spreading, or we let thousands of Americans die. There is no middle ground. The choice is yours.",
    },
    options: [
      "False dilemma — forces a choice between two extremes while ignoring alternatives",
      "Scapegoating — blames immigrants for spreading disease",
      "Emotion — uses fear of death to drive the argument",
      "Fake expert — cites unnamed health authorities",
      "Just asking questions — raises doubts without making a direct claim",
    ],
    correctIndex: 0,
    explanation: "[PLACEHOLDER] The post presents only two options (total closure or mass death) while ignoring the wide range of public-health responses actually available. This false dilemma makes a complex policy debate seem like a binary choice.",
  },
  {
    id: "nt-s1-3",
    type: "name-trick",
    xp: 50,
    difficulty: 1,
    introSection: "section-1",
    post: {
      avatarUrl: "https://picsum.photos/seed/nt-s1-3/80/80",
      sourceName: "[PLACEHOLDER] NaturalHealthNow",
      handle: "@NaturalHealthNow",
      followerCount: "230K followers",
      postText: "[PLACEHOLDER] Top Harvard nutritionist Dr. Elena Voss confirms: the government-approved vaccine schedule is the leading cause of childhood autoimmune disease. The medical establishment doesn't want you to know.",
    },
    options: [
      "Fake expert — invokes a credential that cannot be verified",
      "Emotion — frightens parents about their children's safety",
      "Scapegoating — blames the government and medical establishment",
      "False dilemma — implies you must choose between vaccines and health",
      "Just asking questions — frames accusations as research questions",
    ],
    correctIndex: 0,
    explanation: "[PLACEHOLDER] 'Top Harvard nutritionist Dr. Elena Voss' cannot be verified and the claim contradicts the scientific consensus. When a source invokes impressive-sounding credentials without any verifiable link, it is using the fake expert technique.",
  },

  // ── real-or-ai d1 ──────────────────────────────────────────────────────────
  {
    id: "rai-s1-1",
    type: "real-or-ai",
    xp: 50,
    difficulty: 1,
    introSection: "section-1",
    imageUrl: "https://picsum.photos/seed/rai-s1-1/800/450",
    correctAnswer: "ai",
    tell: {
      top: 55,
      left: 20,
      width: 30,
      height: 25,
      explanation: "[PLACEHOLDER] The hands in this image show six fingers and fused knuckles — a classic sign of AI generation. Current diffusion models consistently fail to render hands with the correct number of fingers.",
    },
    explanation: "[PLACEHOLDER] This is an AI-generated image. The clearest tell is the distorted hand anatomy — look for extra fingers, merged joints, or impossible finger lengths.",
  },
  {
    id: "rai-s1-2",
    type: "real-or-ai",
    xp: 50,
    difficulty: 1,
    introSection: "section-1",
    imageUrl: "https://picsum.photos/seed/rai-s1-2/800/450",
    correctAnswer: "real",
    explanation: "[PLACEHOLDER] This is a real photograph. The lighting is consistent, background details are sharp and non-repetitive, and any visible text is legible. When an image lacks the typical AI tells (distorted hands, morphed backgrounds, inconsistent shadows), default to real — over-flagging genuine footage is itself harmful.",
  },
  {
    id: "rai-s1-3",
    type: "real-or-ai",
    xp: 50,
    difficulty: 1,
    introSection: "section-1",
    imageUrl: "https://picsum.photos/seed/rai-s1-3/800/450",
    correctAnswer: "ai",
    tell: {
      top: 10,
      left: 30,
      width: 40,
      height: 35,
      explanation: "[PLACEHOLDER] The crowd in the mid-distance dissolves into a repetitive, textureless pattern with no individual faces — a common AI generation artefact when the model cannot maintain detail at distance.",
    },
    explanation: "[PLACEHOLDER] This image was generated by AI. The background crowd loses coherence past a certain depth, merging into a uniform mass. Real crowd photography preserves some individual variation in clothing and posture even at distance.",
  },

  // ── leave-the-page d1 ──────────────────────────────────────────────────────
  {
    id: "ltp-s1-1",
    type: "leave-the-page",
    xp: 60,
    difficulty: 1,
    introSection: "section-1",
    scenario: "[PLACEHOLDER] A viral post claims a new study proves 5G towers cause cancer. Which search result actually settles this?",
    cards: [
      {
        title: "5G technology and health: what the science says",
        source: "who.int",
        snippet: "[PLACEHOLDER] The World Health Organization states that, to date, no adverse health effect has been causally linked to exposure to wireless technology at levels found in the general environment.",
      },
      {
        title: "5G towers in your neighbourhood — are you safe?",
        source: "naturalnewstoday.net",
        snippet: "[PLACEHOLDER] Exclusive: internal documents reveal telecom companies have been hiding radiation data from regulators for years...",
      },
      {
        title: "What is 5G?",
        source: "wikipedia.org",
        snippet: "[PLACEHOLDER] 5G is the fifth generation technology standard for broadband cellular networks, which mobile phone companies began deploying worldwide in 2019.",
      },
      {
        title: "Scientists call for more 5G research",
        source: "theguardian.com",
        snippet: "[PLACEHOLDER] Some researchers argue that more long-term studies are needed, though existing evidence does not support a causal link between 5G exposure and cancer.",
      },
    ],
    correctCardIndex: 0,
    explanation: "[PLACEHOLDER] The WHO (who.int) is the authoritative independent body on global health. Its statement directly addresses the claim with a definitive evidence-based verdict. The Guardian result is accurate but does not fully settle the viral claim.",
  },
  {
    id: "ltp-s1-2",
    type: "leave-the-page",
    xp: 60,
    difficulty: 1,
    introSection: "section-1",
    scenario: "[PLACEHOLDER] A post claims the Red Cross confirmed earthquake survivors are being left without aid for over two weeks. Which result settles this?",
    cards: [
      {
        title: "Red Cross responds to earthquake: operations update",
        source: "redcross.org",
        snippet: "[PLACEHOLDER] Our teams reached the affected zone within 48 hours. Aid has been delivered to over 12,000 people. We have seen no report of a two-week delay in our official communications.",
      },
      {
        title: "Earthquake survivors abandoned — survivor testimonies",
        source: "crisiswatch247.co",
        snippet: "[PLACEHOLDER] Dozens of survivors told our reporters they had received no aid. One woman said she had waited 16 days. The Red Cross has not responded to our requests for comment.",
      },
      {
        title: "International disaster relief explained",
        source: "britannica.com",
        snippet: "[PLACEHOLDER] International disaster relief is coordinated through bodies such as the UN OCHA, the Red Cross, and national civil defence agencies...",
      },
      {
        title: "Earthquake: latest updates",
        source: "bbc.com",
        snippet: "[PLACEHOLDER] Aid organisations have begun distribution in the worst-affected regions. Access to some remote areas remains challenging.",
      },
    ],
    correctCardIndex: 0,
    explanation: "[PLACEHOLDER] The Red Cross's own official website (redcross.org) directly contradicts the claim with specific operational data. An organisation's official response is the most reliable source for checking claims made about that organisation.",
  },
  {
    id: "ltp-s1-3",
    type: "leave-the-page",
    xp: 60,
    difficulty: 1,
    introSection: "section-1",
    scenario: "[PLACEHOLDER] A post says a government policy forces doctors to report patients who ask about certain medications to law enforcement. Which result settles this?",
    cards: [
      {
        title: "New health regulations — government press release",
        source: "gov.uk",
        snippet: "[PLACEHOLDER] The updated healthcare regulations do not include any requirement for clinicians to report patient consultations to law enforcement. Doctor-patient confidentiality remains protected by law.",
      },
      {
        title: "Doctors are now government spies — leaked memo",
        source: "freedompress.io",
        snippet: "[PLACEHOLDER] A leaked internal document, seen exclusively by our publication, appears to suggest...",
      },
      {
        title: "Patient rights and medical confidentiality",
        source: "nhs.uk",
        snippet: "[PLACEHOLDER] Information about you is used to help run the NHS. Strict rules apply to how it may be shared.",
      },
      {
        title: "Privacy fears over new healthcare data rules",
        source: "independent.co.uk",
        snippet: "[PLACEHOLDER] Civil liberties groups have raised concerns about proposed changes to healthcare data sharing, though officials say patient confidentiality is not affected.",
      },
    ],
    correctCardIndex: 0,
    explanation: "[PLACEHOLDER] The government's own official press release (gov.uk) is the primary source for what the policy actually says. It directly addresses and refutes the claim.",
  },

  // ── weak-link d1 ───────────────────────────────────────────────────────────
  {
    id: "wl-s1-1",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    introSection: "section-1",
    post: {
      avatarUrl: "https://picsum.photos/seed/wl-s1-1/80/80",
      sourceName: "[PLACEHOLDER] BreakingCrisis247",
      handle: "@BreakingCrisis247",
      followerCount: "42K followers",
      postText: "[PLACEHOLDER] VIRAL: Footage shows police deploying unknown chemical agent against flood survivors waiting for evacuation. Multiple hospitalised. Mainstream media is silent.",
    },
    pillars: [
      {
        pillar: "who",
        label: "Who posted this?",
        evidence: "BreakingCrisis247 — account created 2 months ago, no verified journalism affiliation, no editorial contact information listed",
      },
      {
        pillar: "what",
        label: "What does it claim?",
        evidence: "Police used an 'unknown chemical agent' on flood survivors; multiple people hospitalised",
      },
      {
        pillar: "when",
        label: "When did this happen?",
        evidence: "No date given — the post uses 'VIRAL' but shows no timestamp for the alleged incident",
      },
      {
        pillar: "where",
        label: "Where did this happen?",
        evidence: "No location stated — footage shows an outdoor crowd but no identifiable landmarks or signage",
      },
      {
        pillar: "why",
        label: "Why does this post exist?",
        evidence: "Urgent VIRAL framing, no link to any source, no named reporter, no footage link provided",
      },
    ],
    correctPillar: "who",
    verdictOptions: [
      "The footage is real but from a different event — context was changed",
      "The account cannot be traced to any verified news outlet — the claim is unverifiable from this source",
      "The claim is entirely fabricated — no such event occurred",
    ],
    correctVerdictIndex: 1,
    pillarExplanation: "[PLACEHOLDER] The 'who' pillar fails first. A two-month-old account with no journalistic affiliation and no source link is not a credible first reporter for a serious criminal allegation.",
    explanation: "[PLACEHOLDER] Before investigating the footage, the source fails. An unaffiliated account created two months ago is not a credible originator of a serious police-misconduct story. Check who made the claim before investigating what it claims.",
  },
  {
    id: "wl-s1-2",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    introSection: "section-1",
    post: {
      avatarUrl: "https://picsum.photos/seed/wl-s1-2/80/80",
      sourceName: "[PLACEHOLDER] Global Health Monitor",
      handle: "@GlobalHealthMon",
      followerCount: "180K followers",
      postText: "[PLACEHOLDER] NEW STUDY: Scientists confirm that the current outbreak strain was engineered in a laboratory. Preprint posted last night. Authorities expected to respond by end of week.",
    },
    pillars: [
      {
        pillar: "who",
        label: "Who posted this?",
        evidence: "Global Health Monitor — large following, no institutional affiliation page, mixes news aggregation with original commentary",
      },
      {
        pillar: "what",
        label: "What does it claim?",
        evidence: "A new study proves the outbreak strain was lab-engineered",
      },
      {
        pillar: "when",
        label: "When was this published?",
        evidence: "Claims 'posted last night' — a preprint, not peer-reviewed, published under an hour before this post",
      },
      {
        pillar: "where",
        label: "Where is the evidence?",
        evidence: "No link to the preprint — no journal, repository, or author names given",
      },
      {
        pillar: "why",
        label: "Why does this post exist?",
        evidence: "High engagement language ('NEW STUDY', 'Scientists confirm'), vague authority ('Scientists'), no primary source link",
      },
    ],
    correctPillar: "where",
    verdictOptions: [
      "The study exists but its conclusions are being exaggerated",
      "No link to the study is provided — the claim cannot be verified",
      "The preprint was retracted shortly after posting",
    ],
    correctVerdictIndex: 1,
    pillarExplanation: "[PLACEHOLDER] The 'where' pillar fails — no link, no preprint repository, no author names. A claim that a new study 'confirms' something extraordinary should always come with a direct link.",
    explanation: "[PLACEHOLDER] Without a link you cannot check the methodology, the authors, or whether the study says what the post claims it says. Citing a study without linking to it is a fundamental evidence problem.",
  },
  {
    id: "wl-s1-3",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    introSection: "section-1",
    post: {
      avatarUrl: "https://picsum.photos/seed/wl-s1-3/80/80",
      sourceName: "[PLACEHOLDER] EarthquakeReliefNow",
      handle: "@EQReliefNow",
      followerCount: "5.1K followers",
      postText: "[PLACEHOLDER] This photo was taken yesterday at the main camp outside Adana. Aid workers are turning people away because supplies have completely run out. The UN is nowhere to be seen.",
    },
    pillars: [
      {
        pillar: "who",
        label: "Who posted this?",
        evidence: "EarthquakeReliefNow — small account, no institutional link, bio says 'citizen journalist on the ground'",
      },
      {
        pillar: "what",
        label: "What does it claim?",
        evidence: "Aid supplies at a specific camp are exhausted; the UN is absent",
      },
      {
        pillar: "when",
        label: "When was this taken?",
        evidence: "Claims 'yesterday' — no date embedded in post, image metadata not visible",
      },
      {
        pillar: "where",
        label: "Where exactly?",
        evidence: "Claims 'main camp outside Adana' — the photo shows a tent camp but no location-confirming landmarks or signage",
      },
      {
        pillar: "why",
        label: "Why does this post exist?",
        evidence: "Urgent framing, emotional appeal, shareable image, specific location claim that cannot be confirmed from the image alone",
      },
    ],
    correctPillar: "when",
    verdictOptions: [
      "The photo is real but was taken during a previous crisis, not the current one",
      "The camp shown is real but the supply claim is exaggerated",
      "The photo and claim may be accurate but the date cannot be verified from this post alone",
    ],
    correctVerdictIndex: 0,
    pillarExplanation: "[PLACEHOLDER] The 'when' pillar is the weakest — no timestamp, no embedded date, and 'yesterday' is unverifiable. Crisis imagery is frequently recycled from older events.",
    explanation: "[PLACEHOLDER] Recycled crisis imagery is one of the most common forms of cheap fake. A reverse image search is the fastest way to check whether a photo was genuinely taken during the current event.",
  },

  // ── feed-test section 1 ────────────────────────────────────────────────────
  {
    id: "ft-s1",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    introSection: "section-1",
    sectionId: "section-1",
    posts: [
      {
        id: "ft-s1-p1",
        source: "[PLACEHOLDER] Reuters",
        timeAgo: "2 hours ago",
        headline: "[PLACEHOLDER] WHO confirms no evidence of novel pathogen in reported outbreak cluster",
        imageUrl: "https://picsum.photos/seed/ft-s1-p1/400/300",
        body: "[PLACEHOLDER] The World Health Organization said it had investigated reports of a cluster of unusual respiratory illness and found no evidence of a new pathogen. Officials said cases were consistent with seasonal illness patterns. Replace this with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation for why this is true.",
      },
      {
        id: "ft-s1-p2",
        source: "[PLACEHOLDER] @TruthSeekerXX",
        timeAgo: "45 minutes ago",
        headline: "[PLACEHOLDER] LEAKED: Government suppressing real death count — insiders say true number is 50× official figure",
        imageUrl: "https://picsum.photos/seed/ft-s1-p2/400/300",
        body: "[PLACEHOLDER] An anonymous source claiming to be a government epidemiologist told this account that the true death count is being concealed. The post includes a blurred screenshot of an alleged internal document. No government body has responded. No mainstream outlet has reported this. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation for why this is false.",
      },
      {
        id: "ft-s1-p3",
        source: "[PLACEHOLDER] The National Post",
        timeAgo: "3 hours ago",
        headline: "[PLACEHOLDER] Emergency response teams deployed as flood damage proves worse than initially assessed",
        imageUrl: "https://picsum.photos/seed/ft-s1-p3/400/300",
        body: "[PLACEHOLDER] Authorities dispatched additional response teams after surveys showed flood damage significantly exceeding initial estimates. Officials said the expanded response was precautionary and did not indicate a change in the overall situation assessment. The headline implies a more serious failure than the article supports. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation for why this is misleading.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 2 — TRICKS IN DISGUISE  (name-trick steps to difficulty 2)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: "nt-s2-1",
    type: "name-trick",
    xp: 60,
    difficulty: 2,
    introSection: "section-2",
    post: {
      avatarUrl: "https://picsum.photos/seed/nt-s2-1/80/80",
      sourceName: "[PLACEHOLDER] The Liberty Standard",
      handle: "@LibertyStandard",
      followerCount: "340K followers",
      postText: "[PLACEHOLDER] Isn't it strange that the government announces a 'health emergency' just two weeks before the election? Just something to think about. Not saying anything, just asking.",
    },
    options: [
      "Just asking questions — frames a conspiratorial implication as innocent curiosity",
      "Emotion — uses fear of government manipulation",
      "False dilemma — implies the only explanations are coincidence or conspiracy",
      "Scapegoating — blames the government for engineering the crisis",
      "Fake expert — implies insider knowledge without citing a source",
    ],
    correctIndex: 0,
    explanation: "[PLACEHOLDER] 'Just asking questions' is a technique for planting a conspiratorial implication while maintaining deniability. The phrase 'not saying anything, just asking' is a tell — it signals the speaker wants you to draw the conclusion they are avoiding stating directly.",
  },
  {
    id: "nt-s2-2",
    type: "name-trick",
    xp: 60,
    difficulty: 2,
    introSection: "section-2",
    post: {
      avatarUrl: "https://picsum.photos/seed/nt-s2-2/80/80",
      sourceName: "[PLACEHOLDER] RealAmericaFirst",
      handle: "@RealAmericaFirst",
      followerCount: "1.2M followers",
      postText: "[PLACEHOLDER] Every single problem at the border — crime, drugs, disease, housing — traces back to one source. The American people know it. The politicians don't want to say it out loud.",
    },
    options: [
      "Scapegoating — assigns all complex social problems to a single group",
      "Emotion — uses frustration and anger to drive the argument",
      "False dilemma — implies accepting the blame assignment or ignoring the problems",
      "Just asking questions — implies the truth is being suppressed",
      "Fake expert — invokes 'the American people' as a unified authority",
    ],
    correctIndex: 0,
    explanation: "[PLACEHOLDER] Scapegoating assigns a complex set of unrelated problems to a single identifiable group. It short-circuits structural analysis by providing a single human target.",
  },
  {
    id: "nt-s2-3",
    type: "name-trick",
    xp: 60,
    difficulty: 2,
    introSection: "section-2",
    post: {
      avatarUrl: "https://picsum.photos/seed/nt-s2-3/80/80",
      sourceName: "[PLACEHOLDER] MedTruth Network",
      handle: "@MedTruthNet",
      followerCount: "620K followers",
      postText: "[PLACEHOLDER] Former CDC Director Dr. Raymond Holt (ret.) says the mRNA platform has never been properly safety-tested over a multi-decade timeframe. 'We are conducting a mass experiment on the public,' he told our podcast last week.",
    },
    options: [
      "Fake expert — retired official cited outside their current expertise without a verifiable source",
      "Emotion — uses fear of being an unwitting test subject",
      "Just asking questions — frames a serious safety question as merely worth considering",
      "Scapegoating — blames regulatory agencies for deliberate negligence",
      "False dilemma — implies either reject the vaccine or accept being experimented on",
    ],
    correctIndex: 0,
    explanation: "[PLACEHOLDER] A 'former' official cited on a podcast without a transcript link or verifiable quote is a fake expert deployment. Retired status plus a dramatic quote gives a fringe claim institutional legitimacy it does not have.",
  },

  {
    id: "ft-s2",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    introSection: "section-2",
    sectionId: "section-2",
    posts: [
      {
        id: "ft-s2-p1",
        source: "[PLACEHOLDER] Associated Press",
        timeAgo: "1 hour ago",
        headline: "[PLACEHOLDER] Aid convoy reaches isolated village three days after landslide",
        imageUrl: "https://picsum.photos/seed/ft-s2-p1/400/300",
        body: "[PLACEHOLDER] An aid convoy reached a village cut off by a landslide three days after the event. Officials said the delay was caused by road damage making vehicle access impossible until temporary bridges were installed. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s2-p2",
        source: "[PLACEHOLDER] @ConspiracyTruthNow",
        timeAgo: "20 minutes ago",
        headline: "[PLACEHOLDER] Scientists admit climate data was fabricated to justify carbon tax",
        imageUrl: "https://picsum.photos/seed/ft-s2-p2/400/300",
        body: "[PLACEHOLDER] A post claims 'scientists' admitted in an internal meeting that climate data was manipulated. No source, no recording, no named scientist, no institution cited. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s2-p3",
        source: "[PLACEHOLDER] Daily Herald",
        timeAgo: "4 hours ago",
        headline: "[PLACEHOLDER] Hospital 'overwhelmed' by wave of patients after pollution incident",
        imageUrl: "https://picsum.photos/seed/ft-s2-p3/400/300",
        body: "[PLACEHOLDER] A hospital reported treating an increased number of patients following a chemical plant incident. Administrators said they activated their surge plan but did not describe the situation as 'overwhelming'. The headline overstates their own description. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 3 — DON'T CRY FAKE  (real-or-ai steps to difficulty 2)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: "rai-s3-1",
    type: "real-or-ai",
    xp: 60,
    difficulty: 2,
    introSection: "section-3",
    imageUrl: "https://picsum.photos/seed/rai-s3-1/800/450",
    correctAnswer: "real",
    explanation: "[PLACEHOLDER] This is a real photograph. At difficulty 2, real images are selected because they contain details (unusual lighting, wide-angle distortion, compression artefacts) that superficially resemble AI tells. The liar's dividend — the risk that people dismiss genuine evidence as AI — makes over-flagging as dangerous as under-flagging.",
  },
  {
    id: "rai-s3-2",
    type: "real-or-ai",
    xp: 60,
    difficulty: 2,
    introSection: "section-3",
    imageUrl: "https://picsum.photos/seed/rai-s3-2/800/450",
    correctAnswer: "ai",
    tell: {
      top: 40,
      left: 5,
      width: 45,
      height: 35,
      explanation: "[PLACEHOLDER] The text on a sign in the background is partially legible but contains impossible letter sequences — a reliable AI artefact. Real signage in real photographs always contains readable, correctly spelled text.",
    },
    explanation: "[PLACEHOLDER] AI-generated images frequently produce garbled, near-legible text on signs, shirts, and labels. If text in an image is almost-but-not-quite readable, this is a strong indicator of AI generation.",
  },
  {
    id: "rai-s3-3",
    type: "real-or-ai",
    xp: 60,
    difficulty: 2,
    introSection: "section-3",
    imageUrl: "https://picsum.photos/seed/rai-s3-3/800/450",
    correctAnswer: "real",
    explanation: "[PLACEHOLDER] This is a real photograph taken under unusual lighting conditions. The colour cast and motion blur may look artificial but are consistent with the camera settings used. Real cameras produce artefacts too — not all imperfections are AI tells.",
  },

  {
    id: "ft-s3",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    introSection: "section-3",
    sectionId: "section-3",
    posts: [
      {
        id: "ft-s3-p1",
        source: "[PLACEHOLDER] BBC News",
        timeAgo: "30 minutes ago",
        headline: "[PLACEHOLDER] Wildfire spreads to second district; 4,000 residents evacuated",
        imageUrl: "https://picsum.photos/seed/ft-s3-p1/400/300",
        body: "[PLACEHOLDER] Fire services confirmed the wildfire had spread into a second district by mid-morning, prompting evacuation of approximately 4,000 residents. Three aerial units have been deployed. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s3-p2",
        source: "[PLACEHOLDER] @FreedomInfoNetwork",
        timeAgo: "15 minutes ago",
        headline: "[PLACEHOLDER] AI-generated wildfire images used to fake scale of disaster, experts warn",
        imageUrl: "https://picsum.photos/seed/ft-s3-p2/400/300",
        body: "[PLACEHOLDER] The post claims most wildfire images in circulation are AI-generated and the fire is far smaller than reported. No expert is named, no methodology cited. A reverse image search traces the referenced images to verified news agency archives. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s3-p3",
        source: "[PLACEHOLDER] Metro Daily",
        timeAgo: "2 hours ago",
        headline: "[PLACEHOLDER] Air quality 'dangerous' across the region as smoke spreads",
        imageUrl: "https://picsum.photos/seed/ft-s3-p3/400/300",
        body: "[PLACEHOLDER] Air quality monitors recorded readings in the 'unhealthy' range, not the 'dangerous' range used in the headline. Officials recommended vulnerable groups stay indoors. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 4 — LEAVE THE PAGE  (leave-the-page steps to difficulty 2)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: "ltp-s4-1",
    type: "leave-the-page",
    xp: 70,
    difficulty: 2,
    introSection: "section-4",
    scenario: "[PLACEHOLDER] A news site reports that a leaked government memo proves water fluoridation causes cognitive decline. Which result is decisive?",
    cards: [
      {
        title: "Community water fluoridation: evidence review",
        source: "cochrane.org",
        snippet: "[PLACEHOLDER] Cochrane's systematic review found limited evidence of cognitive effects from fluoride at recommended public water supply levels. Studies showing effects used concentrations significantly above WHO guidance.",
      },
      {
        title: "Government hides fluoride danger — leaked memo (exclusive)",
        source: "healthfreedomwatch.net",
        snippet: "[PLACEHOLDER] We have obtained a memo that proves health regulators knew fluoride was harmful but suppressed the findings to protect the dental industry...",
      },
      {
        title: "What is water fluoridation?",
        source: "nidcr.nih.gov",
        snippet: "[PLACEHOLDER] Community water fluoridation is the adjustment of fluoride levels in drinking water to the level recommended for optimal dental health.",
      },
      {
        title: "Is fluoride in water safe?",
        source: "healthline.com",
        snippet: "[PLACEHOLDER] Most health organisations including the WHO and CDC consider water fluoridation at recommended levels to be safe and effective.",
      },
    ],
    correctCardIndex: 0,
    explanation: "[PLACEHOLDER] The Cochrane Collaboration (cochrane.org) produces independent systematic reviews of health evidence. It addresses both the science and the nuance — effects only appear at concentrations above those used in public supplies.",
  },
  {
    id: "ltp-s4-2",
    type: "leave-the-page",
    xp: 70,
    difficulty: 2,
    introSection: "section-4",
    scenario: "[PLACEHOLDER] A widely shared article claims a specific NGO running refugee camps has been credibly accused of systematic financial fraud. Which search result settles this?",
    cards: [
      {
        title: "NGO Watch: Relief Fund International — accountability report",
        source: "charitynavigator.org",
        snippet: "[PLACEHOLDER] Relief Fund International receives a 4-star rating. Its most recent financial audit showed no material findings. No credible fraud allegations appear in our database.",
      },
      {
        title: "NGOs and corruption — the dark side of charity",
        source: "exposengofraud.blogspot.com",
        snippet: "[PLACEHOLDER] Our investigation, based on sources inside the organisation, reveals millions being diverted. Officials refuse to comment.",
      },
      {
        title: "Relief Fund International official site",
        source: "relieffundinternational.org",
        snippet: "[PLACEHOLDER] We publish our annual accounts and audit reports transparently. Our 2024 annual report is available for download.",
      },
      {
        title: "How to check if a charity is legitimate",
        source: "bbc.co.uk",
        snippet: "[PLACEHOLDER] Charity regulators and watchdogs maintain databases of registered charities. Members of the public can check an organisation's registration and financial filings...",
      },
    ],
    correctCardIndex: 0,
    explanation: "[PLACEHOLDER] An independent watchdog like Charity Navigator evaluates NGO finances against audited accounts. A four-star rating with a clean audit directly contradicts the fraud allegation.",
  },
  {
    id: "ltp-s4-3",
    type: "leave-the-page",
    xp: 70,
    difficulty: 2,
    introSection: "section-4",
    scenario: "[PLACEHOLDER] A post claims a pharmaceutical company's new emergency drug was approved despite failing its clinical trial. Which result settles the approval decision?",
    cards: [
      {
        title: "Accelerated approval for NovaCure-7: FDA decision summary",
        source: "fda.gov",
        snippet: "[PLACEHOLDER] NovaCure-7 was granted accelerated approval based on a surrogate endpoint reasonably likely to predict clinical benefit. The approval was conditional; a confirmatory trial is required.",
      },
      {
        title: "FDA approves dangerous drug that failed trials — scandal",
        source: "medicalwhistleblower.org",
        snippet: "[PLACEHOLDER] Insiders say the FDA was pressured by lobbyists to approve a drug whose pivotal trial missed its primary endpoint...",
      },
      {
        title: "What is accelerated drug approval?",
        source: "cancer.gov",
        snippet: "[PLACEHOLDER] Accelerated approval allows drugs for serious conditions to be approved based on a surrogate endpoint while full clinical data continues to be collected.",
      },
      {
        title: "Drug approval controversies explained",
        source: "vox.com",
        snippet: "[PLACEHOLDER] The accelerated approval pathway has generated debate, with some researchers arguing it allows drugs to be used before sufficient efficacy data exist.",
      },
    ],
    correctCardIndex: 0,
    explanation: "[PLACEHOLDER] The FDA's own decision document (fda.gov) is the authoritative source. It shows the approval was conditional — which is different from 'failing a trial' — making the viral claim misleading rather than false.",
  },

  {
    id: "ft-s4",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    introSection: "section-4",
    sectionId: "section-4",
    posts: [
      {
        id: "ft-s4-p1",
        source: "[PLACEHOLDER] AP",
        timeAgo: "1 hour ago",
        headline: "[PLACEHOLDER] Authorities confirm water supply in two districts restored after contamination scare",
        imageUrl: "https://picsum.photos/seed/ft-s4-p1/400/300",
        body: "[PLACEHOLDER] Water utility officials confirmed the water supply had been restored following a precautionary shutdown. Tests showed no harmful levels of any contaminant. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s4-p2",
        source: "[PLACEHOLDER] @AlertNationUS",
        timeAgo: "2 hours ago",
        headline: "[PLACEHOLDER] Children sickened by contaminated water the government said was safe",
        imageUrl: "https://picsum.photos/seed/ft-s4-p2/400/300",
        body: "[PLACEHOLDER] The post includes a photo of children in hospital gowns and claims they were poisoned by tap water. The hospital in the photo is in a different country and the image dates from 2019. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s4-p3",
        source: "[PLACEHOLDER] City Herald",
        timeAgo: "3 hours ago",
        headline: "[PLACEHOLDER] Water authority under 'severe criticism' for slow response to contamination alert",
        imageUrl: "https://picsum.photos/seed/ft-s4-p3/400/300",
        body: "[PLACEHOLDER] The article quotes two local councillors criticising the response time. Officials say the response met all statutory requirements. 'Severe criticism' reflects one political faction's position, not a broad official finding. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 5 — CHECK THE HANDLE  (leave-the-page steps to difficulty 3)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: "ltp-s5-1",
    type: "leave-the-page",
    xp: 80,
    difficulty: 3,
    introSection: "section-5",
    scenario: "[PLACEHOLDER] A tweet from @WHO_HealthAlert claims the WHO has issued an undisclosed emergency directive restricting international travel. Which result tells you whether this account is genuine?",
    cards: [
      {
        title: "World Health Organization — official social media accounts",
        source: "who.int",
        snippet: "[PLACEHOLDER] The WHO's official Twitter/X account is @WHO (verified, 11.8M followers). There is no official account named @WHO_HealthAlert. Any messages from accounts not matching our official list should be treated as unofficial.",
      },
      {
        title: "@WHO_HealthAlert on X — profile page",
        source: "x.com",
        snippet: "[PLACEHOLDER] WHO Health Alert | Independent monitoring of WHO communications | Not affiliated with the World Health Organization. Created: January 2024.",
      },
      {
        title: "WHO travel advisories — current list",
        source: "who.int",
        snippet: "[PLACEHOLDER] Current WHO travel advisories are listed below. No emergency travel restriction directive has been issued in the past 30 days.",
      },
      {
        title: "How to identify fake WHO accounts",
        source: "reuters.com",
        snippet: "[PLACEHOLDER] Reuters Fact Check has identified dozens of accounts impersonating WHO officials during past health emergencies...",
      },
    ],
    correctCardIndex: 0,
    explanation: "[PLACEHOLDER] The WHO's official website maintains a list of its genuine social media accounts. Checking whether the handle matches the official list is the fastest way to identify an impersonation account.",
  },
  {
    id: "ltp-s5-2",
    type: "leave-the-page",
    xp: 80,
    difficulty: 3,
    introSection: "section-5",
    scenario: "[PLACEHOLDER] An article was published by 'The European Health Tribune' claiming a vaccine caused 300 deaths in Germany. You want to check whether this publication is a legitimate news outlet. Which result settles it?",
    cards: [
      {
        title: "European Health Tribune — press registry lookup",
        source: "pressverein.de",
        snippet: "[PLACEHOLDER] No publication named 'The European Health Tribune' appears in the German Press Council's registry of registered publications. The domain was registered 4 months ago.",
      },
      {
        title: "Vaccine safety monitoring in Germany — PEI report",
        source: "pei.de",
        snippet: "[PLACEHOLDER] The Paul Ehrlich Institute's latest pharmacovigilance report covers all approved vaccines. No clustering of deaths causally linked to the vaccine has been identified.",
      },
      {
        title: "European Health Tribune — About us",
        source: "europeanhealthtribune.eu",
        snippet: "[PLACEHOLDER] We are an independent pan-European health journalism platform committed to covering what mainstream media ignores.",
      },
      {
        title: "Fake health news sites: how to spot them",
        source: "factcheck.org",
        snippet: "[PLACEHOLDER] Common signs include: no named editors, recently registered domain, no press council affiliation, sensationalist headlines...",
      },
    ],
    correctCardIndex: 0,
    explanation: "[PLACEHOLDER] The press registry lookup is the definitive check for whether a publication is a registered, accountable news organisation. A 4-month-old domain with no press council registration is a strong red flag.",
  },
  {
    id: "ltp-s5-3",
    type: "leave-the-page",
    xp: 80,
    difficulty: 3,
    introSection: "section-5",
    scenario: "[PLACEHOLDER] A website called 'GlobalFactsDaily.org' publishes a report claiming to debunk official casualty figures. You want to establish whether it is a credible fact-checking organisation. Which result is most relevant?",
    cards: [
      {
        title: "IFCN verified signatories — full list",
        source: "ifcncodeofprinciples.poynter.org",
        snippet: "[PLACEHOLDER] The International Fact-Checking Network maintains a list of verified signatories who have demonstrated compliance with its Code of Principles. GlobalFactsDaily.org does not appear on this list.",
      },
      {
        title: "GlobalFactsDaily.org — methodology page",
        source: "globalfactsdaily.org",
        snippet: "[PLACEHOLDER] We use a rigorous multi-step verification process involving open-source intelligence, satellite imagery, and a network of regional correspondents.",
      },
      {
        title: "What is the IFCN?",
        source: "poynter.org",
        snippet: "[PLACEHOLDER] The International Fact-Checking Network at Poynter Institute verifies fact-checking organisations against a code of principles covering transparency, methodology, and corrections policies.",
      },
      {
        title: "Conflict zone casualty counting — methodology explained",
        source: "icrc.org",
        snippet: "[PLACEHOLDER] The ICRC describes the methodology challenges in casualty recording in active conflict zones.",
      },
    ],
    correctCardIndex: 0,
    explanation: "[PLACEHOLDER] The IFCN verified list is the international standard for identifying credible fact-checking organisations. Absence from this list means their claimed methodology has not been independently audited.",
  },

  {
    id: "ft-s5",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    introSection: "section-5",
    sectionId: "section-5",
    posts: [
      {
        id: "ft-s5-p1",
        source: "[PLACEHOLDER] Reuters",
        timeAgo: "1 hour ago",
        headline: "[PLACEHOLDER] UNICEF confirms food distribution reaching 85% of target beneficiaries in crisis zone",
        imageUrl: "https://picsum.photos/seed/ft-s5-p1/400/300",
        body: "[PLACEHOLDER] UNICEF reported its emergency food distribution programme was reaching 85 percent of its target population, with the remaining 15 percent in areas where access is restricted due to security conditions. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s5-p2",
        source: "[PLACEHOLDER] @UNICEFEmergency_Alert",
        timeAgo: "30 minutes ago",
        headline: "[PLACEHOLDER] UNICEF: Total aid failure — no food has reached survivors",
        imageUrl: "https://picsum.photos/seed/ft-s5-p2/400/300",
        body: "[PLACEHOLDER] An account named @UNICEFEmergency_Alert — not the official @UNICEF account — claims no aid has reached survivors. The official UNICEF account reports the opposite. This account was created three weeks ago. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s5-p3",
        source: "[PLACEHOLDER] The Morning Star",
        timeAgo: "2 hours ago",
        headline: "[PLACEHOLDER] Aid 'nowhere near enough' say relief workers on the ground",
        imageUrl: "https://picsum.photos/seed/ft-s5-p3/400/300",
        body: "[PLACEHOLDER] Relief workers say the quantity of aid is insufficient for the scale of need. This is consistent with UNICEF's own 85% figure — meeting 85% of targets still leaves a significant gap. The headline implies total failure rather than partial shortfall. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 6 — WHO SAID THAT?  (introduces who-says at difficulty 1)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: "ws-s6-1",
    type: "who-says",
    xp: 60,
    difficulty: 1,
    introSection: "section-6",
    excerpt: "[PLACEHOLDER] According to Dr. Maria Santos, a leading infectious disease specialist, the current outbreak strain 'has a mortality rate ten times higher than seasonal flu.' Santos, who advises several governments, told the conference that standard containment measures would be insufficient.",
    highlightedSource: "Dr. Maria Santos, a leading infectious disease specialist",
    options: [
      "The source is authoritative and independent — the claim holds",
      "The title 'leading specialist' is vague — check which institution she is affiliated with and whether the quote has a verifiable source",
      "Anonymous medical sources cannot be cited in responsible journalism",
      "The source is credible because she 'advises several governments'",
    ],
    correctIndex: 1,
    explanation: "[PLACEHOLDER] 'Leading infectious disease specialist' is a description, not a verifiable credential. Before accepting the claim, check: Which institution? Which governments? Is there a transcript of the conference?",
  },
  {
    id: "ws-s6-2",
    type: "who-says",
    xp: 60,
    difficulty: 1,
    introSection: "section-6",
    excerpt: "[PLACEHOLDER] The report cites 'multiple government sources' as confirming that emergency powers would be extended for at least another six months. Officials from three unnamed ministries told the outlet the decision had already been made in private.",
    highlightedSource: "multiple government sources",
    options: [
      "Anonymous multi-source reporting is standard practice — the claim is credible",
      "Anonymous sources are never acceptable in journalism",
      "The source is too vague to evaluate — legitimate reporting should name the institution even if the individual is anonymous",
      "Government sources are always independent and authoritative",
    ],
    correctIndex: 2,
    explanation: "[PLACEHOLDER] 'Multiple government sources' with no institutional identifier makes verification impossible. Credible anonymous-source reporting typically names the ministry or department even if the individual is protected.",
  },
  {
    id: "ws-s6-3",
    type: "who-says",
    xp: 60,
    difficulty: 1,
    introSection: "section-6",
    excerpt: "[PLACEHOLDER] Climate scientist Prof. James Hartley of the University of Edinburgh warned that current emissions trajectories make a 2°C warming scenario inevitable by 2040. His comments were made in a social media post, not in a peer-reviewed paper.",
    highlightedSource: "Prof. James Hartley of the University of Edinburgh",
    options: [
      "A named, institutionally affiliated scientist is a credible source for scientific claims",
      "A social media post by a scientist carries the same weight as a peer-reviewed paper",
      "The source is real and credible, but a social media post is not a peer-reviewed finding — check whether this claim appears in his published research",
      "University professors are too biased to be reliable sources on climate",
    ],
    correctIndex: 2,
    explanation: "[PLACEHOLDER] A named, affiliated scientist is a real, verifiable source. However, a social media post is not peer-reviewed and may not reflect the scientific consensus or the professor's own carefully qualified published position.",
  },

  {
    id: "ft-s6",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    introSection: "section-6",
    sectionId: "section-6",
    posts: [
      {
        id: "ft-s6-p1",
        source: "[PLACEHOLDER] The Lancet",
        timeAgo: "5 hours ago",
        headline: "[PLACEHOLDER] Peer-reviewed study finds no link between proximity to industrial sites and childhood asthma rates in this cohort",
        imageUrl: "https://picsum.photos/seed/ft-s6-p1/400/300",
        body: "[PLACEHOLDER] A study published in The Lancet examining 12,000 children over five years found no statistically significant association between residential proximity to industrial sites and childhood asthma rates. Researchers cautioned results may not generalise beyond the specific region studied. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s6-p2",
        source: "[PLACEHOLDER] @IndustryExposed",
        timeAgo: "1 hour ago",
        headline: "[PLACEHOLDER] Insider: Lancet study was funded by the petrochemical lobby to suppress the truth",
        imageUrl: "https://picsum.photos/seed/ft-s6-p2/400/300",
        body: "[PLACEHOLDER] The account claims the study's funding came from industry sources. The actual Lancet paper lists its funding as a public health research grant from a government body. The claim contradicts the paper's disclosed funding statement. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s6-p3",
        source: "[PLACEHOLDER] Science Today",
        timeAgo: "3 hours ago",
        headline: "[PLACEHOLDER] New study 'clears' industrial sites of causing asthma in children",
        imageUrl: "https://picsum.photos/seed/ft-s6-p3/400/300",
        body: "[PLACEHOLDER] The headline uses 'clears' to imply definitive exoneration. The actual study found no link in one specific cohort over five years and explicitly cautioned against generalisation. A single study does not 'clear' anything; it adds to the evidence base. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 7 — WEIGH THE SOURCE  (who-says steps to difficulty 2)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: "ws-s7-1",
    type: "who-says",
    xp: 70,
    difficulty: 2,
    introSection: "section-7",
    excerpt: "[PLACEHOLDER] Economists at the Peterson Institute for International Economics project that the proposed tariffs will reduce GDP by 0.8% over two years. The report was commissioned by the National Association of Manufacturers, which opposes the tariff policy.",
    highlightedSource: "Economists at the Peterson Institute for International Economics",
    options: [
      "The Peterson Institute is credible, but the study was commissioned by a group with a financial interest in the conclusion — this should be disclosed and weighed",
      "Think tank research is always biased and should be disregarded",
      "The commissioning organisation's position is irrelevant to the quality of the economic modelling",
      "The source is independent because Peterson Institute is a separate institution from the commissioner",
    ],
    correctIndex: 0,
    explanation: "[PLACEHOLDER] The Peterson Institute is a legitimate, named research body. However, research commissioned by a party with a financial stake in the outcome must be disclosed. This does not make the research wrong, but it means independent verification is important.",
  },
  {
    id: "ws-s7-2",
    type: "who-says",
    xp: 70,
    difficulty: 2,
    introSection: "section-7",
    excerpt: "[PLACEHOLDER] The article states: 'According to data from the company's internal safety review, the drug has a side-effect rate of just 0.3%.' No independent regulator or academic institution is cited. The company provided the data to the journalist directly.",
    highlightedSource: "the company's internal safety review",
    options: [
      "Internal company data is always more accurate than external studies",
      "This fails the independence test — a company's self-reported safety data about its own product requires independent verification",
      "The 0.3% figure is specific enough to be credible without external verification",
      "The journalist received the data directly, which confirms its authenticity",
    ],
    correctIndex: 1,
    explanation: "[PLACEHOLDER] A company's own internal safety review of its own product is not independent. The figure may be accurate, but it requires corroboration from a regulator, academic study, or independent audit.",
  },
  {
    id: "ws-s7-3",
    type: "who-says",
    xp: 70,
    difficulty: 2,
    introSection: "section-7",
    excerpt: "[PLACEHOLDER] The story cites 'a former senior official at the ministry who asked not to be named.' The official is described as 'directly involved in the decision.' This is the article's sole source for the claim that the policy was deliberately concealed from parliament.",
    highlightedSource: "a former senior official at the ministry who asked not to be named",
    options: [
      "A single anonymous source meeting IMVAIN criteria is sufficient for a claim of this seriousness",
      "A sole anonymous source for a serious allegation fails the 'multiple' test — the claim requires corroboration before being reported as established fact",
      "Former officials are not credible because they may have personal grievances",
      "The 'directly involved' description makes the source authoritative enough to stand alone",
    ],
    correctIndex: 1,
    explanation: "[PLACEHOLDER] A sole anonymous source for a claim about deliberate parliamentary deception should be treated as a starting point for investigation, not a confirmed fact. Responsible reporting would seek corroboration from documents or a second independent source.",
  },

  {
    id: "ft-s7",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    introSection: "section-7",
    sectionId: "section-7",
    posts: [
      {
        id: "ft-s7-p1",
        source: "[PLACEHOLDER] Financial Times",
        timeAgo: "2 hours ago",
        headline: "[PLACEHOLDER] IMF revises growth forecast downward citing supply chain disruption",
        imageUrl: "https://picsum.photos/seed/ft-s7-p1/400/300",
        body: "[PLACEHOLDER] The IMF revised its global growth forecast downward by 0.4 percentage points, citing ongoing supply chain disruptions. The revision was published in the IMF's quarterly World Economic Outlook update. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s7-p2",
        source: "[PLACEHOLDER] EconomicTruthBlog",
        timeAgo: "1 hour ago",
        headline: "[PLACEHOLDER] IMF economist privately admits recession is coming — public forecast is fake",
        imageUrl: "https://picsum.photos/seed/ft-s7-p2/400/300",
        body: "[PLACEHOLDER] The blog claims an unnamed IMF economist 'privately admitted' the official forecast is misleading. No recording, no name, no corroborating source. The blog has no editorial contact. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s7-p3",
        source: "[PLACEHOLDER] Bloomberg",
        timeAgo: "3 hours ago",
        headline: "[PLACEHOLDER] Markets 'rattled' by IMF forecast revision",
        imageUrl: "https://picsum.photos/seed/ft-s7-p3/400/300",
        body: "[PLACEHOLDER] Markets showed modest declines: the S&P 500 fell 0.4% and European indices dropped less than 0.3%. 'Rattled' implies significant volatility; the actual market movement was within the normal daily range. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 8 — UNDER THE HOOD  (introduces under-the-hood at difficulty 1)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: "uth-s8-1",
    type: "under-the-hood",
    xp: 70,
    difficulty: 1,
    introSection: "section-8",
    imageUrl: "https://picsum.photos/seed/uth-s8-1/800/450",
    items: [
      { label: "File type", value: "JPEG" },
      { label: "Camera model", value: "iPhone 14 Pro" },
      { label: "Date & time taken", value: "[NOT FOUND — metadata stripped]" },
      { label: "GPS location", value: "[NOT FOUND]" },
      { label: "Reverse image search", value: "No prior appearances found" },
    ],
    correctFlagIndex: 2,
    explanation: "[PLACEHOLDER] A smartphone photo always embeds a timestamp in its EXIF metadata unless it is deliberately removed. Missing date metadata is a red flag — it suggests the image was processed in a way that stripped the original data.",
  },
  {
    id: "uth-s8-2",
    type: "under-the-hood",
    xp: 70,
    difficulty: 1,
    introSection: "section-8",
    imageUrl: "https://picsum.photos/seed/uth-s8-2/800/450",
    items: [
      { label: "File type", value: "PNG" },
      { label: "Software", value: "Adobe Photoshop 25.0" },
      { label: "Date created", value: "2024-03-12 09:14:02" },
      { label: "Original camera", value: "[NOT FOUND — no camera data]" },
      { label: "Reverse image search", value: "Original photo found: Reuters, Jan 2022" },
    ],
    correctFlagIndex: 4,
    explanation: "[PLACEHOLDER] The reverse image search is the decisive red flag — it shows the image appeared two years earlier with Reuters, meaning the 'current' context is false. The Photoshop metadata confirms editing.",
  },
  {
    id: "uth-s8-3",
    type: "under-the-hood",
    xp: 70,
    difficulty: 1,
    introSection: "section-8",
    imageUrl: "https://picsum.photos/seed/uth-s8-3/800/450",
    items: [
      { label: "File type", value: "JPEG" },
      { label: "Camera model", value: "Canon EOS R5" },
      { label: "Date taken", value: "2024-11-03 14:22:17" },
      { label: "GPS location", value: "51.5074° N, 0.1278° W (London, UK)" },
      { label: "Reverse image search", value: "Same image found on three sites, all posted same day" },
    ],
    correctFlagIndex: 4,
    explanation: "[PLACEHOLDER] Three simultaneous postings on the same day is a red flag — it suggests coordinated distribution rather than organic sharing. Legitimate breaking news photos typically appear first on one news agency before spreading.",
  },

  {
    id: "ft-s8",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    introSection: "section-8",
    sectionId: "section-8",
    posts: [
      {
        id: "ft-s8-p1",
        source: "[PLACEHOLDER] Getty Images via AP",
        timeAgo: "4 hours ago",
        headline: "[PLACEHOLDER] Protests in capital city enter third day; demonstrators demand minister's resignation",
        imageUrl: "https://picsum.photos/seed/ft-s8-p1/400/300",
        body: "[PLACEHOLDER] A Getty Images photographer documented protests entering their third day. The images show an estimated 3,000 to 5,000 demonstrators. The agency verified the images were taken yesterday at the named location. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s8-p2",
        source: "[PLACEHOLDER] @ProtestWatch_Live",
        timeAgo: "45 minutes ago",
        headline: "[PLACEHOLDER] Police fire live rounds at protesters — WARNING: graphic footage",
        imageUrl: "https://picsum.photos/seed/ft-s8-p2/400/300",
        body: "[PLACEHOLDER] The footage appears to show a protest scenario but reverse image search identifies it as footage from a different country three years ago. Verified footage from the current event shows only crowd-control sprays. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s8-p3",
        source: "[PLACEHOLDER] National Broadcaster",
        timeAgo: "2 hours ago",
        headline: "[PLACEHOLDER] 'Hundreds of thousands' join anti-government march",
        imageUrl: "https://picsum.photos/seed/ft-s8-p3/400/300",
        body: "[PLACEHOLDER] Organisers claimed 'hundreds of thousands'; police put the crowd at around 25,000; independent counting using aerial imagery estimated 40,000–60,000. The broadcaster used the organiser's figure without attribution or caveat. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 9 — WHEN WAS THIS?  (introduces when-or-where at difficulty 1, subtype "when")
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: "wow-s9-1",
    type: "when-or-where",
    xp: 60,
    difficulty: 1,
    introSection: "section-9",
    subtype: "when",
    imageUrl: "https://picsum.photos/seed/wow-s9-1/800/450",
    postText: "[PLACEHOLDER] Heartbreaking: this photo shows the aftermath of the earthquake that struck the region last week.",
    options: [
      "Last week (as claimed)",
      "2023 — a different earthquake in the same region",
      "2019 — flooding after a cyclone in Bangladesh",
      "2015 — the Nepal earthquake",
    ],
    correctIndex: 3,
    explanation: "[PLACEHOLDER] A reverse image search traces this photo to coverage of the 2015 Nepal earthquake. It has been recycled at least three times since then for different crisis events.",
  },
  {
    id: "wow-s9-2",
    type: "when-or-where",
    xp: 60,
    difficulty: 1,
    introSection: "section-9",
    subtype: "when",
    imageUrl: "https://picsum.photos/seed/wow-s9-2/800/450",
    postText: "[PLACEHOLDER] Shocking footage — migrants crossing the Mediterranean right now.",
    options: [
      "Current week (as claimed)",
      "Summer 2021 — an earlier crossing event",
      "2015 — the height of the European refugee crisis",
      "2018 — a crossing from Libya to Italy",
    ],
    correctIndex: 2,
    explanation: "[PLACEHOLDER] The life jacket colour scheme and vessel type in the image match documentation from 2015 and are inconsistent with current life jacket standards that changed in 2017. Reverse image search confirms a 2015 origin.",
  },
  {
    id: "wow-s9-3",
    type: "when-or-where",
    xp: 60,
    difficulty: 1,
    introSection: "section-9",
    subtype: "when",
    imageUrl: "https://picsum.photos/seed/wow-s9-3/800/450",
    postText: "[PLACEHOLDER] The climate summit ended in failure — world leaders photographed leaving the venue without agreement.",
    options: [
      "This year's summit (as claimed)",
      "COP27 — 2022 summit in Sharm El-Sheikh",
      "COP26 — 2021 summit in Glasgow",
      "COP25 — 2019 summit in Madrid",
    ],
    correctIndex: 2,
    explanation: "[PLACEHOLDER] The venue architecture is consistent with the SEC Centre in Glasgow, host of COP26 in 2021. The current year's summit was held at a different venue. EXIF data on the original file confirms a 2021 date.",
  },

  {
    id: "ft-s9",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    introSection: "section-9",
    sectionId: "section-9",
    posts: [
      {
        id: "ft-s9-p1",
        source: "[PLACEHOLDER] AFP",
        timeAgo: "2 hours ago",
        headline: "[PLACEHOLDER] AFP verifies image shows current flood, not 2017 event as claimed online",
        imageUrl: "https://picsum.photos/seed/ft-s9-p1/400/300",
        body: "[PLACEHOLDER] AFP's fact-check desk confirmed a widely shared photo showing flooded streets was taken this week by their correspondent, not recycled from a 2017 flood as a viral claim suggested. EXIF data and byline information were provided. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s9-p2",
        source: "[PLACEHOLDER] @DisasterWatchGlobal",
        timeAgo: "30 minutes ago",
        headline: "[PLACEHOLDER] LIVE: Before-and-after satellite images prove city completely destroyed",
        imageUrl: "https://picsum.photos/seed/ft-s9-p2/400/300",
        body: "[PLACEHOLDER] The 'before' and 'after' satellite images in the post are from different locations. The 'before' shows a prosperous neighbourhood; the 'after' shows a different city's district. Satellite analysis by Planet Labs shows much less damage in the actual area. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s9-p3",
        source: "[PLACEHOLDER] The Times",
        timeAgo: "1 hour ago",
        headline: "[PLACEHOLDER] Aid response 'slow' as crisis enters second month",
        imageUrl: "https://picsum.photos/seed/ft-s9-p3/400/300",
        body: "[PLACEHOLDER] The article quotes two NGO workers saying the response is slower than in comparable past crises, while official figures show aid delivery has reached 70% of target. The headline prioritises the criticism without contextualising the 70% figure. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 10 — WHERE WAS THIS?  (when-or-where steps to difficulty 2, subtype "where")
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: "wow-s10-1",
    type: "when-or-where",
    xp: 70,
    difficulty: 2,
    introSection: "section-10",
    subtype: "where",
    imageUrl: "https://picsum.photos/seed/wow-s10-1/800/450",
    postText: "[PLACEHOLDER] This is the scene at the border crossing in southern Texas right now.",
    options: [
      "Southern Texas, USA (as claimed)",
      "Tijuana, Mexico — US–Mexico border",
      "Calais, France — UK–France crossing",
      "Lampedusa, Italy — Mediterranean arrival point",
    ],
    correctIndex: 3,
    explanation: "[PLACEHOLDER] The coastguard vessel livery and the style of the rescue boats are consistent with Italian Maritime Rescue Coordination Centre operations. The coastline topography matches Lampedusa's distinctive terrain.",
  },
  {
    id: "wow-s10-2",
    type: "when-or-where",
    xp: 70,
    difficulty: 2,
    introSection: "section-10",
    subtype: "where",
    imageUrl: "https://picsum.photos/seed/wow-s10-2/800/450",
    postText: "[PLACEHOLDER] The devastation from last night's airstrike on a civilian neighbourhood in the city.",
    options: [
      "The city named in the post",
      "A different city in the same conflict zone",
      "A city in a different country's conflict",
      "A demolition site — no airstrike occurred",
    ],
    correctIndex: 2,
    explanation: "[PLACEHOLDER] Building construction style, street furniture, and visible road signage are inconsistent with the claimed country. Geolocation using satellite and street-level imagery confirms the architecture matches a city in a different country.",
  },
  {
    id: "wow-s10-3",
    type: "when-or-where",
    xp: 70,
    difficulty: 2,
    introSection: "section-10",
    subtype: "where",
    imageUrl: "https://picsum.photos/seed/wow-s10-3/800/450",
    postText: "[PLACEHOLDER] Enormous queue outside a food bank in London as the cost-of-living crisis deepens.",
    options: [
      "London, UK (as claimed)",
      "Manchester, UK",
      "Brussels, Belgium",
      "New York, USA",
    ],
    correctIndex: 3,
    explanation: "[PLACEHOLDER] Vehicle licence plates visible in the background follow the US format, not UK format. Street signage uses non-metric measurements. A landmark in the far background matches a building on Manhattan's Lower East Side.",
  },

  {
    id: "ft-s10",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    introSection: "section-10",
    sectionId: "section-10",
    posts: [
      {
        id: "ft-s10-p1",
        source: "[PLACEHOLDER] Bellingcat",
        timeAgo: "3 hours ago",
        headline: "[PLACEHOLDER] Geolocation confirms airstrike images are from claimed location",
        imageUrl: "https://picsum.photos/seed/ft-s10-p1/400/300",
        body: "[PLACEHOLDER] Investigators used shadow analysis, building geometry, and street-level imagery to confirm that footage circulating on social media does depict the location claimed. Methodology is detailed in the linked thread. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s10-p2",
        source: "[PLACEHOLDER] @RealWarZoneUpdates",
        timeAgo: "20 minutes ago",
        headline: "[PLACEHOLDER] BREAKING: Hospital bombed — 200 dead (GRAPHIC)",
        imageUrl: "https://picsum.photos/seed/ft-s10-p2/400/300",
        body: "[PLACEHOLDER] Geolocation places the images in a different city from what is claimed. The building structure does not match satellite imagery of any hospital in the claimed location. No news organisation has reported the incident. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s10-p3",
        source: "[PLACEHOLDER] Sky News",
        timeAgo: "2 hours ago",
        headline: "[PLACEHOLDER] 'Desperate' scenes at refugee processing centre",
        imageUrl: "https://picsum.photos/seed/ft-s10-p3/400/300",
        body: "[PLACEHOLDER] The report quotes two asylum seekers describing difficult conditions. It does not report the centre's official capacity, current occupancy, or compare conditions to legal requirements. 'Desperate' appears in quotes from one individual. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 11 — FIND THE WEAK LINK  (weak-link steps to difficulty 2)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: "wl-s11-1",
    type: "weak-link",
    xp: 100,
    difficulty: 2,
    introSection: "section-11",
    post: {
      avatarUrl: "https://picsum.photos/seed/wl-s11-1/80/80",
      sourceName: "[PLACEHOLDER] The Independent Lens",
      handle: "@IndependentLens",
      followerCount: "2.1M followers",
      postText: "[PLACEHOLDER] EXCLUSIVE: Leaked hospital data shows the vaccine caused 12,000 deaths that were officially classified as 'unrelated'. Our investigative team has seen the documents. Publishing in full tomorrow.",
    },
    pillars: [
      {
        pillar: "who",
        label: "Who is reporting this?",
        evidence: "The Independent Lens — large following, publishes a mix of verified investigations and contested claims, no press council membership listed",
      },
      {
        pillar: "what",
        label: "What is being claimed?",
        evidence: "Leaked hospital data shows 12,000 vaccine deaths were misclassified — an extraordinary claim requiring extraordinary evidence",
      },
      {
        pillar: "when",
        label: "When is the evidence available?",
        evidence: "Publishing 'tomorrow' — the claim is made before the evidence is available to the public or to fact-checkers",
      },
      {
        pillar: "where",
        label: "Where is the evidence?",
        evidence: "Documents 'seen' by the team — not linked, not published, no dataset identifier, no hospital named",
      },
      {
        pillar: "why",
        label: "Why post before publishing?",
        evidence: "Posting a teaser before evidence is released maximises engagement and allows the claim to spread before it can be checked",
      },
    ],
    correctPillar: "where",
    verdictOptions: [
      "The claim will be verified when the documents are published tomorrow",
      "No verifiable evidence exists yet — the claim should not be shared until the documents are public and independently reviewed",
      "The death figures are plausible given known vaccine risks — the claim is credible",
    ],
    correctVerdictIndex: 1,
    pillarExplanation: "[PLACEHOLDER] The 'where' pillar collapses completely — the evidence has not been published and cannot be independently reviewed. An extraordinary claim about 12,000 deaths requires publicly verifiable evidence.",
    explanation: "[PLACEHOLDER] Publishing a claim before the supporting evidence is available allows it to spread across social media before any fact-checker can examine the documents. Wait for the evidence before sharing.",
  },
  {
    id: "wl-s11-2",
    type: "weak-link",
    xp: 100,
    difficulty: 2,
    introSection: "section-11",
    post: {
      avatarUrl: "https://picsum.photos/seed/wl-s11-2/80/80",
      sourceName: "[PLACEHOLDER] EcoWatch Global",
      handle: "@EcoWatchGlobal",
      followerCount: "890K followers",
      postText: "[PLACEHOLDER] The wildfires in California this week were deliberately started by energy companies to destroy evidence of illegal dumping. Three firefighters told us off the record. We have their testimony.",
    },
    pillars: [
      {
        pillar: "who",
        label: "Who is the source?",
        evidence: "Three unnamed firefighters, cited off the record — anonymous, single institution, no corroboration from investigators or regulators",
      },
      {
        pillar: "what",
        label: "What is the claim?",
        evidence: "Energy companies deliberately started wildfires to destroy evidence — a criminal allegation of conspiracy and arson",
      },
      {
        pillar: "when",
        label: "When did this start?",
        evidence: "Claims fires began 'this week' — wildfire origin investigations take weeks of forensic analysis; no finding has been released",
      },
      {
        pillar: "where",
        label: "Where is the evidence?",
        evidence: "Testimony 'off the record' — not published, not linked, no fire investigation report referenced",
      },
      {
        pillar: "why",
        label: "Why this story?",
        evidence: "High-profile crisis + corporate conspiracy narrative = high engagement; no investigation agency has confirmed or opened an arson probe",
      },
    ],
    correctPillar: "who",
    verdictOptions: [
      "Three firefighter accounts, even anonymous, are enough to report a serious allegation",
      "The source fails — three anonymous individuals with no corroboration from any investigation agency are insufficient for a criminal arson allegation",
      "The claim is plausible because energy companies have a history of environmental violations",
    ],
    correctVerdictIndex: 1,
    pillarExplanation: "[PLACEHOLDER] The 'who' pillar collapses. Three unnamed sources without institutional corroboration, no investigation, and no forensic evidence is insufficient sourcing for a criminal conspiracy allegation.",
    explanation: "[PLACEHOLDER] Corporate conspiracy allegations require the highest standard of evidence. Anonymous sources can initiate an investigation, but they cannot on their own support publication of a claim that companies committed arson.",
  },
  {
    id: "wl-s11-3",
    type: "weak-link",
    xp: 100,
    difficulty: 2,
    introSection: "section-11",
    post: {
      avatarUrl: "https://picsum.photos/seed/wl-s11-3/80/80",
      sourceName: "[PLACEHOLDER] PolitiFact EU",
      handle: "@PolitifactEU",
      followerCount: "420K followers",
      postText: "[PLACEHOLDER] VERIFIED: The EU Parliament passed a resolution yesterday requiring member states to ban traditional farming methods by 2028. We have the text.",
    },
    pillars: [
      {
        pillar: "who",
        label: "Who is claiming this?",
        evidence: "An account named PolitiFact EU — but the real PolitiFact organisation has no EU branch; this is a different account using a similar name",
      },
      {
        pillar: "what",
        label: "What does it claim?",
        evidence: "EU Parliament passed a binding ban on traditional farming by 2028 — an extraordinary and politically explosive claim",
      },
      {
        pillar: "when",
        label: "When did this happen?",
        evidence: "Claims 'yesterday' — EU Parliament votes are publicly recorded within hours on the official EP website",
      },
      {
        pillar: "where",
        label: "Where is the text?",
        evidence: "Claims to 'have the text' but no link is provided to the EP legislative database where all resolutions are published",
      },
      {
        pillar: "why",
        label: "Why the VERIFIED label?",
        evidence: "Self-applied 'VERIFIED' label with no methodology or external verification — mimics legitimate fact-checker branding",
      },
    ],
    correctPillar: "who",
    verdictOptions: [
      "The EU Parliament may have passed such a resolution — wait for more sources",
      "The account is impersonating a legitimate fact-checker — the 'VERIFIED' label and account name are designed to deceive",
      "The claim is false because the EU cannot legislate farming practices directly",
    ],
    correctVerdictIndex: 1,
    pillarExplanation: "[PLACEHOLDER] The 'who' pillar fails immediately. An account imitating the name and branding of a real fact-checker is a sophisticated deception. Self-applied 'VERIFIED' labels mean nothing.",
    explanation: "[PLACEHOLDER] Brand impersonation of fact-checkers is particularly dangerous because it exploits trust in the verification process itself. Always check whether an account claiming to be a fact-checker is actually affiliated with the organisation it names.",
  },

  {
    id: "ft-s11",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    introSection: "section-11",
    sectionId: "section-11",
    posts: [
      {
        id: "ft-s11-p1",
        source: "[PLACEHOLDER] The Guardian",
        timeAgo: "1 hour ago",
        headline: "[PLACEHOLDER] Parliament votes to extend emergency health powers by six months",
        imageUrl: "https://picsum.photos/seed/ft-s11-p1/400/300",
        body: "[PLACEHOLDER] Parliament voted 312 to 189 to extend emergency public health powers for a further six months. Opposition parties criticised the measure as disproportionate; the government said the powers were a precautionary reserve. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s11-p2",
        source: "[PLACEHOLDER] @PatriotAlertNetwork",
        timeAgo: "30 minutes ago",
        headline: "[PLACEHOLDER] MPs vote themselves power to imprison citizens without trial under health law",
        imageUrl: "https://picsum.photos/seed/ft-s11-p2/400/300",
        body: "[PLACEHOLDER] The actual legislation extended emergency health powers including isolation enforcement orders. It did not remove habeas corpus or create imprisonment without trial. The existing judicial oversight framework was unchanged. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s11-p3",
        source: "[PLACEHOLDER] Telegraph",
        timeAgo: "2 hours ago",
        headline: "[PLACEHOLDER] Government 'seizes sweeping new powers' in health vote",
        imageUrl: "https://picsum.photos/seed/ft-s11-p3/400/300",
        body: "[PLACEHOLDER] The extension of existing powers for six months is described as 'sweeping new powers' — but the powers themselves are unchanged from those already in force. The extension is an extension, not an expansion. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SECTION 12 — THE FULL FEED  (all types at higher difficulties)
  // ═══════════════════════════════════════════════════════════════════════════

  {
    id: "nt-s12-1",
    type: "name-trick",
    xp: 80,
    difficulty: 3,
    introSection: "section-12",
    post: {
      avatarUrl: "https://picsum.photos/seed/nt-s12-1/80/80",
      sourceName: "[PLACEHOLDER] Skeptical Patriot",
      handle: "@SkepticalPatriot",
      followerCount: "1.8M followers",
      postText: "[PLACEHOLDER] I'm not saying the election was stolen. I'm just saying: why won't they allow a full forensic audit of every single ballot? What are they afraid of? Seems like a reasonable question. Normal people ask questions.",
    },
    options: [
      "Just asking questions — uses innocent curiosity to plant an unverified fraud allegation while maintaining deniability",
      "False dilemma — implies either a full audit or fraud is being covered up",
      "Scapegoating — blames election officials for the suspicion",
      "Fake expert — implies the speaker has insider knowledge about electoral procedures",
      "Emotion — uses fear of a stolen election to provoke outrage",
    ],
    correctIndex: 0,
    explanation: "[PLACEHOLDER] The post is a textbook JAQ-ing off: the speaker explicitly disclaims the allegation ('I'm not saying') while constructing it precisely. The phrase 'What are they afraid of?' plants the fraud implication while maintaining plausible deniability.",
  },
  {
    id: "nt-s12-2",
    type: "name-trick",
    xp: 80,
    difficulty: 3,
    introSection: "section-12",
    post: {
      avatarUrl: "https://picsum.photos/seed/nt-s12-2/80/80",
      sourceName: "[PLACEHOLDER] The Truth About Media",
      handle: "@TruthAboutMedia",
      followerCount: "950K followers",
      postText: "[PLACEHOLDER] The media will never tell you that the crime spike in every major city traces back to a single policy decision. One policy. Every single city. The data is clear. Ask yourself why they won't say it.",
    },
    options: [
      "Scapegoating — implies a single group or policy is responsible for all crime, bypassing structural analysis",
      "Just asking questions — frames media suppression as innocent curiosity",
      "False dilemma — implies either accept this explanation or stay uninformed",
      "Fake expert — invokes 'the data' without citing any data",
      "Emotion — uses public anxiety about crime to prime the audience",
    ],
    correctIndex: 0,
    explanation: "[PLACEHOLDER] Scapegoating at this level presents a monocausal explanation for a complex phenomenon ('every single city', 'one policy'). The rhetorical strength comes from the certainty tone ('the data is clear') without any actual data.",
  },
  {
    id: "rai-s12-1",
    type: "real-or-ai",
    xp: 80,
    difficulty: 3,
    introSection: "section-12",
    imageUrl: "https://picsum.photos/seed/rai-s12-1/800/450",
    correctAnswer: "real",
    explanation: "[PLACEHOLDER] This is a real photograph. At difficulty 3, real images are specifically selected because they contain features that AI-detection tools frequently misidentify. Over-classifying real images as AI is itself a form of harm (the liar's dividend).",
  },
  {
    id: "ltp-s12-1",
    type: "leave-the-page",
    xp: 90,
    difficulty: 4,
    introSection: "section-12",
    scenario: "[PLACEHOLDER] A post cites a study from 'the Oxford Internet Institute' showing algorithmic amplification causes a 300% increase in hate speech spread. You want to verify (a) whether the study exists and (b) whether the figure is accurately quoted. Which result settles both?",
    cards: [
      {
        title: "Oxford Internet Institute publications database",
        source: "oii.ox.ac.uk",
        snippet: "[PLACEHOLDER] The OII's publications database lists all peer-reviewed research by Institute members. Searching 'algorithmic amplification hate speech' returns two papers — neither reports a 300% figure. The closest finding reports a 47% increase in a specific platform context.",
      },
      {
        title: "Algorithms and hate speech — a 300% increase?",
        source: "techpolicypress.com",
        snippet: "[PLACEHOLDER] The 300% figure has circulated widely but cannot be traced to a peer-reviewed paper. It may originate from a conference presentation that was misquoted.",
      },
      {
        title: "Oxford Internet Institute — home page",
        source: "oii.ox.ac.uk",
        snippet: "[PLACEHOLDER] The Oxford Internet Institute is a multidisciplinary research and teaching department of the University of Oxford, dedicated to the social science of the internet.",
      },
      {
        title: "Study: Social media algorithms amplify harmful content",
        source: "theconversation.com",
        snippet: "[PLACEHOLDER] Research confirms that recommendation algorithms can amplify emotionally charged content, including hate speech. Magnitude estimates vary across studies.",
      },
    ],
    correctCardIndex: 0,
    explanation: "[PLACEHOLDER] The OII's own publications database is the definitive source for whether the organisation published a specific finding. It directly addresses both questions: the institute is real, but the 300% figure does not appear in any OII publication.",
  },
  {
    id: "ws-s12-1",
    type: "who-says",
    xp: 80,
    difficulty: 3,
    introSection: "section-12",
    excerpt: "[PLACEHOLDER] 'The evidence clearly shows that the economic costs of the lockdown policy far exceeded the health benefits,' wrote Prof. Anders Henriksen in the Wall Street Journal. Henriksen is a professor of economics at the University of Copenhagen and a fellow at the Cato Institute.",
    highlightedSource: "Prof. Anders Henriksen, University of Copenhagen / Cato Institute fellow",
    options: [
      "Both credentials are verifiable and independent — the claim is credible",
      "A Cato Institute fellowship signals a libertarian policy position — the source is real but not independent of the ideological conclusion; the analysis should be verified against non-ideologically-aligned sources",
      "The Wall Street Journal is a peer-reviewed journal — publication there validates the claim",
      "Economists are not qualified to evaluate health benefits and should not be cited",
    ],
    correctIndex: 1,
    explanation: "[PLACEHOLDER] The professor is a real, named, affiliated academic — this is not a fake expert. However, the Cato Institute has a consistent ideological position favouring minimal government intervention, making the source not independent on this specific question.",
  },
  {
    id: "uth-s12-1",
    type: "under-the-hood",
    xp: 80,
    difficulty: 2,
    introSection: "section-12",
    imageUrl: "https://picsum.photos/seed/uth-s12-1/800/450",
    items: [
      { label: "File type", value: "JPEG" },
      { label: "Camera model", value: "Samsung Galaxy S23" },
      { label: "Date taken", value: "2024-07-14 08:32:11" },
      { label: "GPS location", value: "48.8566° N, 2.3522° E (Paris, France)" },
      { label: "Editing software", value: "Lightroom Mobile 8.1" },
      { label: "Reverse image search", value: "Image appears on 47 sites; earliest: Reuters, 2024-07-14" },
    ],
    correctFlagIndex: 5,
    explanation: "[PLACEHOLDER] At first glance, all metadata appears clean. The red flag is the reverse image search: 47 sites with the earliest appearance on Reuters. If Reuters published it first, why is it being presented as exclusive original content? Widespread same-day distribution suggests repurposing with false context.",
  },
  {
    id: "wow-s12-1",
    type: "when-or-where",
    xp: 80,
    difficulty: 3,
    introSection: "section-12",
    subtype: "where",
    imageUrl: "https://picsum.photos/seed/wow-s12-1/800/450",
    postText: "[PLACEHOLDER] A major chemical plant explosion in Houston, Texas — footage just in.",
    options: [
      "Houston, Texas, USA (as claimed)",
      "Baton Rouge, Louisiana, USA",
      "Tianjin, China",
      "Beirut, Lebanon",
    ],
    correctIndex: 3,
    explanation: "[PLACEHOLDER] The explosion pattern and port infrastructure visible in the background are consistent with the 2020 Beirut port explosion. The grain silos at the edge of the frame are distinctive to the Beirut port facility. The event was real but the location is wrong.",
  },
  {
    id: "wl-s12-1",
    type: "weak-link",
    xp: 120,
    difficulty: 3,
    introSection: "section-12",
    post: {
      avatarUrl: "https://picsum.photos/seed/wl-s12-1/80/80",
      sourceName: "[PLACEHOLDER] The Transparency Project",
      handle: "@TransparencyProject",
      followerCount: "3.4M followers",
      postText: "[PLACEHOLDER] BREAKING: We have obtained internal CDC documents showing the agency knew in 2020 that masks were ineffective but mandated them anyway to maintain public compliance. Thread incoming.",
    },
    pillars: [
      {
        pillar: "who",
        label: "Who is making this claim?",
        evidence: "The Transparency Project — large account, presents as investigative journalism, no registered press affiliation, previously shared content later retracted by other outlets",
      },
      {
        pillar: "what",
        label: "What is claimed?",
        evidence: "Internal CDC documents prove masks were known to be ineffective and mandated deceptively — an allegation of deliberate public deception by a major health agency",
      },
      {
        pillar: "when",
        label: "When is the evidence available?",
        evidence: "'Thread incoming' delays the release; no document date given, no date on when documents were obtained",
      },
      {
        pillar: "where",
        label: "Where are the documents?",
        evidence: "Not yet released; no FOIA reference number, no document identifier, no named CDC official",
      },
      {
        pillar: "why",
        label: "Why post before showing evidence?",
        evidence: "Pre-evidence teaser guarantees maximum spread before fact-checkers can examine the documents",
      },
    ],
    correctPillar: "where",
    verdictOptions: [
      "The CDC has been caught in deceptions before — the claim is plausible enough to share now",
      "No documents have been released — this claim should not be shared until the evidence is public and reviewed by independent scientists",
      "The claim is false — the CDC's published research shows masks are effective",
    ],
    correctVerdictIndex: 1,
    pillarExplanation: "[PLACEHOLDER] The 'where' pillar collapses entirely — the documents are not yet public, making independent verification impossible. The 'thread incoming' structure is a technique for maximum spread before scrutiny.",
    explanation: "[PLACEHOLDER] An allegation that a major health agency deliberately deceived the public requires extraordinary evidence. Sharing such a claim before seeing and reviewing the actual documents amplifies potential harm regardless of whether it turns out to be true.",
  },

  {
    id: "ft-s12",
    type: "feed-test",
    xp: 500,
    difficulty: 1,
    introSection: "section-12",
    sectionId: "section-12",
    posts: [
      {
        id: "ft-s12-p1",
        source: "[PLACEHOLDER] Reuters",
        timeAgo: "1 hour ago",
        headline: "[PLACEHOLDER] UN Security Council calls emergency session over escalating conflict",
        imageUrl: "https://picsum.photos/seed/ft-s12-p1/400/300",
        body: "[PLACEHOLDER] The United Nations Security Council convened an emergency session after the conflict escalated, with China and Russia calling for an immediate ceasefire and the US and UK blocking the resolution. The session is a matter of public record, documented by UN press releases. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s12-p2",
        source: "[PLACEHOLDER] @UNSecurityCouncil_Watch",
        timeAgo: "20 minutes ago",
        headline: "[PLACEHOLDER] LEAKED: UN secretly agreed to deploy peacekeepers — announcement coming Friday",
        imageUrl: "https://picsum.photos/seed/ft-s12-p2/400/300",
        body: "[PLACEHOLDER] The account claims a secret UN agreement has been reached. UN decisions of this type are announced through formal press statements. No UN official or member state delegation has confirmed any such agreement. The account is unverified. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-s12-p3",
        source: "[PLACEHOLDER] Politico",
        timeAgo: "3 hours ago",
        headline: "[PLACEHOLDER] UN security session ends in 'total failure' with no agreement",
        imageUrl: "https://picsum.photos/seed/ft-s12-p3/400/300",
        body: "[PLACEHOLDER] An emergency session without a binding resolution is standard for a Security Council divided by veto-holding members. 'Total failure' describes one possible frame; 'normal process given veto dynamics' describes another. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },
];
