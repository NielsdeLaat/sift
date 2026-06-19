// TEMPORARY: These are machine-translated versions of the Dutch questions.
// Content is Dutch-context specific and has not been adapted for an English-speaking audience.

import type { LeaveThePageQuestion } from "../../questions";
import { social, article } from "../helpers";

export const leaveThePageQuestions: LeaveThePageQuestion[] = [
  // ─────────────────────────── DIFFICULTY 1 ───────────────────────────

  {
    id: "ltp-d1-1",
    type: "leave-the-page",
    xp: 60,
    difficulty: 1,
    question: "What would you search for to verify this information?",
    content: article("ltp-d1-1", {
      sourceName: "Nieuws Alert",
      domain: "nieuwsalert.nl",
      headline:
        "Security services pull out emergency plan for NATO summit The Hague",
      excerpt:
        "Sources within the security services confirm that an emergency protocol is ready for the upcoming NATO summit in The Hague. Details have not been made public for security reasons.",
      imageUrl: "/images/navo-top-the-hague.jpg",
    }),
    searchOptions: [
      "NATO summit The Hague emergency plan security services",
      "nieuwsalert.nl reliable",
      "is the NATO summit emergency plan really true",
      "NATO summit The Hague emergency plan shocking",
    ],
    correctSearchIndex: 0,
    searchExplanation:
      "Search the claim itself with neutral words and check if reliable sources report the same. Words like 'shocking' mainly turn up more viral news.",
    cards: [
      {
        title: "NATO summit in The Hague: these are the security measures",
        source: "nos.nl",
        snippet:
          "Extensive security measures are in place around the NATO summit: closed roads, extra military police and a no-fly zone. The NCTV calls the threat level 'manageable'.",
      },
      {
        title: "Emergency plan ready for NATO summit in The Hague",
        source: "nieuwsalert.nl",
        snippet:
          "News Alert reports first that the security services have a secret emergency plan ready. Details have not been disclosed.",
      },
      {
        title: "The Hague prepares for NATO summit",
        source: "nu.nl",
        snippet:
          "View the latest news and background on the upcoming NATO summit in The Hague, the security and traffic disruption for residents.",
      },
      {
        title: '"Finally the truth!" – NATO summit emergency plan',
        source: "frontnieuws-blog.nl",
        snippet:
          "Frontnieuws shares the News Alert story about the secret emergency plan. 'The mainstream media are silent about this,' the blog says.",
      },
    ],
    correctCardIndex: [0, 2],
    explanation:
      "NOS and Nu.nl are the only independent, reliable sources: they confirm the regular security around the summit, but nowhere a 'secret emergency plan'. The site itself, an excited blog or the number of shares does not prove the claim is true.",
  },

  {
    id: "ltp-d1-2",
    type: "leave-the-page",
    xp: 60,
    difficulty: 1,
    question: "Can you trust this account as a news source?",
    content: social("ltp-d1-2", {
      sourceName: "NewsFlashNL",
      handle: "@NewsFlashNL",
      followerCount: "28K followers",
      text: "🚨 Eritrean asylum seekers armed with knives on the street in Almelo — police do nothing. Share this before it gets deleted!! 📹 #Almelo #safety",
    }),
    searchOptions: [
      "asylum seekers knives Almelo news",
      "@NewsFlashNL who is behind it",
      "police Almelo stabbing incident",
      "Almelo news today",
    ],
    correctSearchIndex: 1,
    searchExplanation:
      "To assess whether you can trust this account, you search for the account itself and see who is behind it. Looking up the claim tells you something about this specific post, but not whether the account is generally reliable.",
    cards: [
      {
        title: "NewsFlashNL (@NewsFlashNL) / X",
        source: "x.com",
        snippet:
          "The news they don't want you to see. 🚨 Uncensored. 28K followers · 23 posts.",
      },
      {
        title: "East Netherlands Police: no report of incident in Almelo",
        source: "politie.nl",
        snippet:
          "The police have not received any report of an armed incident in Almelo as is being circulated on social media.",
      },
      {
        title: "@NewsFlashNL — account statistics and growth",
        source: "socialblade.com",
        snippet:
          "Created 9 days ago. 28,000 followers (+27,900 in 48 hours). 23 posts, no activity before this week. Not verified.",
      },
      {
        title: "Trending in the Netherlands: video 'asylum seekers Almelo'",
        source: "trendingnl.nl",
        snippet:
          "The video is in the top 5 most shared posts on X today, with over 19,000 shares.",
      },
    ],
    correctCardIndex: 2,
    explanation:
      "The account statistics are the only result that shows who this is: 9 days old with nearly 28,000 followers in two days, a classic sign of a fake or inflated account. The number of followers, trending figures or even the police report say nothing about who is behind the account.",
  },

  // ─────────────────────────── DIFFICULTY 2 ───────────────────────────

  {
    id: "ltp-d2-1",
    type: "leave-the-page",
    xp: 85,
    difficulty: 2,
    content: social("ltp-d2-1", {
      sourceName: "Patriot NL",
      handle: "@patriotnl",
      followerCount: "54K followers",
      text: '🇳🇱 Elon Musk: "Mark Rutte is a dictator. The Dutch farmers are right." Finally someone who tells the truth — sharing ban imposed! 🔥 Share this before it disappears!!',
    }),
    searchOptions: [
      "Elon Musk Mark Rutte farmers statement",
      "Elon Musk controversial statements Twitter",
      "farmers protest Netherlands news",
      "Musk video viral farmers factcheck",
    ],
    correctSearchIndex: 0,
    searchExplanation:
      "Search as specifically as possible: the name of the person plus the alleged statement. 'Elon Musk Mark Rutte farmers statement' takes you directly to fact-checks and news articles about this specific claim.",
    cards: [
      {
        title:
          "Elon Musk said nothing about farmers and Mark Rutte — Nieuwscheckers",
        source: "nieuwscheckers.nl",
        snippet:
          "The widely shared video has been manipulated: the subtitles are fake and the audio has been edited. The original clip is from a TED interview about a different topic. Musk has not made statements about the Dutch farmer protests.",
      },
      {
        title: '"Finally someone who says it" — reactions to the Musk video',
        source: "dumpert.nl",
        snippet:
          'Thousands of reactions to the Musk video that is going viral. "Finally someone who speaks out," many users write in the comments.',
      },
      {
        title: "Elon Musk — Wikipedia",
        source: "en.wikipedia.org",
        snippet:
          "Elon Musk is an American-South African entrepreneur, known for Tesla, SpaceX and X. He is known for controversial statements on social media.",
      },
      {
        title: "Video 2.1 million views — 87,000 likes in 18 hours",
        source: "x.com",
        snippet:
          "The video has now 2.1 million views, 87,000 likes and 34,000 retweets on X. It is on the global trending list.",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "Only Nieuwscheckers verifies the video itself and shows it has been manipulated. The Wikipedia page is about Musk in general, and likes, views or enthusiastic reactions only prove that something spreads quickly — not that it is real.",
  },

  {
    id: "ltp-d2-2",
    type: "leave-the-page",
    xp: 85,
    difficulty: 2,
    question: "Is this account telling the truth?",
    content: social("ltp-d2-2", {
      sourceName: "Dutch Citizens for Safety",
      handle: "@dutchcitizenssafety",
      followerCount: "51K likes",
      text: "SHOCKING: government hides crime statistics from neighbourhood around NATO summit. This cannot stay quiet. Share this with everyone you know. 🚨",
    }),
    searchOptions: [
      "crime statistics Netherlands neighbourhood request",
      "Dutch Citizens for Safety Facebook",
      "government hides crime NATO summit",
      "crime The Hague shocking revealed",
    ],
    correctSearchIndex: 0,
    searchExplanation:
      "The claim is that statistics are being hidden, so you first check whether those statistics are publicly available somewhere. Searching with the words from the post itself ('hides', 'shocking') mainly produces more posts repeating the same claim.",
    cards: [
      {
        title: "Crime statistics by neighbourhood and district",
        source: "cbs.nl",
        snippet:
          "Statistics Netherlands (CBS) publishes registered crime per municipality, district and neighbourhood. Figures are freely available via StatLine and are updated every quarter.",
      },
      {
        title: "What does the government do about crime?",
        source: "rijksoverheid.nl",
        snippet:
          "Information about national security policy, the approach to organised crime and the role of police and justice in combating crime.",
      },
      {
        title: '"Dutch Citizens for Safety" · Page · Facebook',
        source: "facebook.com",
        snippet:
          "Independent platform for Dutch people who want to know the truth. No censorship, no agenda. 51K likes.",
      },
      {
        title: "Post shared 3,800 times in 4 hours",
        source: "crowdtangle.com",
        snippet:
          "The post reached 3,800 shares in four hours, mainly among 45–65 year olds in North Brabant and Limburg.",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "Statistics Netherlands (CBS) publicly publishes crime statistics right down to neighbourhood level, so the claim that the government 'hides' them is incorrect. The page that calls itself 'independent' and the number of shares say nothing about whether the claim is true.",
  },

  // ─────────────────────────── DIFFICULTY 3 ───────────────────────────

  {
    id: "ltp-d3-1",
    type: "leave-the-page",
    xp: 110,
    difficulty: 3,
    question: "Can you trust this institute as a source?",
    content: article("ltp-d3-1", {
      sourceName: "IDIV",
      domain: "idiv-institute.nl",
      headline:
        "IDIV report: drinking water in multiple Dutch cities vulnerable to sabotage",
      excerpt:
        "A new report from the Institute for Drinking Water and Infrastructure Safety (IDIV) warns that vulnerabilities in the drinking water system have not yet been resolved. The findings have been shared with Parliament.",
      imageUrl: "/images/tap-water.jpg",
    }),
    searchOptions: [
      "drinking water sabotage Netherlands safety",
      "IDIV institute who is behind it",
      "RIVM drinking water report Netherlands",
      "drinking water sabotage shocking report",
    ],
    correctSearchIndex: 1,
    searchExplanation:
      "IDIV is the source here, so you search for the name of the institute and see what others write about it. Looking up the topic tells you whether drinking water safety is an issue, but not whether this specific institute can be trusted.",
    cards: [
      {
        title:
          "About IDIV — Institute for Drinking Water and Infrastructure Safety",
        source: "idiv-institute.nl",
        snippet:
          "Independent knowledge centre that advises governments and companies on the safety of vital infrastructure. Our team consists of experienced experts from the sector.",
      },
      {
        title: "IDIV report widely shared on social media",
        source: "buzzsumo.com",
        snippet:
          "The report was shared by around 60 pages in 48 hours and reached an estimated 2.3 million people in the Netherlands.",
      },
      {
        title:
          "Institute for Drinking Water and Infrastructure Safety | LinkedIn",
        source: "linkedin.com",
        snippet:
          "1 employee · Founded August 2024 · No listed collaborations with universities or governments · No publications.",
      },
      {
        title: "Drinking water quality in the Netherlands",
        source: "rivm.nl",
        snippet:
          "The RIVM monitors the quality of Dutch drinking water together with water companies. Current figures are in the annual drinking water report.",
      },
    ],
    correctCardIndex: 2,
    explanation:
      "Only the LinkedIn result shows who IDIV is: one employee, founded in 2024, no collaborations and no publications. The RIVM is reliable about drinking water itself but says nothing about this institute, and the 'about us' page only evaluates itself.",
  },

  {
    id: "ltp-d3-2",
    type: "leave-the-page",
    xp: 110,
    difficulty: 3,
    question: "Has an evacuation really been declared?",
    content: article("ltp-d3-2", {
      sourceName: "Safety Region News",
      domain: "safetyregion-news.nl",
      headline:
        "EVACUATION ROTTERDAM-MAASHAVEN: leave the neighbourhood immediately — gas leak",
      excerpt:
        "The safety region has issued an evacuation order for streets around the Maashaven following a serious gas leak. Residents are asked to leave the neighbourhood immediately and not call emergency services unless necessary.",
      imageUrl: "/images/rotterdam-skyline.jpg",
    }),
    searchOptions: [
      "NL-Alert evacuation Rotterdam Maashaven",
      "safetyregion-news.nl reliable",
      "evacuation Maashaven leave neighbourhood now",
      "gas leak Rotterdam sharing viral",
    ],
    correctSearchIndex: 0,
    searchExplanation:
      "A real evacuation is announced through official channels such as NL-Alert, so that's where you check whether the order exists. Searching with the panic words from the post itself mainly produces more copies of the same claim.",
    cards: [
      {
        title: "No NL-Alert or evacuation for Maashaven",
        source: "nl-alert.nl",
        snippet:
          "No NL-Alert has been sent for the Maashaven or surrounding area. In the event of a real evacuation, you will receive an NL-Alert on your phone; only follow official instructions.",
      },
      {
        title: "Safety Region Rotterdam-Rijnmond — current incidents",
        source: "vr-rr.nl",
        snippet:
          "Overview of current incidents in the region. At this time there are no reports of a gas leak or evacuation around the Maashaven.",
      },
      {
        title: "About us — Safety Region News",
        source: "safetyregion-news.nl",
        snippet:
          "We distribute rapid and reliable announcements from Dutch safety regions to inform citizens during incidents.",
      },
      {
        title: '"Evacuation message shared 1,200 times: "Leave the neighbourhood now"',
        source: "x.com",
        snippet:
          "The post was shared over 1,200 times in an hour. Neighbourhood residents are forwarding it to their contacts.",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "A real evacuation goes through NL-Alert, and it shows that no notification has been sent for the Maashaven — so the order does not exist. The site that calls itself 'reliable' and the number of shares say nothing about whether there is really anything going on.",
  },
];
