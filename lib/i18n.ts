export type Lang = "nl" | "en";

const nl = {
  nav: {
    home: "Home",
    dailyPuzzle: "Dagelijkse Puzzel",
    leaderboard: "Ranglijst",
    profile: "Profiel",
  },
  profile: {
    title: "Profiel",
    editProfile: "Profiel bewerken",
    settings: "Instellingen",
    addFriends: "Vrienden toevoegen",
    achievements: "Prestaties",
    stats: {
      streak: "Streak",
      friends: "Vrienden",
      league: "Rang",
    },
    userTitle: "Factcheck-beginner",
    achievementLabels: {
      "first-fact": "Eerste Feit",
      reader: "Lezer",
      sleuth: "Speurder",
      expert: "Expert",
      "AI master": "AI-meester",
    } as Record<string, string>,
  },
  lesson: {
    complete: "Les Voltooid!",
    sectionTestComplete: "Sectietoets Voltooid!",
    greatWork: "Goed werk bij deze les.",
    continue: "Doorgaan",
    notQuite: "Niet helemaal",
    needPercentage: (pct: number) =>
      `Je hebt ${pct}% nodig om te slagen. Probeer opnieuw!`,
    tryAgain: "Opnieuw proberen",
  },
  feedback: {
    correct: "Correct!",
    incorrect: "Onjuist",
    continue: "Doorgaan",
  },
  header: {
    exitLesson: "Les verlaten",
  },
  questions: {
    weakLink: {
      question: "Wat klopt er niet?",
      whyQuestion: "Waarom klopt dit niet?",
      placeholder: "Leg uit in eigen woorden…",
      submit: "Verstuur",
      pillars: {
        who: "De bron",
        what: "De inhoud",
        when: "Het tijdstip",
        where: "De locatie",
        why: "De reden",
      },
    },
    realOrAi: {
      question: "Is deze afbeelding echt of AI-gegenereerd?",
      real: "Echt",
      ai: "AI",
    },
    nameTrick: {
      question: "Welke truc wordt hier gebruikt?",
      confirm: "Bevestig",
    },
    whoSays: {
      question: "Controleer of dit bericht een bron heeft",
      cue: "Druk op een de alinea met de bron of druk hieronder als deze er niet is",
      noSource: "Het bericht heeft geen bron",
      confirm: "Bevestig",
    },
    underTheHood: {
      question: "Tik op wat er niet klopt",
      button: "Dit klopt niet",
    },
    leaveThePage: {
      searchQuestion: "Wat zou jij zoeken om dit te controleren?",
      searchConfirm: "Dit zoek ik",
      question: "Welk resultaat bewijst dit?",
      button: "Deze bewijst het",
    },
    whenOrWhere: {
      whenQuestion: "Wanneer is dit gemaakt?",
      whereQuestion: "Waar was dit?",
      confirm: "Bevestig",
    },
    feedTest: {
      heading: "Lees elk bericht en beoordeel het",
      verdicts: {
        true: "Waar",
        false: "Onwaar",
        misleading: "Klopt niet helemaal",
        misleadingShort: "Half-waar",
      },
      results: "Resultaten",
      perfectScore: "Perfect — je hebt ze allemaal goed!",
      countIncorrect: (n: number) => `${n} onjuist`,
      youLabel: "Jij:",
      correctLabel: "→ Correct:",
      backToFeed: "Terug naar feed",
      seeResults: "Bekijk resultaten",
      continue: "Doorgaan",
    },
    tellReveal: {
      selectTell: "Kies de aanwijzing",
      hereTell: "Dit is de aanwijzing",
      tapInstruction: "Tik op het deel van de afbeelding dat er vreemd uitziet",
      confirm: "Bevestig",
    },
  },
  sectionInfo: {
    thisSection: "Deze sectie",
    allSections: "Alle secties",
    done: "Voltooid",
    current: "Huidig",
    locked: "Vergrendeld",
    xpAvailable: (xp: number) => `${xp} XP beschikbaar in deze sectie`,
    xpShort: (xp: number) => `${xp} XP`,
  },
  ui: {
    demoOptions: "Demo-opties",
    skipToSection: "Ga naar sectie",
    skipToSectionDesc: "Begin bij de eerste les van een sectie",
    goToSectionTest: "Sectietoets",
    goToSectionTestDesc: "Ga direct naar de toets van een sectie",
    resetDemo: "Demo resetten",
    resetDemoDesc: "Wis alle voortgang en begin opnieuw",
    back: "Terug",
    expand: "Uitvouwen",
    collapse: "Inklappen",
  },
  pages: {
    dailyPuzzle: "Dagelijkse Puzzel — binnenkort beschikbaar",
    leaderboard: "Ranglijst — binnenkort beschikbaar",
    testDone: "Klaar!",
    testRunComplete: "Testrun voltooid.",
  },
  settings: {
    title: "Instellingen",
    language: "Taal",
    dutch: "Nederlands",
    english: "English",
  },
};

