import type { NameTrickQuestion } from '../questions';

export const nameTrickQuestions: NameTrickQuestion[] = [
  {
    id: "nt-d1-1",
    type: "name-trick",
    xp: 50,
    difficulty: 1,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d1-1/80/80",
      sourceName: "[PLACEHOLDER] Crisis Alert Network",
      handle: "@CrisisAlertNet",
      followerCount: "14.2K followers",
      text:
        "[PLACEHOLDER] BREAKING: Three government whistleblowers confirm the official flood death toll is being suppressed. The real number is ten times higher. SHARE before this gets deleted.",
    },
    options: [
      "Emotion — uses panic and urgency to bypass critical thinking",
      "False dilemma — presents only two extreme choices",
      "Fake expert — invokes unnamed 'whistleblowers' as authority",
      "Scapegoating — blames a specific group for the disaster",
      "Just asking questions — frames accusations as innocent curiosity",
    ],
    correctIndex: 0,
    explanation:
      "[PLACEHOLDER] 'BREAKING', 'SHARE before this gets deleted', and 'ten times higher' are emotional triggers designed to provoke fear and urgency, bypassing slower critical thinking. The emotion technique works by making you act before you verify.",
  },
  {
    id: "nt-d1-2",
    type: "name-trick",
    xp: 50,
    difficulty: 1,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d1-2/80/80",
      sourceName: "[PLACEHOLDER] PatriotVoice Today",
      handle: "@PatriotVoiceToday",
      followerCount: "89K followers",
      text:
        "[PLACEHOLDER] Either we close the border entirely and stop the disease spreading, or we let thousands of Americans die. There is no middle ground. The choice is yours.",
    },
    options: [
      "False dilemma — forces a choice between two extremes while ignoring alternatives",
      "Scapegoating — blames immigrants for spreading disease",
      "Emotion — uses fear of death to drive the argument",
      "Fake expert — cites unnamed health authorities",
      "Just asking questions — raises doubts without making a direct claim",
    ],
    correctIndex: 0,
    explanation:
      "[PLACEHOLDER] The post presents only two options (total closure or mass death) while ignoring the wide range of public-health responses actually available. This false dilemma makes a complex policy debate seem like a binary choice.",
  },
  {
    id: "nt-d1-3",
    type: "name-trick",
    xp: 50,
    difficulty: 1,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d1-3/80/80",
      sourceName: "[PLACEHOLDER] NaturalHealthNow",
      handle: "@NaturalHealthNow",
      followerCount: "230K followers",
      text:
        "[PLACEHOLDER] Top Harvard nutritionist Dr. Elena Voss confirms: the government-approved vaccine schedule is the leading cause of childhood autoimmune disease. The medical establishment doesn't want you to know.",
    },
    options: [
      "Fake expert — invokes a credential that cannot be verified",
      "Emotion — frightens parents about their children's safety",
      "Scapegoating — blames the government and medical establishment",
      "False dilemma — implies you must choose between vaccines and health",
      "Just asking questions — frames accusations as research questions",
    ],
    correctIndex: 0,
    explanation:
      "[PLACEHOLDER] 'Top Harvard nutritionist Dr. Elena Voss' cannot be verified and the claim contradicts the scientific consensus. When a source invokes impressive-sounding credentials without any verifiable link, it is using the fake expert technique.",
  },
  {
    id: "nt-d2-1",
    type: "name-trick",
    xp: 60,
    difficulty: 2,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d2-1/80/80",
      sourceName: "[PLACEHOLDER] The Liberty Standard",
      handle: "@LibertyStandard",
      followerCount: "340K followers",
      text:
        "[PLACEHOLDER] Isn't it strange that the government announces a 'health emergency' just two weeks before the election? Just something to think about. Not saying anything, just asking.",
    },
    options: [
      "Just asking questions — frames a conspiratorial implication as innocent curiosity",
      "Emotion — uses fear of government manipulation",
      "False dilemma — implies the only explanations are coincidence or conspiracy",
      "Scapegoating — blames the government for engineering the crisis",
      "Fake expert — implies insider knowledge without citing a source",
    ],
    correctIndex: 0,
    explanation:
      "[PLACEHOLDER] 'Just asking questions' is a technique for planting a conspiratorial implication while maintaining deniability. The phrase 'not saying anything, just asking' is a tell — it signals the speaker wants you to draw the conclusion they are avoiding stating directly.",
  },
  {
    id: "nt-d2-2",
    type: "name-trick",
    xp: 60,
    difficulty: 2,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d2-2/80/80",
      sourceName: "[PLACEHOLDER] RealAmericaFirst",
      handle: "@RealAmericaFirst",
      followerCount: "1.2M followers",
      text:
        "[PLACEHOLDER] Every single problem at the border — crime, drugs, disease, housing — traces back to one source. The American people know it. The politicians don't want to say it out loud.",
    },
    options: [
      "Scapegoating — assigns all complex social problems to a single group",
      "Emotion — uses frustration and anger to drive the argument",
      "False dilemma — implies accepting the blame assignment or ignoring the problems",
      "Just asking questions — implies the truth is being suppressed",
      "Fake expert — invokes 'the American people' as a unified authority",
    ],
    correctIndex: 0,
    explanation:
      "[PLACEHOLDER] Scapegoating assigns a complex set of unrelated problems to a single identifiable group. It short-circuits structural analysis by providing a single human target.",
  },
  {
    id: "nt-d2-3",
    type: "name-trick",
    xp: 60,
    difficulty: 2,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d2-3/80/80",
      sourceName: "[PLACEHOLDER] MedTruth Network",
      handle: "@MedTruthNet",
      followerCount: "620K followers",
      text:
        "[PLACEHOLDER] Former CDC Director Dr. Raymond Holt (ret.) says the mRNA platform has never been properly safety-tested over a multi-decade timeframe. 'We are conducting a mass experiment on the public,' he told our podcast last week.",
    },
    options: [
      "Fake expert — retired official cited outside their current expertise without a verifiable source",
      "Emotion — uses fear of being an unwitting test subject",
      "Just asking questions — frames a serious safety question as merely worth considering",
      "Scapegoating — blames regulatory agencies for deliberate negligence",
      "False dilemma — implies either reject the vaccine or accept being experimented on",
    ],
    correctIndex: 0,
    explanation:
      "[PLACEHOLDER] A 'former' official cited on a podcast without a transcript link or verifiable quote is a fake expert deployment. Retired status plus a dramatic quote gives a fringe claim institutional legitimacy it does not have.",
  },
  {
    id: "nt-d3-1",
    type: "name-trick",
    xp: 80,
    difficulty: 3,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d3-1/80/80",
      sourceName: "[PLACEHOLDER] Skeptical Patriot",
      handle: "@SkepticalPatriot",
      followerCount: "1.8M followers",
      text:
        "[PLACEHOLDER] I'm not saying the election was stolen. I'm just saying: why won't they allow a full forensic audit of every single ballot? What are they afraid of? Seems like a reasonable question. Normal people ask questions.",
    },
    options: [
      "Just asking questions — uses innocent curiosity to plant an unverified fraud allegation while maintaining deniability",
      "False dilemma — implies either a full audit or fraud is being covered up",
      "Scapegoating — blames election officials for the suspicion",
      "Fake expert — implies the speaker has insider knowledge about electoral procedures",
      "Emotion — uses fear of a stolen election to provoke outrage",
    ],
    correctIndex: 0,
    explanation:
      "[PLACEHOLDER] The post is a textbook JAQ-ing off: the speaker explicitly disclaims the allegation ('I'm not saying') while constructing it precisely. The phrase 'What are they afraid of?' plants the fraud implication while maintaining plausible deniability.",
  },
  {
    id: "nt-d3-2",
    type: "name-trick",
    xp: 80,
    difficulty: 3,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d3-2/80/80",
      sourceName: "[PLACEHOLDER] The Truth About Media",
      handle: "@TruthAboutMedia",
      followerCount: "950K followers",
      text:
        "[PLACEHOLDER] The media will never tell you that the crime spike in every major city traces back to a single policy decision. One policy. Every single city. The data is clear. Ask yourself why they won't say it.",
    },
    options: [
      "Scapegoating — implies a single group or policy is responsible for all crime, bypassing structural analysis",
      "Just asking questions — frames media suppression as innocent curiosity",
      "False dilemma — implies either accept this explanation or stay uninformed",
      "Fake expert — invokes 'the data' without citing any data",
      "Emotion — uses public anxiety about crime to prime the audience",
    ],
    correctIndex: 0,
    explanation:
      "[PLACEHOLDER] Scapegoating at this level presents a monocausal explanation for a complex phenomenon ('every single city', 'one policy'). The rhetorical strength comes from the certainty tone ('the data is clear') without any actual data.",
  },
];
