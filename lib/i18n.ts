export type Lang = 'nl' | 'en';

const nl = {
  nav: {
    home: 'Home',
    dailyPuzzle: 'Dagelijkse Puzzel',
    leaderboard: 'Ranglijst',
    profile: 'Profiel',
  },
  profile: {
    title: 'Profiel',
    editProfile: 'Profiel bewerken',
    settings: 'Instellingen',
    addFriends: 'Vrienden toevoegen',
    achievements: 'Prestaties',
    stats: {
      streak: 'Reeks',
      friends: 'Vrienden',
      league: 'Liga',
    },
    userTitle: 'Factcheck-beginner',
    achievementLabels: {
      'first-fact': 'Eerste Feit',
      'reader':     'Lezer',
      'sleuth':     'Speurder',
      'expert':     'Expert',
      'AI master':  'AI-meester',
    } as Record<string, string>,
  },
  lesson: {
    complete: 'Les Voltooid!',
    sectionTestComplete: 'Sectietoets Voltooid!',
    greatWork: 'Goed werk bij deze les.',
    continue: 'Doorgaan',
    notQuite: 'Niet helemaal',
    needPercentage: (pct: number) =>
      `Je hebt ${pct}% nodig om te slagen. Probeer opnieuw!`,
    tryAgain: 'Opnieuw proberen',
  },
  feedback: {
    correct: 'Correct!',
    incorrect: 'Onjuist',
    continue: 'Doorgaan',
  },
  header: {
    exitLesson: 'Les verlaten',
  },
  questions: {
    weakLink: {
      question: 'Welk pijler is de zwakke schakel?',
      whyQuestion: 'Waarom is dit de zwakke schakel?',
      placeholder: 'Leg uit in eigen woorden…',
      submit: 'Verstuur',
      pillars: {
        who: 'Wie?',
        what: 'Wat?',
        when: 'Wanneer?',
        where: 'Waar?',
        why: 'Waarom?',
      },
    },
    realOrAi: {
      question: 'Is deze afbeelding echt of AI-gegenereerd?',
      real: 'Echt',
      ai: 'AI',
    },
    nameTrick: {
      question: 'Welke techniek wordt hier gebruikt?',
      confirm: 'Bevestig',
    },
    whoSays: {
      question: 'Hoe betrouwbaar is deze bron?',
      confirm: 'Bevestig',
    },
    underTheHood: {
      question: 'Tik op de rode vlag in het bewijs hieronder',
      button: 'Dat is de rode vlag',
    },
    leaveThePage: {
      question: 'Welk resultaat bevestigt dit?',
      button: 'Deze bevestigt het',
    },
    whenOrWhere: {
      whenQuestion: 'Wanneer is dit gemaakt?',
      whereQuestion: 'Waar was dit?',
      confirm: 'Bevestig',
    },
    feedTest: {
      heading: 'Lees elk bericht en beoordeel het',
      verdicts: {
        true: 'Waar',
        false: 'Onwaar',
        misleading: 'Misleidend',
        misleadingShort: 'Misleid.',
      },
      results: 'Resultaten',
      perfectScore: 'Perfect — je hebt ze allemaal goed!',
      countIncorrect: (n: number) => `${n} onjuist`,
      youLabel: 'Jij:',
      correctLabel: '→ Correct:',
      backToFeed: 'Terug naar feed',
      seeResults: 'Bekijk resultaten',
      continue: 'Doorgaan',
    },
    tellReveal: {
      selectTell: 'Selecteer de aanwijzing',
      hereTell: 'Dit is de aanwijzing',
      tapInstruction: 'Tik op het deel van de afbeelding dat er vreemd uitziet',
      confirm: 'Bevestig',
    },
  },
  sectionInfo: {
    thisSection: 'Deze sectie',
    allSections: 'Alle secties',
    done: 'Voltooid',
    current: 'Huidig',
    locked: 'Vergrendeld',
    xpAvailable: (xp: number) => `${xp} XP beschikbaar in deze sectie`,
    xpShort: (xp: number) => `${xp} XP`,
  },
  ui: {
    demoOptions: 'Demo-opties',
    skipToSection: 'Spring naar sectie',
    skipToSectionDesc: 'Begin bij het eerste lesje van een sectie',
    goToSectionTest: 'Sectietoets',
    goToSectionTestDesc: 'Spring direct naar de toets van een sectie',
    resetDemo: 'Demo resetten',
    resetDemoDesc: 'Wis alle voortgang en begin opnieuw',
    back: 'Terug',
    expand: 'Uitvouwen',
    collapse: 'Inklappen',
  },
  pages: {
    dailyPuzzle: 'Dagelijkse Puzzel — binnenkort beschikbaar',
    leaderboard: 'Ranglijst — binnenkort beschikbaar',
    testDone: 'Klaar!',
    testRunComplete: 'Testrun voltooid.',
  },
  settings: {
    title: 'Instellingen',
    language: 'Taal',
    dutch: 'Nederlands',
    english: 'English',
  },
};

