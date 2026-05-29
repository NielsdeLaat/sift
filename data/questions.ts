export type QuestionType =
  | 'collaboration'
  | 'manipulation-tactics'
  | 'evidence-checking'
  | 'ai-detection'
  | 'source-investigation'
  | 'image-verification';

export interface TellRegion {
  top: number;
  left: number;
  width: number;
  height: number;
  explanation: string;
}

export interface ArticleCard {
  imageUrl: string;
  sourceTag: string;
  headline: string;
  body: string;
}

export interface SocialPost {
  avatarUrl: string;
  sourceName: string;
  handle: string;
  followerCount: string;
  postText: string;
  postImageUrl?: string;
}

interface BaseQuestion {
  id: string;
  type: QuestionType;
  xp: number;
}

export interface CollaborationQuestion extends BaseQuestion {
  type: 'collaboration';
  article: ArticleCard;
  browseUrl: string;
  correctAnswer: 'yes' | 'no';
  explanation: string;
}

export interface ManipulationTacticsQuestion extends BaseQuestion {
  type: 'manipulation-tactics';
  article: ArticleCard;
  options: [string, string, string, string];
  correctIndex: 0 | 1 | 2 | 3;
  explanation: string;
}

export interface EvidenceCheckingQuestion extends BaseQuestion {
  type: 'evidence-checking';
  article: ArticleCard;
  /** 'evidence' = there is a passage that supports the headline; 'none' = no evidence exists */
  correctAnswer: 'evidence' | 'none';
  /** The ideal passage to highlight, shown in feedback when correctAnswer === 'evidence' */
  correctSnippet?: string;
  explanation: string;
}

export interface AiDetectionQuestion extends BaseQuestion {
  type: 'ai-detection';
  imageUrl: string;
  correctAnswer: 'yes' | 'no';
  tell: TellRegion;
}

export interface SourceInvestigationQuestion extends BaseQuestion {
  type: 'source-investigation';
  post: SocialPost;
  correctAnswer: 'yes' | 'no';
  explanation: string;
}

export interface ImageVerificationQuestion extends BaseQuestion {
  type: 'image-verification';
  headline: string;
  imageUrl: string;
  correctAnswer: 'yes' | 'no';
  tell: TellRegion;
}

export type Question =
  | CollaborationQuestion
  | ManipulationTacticsQuestion
  | EvidenceCheckingQuestion
  | AiDetectionQuestion
  | SourceInvestigationQuestion
  | ImageVerificationQuestion;

