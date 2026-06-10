import type { NameTrickQuestion } from "../../questions";

export const nameTrickQuestions: NameTrickQuestion[] = [
  // ─────────────────────────── DIFFICULTY 1 ───────────────────────────
  // Short posts (1–2 sentences). Plain options — no jargon.

  {
    id: "nt-d1-1",
    type: "name-trick",
    xp: 50,
    difficulty: 1,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d1-1/80/80",
      sourceName: "WaterAlert Nederland",
      handle: "@wateralertnl",
      followerCount: "3.2K volgers",
      text: "🚨🚨 HET KRAANWATER IS VERGIFTIGD!! Zet het NU uit!! Je kinderen drinken dit elke dag!! Deel dit voordat het te laat is!! 🚨🚨",
    },
    options: [
      "Speelt in op angst",
      "Zegt dat er maar twee keuzes zijn",
      "Noemt een expert die je niet kunt controleren",
      "Geeft één groep de schuld",
    ],
    correctIndex: 0,
    explanation:
      "Dit bericht maakt je bang met hoofdletters, uitroeptekens en het woordje 'kinderen'. Er staat geen enkel bewijs bij — alleen alarmbellen. Dat is het kenmerk van emotiemanipulatie: angst vervangt bewijs.",
  },

  {
    id: "nt-d1-2",
    type: "name-trick",
    xp: 50,
    difficulty: 1,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d1-2/80/80",
      sourceName: "Medisch Bewust NL",
      handle: "@medischbewust",
      followerCount: "8.9K volgers",
      text: "Een huisarts vertelde me dat mondkapjes gevaarlijker zijn dan het virus zelf. De overheid laat dit niet zeggen. Doe je eigen onderzoek.",
    },
    options: [
      "Speelt in op angst",
      "Noemt een expert die je niet kunt controleren",
      "Geeft één groep de schuld",
      "Stelt vragen in plaats van beschuldigingen",
    ],
    correctIndex: 1,
    explanation:
      'De post noemt "een huisarts" maar geeft geen naam, praktijk of bron. Je kunt niet controleren of deze persoon echt bestaat of dit echt gezegd heeft. Als een claim alleen steunt op een onbekende expert, kun je hem niet beoordelen.',
  },

  {
    id: "nt-d1-3",
    type: "name-trick",
    xp: 50,
    difficulty: 1,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d1-3/80/80",
      sourceName: "Wakker Nederland",
      handle: "@wakkernederland",
      followerCount: "14K volgers",
      text: "Weten jullie waarom de dijken in Limburg het begaven? Omdat de gemeente al het onderhoudsgeld heeft uitgegeven aan azc's. Zo simpel is het.",
    },
    options: [
      "Speelt in op angst",
      "Noemt een expert die je niet kunt controleren",
      "Geeft één groep overal de schuld van",
      "Stelt vragen in plaats van beschuldigingen",
    ],
    correctIndex: 2,
    explanation:
      "Dijkonderhoud is afhankelijk van waterschappen, rijksbudgetten en klimaatfactoren — een complex geheel. De post gooit dat in één zin op één groep. Zo werkt schuldaanwijzing: een ingewikkeld probleem krijgt een makkelijk doelwit.",
  },

  {
    id: "nt-d1-4",
    type: "name-trick",
    xp: 50,
    difficulty: 1,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d1-4/80/80",
      sourceName: "Crisisnieuws NL",
      handle: "@crisisnieuwsnl",
      followerCount: "21K volgers",
      text: "Kies: vertrouw de overheid en blijf thuis terwijl het water stijgt. Of luister naar je verstand en evacueer NU je gezin. Jij beslist.",
    },
    options: [
      "Speelt in op angst",
      "Noemt een expert die je niet kunt controleren",
      "Geeft één groep de schuld",
      "Zegt dat er maar twee keuzes zijn",
    ],
    correctIndex: 3,
    explanation:
      "De post stelt dat je maar twee opties hebt. Maar in werkelijkheid zijn er altijd meer mogelijkheden — je kunt officiële bronnen raadplegen én spullen pakken. Door een valse tegenstelling te scheppen, dwingt de post je tot paniek.",
  },

  // ─────────────────────────── DIFFICULTY 2 ───────────────────────────
  // Medium posts (3–4 sentences). 5 options — one theoretical term introduced per question.

  {
    id: "nt-d2-1",
    type: "name-trick",
    xp: 80,
    difficulty: 2,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d2-1/80/80",
      sourceName: "Bewuste Buurt 040",
      handle: "@bewustebuurt040",
      followerCount: "5.1K volgers",
      text: "Ik zeg niks hoor, maar is het niet opvallend dat precies na de plaatsing van de nieuwe 5G-masten in onze wijk drie buren binnen een maand ziek zijn geworden? Misschien toeval, misschien niet. Gewoon even nadenken 🤔 #DoJeEigenOnderzoek",
    },
    options: [
      "Stelt beschuldigende vragen zonder iets te hoeven bewijzen",
      "Speelt in op angst en onzekerheid",
      "Wijst één groep aan als schuldige",
      "Noemt een expert die je niet kunt controleren",
      "Schetst een vals dilemma",
    ],
    correctIndex: 0,
    explanation:
      'De post doet alsof het een onschuldige vraag is, maar plant tegelijk de suggestie dat 5G-masten ziek maken. Door "ik zeg niks hoor" te schrijven, wijst de auteur elke verantwoordelijkheid af — terwijl de beschuldiging al gemaakt is.',
  },

  {
    id: "nt-d2-2",
    type: "name-trick",
    xp: 80,
    difficulty: 2,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d2-2/80/80",
      sourceName: "Stem van de Burger",
      handle: "@stemvdburger",
      followerCount: "31K volgers",
      text: "Wat er in Bodegraven is gebeurd mag NOOIT worden vergeten. Kinderen werden misbruikt en vermoord, en de gemeente WIST het. En toch: complete stilte van de autoriteiten. Terwijl de daders vrij rondlopen, leggen gewone burgers bloemen. Hoe lang laten we dit nog toe??",
    },
    options: [
      "Stelt beschuldigende vragen zonder bewijs",
      "Wekt verontwaardiging op zonder bewijs te leveren",
      "Geeft één groep de schuld van een complex probleem",
      "Schetst een vals dilemma: alsof er maar twee keuzes zijn",
      "Noemt een expert die je niet kunt controleren",
    ],
    correctIndex: 1,
    explanation:
      'Het bericht noemt geen enkel bewijs of bron, maar gebruikt zware woorden ("misbruikt", "vermoord", "WIST het") om verontwaardiging en verdriet op te wekken. De kracht van het gevoel moet het gebrek aan bewijs verbergen.',
  },

  {
    id: "nt-d2-3",
    type: "name-trick",
    xp: 80,
    difficulty: 2,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d2-3/80/80",
      sourceName: "Nederland Nu",
      handle: "@nederlandnu_",
      followerCount: "47K volgers",
      text: "Al jaren zeggen bewoners van Ter Apel het: de overlast, de criminaliteit, de druk op de voorzieningen. En nu is het hek letterlijk van de dam. De hulpverleners staan erbij te kijken terwijl het systeem instort. We weten allemaal door wie dit komt — de overheid wil het alleen niet toegeven.",
    },
    options: [
      "Speelt in op angst en gevoel van onrecht",
      "Schetst een vals dilemma: twee opties, geen middenweg",
      "Wijst één groep aan als schuldige voor een complex probleem",
      "Noemt een oncontroleerbare expert",
      "Stelt beschuldigende vragen",
    ],
    correctIndex: 2,
    explanation:
      'De post beschrijft echte spanningen maar schrijft ze toe aan één vage groep — "door wie dit komt" — zonder dat dit bewezen wordt. Zo werkt schuldaanwijzing: een complex probleem krijgt één makkelijk doelwit.',
  },

  {
    id: "nt-d2-4",
    type: "name-trick",
    xp: 80,
    difficulty: 2,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d2-4/80/80",
      sourceName: "Gezond & Vrij",
      handle: "@gezond_en_vrij",
      followerCount: "26K volgers",
      text: "Je kiest het vaccin en accepteert onbekende bijwerkingen die pas over jaren zichtbaar worden. Of je kiest voor je eigen immuunsysteem en beschermt wat de natuur je heeft gegeven. Een derde optie bestaat niet — welke kant sta jij op?",
    },
    options: [
      "Speelt in op angst voor bijwerkingen",
      "Noemt een niet-verifieerbare expert",
      "Wijst een groep aan als schuldige",
      "Schetst een vals dilemma: alsof er maar twee opties bestaan",
      "Stelt beschuldigende vragen zonder antwoord",
    ],
    correctIndex: 3,
    explanation:
      'De post presenteert twee opties als de enige mogelijkheden en sluit actief een derde weg uit ("een derde optie bestaat niet"). Dat is een vals dilemma: de werkelijkheid biedt altijd meer keuzes dan twee tegengestelde extremen.',
  },

  // ─────────────────────────── DIFFICULTY 3 ───────────────────────────
  // Long posts (5–7 sentences). 5 options — full FLICC framing.

  {
    id: "nt-d3-1",
    type: "name-trick",
    xp: 110,
    difficulty: 3,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d3-1/80/80",
      sourceName: "Onafhankelijk Nieuws NL",
      handle: "@onafh_nieuws_nl",
      followerCount: "19K volgers",
      text: 'Dr. Hendrik Vos, onafhankelijk luchtvaartanalist en voormalig militair ingenieur, heeft zijn onderzoeksrapport gepubliceerd. Zijn conclusie is onomstotelijk: de raket die MH17 neerschoot was van Oekraïense makelij, niet Russisch. "Het bewijsmateriaal is overduidelijk," aldus Vos. De gevestigde media negeren dit rapport omdat het niet in het politieke plaatje past.',
    },
    options: [
      "Emotionele manipulatie via verontwaardiging",
      "Vals dilemma: slechts twee opties gepresenteerd",
      "Onverifieerbare expert: autoriteit zonder controleerbare bron",
      "Scapegoating: één partij als schuldige aangewezen",
      "Just asking questions: beschuldigingen als vragen verpakt",
    ],
    correctIndex: 2,
    explanation:
      '"Dr. Hendrik Vos" klinkt gezaghebbend, maar je kunt zijn rapport niet vinden, zijn achtergrond niet controleren en zijn instituut bestaat niet aantoonbaar. Het gebruik van een onverifieerbare expert is een klassieke techniek: claims legitimeren zonder echt bewijs te leveren.',
  },

  {
    id: "nt-d3-2",
    type: "name-trick",
    xp: 110,
    difficulty: 3,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d3-2/80/80",
      sourceName: "Kritisch Brabant",
      handle: "@kritischbrabant",
      followerCount: "11K volgers",
      text: 'Ik doe geen beschuldigingen, maar ik wil een paar dingen delen die ik heb opgemerkt. Het RIVM bevestigde vorige maand dat er "geen risico\'s" zijn aan het drinkwater in onze regio. Maar waarom is die mededeling pas zes uur na de eerste meldingen van buikklachten gepubliceerd? Waarom werden de meetresultaten niet openbaar gemaakt? En waarom weigerden twee gemeenteraadsleden commentaar te geven toen een journalist ernaar vroeg? Als je de puzzelstukjes samenlegt, begint er toch een patroon zichtbaar te worden... 🤔',
    },
    options: [
      "Emotionele manipulatie: angst en verontwaardiging als bewijs",
      "Vals dilemma: slechts twee opties gepresenteerd",
      "Onverifieerbare expert als bewijs aangevoerd",
      "Scapegoating: één groep als schuldige aangewezen",
      "Just asking questions: beschuldigingen als vragen formuleren",
    ],
    correctIndex: 4,
    explanation:
      'De post stelt uitsluitend vragen en trekt nooit een conclusie — maar de vragen samen planten een duidelijke beschuldiging: de overheid verzwijgt gevaarlijk drinkwater. Door alles als vraag te formuleren hoeft de schrijver niets te bewijzen. Dit heet "just asking questions".',
  },

  {
    id: "nt-d3-3",
    type: "name-trick",
    xp: 110,
    difficulty: 3,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d3-3/80/80",
      sourceName: "IJmond Wakker",
      handle: "@ijmondwakker",
      followerCount: "38K volgers",
      text: 'Bewoners die al jaren klagen over de luchtkwaliteit bij het industrieterrein worden steevast genegeerd. De metingen die het bedrijf zelf uitvoert, worden door de overheid klakkeloos overgenomen. Intussen rapporteren ouders van basisscholen in de omgeving een stijging van luchtwegklachten bij kinderen. Een moeder vertelt: "Mijn dochter heeft elke ochtend hoofdpijn. Wanneer is het genoeg?" Artsen durven niets te zeggen uit angst voor gevolgen. Activisten worden weggezet als extremisten. En de rook blijft maar komen.',
    },
    options: [
      "Vals dilemma: twee opties, geen middenweg",
      "Emotionele manipulatie: persoonlijke verhalen en verontwaardiging als bewijs",
      "Scapegoating: één specifieke groep als schuldige aanwijzen",
      "Just asking questions: beschuldigingen als vragen stellen",
      "Onverifieerbare expert geciteerd als gezaghebbende bron",
    ],
    correctIndex: 1,
    explanation:
      'Het bericht gebruikt uitsluitend emotioneel materiaal: een anonieme moeder, artsen die "niets durven zeggen", activisten die worden weggezet. Er zijn geen metingen, geen wetenschappelijke bronnen, geen hoor en wederhoor. Emotionele manipulatie werkt zo: persoonlijke verhalen en verontwaardiging vervangen feiten en bronnen.',
  },

  {
    id: "nt-d3-4",
    type: "name-trick",
    xp: 110,
    difficulty: 3,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/nt-d3-4/80/80",
      sourceName: "Forum Patriot NL",
      handle: "@forumpatriotnl",
      followerCount: "62K volgers",
      text: "Terwijl gewone Nederlanders de energierekening nauwelijks kunnen betalen en de wachtlijsten in de zorg uitlopen, worden miljarden besteed aan klimaatsubsidies, opvanglocaties en internationale verdragen waar niemand op heeft gestemd. De echte reden dat onze infrastructuur het laat afweten? Die middelen zijn jarenlang weggesluisd naar politieke prioriteiten die niets met de gewone burger van doen hebben. Als morgen de stroom uitvalt, weten jullie nu wie daarvoor verantwoordelijk zijn. Het is tijd dat Nederland dit erkent.",
    },
    options: [
      "Scapegoating: complexe problemen toegeschreven aan één groep of agenda",
      "Emotionele manipulatie via verontwaardiging en dreiging",
      "Vals dilemma: geen alternatieven gepresenteerd",
      "Onverifieerbare experts aangehaald",
      "Just asking questions: beschuldigingen als vragen verpakt",
    ],
    correctIndex: 0,
    explanation:
      'De post koppelt een breed scala aan problemen (energierekening, zorg, infrastructuur) aan één vage agenda van klimaat, opvang en verdragen — zonder enig bewijs dat dit de oorzaak is. Door te schrijven "weten jullie nu wie daarvoor verantwoordelijk zijn" wordt een zondebok geplant zonder die te hoeven bewijzen. Dit is scapegoating.',
  },
];