const en: typeof nl = {
  nav: {
    home: 'Home',
    dailyPuzzle: 'Daily Puzzle',
    leaderboard: 'Leaderboard',
    profile: 'Profile',
  },
  profile: {
    title: 'Profile',
    editProfile: 'Edit profile',
    settings: 'Settings',
    addFriends: 'Add Friends',
    achievements: 'Achievements',
    stats: {
      streak: 'Streak',
      friends: 'Friends',
      league: 'League',
    },
    userTitle: 'Fact-Checking Novice',
    achievementLabels: {
      'first-fact': 'First Fact',
      'reader':     'Reader',
      'sleuth':     'Sleuth',
      'expert':     'Expert',
      'AI master':  'AI Master',
    } as Record<string, string>,
  },
  lesson: {
    complete: 'Lesson Complete!',
    sectionTestComplete: 'Section Test Complete!',
    greatWork: 'Great work on this lesson.',
    continue: 'Continue',
    notQuite: 'Not quite',
    needPercentage: (pct: number) =>
      `You need ${pct}% to pass this test. Try again!`,
    tryAgain: 'Try Again',
  },
  feedback: {
    correct: 'Correct!',
    incorrect: 'Incorrect',
    continue: 'Continue',
  },
  header: {
    exitLesson: 'Exit lesson',
  },
  questions: {
    weakLink: {
      question: 'Which pillar is the weak link?',
      whyQuestion: 'Why is this pillar the weak link?',
      placeholder: 'Explain in your own words…',
      submit: 'Submit',
      pillars: {
        who: 'Who?',
        what: 'What?',
        when: 'When?',
        where: 'Where?',
        why: 'Why?',
      },
    },
    realOrAi: {
      question: 'Is this image real or AI-generated?',
      real: 'Real',
      ai: 'AI',
    },
    nameTrick: {
      question: 'Which technique is this using?',
      confirm: 'Confirm',
    },
    whoSays: {
      question: 'How reliable is this source?',
      confirm: 'Confirm',
    },
    underTheHood: {
      question: 'Tap the red flag in the evidence below',
      button: "That's the red flag",
    },
    leaveThePage: {
      question: 'Which result settles this?',
      button: 'This one settles it',
    },
    whenOrWhere: {
      whenQuestion: 'When was this taken?',
      whereQuestion: 'Where was this?',
      confirm: 'Confirm',
    },
    feedTest: {
      heading: 'Read each post and judge it',
      verdicts: {
        true: 'True',
        false: 'False',
        misleading: 'Misleading',
        misleadingShort: 'Mislead.',
      },
      results: 'Results',
      perfectScore: 'Perfect — you caught them all!',
      countIncorrect: (n: number) => `${n} incorrect`,
      youLabel: 'You:',
      correctLabel: '→ Correct:',
      backToFeed: 'Back to feed',
      seeResults: 'See Results',
      continue: 'Continue',
    },
    tellReveal: {
      selectTell: 'Select the tell',
      hereTell: "Here's the tell",
      tapInstruction: 'Tap the part of the image that looks off',
      confirm: 'Confirm',
    },
  },
  sectionInfo: {
    thisSection: 'This Section',
    allSections: 'All Sections',
    done: 'Done',
    current: 'Current',
    locked: 'Locked',
    xpAvailable: (xp: number) => `${xp} XP available in this section`,
    xpShort: (xp: number) => `${xp} XP`,
  },
  ui: {
    demoOptions: 'Demo options',
    skipToSection: 'Skip to section',
    skipToSectionDesc: 'Jump to the first lesson of a section',
    goToSectionTest: 'Section test',
    goToSectionTestDesc: 'Jump directly to a section\'s test',
    resetDemo: 'Reset demo',
    resetDemoDesc: 'Wipe all progress and start over',
    back: 'Back',
    expand: 'Expand',
    collapse: 'Collapse',
  },
  pages: {
    dailyPuzzle: 'Daily Puzzle — coming soon',
    leaderboard: 'Leaderboard — coming soon',
    testDone: 'Done!',
    testRunComplete: 'Test run complete.',
  },
  settings: {
    title: 'Settings',
    language: 'Language',
    dutch: 'Nederlands',
    english: 'English',
  },
};

export const translations = { nl, en };

export type Translations = typeof nl;