const en: typeof nl = {
  nav: {
    home: "Home",
    dailyPuzzle: "Daily Puzzle",
    leaderboard: "Leaderboard",
    profile: "Profile",
  },
  profile: {
    title: "Profile",
    editProfile: "Edit profile",
    settings: "Settings",
    addFriends: "Add Friends",
    achievements: "Achievements",
    stats: {
      streak: "Streak",
      friends: "Friends",
      league: "League",
    },
    userTitle: "Fact-Checking Novice",
    achievementLabels: {
      "first-fact": "First Fact",
      reader: "Reader",
      sleuth: "Sleuth",
      expert: "Expert",
      "AI master": "AI Master",
    } as Record<string, string>,
  },
  lesson: {
    complete: "Lesson Complete!",
    sectionTestComplete: "Section Test Complete!",
    greatWork: "Great work on this lesson.",
    continue: "Continue",
    notQuite: "Not quite",
    needPercentage: (pct: number) =>
      `You need ${pct}% to pass this test. Try again!`,
    tryAgain: "Try Again",
  },
  feedback: {
    correct: "Correct!",
    incorrect: "Incorrect",
    continue: "Continue",
  },
  header: {
    exitLesson: "Exit lesson",
  },
  questions: {
    weakLink: {
      question: "What doesn't add up?",
      whyQuestion: "Why doesn't this add up?",
      placeholder: "Explain in your own words…",
      submit: "Submit",
      pillars: {
        who: "Who?",
        what: "What?",
        when: "When?",
        where: "Where?",
        why: "Why?",
      },
    },
    realOrAi: {
      question: "Is this image real or AI-generated?",
      real: "Real",
      ai: "AI",
    },
    nameTrick: {
      question: "What trick is used here?",
      confirm: "Confirm",
    },
    whoSays: {
      question: "Where is the source?",
      cue: "Open the article to find the source",
      noSource: "No source here",
      confirm: "Confirm",
    },
    underTheHood: {
      question: "Tap what doesn't look right",
      button: "This doesn't look right",
    },
    leaveThePage: {
      searchQuestion: "What would you search to check this?",
      searchConfirm: "That's my search",
      question: "Which result proves this?",
      button: "This one proves it",
    },
    whenOrWhere: {
      whenQuestion: "When was this taken?",
      whereQuestion: "Where was this?",
      confirm: "Confirm",
    },
    feedTest: {
      heading: "Read each post and judge it",
      verdicts: {
        true: "True",
        false: "False",
        misleading: "Not quite true",
        misleadingShort: "Half-true",
      },
      results: "Results",
      perfectScore: "Perfect — you caught them all!",
      countIncorrect: (n: number) => `${n} incorrect`,
      youLabel: "You:",
      correctLabel: "→ Correct:",
      backToFeed: "Back to feed",
      seeResults: "See Results",
      continue: "Continue",
    },
    tellReveal: {
      selectTell: "Find the clue",
      hereTell: "Here's the clue",
      tapInstruction: "Tap the part of the image that looks off",
      confirm: "Confirm",
    },
  },
  sectionInfo: {
    thisSection: "This Section",
    allSections: "All Sections",
    done: "Done",
    current: "Current",
    locked: "Locked",
    xpAvailable: (xp: number) => `${xp} XP available in this section`,
    xpShort: (xp: number) => `${xp} XP`,
  },
  ui: {
    demoOptions: "Demo options",
    skipToSection: "Skip to section",
    skipToSectionDesc: "Jump to the first lesson of a section",
    goToSectionTest: "Section test",
    goToSectionTestDesc: "Jump directly to a section's test",
    resetDemo: "Reset demo",
    resetDemoDesc: "Wipe all progress and start over",
    back: "Back",
    expand: "Expand",
    collapse: "Collapse",
  },
  pages: {
    dailyPuzzle: "Daily Puzzle — coming soon",
    leaderboard: "Leaderboard — coming soon",
    testDone: "Done!",
    testRunComplete: "Test run complete.",
  },
  settings: {
    title: "Settings",
    language: "Language",
    dutch: "Nederlands",
    english: "English",
  },
};

