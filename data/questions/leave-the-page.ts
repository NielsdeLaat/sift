import type { LeaveThePageQuestion } from '../questions';

export const leaveThePageQuestions: LeaveThePageQuestion[] = [
  {
    id: "ltp-d1-1",
    type: "leave-the-page",
    xp: 60,
    difficulty: 1,
    scenario:
      "[PLACEHOLDER] A viral post claims a new study proves 5G towers cause cancer. Which search result actually settles this?",
    cards: [
      {
        title: "5G technology and health: what the science says",
        source: "who.int",
        snippet:
          "[PLACEHOLDER] The World Health Organization states that, to date, no adverse health effect has been causally linked to exposure to wireless technology at levels found in the general environment.",
      },
      {
        title: "5G towers in your neighbourhood — are you safe?",
        source: "naturalnewstoday.net",
        snippet:
          "[PLACEHOLDER] Exclusive: internal documents reveal telecom companies have been hiding radiation data from regulators for years...",
      },
      {
        title: "What is 5G?",
        source: "wikipedia.org",
        snippet:
          "[PLACEHOLDER] 5G is the fifth generation technology standard for broadband cellular networks, which mobile phone companies began deploying worldwide in 2019.",
      },
      {
        title: "Scientists call for more 5G research",
        source: "theguardian.com",
        snippet:
          "[PLACEHOLDER] Some researchers argue that more long-term studies are needed, though existing evidence does not support a causal link between 5G exposure and cancer.",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "[PLACEHOLDER] The WHO (who.int) is the authoritative independent body on global health. Its statement directly addresses the claim with a definitive evidence-based verdict. The Guardian result is accurate but does not fully settle the viral claim.",
  },
  {
    id: "ltp-d1-2",
    type: "leave-the-page",
    xp: 60,
    difficulty: 1,
    scenario:
      "[PLACEHOLDER] A post claims the Red Cross confirmed earthquake survivors are being left without aid for over two weeks. Which result settles this?",
    cards: [
      {
        title: "Red Cross responds to earthquake: operations update",
        source: "redcross.org",
        snippet:
          "[PLACEHOLDER] Our teams reached the affected zone within 48 hours. Aid has been delivered to over 12,000 people. We have seen no report of a two-week delay in our official communications.",
      },
      {
        title: "Earthquake survivors abandoned — survivor testimonies",
        source: "crisiswatch247.co",
        snippet:
          "[PLACEHOLDER] Dozens of survivors told our reporters they had received no aid. One woman said she had waited 16 days. The Red Cross has not responded to our requests for comment.",
      },
      {
        title: "International disaster relief explained",
        source: "britannica.com",
        snippet:
          "[PLACEHOLDER] International disaster relief is coordinated through bodies such as the UN OCHA, the Red Cross, and national civil defence agencies...",
      },
      {
        title: "Earthquake: latest updates",
        source: "bbc.com",
        snippet:
          "[PLACEHOLDER] Aid organisations have begun distribution in the worst-affected regions. Access to some remote areas remains challenging.",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "[PLACEHOLDER] The Red Cross's own official website (redcross.org) directly contradicts the claim with specific operational data. An organisation's official response is the most reliable source for checking claims made about that organisation.",
  },
  {
    id: "ltp-d1-3",
    type: "leave-the-page",
    xp: 60,
    difficulty: 1,
    scenario:
      "[PLACEHOLDER] A post says a government policy forces doctors to report patients who ask about certain medications to law enforcement. Which result settles this?",
    cards: [
      {
        title: "New health regulations — government press release",
        source: "gov.uk",
        snippet:
          "[PLACEHOLDER] The updated healthcare regulations do not include any requirement for clinicians to report patient consultations to law enforcement. Doctor-patient confidentiality remains protected by law.",
      },
      {
        title: "Doctors are now government spies — leaked memo",
        source: "freedompress.io",
        snippet:
          "[PLACEHOLDER] A leaked internal document, seen exclusively by our publication, appears to suggest...",
      },
      {
        title: "Patient rights and medical confidentiality",
        source: "nhs.uk",
        snippet:
          "[PLACEHOLDER] Information about you is used to help run the NHS. Strict rules apply to how it may be shared.",
      },
      {
        title: "Privacy fears over new healthcare data rules",
        source: "independent.co.uk",
        snippet:
          "[PLACEHOLDER] Civil liberties groups have raised concerns about proposed changes to healthcare data sharing, though officials say patient confidentiality is not affected.",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "[PLACEHOLDER] The government's own official press release (gov.uk) is the primary source for what the policy actually says. It directly addresses and refutes the claim.",
  },
  {
    id: "ltp-d2-1",
    type: "leave-the-page",
    xp: 70,
    difficulty: 2,
    scenario:
      "[PLACEHOLDER] A news site reports that a leaked government memo proves water fluoridation causes cognitive decline. Which result is decisive?",
    cards: [
      {
        title: "Community water fluoridation: evidence review",
        source: "cochrane.org",
        snippet:
          "[PLACEHOLDER] Cochrane's systematic review found limited evidence of cognitive effects from fluoride at recommended public water supply levels. Studies showing effects used concentrations significantly above WHO guidance.",
      },
      {
        title: "Government hides fluoride danger — leaked memo (exclusive)",
        source: "healthfreedomwatch.net",
        snippet:
          "[PLACEHOLDER] We have obtained a memo that proves health regulators knew fluoride was harmful but suppressed the findings to protect the dental industry...",
      },
      {
        title: "What is water fluoridation?",
        source: "nidcr.nih.gov",
        snippet:
          "[PLACEHOLDER] Community water fluoridation is the adjustment of fluoride levels in drinking water to the level recommended for optimal dental health.",
      },
      {
        title: "Is fluoride in water safe?",
        source: "healthline.com",
        snippet:
          "[PLACEHOLDER] Most health organisations including the WHO and CDC consider water fluoridation at recommended levels to be safe and effective.",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "[PLACEHOLDER] The Cochrane Collaboration (cochrane.org) produces independent systematic reviews of health evidence. It addresses both the science and the nuance — effects only appear at concentrations above those used in public supplies.",
  },
  {
    id: "ltp-d2-2",
    type: "leave-the-page",
    xp: 70,
    difficulty: 2,
    scenario:
      "[PLACEHOLDER] A widely shared article claims a specific NGO running refugee camps has been credibly accused of systematic financial fraud. Which search result settles this?",
    cards: [
      {
        title: "NGO Watch: Relief Fund International — accountability report",
        source: "charitynavigator.org",
        snippet:
          "[PLACEHOLDER] Relief Fund International receives a 4-star rating. Its most recent financial audit showed no material findings. No credible fraud allegations appear in our database.",
      },
      {
        title: "NGOs and corruption — the dark side of charity",
        source: "exposengofraud.blogspot.com",
        snippet:
          "[PLACEHOLDER] Our investigation, based on sources inside the organisation, reveals millions being diverted. Officials refuse to comment.",
      },
      {
        title: "Relief Fund International official site",
        source: "relieffundinternational.org",
        snippet:
          "[PLACEHOLDER] We publish our annual accounts and audit reports transparently. Our 2024 annual report is available for download.",
      },
      {
        title: "How to check if a charity is legitimate",
        source: "bbc.co.uk",
        snippet:
          "[PLACEHOLDER] Charity regulators and watchdogs maintain databases of registered charities. Members of the public can check an organisation's registration and financial filings...",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "[PLACEHOLDER] An independent watchdog like Charity Navigator evaluates NGO finances against audited accounts. A four-star rating with a clean audit directly contradicts the fraud allegation.",
  },
  {
    id: "ltp-d2-3",
    type: "leave-the-page",
    xp: 70,
    difficulty: 2,
    scenario:
      "[PLACEHOLDER] A post claims a pharmaceutical company's new emergency drug was approved despite failing its clinical trial. Which result settles the approval decision?",
    cards: [
      {
        title: "Accelerated approval for NovaCure-7: FDA decision summary",
        source: "fda.gov",
        snippet:
          "[PLACEHOLDER] NovaCure-7 was granted accelerated approval based on a surrogate endpoint reasonably likely to predict clinical benefit. The approval was conditional; a confirmatory trial is required.",
      },
      {
        title: "FDA approves dangerous drug that failed trials — scandal",
        source: "medicalwhistleblower.org",
        snippet:
          "[PLACEHOLDER] Insiders say the FDA was pressured by lobbyists to approve a drug whose pivotal trial missed its primary endpoint...",
      },
      {
        title: "What is accelerated drug approval?",
        source: "cancer.gov",
        snippet:
          "[PLACEHOLDER] Accelerated approval allows drugs for serious conditions to be approved based on a surrogate endpoint while full clinical data continues to be collected.",
      },
      {
        title: "Drug approval controversies explained",
        source: "vox.com",
        snippet:
          "[PLACEHOLDER] The accelerated approval pathway has generated debate, with some researchers arguing it allows drugs to be used before sufficient efficacy data exist.",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "[PLACEHOLDER] The FDA's own decision document (fda.gov) is the authoritative source. It shows the approval was conditional — which is different from 'failing a trial' — making the viral claim misleading rather than false.",
  },
  {
    id: "ltp-d3-1",
    type: "leave-the-page",
    xp: 80,
    difficulty: 3,
    scenario:
      "[PLACEHOLDER] A tweet from @WHO_HealthAlert claims the WHO has issued an undisclosed emergency directive restricting international travel. Which result tells you whether this account is genuine?",
    cards: [
      {
        title: "World Health Organization — official social media accounts",
        source: "who.int",
        snippet:
          "[PLACEHOLDER] The WHO's official Twitter/X account is @WHO (verified, 11.8M followers). There is no official account named @WHO_HealthAlert. Any messages from accounts not matching our official list should be treated as unofficial.",
      },
      {
        title: "@WHO_HealthAlert on X — profile page",
        source: "x.com",
        snippet:
          "[PLACEHOLDER] WHO Health Alert | Independent monitoring of WHO communications | Not affiliated with the World Health Organization. Created: January 2024.",
      },
      {
        title: "WHO travel advisories — current list",
        source: "who.int",
        snippet:
          "[PLACEHOLDER] Current WHO travel advisories are listed below. No emergency travel restriction directive has been issued in the past 30 days.",
      },
      {
        title: "How to identify fake WHO accounts",
        source: "reuters.com",
        snippet:
          "[PLACEHOLDER] Reuters Fact Check has identified dozens of accounts impersonating WHO officials during past health emergencies...",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "[PLACEHOLDER] The WHO's official website maintains a list of its genuine social media accounts. Checking whether the handle matches the official list is the fastest way to identify an impersonation account.",
  },
  {
    id: "ltp-d3-2",
    type: "leave-the-page",
    xp: 80,
    difficulty: 3,
    scenario:
      "[PLACEHOLDER] An article was published by 'The European Health Tribune' claiming a vaccine caused 300 deaths in Germany. You want to check whether this publication is a legitimate news outlet. Which result settles it?",
    cards: [
      {
        title: "European Health Tribune — press registry lookup",
        source: "pressverein.de",
        snippet:
          "[PLACEHOLDER] No publication named 'The European Health Tribune' appears in the German Press Council's registry of registered publications. The domain was registered 4 months ago.",
      },
      {
        title: "Vaccine safety monitoring in Germany — PEI report",
        source: "pei.de",
        snippet:
          "[PLACEHOLDER] The Paul Ehrlich Institute's latest pharmacovigilance report covers all approved vaccines. No clustering of deaths causally linked to the vaccine has been identified.",
      },
      {
        title: "European Health Tribune — About us",
        source: "europeanhealthtribune.eu",
        snippet:
          "[PLACEHOLDER] We are an independent pan-European health journalism platform committed to covering what mainstream media ignores.",
      },
      {
        title: "Fake health news sites: how to spot them",
        source: "factcheck.org",
        snippet:
          "[PLACEHOLDER] Common signs include: no named editors, recently registered domain, no press council affiliation, sensationalist headlines...",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "[PLACEHOLDER] The press registry lookup is the definitive check for whether a publication is a registered, accountable news organisation. A 4-month-old domain with no press council registration is a strong red flag.",
  },
  {
    id: "ltp-d3-3",
    type: "leave-the-page",
    xp: 80,
    difficulty: 3,
    scenario:
      "[PLACEHOLDER] A website called 'GlobalFactsDaily.org' publishes a report claiming to debunk official casualty figures. You want to establish whether it is a credible fact-checking organisation. Which result is most relevant?",
    cards: [
      {
        title: "IFCN verified signatories — full list",
        source: "ifcncodeofprinciples.poynter.org",
        snippet:
          "[PLACEHOLDER] The International Fact-Checking Network maintains a list of verified signatories who have demonstrated compliance with its Code of Principles. GlobalFactsDaily.org does not appear on this list.",
      },
      {
        title: "GlobalFactsDaily.org — methodology page",
        source: "globalfactsdaily.org",
        snippet:
          "[PLACEHOLDER] We use a rigorous multi-step verification process involving open-source intelligence, satellite imagery, and a network of regional correspondents.",
      },
      {
        title: "What is the IFCN?",
        source: "poynter.org",
        snippet:
          "[PLACEHOLDER] The International Fact-Checking Network at Poynter Institute verifies fact-checking organisations against a code of principles covering transparency, methodology, and corrections policies.",
      },
      {
        title: "Conflict zone casualty counting — methodology explained",
        source: "icrc.org",
        snippet:
          "[PLACEHOLDER] The ICRC describes the methodology challenges in casualty recording in active conflict zones.",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "[PLACEHOLDER] The IFCN verified list is the international standard for identifying credible fact-checking organisations. Absence from this list means their claimed methodology has not been independently audited.",
  },
  {
    id: "ltp-d4-1",
    type: "leave-the-page",
    xp: 90,
    difficulty: 4,
    scenario:
      "[PLACEHOLDER] A post cites a study from 'the Oxford Internet Institute' showing algorithmic amplification causes a 300% increase in hate speech spread. You want to verify (a) whether the study exists and (b) whether the figure is accurately quoted. Which result settles both?",
    cards: [
      {
        title: "Oxford Internet Institute publications database",
        source: "oii.ox.ac.uk",
        snippet:
          "[PLACEHOLDER] The OII's publications database lists all peer-reviewed research by Institute members. Searching 'algorithmic amplification hate speech' returns two papers — neither reports a 300% figure. The closest finding reports a 47% increase in a specific platform context.",
      },
      {
        title: "Algorithms and hate speech — a 300% increase?",
        source: "techpolicypress.com",
        snippet:
          "[PLACEHOLDER] The 300% figure has circulated widely but cannot be traced to a peer-reviewed paper. It may originate from a conference presentation that was misquoted.",
      },
      {
        title: "Oxford Internet Institute — home page",
        source: "oii.ox.ac.uk",
        snippet:
          "[PLACEHOLDER] The Oxford Internet Institute is a multidisciplinary research and teaching department of the University of Oxford, dedicated to the social science of the internet.",
      },
      {
        title: "Study: Social media algorithms amplify harmful content",
        source: "theconversation.com",
        snippet:
          "[PLACEHOLDER] Research confirms that recommendation algorithms can amplify emotionally charged content, including hate speech. Magnitude estimates vary across studies.",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "[PLACEHOLDER] The OII's own publications database is the definitive source for whether the organisation published a specific finding. It directly addresses both questions: the institute is real, but the 300% figure does not appear in any OII publication.",
  },
];
