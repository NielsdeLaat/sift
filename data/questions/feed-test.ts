import type { FeedTestQuestion } from '../questions';

export const feedTestQuestions: FeedTestQuestion[] = [
  {
    id: "ft-1",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    sectionId: "section-1",
    posts: [
      {
        id: "ft-1-p1",
        source: "[PLACEHOLDER] Reuters",
        timeAgo: "2 hours ago",
        headline:
          "[PLACEHOLDER] WHO confirms no evidence of novel pathogen in reported outbreak cluster",
        imageUrl: "https://picsum.photos/seed/ft-1-p1/400/300",
        body: "[PLACEHOLDER] The World Health Organization said it had investigated reports of a cluster of unusual respiratory illness and found no evidence of a new pathogen. Officials said cases were consistent with seasonal illness patterns. Replace this with real content.",
        correctVerdict: "true",
        explanation:
          "[PLACEHOLDER] Replace with real explanation for why this is true.",
      },
      {
        id: "ft-1-p2",
        source: "[PLACEHOLDER] @TruthSeekerXX",
        timeAgo: "45 minutes ago",
        headline:
          "[PLACEHOLDER] LEAKED: Government suppressing real death count — insiders say true number is 50× official figure",
        imageUrl: "https://picsum.photos/seed/ft-1-p2/400/300",
        body: "[PLACEHOLDER] An anonymous source claiming to be a government epidemiologist told this account that the true death count is being concealed. The post includes a blurred screenshot of an alleged internal document. No government body has responded. No mainstream outlet has reported this. Replace with real content.",
        correctVerdict: "false",
        explanation:
          "[PLACEHOLDER] Replace with real explanation for why this is false.",
      },
      {
        id: "ft-1-p3",
        source: "[PLACEHOLDER] The National Post",
        timeAgo: "3 hours ago",
        headline:
          "[PLACEHOLDER] Emergency response teams deployed as flood damage proves worse than initially assessed",
        imageUrl: "https://picsum.photos/seed/ft-1-p3/400/300",
        body: "[PLACEHOLDER] Authorities dispatched additional response teams after surveys showed flood damage significantly exceeding initial estimates. Officials said the expanded response was precautionary and did not indicate a change in the overall situation assessment. The headline implies a more serious failure than the article supports. Replace with real content.",
        correctVerdict: "misleading",
        explanation:
          "[PLACEHOLDER] Replace with real explanation for why this is misleading.",
      },
    ],
  },
  {
    id: "ft-2",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    sectionId: "section-2",
    posts: [
      {
        id: "ft-2-p1",
        source: "[PLACEHOLDER] Associated Press",
        timeAgo: "1 hour ago",
        headline:
          "[PLACEHOLDER] Aid convoy reaches isolated village three days after landslide",
        imageUrl: "https://picsum.photos/seed/ft-2-p1/400/300",
        body: "[PLACEHOLDER] An aid convoy reached a village cut off by a landslide three days after the event. Officials said the delay was caused by road damage making vehicle access impossible until temporary bridges were installed. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-2-p2",
        source: "[PLACEHOLDER] @ConspiracyTruthNow",
        timeAgo: "20 minutes ago",
        headline:
          "[PLACEHOLDER] Scientists admit climate data was fabricated to justify carbon tax",
        imageUrl: "https://picsum.photos/seed/ft-2-p2/400/300",
        body: "[PLACEHOLDER] A post claims 'scientists' admitted in an internal meeting that climate data was manipulated. No source, no recording, no named scientist, no institution cited. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-2-p3",
        source: "[PLACEHOLDER] Daily Herald",
        timeAgo: "4 hours ago",
        headline:
          "[PLACEHOLDER] Hospital 'overwhelmed' by wave of patients after pollution incident",
        imageUrl: "https://picsum.photos/seed/ft-2-p3/400/300",
        body: "[PLACEHOLDER] A hospital reported treating an increased number of patients following a chemical plant incident. Administrators said they activated their surge plan but did not describe the situation as 'overwhelming'. The headline overstates their own description. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },
  {
    id: "ft-3",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    sectionId: "section-3",
    posts: [
      {
        id: "ft-3-p1",
        source: "[PLACEHOLDER] BBC News",
        timeAgo: "30 minutes ago",
        headline:
          "[PLACEHOLDER] Wildfire spreads to second district; 4,000 residents evacuated",
        imageUrl: "https://picsum.photos/seed/ft-3-p1/400/300",
        body: "[PLACEHOLDER] Fire services confirmed the wildfire had spread into a second district by mid-morning, prompting evacuation of approximately 4,000 residents. Three aerial units have been deployed. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-3-p2",
        source: "[PLACEHOLDER] @FreedomInfoNetwork",
        timeAgo: "15 minutes ago",
        headline:
          "[PLACEHOLDER] AI-generated wildfire images used to fake scale of disaster, experts warn",
        imageUrl: "https://picsum.photos/seed/ft-3-p2/400/300",
        body: "[PLACEHOLDER] The post claims most wildfire images in circulation are AI-generated and the fire is far smaller than reported. No expert is named, no methodology cited. A reverse image search traces the referenced images to verified news agency archives. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-3-p3",
        source: "[PLACEHOLDER] Metro Daily",
        timeAgo: "2 hours ago",
        headline:
          "[PLACEHOLDER] Air quality 'dangerous' across the region as smoke spreads",
        imageUrl: "https://picsum.photos/seed/ft-3-p3/400/300",
        body: "[PLACEHOLDER] Air quality monitors recorded readings in the 'unhealthy' range, not the 'dangerous' range used in the headline. Officials recommended vulnerable groups stay indoors. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },
  {
    id: "ft-4",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    sectionId: "section-4",
    posts: [
      {
        id: "ft-4-p1",
        source: "[PLACEHOLDER] AP",
        timeAgo: "1 hour ago",
        headline:
          "[PLACEHOLDER] Authorities confirm water supply in two districts restored after contamination scare",
        imageUrl: "https://picsum.photos/seed/ft-4-p1/400/300",
        body: "[PLACEHOLDER] Water utility officials confirmed the water supply had been restored following a precautionary shutdown. Tests showed no harmful levels of any contaminant. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-4-p2",
        source: "[PLACEHOLDER] @AlertNationUS",
        timeAgo: "2 hours ago",
        headline:
          "[PLACEHOLDER] Children sickened by contaminated water the government said was safe",
        imageUrl: "https://picsum.photos/seed/ft-4-p2/400/300",
        body: "[PLACEHOLDER] The post includes a photo of children in hospital gowns and claims they were poisoned by tap water. The hospital in the photo is in a different country and the image dates from 2019. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-4-p3",
        source: "[PLACEHOLDER] City Herald",
        timeAgo: "3 hours ago",
        headline:
          "[PLACEHOLDER] Water authority under 'severe criticism' for slow response to contamination alert",
        imageUrl: "https://picsum.photos/seed/ft-4-p3/400/300",
        body: "[PLACEHOLDER] The article quotes two local councillors criticising the response time. Officials say the response met all statutory requirements. 'Severe criticism' reflects one political faction's position, not a broad official finding. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },
  {
    id: "ft-5",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    sectionId: "section-5",
    posts: [
      {
        id: "ft-5-p1",
        source: "[PLACEHOLDER] Reuters",
        timeAgo: "1 hour ago",
        headline:
          "[PLACEHOLDER] UNICEF confirms food distribution reaching 85% of target beneficiaries in crisis zone",
        imageUrl: "https://picsum.photos/seed/ft-5-p1/400/300",
        body: "[PLACEHOLDER] UNICEF reported its emergency food distribution programme was reaching 85 percent of its target population, with the remaining 15 percent in areas where access is restricted due to security conditions. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-5-p2",
        source: "[PLACEHOLDER] @UNICEFEmergency_Alert",
        timeAgo: "30 minutes ago",
        headline:
          "[PLACEHOLDER] UNICEF: Total aid failure — no food has reached survivors",
        imageUrl: "https://picsum.photos/seed/ft-5-p2/400/300",
        body: "[PLACEHOLDER] An account named @UNICEFEmergency_Alert — not the official @UNICEF account — claims no aid has reached survivors. The official UNICEF account reports the opposite. This account was created three weeks ago. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-5-p3",
        source: "[PLACEHOLDER] The Morning Star",
        timeAgo: "2 hours ago",
        headline:
          "[PLACEHOLDER] Aid 'nowhere near enough' say relief workers on the ground",
        imageUrl: "https://picsum.photos/seed/ft-5-p3/400/300",
        body: "[PLACEHOLDER] Relief workers say the quantity of aid is insufficient for the scale of need. This is consistent with UNICEF's own 85% figure — meeting 85% of targets still leaves a significant gap. The headline implies total failure rather than partial shortfall. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },
  {
    id: "ft-6",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    sectionId: "section-6",
    posts: [
      {
        id: "ft-6-p1",
        source: "[PLACEHOLDER] The Lancet",
        timeAgo: "5 hours ago",
        headline:
          "[PLACEHOLDER] Peer-reviewed study finds no link between proximity to industrial sites and childhood asthma rates in this cohort",
        imageUrl: "https://picsum.photos/seed/ft-6-p1/400/300",
        body: "[PLACEHOLDER] A study published in The Lancet examining 12,000 children over five years found no statistically significant association between residential proximity to industrial sites and childhood asthma rates. Researchers cautioned results may not generalise beyond the specific region studied. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-6-p2",
        source: "[PLACEHOLDER] @IndustryExposed",
        timeAgo: "1 hour ago",
        headline:
          "[PLACEHOLDER] Insider: Lancet study was funded by the petrochemical lobby to suppress the truth",
        imageUrl: "https://picsum.photos/seed/ft-6-p2/400/300",
        body: "[PLACEHOLDER] The account claims the study's funding came from industry sources. The actual Lancet paper lists its funding as a public health research grant from a government body. The claim contradicts the paper's disclosed funding statement. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-6-p3",
        source: "[PLACEHOLDER] Science Today",
        timeAgo: "3 hours ago",
        headline:
          "[PLACEHOLDER] New study 'clears' industrial sites of causing asthma in children",
        imageUrl: "https://picsum.photos/seed/ft-6-p3/400/300",
        body: "[PLACEHOLDER] The headline uses 'clears' to imply definitive exoneration. The actual study found no link in one specific cohort over five years and explicitly cautioned against generalisation. A single study does not 'clear' anything; it adds to the evidence base. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },
  {
    id: "ft-7",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    sectionId: "section-7",
    posts: [
      {
        id: "ft-7-p1",
        source: "[PLACEHOLDER] Financial Times",
        timeAgo: "2 hours ago",
        headline:
          "[PLACEHOLDER] IMF revises growth forecast downward citing supply chain disruption",
        imageUrl: "https://picsum.photos/seed/ft-7-p1/400/300",
        body: "[PLACEHOLDER] The IMF revised its global growth forecast downward by 0.4 percentage points, citing ongoing supply chain disruptions. The revision was published in the IMF's quarterly World Economic Outlook update. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-7-p2",
        source: "[PLACEHOLDER] EconomicTruthBlog",
        timeAgo: "1 hour ago",
        headline:
          "[PLACEHOLDER] IMF economist privately admits recession is coming — public forecast is fake",
        imageUrl: "https://picsum.photos/seed/ft-7-p2/400/300",
        body: "[PLACEHOLDER] The blog claims an unnamed IMF economist 'privately admitted' the official forecast is misleading. No recording, no name, no corroborating source. The blog has no editorial contact. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-7-p3",
        source: "[PLACEHOLDER] Bloomberg",
        timeAgo: "3 hours ago",
        headline: "[PLACEHOLDER] Markets 'rattled' by IMF forecast revision",
        imageUrl: "https://picsum.photos/seed/ft-7-p3/400/300",
        body: "[PLACEHOLDER] Markets showed modest declines: the S&P 500 fell 0.4% and European indices dropped less than 0.3%. 'Rattled' implies significant volatility; the actual market movement was within the normal daily range. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },
  {
    id: "ft-8",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    sectionId: "section-8",
    posts: [
      {
        id: "ft-8-p1",
        source: "[PLACEHOLDER] Getty Images via AP",
        timeAgo: "4 hours ago",
        headline:
          "[PLACEHOLDER] Protests in capital city enter third day; demonstrators demand minister's resignation",
        imageUrl: "https://picsum.photos/seed/ft-8-p1/400/300",
        body: "[PLACEHOLDER] A Getty Images photographer documented protests entering their third day. The images show an estimated 3,000 to 5,000 demonstrators. The agency verified the images were taken yesterday at the named location. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-8-p2",
        source: "[PLACEHOLDER] @ProtestWatch_Live",
        timeAgo: "45 minutes ago",
        headline:
          "[PLACEHOLDER] Police fire live rounds at protesters — WARNING: graphic footage",
        imageUrl: "https://picsum.photos/seed/ft-8-p2/400/300",
        body: "[PLACEHOLDER] The footage appears to show a protest scenario but reverse image search identifies it as footage from a different country three years ago. Verified footage from the current event shows only crowd-control sprays. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-8-p3",
        source: "[PLACEHOLDER] National Broadcaster",
        timeAgo: "2 hours ago",
        headline:
          "[PLACEHOLDER] 'Hundreds of thousands' join anti-government march",
        imageUrl: "https://picsum.photos/seed/ft-8-p3/400/300",
        body: "[PLACEHOLDER] Organisers claimed 'hundreds of thousands'; police put the crowd at around 25,000; independent counting using aerial imagery estimated 40,000–60,000. The broadcaster used the organiser's figure without attribution or caveat. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },
  {
    id: "ft-9",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    sectionId: "section-9",
    posts: [
      {
        id: "ft-9-p1",
        source: "[PLACEHOLDER] AFP",
        timeAgo: "2 hours ago",
        headline:
          "[PLACEHOLDER] AFP verifies image shows current flood, not 2017 event as claimed online",
        imageUrl: "https://picsum.photos/seed/ft-9-p1/400/300",
        body: "[PLACEHOLDER] AFP's fact-check desk confirmed a widely shared photo showing flooded streets was taken this week by their correspondent, not recycled from a 2017 flood as a viral claim suggested. EXIF data and byline information were provided. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-9-p2",
        source: "[PLACEHOLDER] @DisasterWatchGlobal",
        timeAgo: "30 minutes ago",
        headline:
          "[PLACEHOLDER] LIVE: Before-and-after satellite images prove city completely destroyed",
        imageUrl: "https://picsum.photos/seed/ft-9-p2/400/300",
        body: "[PLACEHOLDER] The 'before' and 'after' satellite images in the post are from different locations. The 'before' shows a prosperous neighbourhood; the 'after' shows a different city's district. Satellite analysis by Planet Labs shows much less damage in the actual area. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-9-p3",
        source: "[PLACEHOLDER] The Times",
        timeAgo: "1 hour ago",
        headline:
          "[PLACEHOLDER] Aid response 'slow' as crisis enters second month",
        imageUrl: "https://picsum.photos/seed/ft-9-p3/400/300",
        body: "[PLACEHOLDER] The article quotes two NGO workers saying the response is slower than in comparable past crises, while official figures show aid delivery has reached 70% of target. The headline prioritises the criticism without contextualising the 70% figure. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },
  {
    id: "ft-10",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    sectionId: "section-10",
    posts: [
      {
        id: "ft-10-p1",
        source: "[PLACEHOLDER] Bellingcat",
        timeAgo: "3 hours ago",
        headline:
          "[PLACEHOLDER] Geolocation confirms airstrike images are from claimed location",
        imageUrl: "https://picsum.photos/seed/ft-10-p1/400/300",
        body: "[PLACEHOLDER] Investigators used shadow analysis, building geometry, and street-level imagery to confirm that footage circulating on social media does depict the location claimed. Methodology is detailed in the linked thread. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-10-p2",
        source: "[PLACEHOLDER] @RealWarZoneUpdates",
        timeAgo: "20 minutes ago",
        headline:
          "[PLACEHOLDER] BREAKING: Hospital bombed — 200 dead (GRAPHIC)",
        imageUrl: "https://picsum.photos/seed/ft-10-p2/400/300",
        body: "[PLACEHOLDER] Geolocation places the images in a different city from what is claimed. The building structure does not match satellite imagery of any hospital in the claimed location. No news organisation has reported the incident. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-10-p3",
        source: "[PLACEHOLDER] Sky News",
        timeAgo: "2 hours ago",
        headline:
          "[PLACEHOLDER] 'Desperate' scenes at refugee processing centre",
        imageUrl: "https://picsum.photos/seed/ft-10-p3/400/300",
        body: "[PLACEHOLDER] The report quotes two asylum seekers describing difficult conditions. It does not report the centre's official capacity, current occupancy, or compare conditions to legal requirements. 'Desperate' appears in quotes from one individual. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },
  {
    id: "ft-11",
    type: "feed-test",
    xp: 250,
    difficulty: 1,
    sectionId: "section-11",
    posts: [
      {
        id: "ft-11-p1",
        source: "[PLACEHOLDER] The Guardian",
        timeAgo: "1 hour ago",
        headline:
          "[PLACEHOLDER] Parliament votes to extend emergency health powers by six months",
        imageUrl: "https://picsum.photos/seed/ft-11-p1/400/300",
        body: "[PLACEHOLDER] Parliament voted 312 to 189 to extend emergency public health powers for a further six months. Opposition parties criticised the measure as disproportionate; the government said the powers were a precautionary reserve. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-11-p2",
        source: "[PLACEHOLDER] @PatriotAlertNetwork",
        timeAgo: "30 minutes ago",
        headline:
          "[PLACEHOLDER] MPs vote themselves power to imprison citizens without trial under health law",
        imageUrl: "https://picsum.photos/seed/ft-11-p2/400/300",
        body: "[PLACEHOLDER] The actual legislation extended emergency health powers including isolation enforcement orders. It did not remove habeas corpus or create imprisonment without trial. The existing judicial oversight framework was unchanged. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-11-p3",
        source: "[PLACEHOLDER] Telegraph",
        timeAgo: "2 hours ago",
        headline:
          "[PLACEHOLDER] Government 'seizes sweeping new powers' in health vote",
        imageUrl: "https://picsum.photos/seed/ft-11-p3/400/300",
        body: "[PLACEHOLDER] The extension of existing powers for six months is described as 'sweeping new powers' — but the powers themselves are unchanged from those already in force. The extension is an extension, not an expansion. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },
  {
    id: "ft-12",
    type: "feed-test",
    xp: 500,
    difficulty: 1,
    sectionId: "section-12",
    posts: [
      {
        id: "ft-12-p1",
        source: "[PLACEHOLDER] Reuters",
        timeAgo: "1 hour ago",
        headline:
          "[PLACEHOLDER] UN Security Council calls emergency session over escalating conflict",
        imageUrl: "https://picsum.photos/seed/ft-12-p1/400/300",
        body: "[PLACEHOLDER] The United Nations Security Council convened an emergency session after the conflict escalated, with China and Russia calling for an immediate ceasefire and the US and UK blocking the resolution. The session is a matter of public record, documented by UN press releases. Replace with real content.",
        correctVerdict: "true",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-12-p2",
        source: "[PLACEHOLDER] @UNSecurityCouncil_Watch",
        timeAgo: "20 minutes ago",
        headline:
          "[PLACEHOLDER] LEAKED: UN secretly agreed to deploy peacekeepers — announcement coming Friday",
        imageUrl: "https://picsum.photos/seed/ft-12-p2/400/300",
        body: "[PLACEHOLDER] The account claims a secret UN agreement has been reached. UN decisions of this type are announced through formal press statements. No UN official or member state delegation has confirmed any such agreement. The account is unverified. Replace with real content.",
        correctVerdict: "false",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
      {
        id: "ft-12-p3",
        source: "[PLACEHOLDER] Politico",
        timeAgo: "3 hours ago",
        headline:
          "[PLACEHOLDER] UN security session ends in 'total failure' with no agreement",
        imageUrl: "https://picsum.photos/seed/ft-12-p3/400/300",
        body: "[PLACEHOLDER] An emergency session without a binding resolution is standard for a Security Council divided by veto-holding members. 'Total failure' describes one possible frame; 'normal process given veto dynamics' describes another. Replace with real content.",
        correctVerdict: "misleading",
        explanation: "[PLACEHOLDER] Replace with real explanation.",
      },
    ],
  },
];