export const questions: Question[] = [
  // ── 1. Fox News — ICE / Delaney Hall ────────────────────────────────────────
  // Real, well-sourced event. Correct answer = NOT fake. Teaches: loaded labels.
  {
    id: 'ice-agitators-framing',
    type: 'manipulation-tactics',
    xp: 60,
    article: {
      imageUrl: '/images/Delaney_Hall_ICE.jpg',
      sourceTag: 'Fox News · US',
      headline: 'Anti-ICE agitators hurl wooden pallets and mattresses at federal agents in chaotic NJ detention centre clash',
      body: 'Federal agents at the Delaney Hall immigration detention centre in Newark, New Jersey, came under attack from a crowd that hurled wooden pallets and mattresses on Monday, according to acting ICE Director Todd Lyons and footage reviewed by Fox News.\n\nLyons described the scenes as "a direct assault on federal law enforcement" and warned that ongoing disruptions at the facility "may affect the processing of international flights." He said agents exercised restraint in the face of what he called a coordinated attack.\n\nDemonstrators who had gathered outside the facility shouted "Free them all!" and "Shame on you!" Officers in protective gear moved to disperse the crowd after the objects were thrown.\n\nElected officials representing the district have called the ICE operation an overreach. The ACLU of New Jersey stated that agents used "disproportionate force" against those present — a claim ICE officials denied. Lyons added that he expected additional federal resources to be deployed and that anyone who targeted agents would face prosecution.',
    },
    options: [
      'Labels demonstrators "agitators" in the headline while using "protesters" in its own body and links',
      'Fabricates the entire event — no such confrontation occurred',
      'Presents only the protesters\' side without any response from officials',
      'Falsely attributes quotes to federal officials who never said them',
    ],
    correctIndex: 0,
    explanation: 'This is a real event, documented with named officials and video. The article is not fake. The technique is the loaded label "agitators" in the headline — a word the article\'s own text and URL contradict by using "protesters." Officials receive more space and deliver the final word; demonstrators are reduced to shouted slogans. Real event, framed language.',
  },

  // ── 2. Fox News Opinion — Hewitt ────────────────────────────────────────────
  // Explicitly labelled opinion. Correct answer = NOT fake. Teaches: genre labels.
  {
    id: 'hewitt-senate-opinion',
    type: 'manipulation-tactics',
    xp: 50,
    article: {
      imageUrl: '/images/james-talarico-and-voters.jpg',
      sourceTag: 'Fox News · Opinion',
      headline: 'Republicans must stop fighting — we can\'t let Democrats seize the Senate',
      body: 'OPINION — Hugh Hewitt\n\nChurchill said the Conservative Party would always recover from its periodic bouts of madness. Disraeli would recognise today\'s Republican infighting as the same old albatross around the party\'s neck — familiar, avoidable, and entirely self-inflicted.\n\nAnd yet here we are. Hard-left Democrats are preparing to exploit every fracture, every weird eruption of ego and grievance, to reclaim a Senate they lost and never deserved to hold.\n\nA Democrat-controlled Senate means radical judges confirmed for life. It means treaty ratifications undone. It means every executive action strangled in committee. The American people did not vote for this.\n\nRepublicans have a choice. They can squabble over the next headline and hand the opposition a gift no opposition should receive. Or they can remember what they were sent to Washington to do.\n\nThe moment is here. The question is whether there are enough serious people left in the party to act — before Democrats slam the door shut for a generation.',
    },
    options: [
      'It is clearly labelled as opinion — it is openly persuasive, not a news report',
      'It disguises partisan opinion as objective, neutral news reporting',
      'It fabricates polling data and statistics to support its argument',
      'It falsely attributes hostile statements to named politicians',
    ],
    correctIndex: 0,
    explanation: 'Check the genre label first: the sourceTag reads "Opinion," the URL contains /opinion/, and the piece opens with a named columnist byline. Openly persuasive op-eds are not fake news — that\'s the genre. The loaded language ("hard-left," "weird," "albatross") and historical appeals (Churchill, Disraeli) are standard rhetorical tools of the form, not deception.',
  },

  // ── 3. Araghchi funeral photo — false context ────────────────────────────────
  // Real AFP photo, wrong caption. Correct answer = no (image does not match claim).
  {
    id: 'araghchi-photo-false-context',
    type: 'image-verification',
    xp: 70,
    headline: 'Iranian FM in tears as latest Israeli strikes claim more lives',
    imageUrl: '/images/araghchi-funeral.jpg',
    correctAnswer: 'no',
    tell: {
      top: 65,
      left: 3,
      width: 57,
      height: 30,
      explanation: 'The Iranian flag draped over the casket identifies this as General Hossein Salami\'s state funeral in June 2025 — not a more recent event. The photo is genuine (AFP) and unaltered; only the implied "when" is wrong. This is called false context, or a "cheap fake": a real photo recycled with a misleading caption 10 months after it was taken.',
    },
  },

  // ── 4. EU trans vote — Róisín Michaux post ───────────────────────────────────
  // Vote inversion distortion. Correct answer = no (post not trustworthy).
  {
    id: 'eu-trans-vote-distortion',
    type: 'source-investigation',
    xp: 70,
    post: {
      avatarUrl: 'https://picsum.photos/seed/roisin-avatar/80/80',
      sourceName: 'Róisín Michaux',
      handle: '@RoisinMichaux',
      followerCount: 'Verified account',
      postText: 'BREAKING: The EU Parliament has voted to recognise "trans women" as women for all purposes, explicitly calling for them to be granted access to women-only domestic violence shelters and refuges.\n\nAn EU delegation will present this radical recommendation at the UN Commission on the Status of Women in New York next month. It is not binding, but intended to be adopted/followed as an "international standard".\n\nFew speakers mentioned the "trans women" part during the debate. Parties could have asked for a vote on the individual paragraph, but MEPs were left with a choice between rejecting the entire resolution, or adopting it with no possibility of removing the trans paragraph.\n\nThe chamber was almost empty. Left-wing and centre-right parties concentrated on the Epstein files, "gender" stereotypes, the "gender pay gap", and ICE operations in the US. MEPs from the Patriots party and ECR spoke up in favour of protecting the category of woman in international fora. They were defeated.\n\n*Trans women are males who identify as women, a dissociative disorder linked to paraphilia/fetishism. This identity is mostly adopted by heterosexual men.\n\n340 YES\n141 NO\n68 ABSTAIN',
      postImageUrl: '/images/eu-parliament-vote.jpg',
    },
    correctAnswer: 'no',
    explanation: 'The key distortion is a vote inversion. Parliament voted DOWN an amendment stating "only biological women can get pregnant" — but this was recirculated as Parliament "voting that men can get pregnant." The resolution that actually passed was also non-binding, not a law "for all purposes." True-core, false-superstructure: a real vote, with its meaning inverted. The footnote definition of trans identity is contested framing, not established medical consensus.',
  },

  // ── 5. Pope crowd — AI-generated image ──────────────────────────────────────
  // Synthetic image paired with a real event. Correct answer = yes (AI-generated).
  {
    id: 'pope-crowd-ai-generated',
    type: 'ai-detection',
    xp: 70,
    imageUrl: '/images/pope-crowd-ai.jpg',
    correctAnswer: 'yes',
    tell: {
      top: 40,
      left: 33,
      width: 22,
      height: 24,
      explanation: 'The figure\'s raised hand shows malformed, fused fingers — a hallmark of AI image generation, which consistently struggles to render hands correctly. The crowd also dissolves into a repeating textureless mass in the mid-distance, and the avenue is implausibly symmetric. The image was paired with World Youth Day, Lisbon (August 2023) — a real event — to borrow credibility. Real caption, synthetic image: the inverse of a real photo in false context.',
    },
  },

  // ── 6. Breitbart — Delaney Hall senator pepper spray ────────────────────────
  // Real event, real injury. Correct answer = yes. Teaches: lateral reading.
  {
    id: 'breitbart-delaney-hall-claim',
    type: 'collaboration',
    xp: 60,
    article: {
      imageUrl: 'https://picsum.photos/seed/breitbart-delaney/800/450',
      sourceTag: 'Breitbart · US',
      headline: 'Protesters Clash with ICE Outside New Jersey Detention Center; Democrat Senator Claims Pepper-Spray Injury',
      body: 'Approximately 125 protesters gathered outside the Delaney Hall immigration detention centre in Newark, New Jersey on Monday, among them several Democratic elected officials. Law enforcement stated that protesters blocked the facility entrance and refused to disperse after verbal warnings.\n\nSenator Andy Kim reported breathing difficulties after what he described as exposure to pepper spray during the demonstration. The Department of Homeland Security stated that officers "used the minimum amount of force necessary to protect themselves, the public, and federal property," and clarified that "no individuals were directly struck by pepper ball projectiles."\n\nSenator Cory Booker, who was also present, alleged: "Immigrants at Delaney Hall are on a hunger strike because they are fighting for their human rights. The conditions there are deplorable." DHS disputed that characterisation: "There is NO hunger strike at Delaney Hall. There are NO subprime conditions or abuse at the facility."\n\nDHS said detainees receive three daily meals, clean water, clothing, bedding, and medical care. Officials noted that among those detained were individuals with prior convictions including homicide-related and child sexual offence charges.',
    },
    browseUrl: 'https://www.google.com/search?q=Andy+Kim+pepper+spray+Delaney+Hall+ICE+2026',
    correctAnswer: 'yes',
    explanation: 'Search results from wire services confirm the core facts: the confrontation happened, pepper spray was deployed, and Senator Kim reported breathing difficulties. DHS\'s clarification that no one was "directly struck" is consistent with Kim\'s account — inhaling airborne pepper spray causes the same symptoms. The headline\'s word "Claims" frames a documented injury as unverified. Real event, real effects, loaded word choice.',
  },

  // ── 7. Breitbart — DHS "debunks" leftist claims ──────────────────────────────
  // One-sided sourcing as "debunking." Correct answer = option 0. Teaches: asymmetric sourcing.
  {
    id: 'breitbart-dhs-debunks',
    type: 'manipulation-tactics',
    xp: 60,
    article: {
      imageUrl: '/images/leftist-claim-debunk.png',
      sourceTag: 'Breitbart · Politics',
      headline: 'DHS Debunks Leftist Claims of Hunger Strike and \'Inhumane Conditions\' for Illegal Aliens at NJ Detention Center',
      body: 'The Department of Homeland Security pushed back Monday against Democratic politicians who alleged that detainees at the Delaney Hall facility in Newark, New Jersey were on a hunger strike and being held in inhumane conditions.\n\n"There is NO hunger strike at Delaney Hall. There are NO subprime conditions or abuse at the facility," Acting Assistant Secretary Lauren Bis stated. "Our facilities meet or exceed required standards."\n\nDHS said detainees receive three meals per day, access to clean water, clothing, bedding, toiletries, phone access, and medical care, adding: "ICE has higher detention standards than most U.S. prisons that hold actual U.S. citizens who have been convicted of crimes."\n\nDemocratic senators who visited the facility described "deplorable" conditions and said detainees had told them they were refusing meals in protest. DHS dismissed those statements as a political effort, noting that among those detained were individuals with prior convictions including homicide-related and child sexual offence charges.',
    },
    options: [
      'Presents only DHS\'s own denial as "debunking," with no independent verification cited',
      'Fabricates the DHS statements attributed to Acting Assistant Secretary Lauren Bis',
      'Accurately reports a verified, independent investigation of facility conditions',
      'Gives equal space to Democratic senators and DHS without taking a side',
    ],
    correctIndex: 0,
    explanation: 'The headline promises a "debunking" but the article cites only DHS — the party whose conduct is being disputed. No independent inspector, journalist, or NGO verified conditions. The headline labels Democratic claims "Leftist" and puts "Inhumane Conditions" in scare-quotes before any independent check has occurred. One party\'s denial, however forceful, is not a debunking.',
  },

  // ── 8. The Global Statistics — impossible conviction rate ────────────────────
  // Statistic exceeds 100% — not credible evidence. Correct answer = none.
  {
    id: 'global-stats-immigrant-crime',
    type: 'evidence-checking',
    xp: 60,
    article: {
      imageUrl: '/images/Illegal-Immigrants-Crime-stats-in-US.jpg',
      sourceTag: 'The Global Statistics',
      headline: 'Illegal Immigrants Crime Statistics in the U.S. 2026',
      body: 'Southwest border apprehensions reached 237,538 in FY 2025 — the lowest since 1970. ICE detained more than 73,000 individuals as of January 2026. Of those in detention, the site reports that 73% had no criminal convictions and only 5% had violent crime convictions.\n\nAmong the figures cited is a conviction rate of 125.7% for certain offence categories — a number the site does not explain. Assault and domestic violence convictions totalled 469 cases, down 56.7% from FY2024. Drug offences fell 58.6%, property crimes 60.1%, and weapons charges 62.1%. No primary source links or methodology are provided for any of these figures.\n\nThe site carries a disclaimer: "Data is based on various sources and the publisher is not liable for financial losses or errors resulting from using the information provided." No named researchers, editorial team, or institutional affiliation are listed.',
    },
    correctAnswer: 'none',
    explanation: 'A "conviction rate of 125.7%" is mathematically impossible — a rate cannot exceed 100%. When a dataset contains a number that cannot be real, none of it can be trusted without independent verification. The site\'s own disclaimer ("not liable for errors") confirms this. Primary sources — DOJ, Cato Institute, and Stanford\'s 140-year study — consistently show immigrants are incarcerated at lower rates than native-born citizens.',
  },

  // ── 9. WifiTalents — anonymous statistics farm ───────────────────────────────
  // No institutional identity behind the "verification process." Correct answer = no.
  {
    id: 'wifitalents-immigrant-crime',
    type: 'source-investigation',
    xp: 50,
    post: {
      avatarUrl: 'https://picsum.photos/seed/wifitalents-avatar/80/80',
      sourceName: 'WiFiTalents',
      handle: 'wifitalents.com',
      followerCount: 'Statistics website',
      postText: '100+ Immigrant Crime Statistics: 2026 Verified Report\n\nOur four-stage verification process — primary source collection, editorial curation, independent verification, and human editorial cross-check — ensures the highest standard of data accuracy.\n\nKey findings:\n• Immigrants are 60% less likely to be incarcerated than US-born citizens\n• Texas homicide conviction rates for undocumented immigrants are 24% lower than native-born Americans\n• Between 1990–2013, the undocumented population tripled while violent crime fell 48%\n• Undocumented immigrants paid $11.6 billion in state/local taxes (2016)\n\nSources listed include: CBP, ICE, FBI, Stanford University, Cato Institute, Pew Research Center, and 33 additional references. Statistics are labeled Verified (~70%), Directional (15%), or Single Source (15%).',
      postImageUrl: '/images/immigrant-stats-100.jpg',
    },
    correctAnswer: 'no',
    explanation: 'The domain "wifitalents.com" is a generic SEO content farm that pivots topics based on search demand — originally focused on Wi-Fi products. There are no named researchers, institutional affiliation, or published methodology. The elaborate "four-stage verification process" is marketing copy. Citing real institutions like Stanford and Cato does not make an anonymous aggregator a primary source — verify statistics directly at their origin.',
  },

  // ── 10. Philadelphia Inquirer — AI-generated reading list ────────────────────
  // AI-generated text published as editorial content. Correct answer = yes.
  {
    id: 'inquirer-ai-reading-list',
    type: 'ai-detection',
    xp: 60,
    imageUrl: '/images/reading-list.jpg',
    correctAnswer: 'yes',
    tell: {
      top: 22,
      left: 5,
      width: 88,
      height: 58,
      explanation: 'The Philadelphia Inquirer published this summer reading list without adequate human editorial review. Every book title and author pairing in the list is fabricated — none of these books exist. The AI model generated titles that sound like plausible literary fiction and attributed them to real authors, but searching any title in a library catalogue or bookstore returns zero results. One search is enough to confirm the content was hallucinated.',
    },
  },
];