/** Dutch subtitle/description overrides for each section (English lives in roadmap.ts). */
export const sectionTranslations: Record<string, {
  nl: { title: string; subtitle: string; description: string };
}> = {
  'section-1': {
    nl: {
      title: 'Hoofdstuk 1, Sectie 1',
      subtitle: 'Stop voordat je deelt',
      description:
        'Leer de belangrijkste gewoonte voor factchecken: pauzeer voordat je reageert. Oefen met naamtrucs herkennen, echte vs. AI-afbeeldingen beoordelen en de zwakke schakel in een bewering vinden.',
    },
  },
  'section-2': {
    nl: {
      title: 'Hoofdstuk 1, Sectie 2',
      subtitle: 'Spot manipulatie direct',
      description:
        'Verdiep je in naamtrucs en retorische tactieken die valse beweringen geloofwaardig laten klinken. Je begint gemeenschappelijke patronen te herkennen in verschillende soorten desinformatie.',
    },
  },
  'section-3': {
    nl: {
      title: 'Hoofdstuk 1, Sectie 3',
      subtitle: 'Niet elke bewerkte afbeelding is AI',
      description:
        'Scherp je oog voor AI-gegenereerde beelden, maar vermijd de val van te snel "nep" roepen. Echte afbeeldingen kunnen misleidend zijn; AI-afbeeldingen kunnen subtiel zijn.',
    },
  },
  'section-4': {
    nl: {
      title: 'Hoofdstuk 1, Sectie 4',
      subtitle: 'Vertrouw niet op één bron',
      description:
        'Oefen lateraal lezen: verlaat de pagina om te controleren wat anderen zeggen over een bron of bewering. Een waar verhaal is makkelijk te verifiëren; een vals verhaal vaak niet.',
    },
  },
  'section-5': {
    nl: {
      title: 'Hoofdstuk 1, Sectie 5',
      subtitle: 'Wie plaatst dit eigenlijk?',
      description:
        'Ga verder met lateraal lezen: onderzoek de authenticiteit van accounts door te zoeken op handle, profielfoto en domein. Niet elk account is wie het beweert te zijn.',
    },
  },
  'section-6': {
    nl: {
      title: 'Hoofdstuk 1, Sectie 6',
      subtitle: 'Herleid de bewering naar de bron',
      description:
        'Maak kennis met het IMVAIN-kader voor het evalueren van bronnen. Leer of een geciteerde bron — expert, ooggetuige of anoniem — betrouwbaar genoeg is om te vertrouwen.',
    },
  },
  'section-7': {
    nl: {
      title: 'Hoofdstuk 1, Sectie 7',
      subtitle: 'Sommige stemmen tellen zwaarder',
      description:
        'Verdiep je in bronnenkwaliteit. Oefen met het onderscheiden van primaire bronnen van tweedehandse verslagen en leer wanneer je een officiële verklaring kunt vertrouwen versus een virale screenshot.',
    },
  },
  'section-8': {
    nl: {
      title: 'Hoofdstuk 1, Sectie 8',
      subtitle: 'Inspecteer de metadata',
      description:
        'Leer afbeeldingsmetadata en omgekeerde-zoekresultaten te lezen om contextmanipulatie op te sporen. Een oude foto in een nieuwe crisis is een van de meest voorkomende vormen van visuele desinformatie.',
    },
  },
  'section-9': {
    nl: {
      title: 'Hoofdstuk 1, Sectie 9',
      subtitle: 'Tijd is onderdeel van de waarheid',
      description:
        'Oefen met het bepalen wanneer een afbeelding of verhaal vandaan komt. Hergebruikte oude content is een belangrijke desinformatietactiek bij snelbewegende crises.',
    },
  },
  'section-10': {
    nl: {
      title: 'Hoofdstuk 1, Sectie 10',
      subtitle: 'Locatie is net zo belangrijk als timing',
      description:
        'Breid je verificatievaardigheden uit naar locatie. Foto\'s en video\'s worden vaak aan een andere plek toegeschreven — de tekenen leren herkennen beschermt je tegen geografische desinformatie.',
    },
  },
  'section-11': {
    nl: {
      title: 'Hoofdstuk 1, Sectie 11',
      subtitle: 'Elke bewering heeft een breekpunt',
      description:
        'Beheers de volledige zwakke-schakel-analyse: bepaal welk pijler van een verhaal bezwijkt onder inspectie en kom tot een zeker oordeel. Dit is de kernbeweging van de factchecker.',
    },
  },
  'section-12': {
    nl: {
      title: 'Hoofdstuk 1, Sectie 12',
      subtitle: 'Alles tegelijk',
      description:
        'Pas alle vaardigheden over alle vraagtypen toe op hogere moeilijkheidsgraad. De laatste sectie weerspiegelt de echte informatie-omgeving: snel, gemengd en ontworpen om te misleiden.',
    },
  },
};

/** Return the section title/subtitle/description for the given language. */
export function getSectionText(
  sectionId: string,
  lang: Lang,
  fallback: { title: string; subtitle: string; description: string },
) {
  if (lang === 'nl') {
    const t = sectionTranslations[sectionId]?.nl;
    return t ?? fallback;
  }
  return fallback;
}