export const translations = { nl, en };

export type Translations = typeof nl;

/** Dutch subtitle/description overrides for each section (English lives in roadmap.ts). */
export const sectionTranslations: Record<
  string,
  {
    nl: { title: string; subtitle: string; description: string; theory: string };
  }
> = {
  "section-1": {
    nl: {
      title: "Hoofdstuk 1, Sectie 1",
      subtitle: "Stop en denk na",
      description: "Je eerste kennismaking met factchecken — geen jargon, alleen de kerngewoonte van pauzeren voordat je reageert.",
      theory:
        "Factchecken begint met één gewoonte: vertraag voordat je deelt of reageert. Desinformatie werkt door snelle emoties op te roepen — verrassing, woede of instemming — voordat je helder kunt nadenken. In deze sectie oefen je het instinct om te pauzeren en te vragen: 'klopt dit wel?' Je beoordeelt afbeeldingen, herkent misleidende framing en vindt het zwakste punt in een bewering — zonder speciale tools.",
    },
  },
  "section-2": {
    nl: {
      title: "Hoofdstuk 1, Sectie 2",
      subtitle: "Bouw voort op wat je weet",
      description: "Meer oefening met dezelfde vaardigheden om snellere, meer automatische instincten op te bouwen.",
      theory:
        "Goede factcheckers bouwen gewoonten op, niet alleen vaardigheden. Hoe meer je iets oefent, hoe sneller je brein het automatisch opmerkt. Deze sectie versterkt wat je al hebt gezien, zodat je instincten betrouwbaarder worden voordat nieuwe vaardigheden worden geïntroduceerd. Zie het als het trainen van je standaardreactie — van 'delen' naar 'controleren'.",
    },
  },
  "section-3": {
    nl: {
      title: "Hoofdstuk 1, Sectie 3",
      subtitle: "Leer de namen voor wat je ziet",
      description: "Begin namen te geven aan de tactieken die worden gebruikt om te misleiden — zodra je een truc kunt benoemen, verliest die zijn kracht.",
      theory:
        "Desinformatie maakt vaak gebruik van specifieke retorische trucs om overtuigender te klinken. Zodra je een truc kunt benoemen, verliest die veel van zijn kracht. Bekende voorbeelden: geladen taal gebruikt emotionele woorden om je reactie te sturen; valse gelijkstelling vergelijkt twee dingen alsof ze gelijk zijn, terwijl dat niet zo is; kersenpikken belicht één waar detail terwijl het grotere plaatje verborgen blijft. Benoemen wat je ziet is de eerste stap om er niet door te worden misleid.",
    },
  },
  "section-4": {
    nl: {
      title: "Hoofdstuk 1, Sectie 4",
      subtitle: "Zie wat AI verkeerd doet",
      description: "Oefen met het herkennen van AI-gegenereerde afbeeldingen door te leren welke specifieke fouten AI steeds maakt.",
      theory:
        "AI-afbeeldingsgeneratoren maken afbeeldingen door te voorspellen hoe pixels eruit zouden moeten zien — ze begrijpen niet echt wat ze tekenen. Dit leidt tot terugkerende fouten: handen hebben vaak het verkeerde aantal vingers, tekst in de afbeelding is onleesbaar, achtergronden herhalen zich op onnatuurlijke wijze, en schaduwen of reflecties kloppen niet. Deze verradelijke tekenen verschijnen bij verschillende tools, dus ze leren herkennen geeft je een vaardigheid die breed toepasbaar is.",
    },
  },
  "section-5": {
    nl: {
      title: "Hoofdstuk 1, Sectie 5",
      subtitle: "Vind het bewijs in de tekst",
      description: "Leer een bron te vinden — en op te merken wanneer die ontbreekt — bij elke bewering die je leest.",
      theory:
        "Een bewering zonder bron is slechts een mening. Vraag bij het lezen van iets: wie doet deze bewering en waarop baseren ze die? Een goede bron wordt bij naam genoemd, is relevant en onafhankelijk — niet gewoon 'experts zeggen' of 'onderzoeken tonen aan'. Leren opmerken wanneer een bron ontbreekt — of wanneer de geciteerde bron de bewering eigenlijk niet ondersteunt — is een van de meest waardevolle gewoonten die je kunt opbouwen.",
    },
  },
  "section-6": {
    nl: {
      title: "Hoofdstuk 1, Sectie 6",
      subtitle: "Zoek slimmer, niet harder",
      description: "Verdiep je verificatie met geavanceerdere zoektechnieken om beweringen voorbij de pagina te controleren.",
      theory:
        "Lateraal lezen betekent de pagina verlaten die je leest om te kijken wat andere bronnen erover zeggen. In plaats van een bron diepgaand te lezen en van binnenuit te beoordelen, open je nieuwe tabbladen en zoek je onafhankelijke beoordelingen ervan. Factcheckers gebruiken dit voortdurend — het is sneller en betrouwbaarder dan een bron op eigen voorwaarden te beoordelen. De sleutel is weten wat je moet zoeken en hoe je de resultaten interpreteert.",
    },
  },
  "section-7": {
    nl: {
      title: "Hoofdstuk 1, Sectie 7",
      subtitle: "Breid je vocabulaire voor bedrog uit",
      description: "Breid je vocabulaire van manipulatietactieken uit om meer te herkennen, sneller.",
      theory:
        "Hoe meer namen je hebt voor manipulatietactieken, hoe sneller je ze kunt herkennen en verwerpen. Naast de basis: whataboutism wijkt kritiek af door ergens anders naar te wijzen ('maar wat dan met X?'); een hellend vlak beweert dat één stap onvermijdelijk tot rampspoed leidt, zonder bewijs; een beroep op autoriteit gebruikt een geloofwaardig klinkende naam als vervanging voor een echt argument. Dit vocabulaire uitbreiden maakt je moeilijker te misleiden.",
    },
  },
  "section-8": {
    nl: {
      title: "Hoofdstuk 1, Sectie 8",
      subtitle: "Tijd en plaats vertellen het verhaal",
      description: "Leer controleren wanneer en waar een foto of verhaal werkelijk vandaan komt — context is onderdeel van de waarheid.",
      theory:
        "Een foto of video is alleen betekenisvol in de originele context — wanneer en waar iets is gemaakt, telt net zoveel als wat het toont. Een van de meest voorkomende desinformatietactieken is het hergebruiken van oude content in een nieuwe crisis: een foto van drie jaar geleden die wordt gedeeld alsof het vandaag is. Het controleren van data, locaties en originele context van afbeeldingen is een kernvaardigheid voor iedereen die met visuele media werkt.",
    },
  },
  "section-9": {
    nl: {
      title: "Hoofdstuk 1, Sectie 9",
      subtitle: "Duik dieper in bronnen",
      description: "Verdiep je in het beoordelen van bronnen en de kwaliteit van het bewijs dat ze leveren.",
      theory:
        "Niet alle bronnen zijn even betrouwbaar. Een primaire bron heeft directe kennis — een ooggetuige, een officieel document, de persoon die het onderzoek heeft uitgevoerd. Een secundaire bron rapporteert wat de primaire bron zei, wat het risico op vertekening introduceert. Vraag bij het beoordelen van een bewering: hoeveel stappen is dit verwijderd van de oorspronkelijke gebeurtenis of data? Hoe meer stappen, hoe zorgvuldiger het gelezen moet worden.",
    },
  },
  "section-10": {
    nl: {
      title: "Hoofdstuk 1, Sectie 10",
      subtitle: "Wat de afbeeldingsdata onthult",
      description: "Begin te verkennen wat afbeeldingsbestanden onthullen voorbij wat je met je ogen kunt zien.",
      theory:
        "Elk digitaal afbeeldingsbestand bevat meer dan alleen pixels. Metadata — ook wel EXIF-data genoemd — is informatie die automatisch wordt opgeslagen door camera's en apparaten: datum en tijd, GPS-locatie, apparaattype en soms bewerkingsgeschiedenis. Wanneer een afbeelding is gemanipuleerd of in een verkeerde context is geplaatst, kan de metadata de bewering tegenspreken. Leren deze data te lezen voegt een verificatielaag toe die verder gaat dan wat zichtbaar is.",
    },
  },
  "section-11": {
    nl: {
      title: "Hoofdstuk 1, Sectie 11",
      subtitle: "Subtielere tekenen van AI",
      description: "Train je oog voor de subtielere, moeilijker te herkennen tekenen in overtuigendere AI-gegenereerde afbeeldingen.",
      theory:
        "AI-beeldgeneratie verbetert snel, maar bepaalde foutpatronen blijven bestaan. Zelfs realistische AI-afbeeldingen worstelen met fijne details — stiksels op stof, vachttextuur, de binnenkant van een mond, de exacte vorm van een oor. Niet-kloppende belichting en te gladde huid zijn ook veelvoorkomende weggevers. Deze subtielere tekenen kennen is belangrijk, omdat de voor de hand liggende fouten — extra vingers, smeltende gezichten — zeldzamer worden naarmate de technologie verbetert.",
    },
  },
  "section-12": {
    nl: {
      title: "Hoofdstuk 1, Sectie 12",
      subtitle: "De vijf pijlers van een bewering",
      description: "Leer het vijf-pijlers-kader voor het ontleden en testen van elke bewering.",
      theory:
        "Elke bewering rust op vijf pijlers: wie heeft het gemaakt, wat zegt het precies, wanneer is het gemaakt, waar komt het vandaan, en waarom wordt het gedeeld. Een bewering klopt alleen als alle vijf solide zijn. De vijf-pijlers-check geeft je een gestructureerde manier om het zwakste punt te vinden — als de 'wie' anoniem is, de 'wanneer' verouderd is, of de 'waarom' een duidelijke agenda suggereert, daar moet je je aandacht op richten. Dit kader werkt voor elk type content.",
    },
  },
};

/** Return the section title/subtitle/description/theory for the given language. */
export function getSectionText(
  sectionId: string,
  lang: Lang,
  fallback: { title: string; subtitle: string; description: string; theory: string },
) {
  if (lang === "nl") {
    const t = sectionTranslations[sectionId]?.nl;
    return t ?? fallback;
  }
  return fallback;
}
