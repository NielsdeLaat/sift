import type { WhoSaysQuestion } from "../../questions";

export const whoSaysQuestions: WhoSaysQuestion[] = [
  {
    id: "ws-d1-1",
    type: "who-says",
    xp: 65,
    difficulty: 1,
    excerpt:
      '"Er is absoluut geen gevaar voor omwonenden," zegt een woordvoerder van Chemelot in reactie op zorgen over stikstofuitstoot bij het chemiecomplex in Geleen.',
    highlightedSource: "Een woordvoerder van Chemelot",
    options: [
      "Onafhankelijk veiligheidsexpert",
      "Iemand die spreekt namens het beoordeelde bedrijf",
      "Overheidsinstantie voor milieuveiligheid",
      "Wetenschappelijk onderzoeker",
    ],
    correctIndex: 1,
    explanation:
      'Een woordvoerder spreekt namens het bedrijf dat onderzocht wordt — dat bedrijf heeft er direct belang bij dat de uitkomst "geen gevaar" luidt. Je kunt een bedrijf niet beoordelen op basis van wat het zelf over zichzelf zegt. Voor een claim over veiligheid heb je een onafhankelijke partij nodig, zoals de RIVM of een externe inspectie.',
  },

  {
    id: "ws-d1-2",
    type: "who-says",
    xp: 65,
    difficulty: 1,
    excerpt:
      "Volgens een anonieme medewerker van het COA worden incidenten in opvanglocaties stelselmatig niet geregistreerd om de statistieken gunstig te houden.",
    highlightedSource: "Een anonieme medewerker van het COA",
    options: [
      "Klokkenluider met directe toegang",
      "Ingewijde bron met kennis van zaken",
      "Niet bij name genoemde enkelbron",
      "Onafhankelijke waarnemer",
    ],
    correctIndex: 2,
    explanation:
      'Je kunt een anonieme bron niet verifiëren: je kunt de persoon niet opzoeken, hun functie niet controleren en hun beweringen niet terugvoeren op iemand die aanspreekbaar is. Voor een zware beschuldiging als stelselmatige fraude is dat onvoldoende. "Anoniem" betekent niet automatisch "onbetrouwbaar", maar het betekent wel: je kunt het niet zelf controleren.',
  },

  // ─────────────────────────── DIFFICULTY 2 ───────────────────────────

  {
    id: "ws-d2-1",
    type: "who-says",
    xp: 85,
    difficulty: 2,
    excerpt:
      "Uit onderzoek van het Europees Instituut voor Migratie en Veiligheid blijkt dat gemeenten met grote asielzoekerscentra gemiddeld 23% hogere kosten voor openbare orde hebben.",
    highlightedSource: "Het Europees Instituut voor Migratie en Veiligheid",
    options: [
      "Academische onderzoeksinstelling",
      "Onafhankelijk statistisch bureau",
      "Europese overheidsinstantie",
      "Denktank gefinancierd door een politieke organisatie",
    ],
    correctIndex: 3,
    explanation:
      "De naam klinkt neutraal en gezaghebbend, maar een korte zoekopdracht laat zien dat dit instituut gefinancierd wordt door een politieke partijstichting. Een imposante naam en Europese scope zijn geen bewijs van onafhankelijkheid. Dit is de kernles van lateral reading: controleer niet wát een bron zegt, maar wíe er achter zit en wie ze betaalt.",
  },

  {
    id: "ws-d2-2",
    type: "who-says",
    xp: 85,
    difficulty: 2,
    excerpt:
      '"Langdurig mondkapjesgebruik veroorzaakt aantoonbare zuurstoftekorten en is schadelijker dan het virus zelf," schrijft internist dr. Annelies Smit op haar persoonlijke gezondheidswebsite.',
    highlightedSource: "Internist dr. Annelies Smit, via haar eigen website",
    options: [
      "Medisch professional met claim buiten peer-reviewed kanaal",
      "Gecertificeerde medische specialist",
      "Peer-reviewed onderzoeker",
      "Onafhankelijke wetenschapper",
    ],
    correctIndex: 0,
    explanation:
      "Dr. Smit heeft een medische graad — haar expertise is aanwezig (de A van IMVAIN). Maar haar claim is gepubliceerd op haar eigen website, zonder redactionele toetsing of peer review. Dat betekent dat niemand de methode of het bewijs onafhankelijk heeft gecontroleerd. Een medische titel maakt een claim nog niet geverifieerd.",
  },

  // ─────────────────────────── DIFFICULTY 3 ───────────────────────────

  {
    id: "ws-d3-1",
    type: "who-says",
    xp: 110,
    difficulty: 3,
    excerpt:
      '"De nieuwe drinkwaternormen zijn technisch onhaalbaar en economisch onevenredig," zegt Pieter van Loon, directeur van Vewin — de branchevereniging van Nederlandse drinkwaterbedrijven — die tevens lid is van de adviescommissie die deze normen beoordeelt.',
    highlightedSource:
      "Pieter van Loon, directeur Vewin en lid van de adviescommissie",
    options: [
      "Sectorexpert met aantoonbare belangenverstrengeling",
      "Onafhankelijk technisch adviseur",
      "Lid van een overheidsadviescommissie",
      "Branche-informant met relevante sectorkennis",
    ],
    correctIndex: 0,
    explanation:
      "Van Loon zit op twee stoelen tegelijk: hij vertegenwoordigt de sector die de normen moet halen, én beoordeelt als commissielid of die normen redelijk zijn. Commissielidmaatschap (kaart 2) klinkt onafhankelijk, maar is het niet als je tegelijkertijd directeur bent van de betrokken branche. Dit heet belangenverstrengeling: de I van IMVAIN (Independent) faalt, ook al is de A (Authoritative) volledig aanwezig. Expertise en onafhankelijkheid zijn twee verschillende dingen.",
  },

  {
    id: "ws-d3-2",
    type: "who-says",
    xp: 110,
    difficulty: 3,
    excerpt:
      '"Stikstofdeposities op dit niveau vormen geen wetenschappelijk aantoonbare bedreiging voor beschermde Natura 2000-gebieden," concludeert een rapport van het PBL — gepubliceerd in 2017 als onderdeel van een studie naar Europese emissietrends.',
    highlightedSource:
      "PBL Planbureau voor de Leefomgeving (rapport 2017, Europese emissietrends)",
    options: [
      "Gerenommeerde en onafhankelijke overheidsinstelling",
      "Onafhankelijk wetenschappelijk planbureau",
      "Gezaghebbende bron die deze specifieke claim niet verifieert",
      "Peer-reviewed milieuonderzoek",
    ],
    correctIndex: 2,
    explanation:
      "Het PBL is een geloofwaardige, onafhankelijke instelling — de I, A en N van IMVAIN kloppen. Maar het rapport uit 2017 gaat over Europese emissietrends in het algemeen, niet over actuele stikstofschade in specifieke Nederlandse Natura 2000-gebieden. De V van IMVAIN (Verifying) faalt: de bron verifieert deze specifieke claim niet, omdat het onderwerp en de tijdshorizon niet overeenkomen. Een goede bron die de verkeerde vraag beantwoordt, is voor deze claim nog steeds de verkeerde bron.",
  },
];
