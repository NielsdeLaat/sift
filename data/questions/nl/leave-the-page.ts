import type { LeaveThePageQuestion } from "../../questions";

export const leaveThePageQuestions: LeaveThePageQuestion[] = [
  // ─────────────────────────── DIFFICULTY 1 ───────────────────────────

  {
    id: "ltp-d1-1",
    type: "leave-the-page",
    xp: 60,
    difficulty: 1,
    content: {
      type: "article",
      sourceName: "NOS Nieuwsupdate",
      domain: "nos-nieuwsupdate.nl",
      imageUrl: "https://picsum.photos/seed/ltp-d1-1/800/450",
      headline:
        "Veiligheidsdiensten halen noodplan tevoorschijn voor NAVO-top Den Haag",
      excerpt:
        "Bronnen binnen de veiligheidsdiensten bevestigen dat er een noodprotocol klaarligt voor de komende NAVO-top in Den Haag. Details zijn uit veiligheidsoverwegingen niet openbaar gemaakt.",
    },
    searchOptions: [
      "NAVO-top Den Haag veiligheidsplan 2025",
      "nos-nieuwsupdate.nl betrouwbaar",
      "NOS officieel NAVO-top nieuws",
      "noodplan veiligheidsdiensten Den Haag",
    ],
    correctSearchIndex: 1,
    searchExplanation:
      "Bij lateral reading zoek je op de naam van de bron zelf — niet op het onderwerp. 'nos-nieuwsupdate.nl betrouwbaar' brengt je direct bij onafhankelijke beoordelingen van dit specifieke domein.",
    cards: [
      {
        title: "Over ons — NOS Nieuwsupdate",
        source: "nos-nieuwsupdate.nl",
        snippet:
          "NOS Nieuwsupdate brengt betrouwbare, onafhankelijke nieuwsupdates voor Nederland. Wij zijn niet verbonden aan politieke partijen of overheden.",
      },
      {
        title: "Pas op: nos-nieuwsupdate.nl is geen NOS — Nieuwscheckers",
        source: "nieuwscheckers.nl",
        snippet:
          "Het domein nos-nieuwsupdate.nl imiteert de huisstijl van de NOS maar heeft geen redactie, geen journalisten en is niet gelieerd aan de publieke omroep. De echte NOS publiceert uitsluitend op nos.nl.",
      },
      {
        title: "NAVO-top Den Haag — Nieuws en Achtergrond",
        source: "nos.nl",
        snippet:
          "De NOS volgt de NAVO-top in Den Haag op de voet. Volg alle ontwikkelingen via onze berichtgeving en livestream.",
      },
      {
        title: "NAVO-top artikel 44.000 keer gedeeld in 6 uur",
        source: "socialtracker.io",
        snippet:
          "Het artikel over het noodplan voor de NAVO-top werd in 6 uur tijd meer dan 44.000 keer gedeeld op Facebook en X.",
      },
    ],
    correctCardIndex: 1,
    explanation:
      'Kaart 1 is het enige resultaat dat iets zegt over de bron zelf, niet over het onderwerp. De "Over ons"-pagina (kaart 0) is de bron die zichzelf beoordeelt — dat telt niet. De echte NOS (kaart 2) en het deelcijfer (kaart 3) zeggen niets over de geloofwaardigheid van dit domein. Lateral reading betekent: zoek op de naam van de bron en kijk wat onafhankelijke partijen erover schrijven.',
  },

  {
    id: "ltp-d1-2",
    type: "leave-the-page",
    xp: 60,
    difficulty: 1,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/ltp-d1-2/80/80",
      sourceName: "NieuwsFlitsNL",
      handle: "@NieuwsFlitsNL",
      followerCount: "28K volgers",
      text: "🚨 Eritrese asielzoekers gewapend met messen op straat in Almelo — politie doet niets. Deel dit voordat het verwijderd wordt!! 📹 #Almelo #veiligheid",
      imageUrl: undefined,
    },
    searchOptions: [
      "asielzoekers messen Almelo nieuws",
      "@NieuwsFlitsNL betrouwbaar",
      "politie Almelo incident melding",
      "Almelo nieuws vandaag",
    ],
    correctSearchIndex: 1,
    searchExplanation:
      "Om een account te controleren zoek je op de accountnaam — niet op de claim. '@NieuwsFlitsNL betrouwbaar' brengt je bij analyses van dit account. Of de politie een melding had (kaart 2) controleert de claim, maar niet of je dit account voor toekomstige berichten kunt vertrouwen.",
    cards: [
      {
        title: "@NieuwsFlitsNL op X — 28,2K volgers",
        source: "x.com",
        snippet:
          'NieuwsFlitsNL · 28,2K volgers · "Nieuws dat de mainstream media niet brengen" · Gepind bericht: "Volg ons voor eerlijk en ongecensureerd nieuws."',
      },
      {
        title:
          "Politie Oost-Nederland: geen melding van gewapend incident in Almelo",
        source: "politie.nl",
        snippet:
          "De politie Oost-Nederland heeft geen melding ontvangen van een incident zoals beschreven in het betreffende bericht op sociale media.",
      },
      {
        title: "Accountanalyse @NieuwsFlitsNL — aangemaakt 9 dagen geleden",
        source: "socialblade.com",
        snippet:
          "Account @NieuwsFlitsNL aangemaakt 9 dagen geleden. Totaal 23 posts. Volgersgroei: +27.900 in 48 uur. Geen verificatievinkje. Geen activiteit vóór deze week.",
      },
      {
        title: "Video Almelo trending — 19.000 keer gedeeld op X",
        source: "trendingnl.nl",
        snippet:
          "De video van @NieuwsFlitsNL staat in de top 5 van meest gedeelde berichten in Nederland vandaag.",
      },
    ],
    correctCardIndex: 2,
    explanation:
      "Kaart 2 is de enige die iets zegt over het account zelf: 9 dagen oud, bijna 28.000 volgers in 48 uur. Dat is een klassiek signaal van een gecoördineerde of kunstmatig opgeblazen account. De politiemelding (kaart 1) controleert de claim, niet de bron. Volgers (kaart 0) en trending-cijfers (kaart 3) zeggen niets over wie er achter het account zit.",
  },

  // ─────────────────────────── DIFFICULTY 2 ───────────────────────────

  {
    id: "ltp-d2-1",
    type: "leave-the-page",
    xp: 85,
    difficulty: 2,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/ltp-d2-1/80/80",
      sourceName: "Patriot NL",
      handle: "@patriotnl",
      followerCount: "54K volgers",
      text: '🇳🇱 Elon Musk: "Mark Rutte is een dictator. De Nederlandse boeren hebben gelijk." Eindelijk iemand die de waarheid zegt — deelverbod ingesteld! 🔥 Deel dit voordat het weg is!!',
      imageUrl: undefined,
    },
    searchOptions: [
      "Elon Musk Mark Rutte boeren uitspraak",
      "Elon Musk controversiële uitspraken Twitter",
      "boeren protest Nederland nieuws",
      "Musk video viral boeren factcheck",
    ],
    correctSearchIndex: 0,
    searchExplanation:
      "Als een specifiek citaat of filmpje viraal gaat, zoek je zo concreet mogelijk: de naam van de persoon plus de beweerde uitspraak. 'Elon Musk Mark Rutte boeren uitspraak' brengt je direct bij factchecks en nieuwsartikelen over deze specifieke claim.",
    cards: [
      {
        title:
          "Elon Musk heeft niets gezegd over boeren en Mark Rutte — Nieuwscheckers",
        source: "nieuwscheckers.nl",
        snippet:
          "Het veelgedeelde filmpje is gemanipuleerd: de ondertiteling is nep en het geluid is bewerkt. De originele clip stamt uit een TED-interview over een ander onderwerp. Musk heeft geen uitspraken gedaan over de Nederlandse boerenprotesten.",
      },
      {
        title: '"Eindelijk iemand die het zegt" — reacties op de Musk-video',
        source: "dumpert.nl",
        snippet:
          'Duizenden reacties op de Musk-video die viral gaat. "Eindelijk iemand die het uitspreekt," schrijven veel gebruikers in de commentaren.',
      },
      {
        title: "Elon Musk — Wikipedia",
        source: "nl.wikipedia.org",
        snippet:
          "Elon Musk is een Amerikaans-Zuid-Afrikaanse ondernemer, bekend van Tesla, SpaceX en X. Hij staat bekend om controversiële uitspraken op sociale media.",
      },
      {
        title: "Filmpje 2,1 miljoen views — 87.000 likes in 18 uur",
        source: "x.com",
        snippet:
          "Het filmpje heeft inmiddels 2,1 miljoen views, 87.000 likes en 34.000 retweets op X. Het staat in de wereldwijde trending-lijst.",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "Kaart 0 is de enige die het filmpje zelf verifieert — en het direct als nep bestempelt. Bij D2 is de valkuil kaart 2: Wikipedia geeft achtergrondinformatie over Musk, maar zegt niets over dit specifieke filmpje. Views en likes (kaart 3) en enthousiaste reacties (kaart 1) zijn geen bewijs van echtheid — ze bewijzen alleen dat iets snel verspreid wordt.",
  },

  {
    id: "ltp-d2-2",
    type: "leave-the-page",
    xp: 85,
    difficulty: 2,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/ltp-d2-2/80/80",
      sourceName: "Nederlanders Voor Veiligheid",
      handle: "@nederlandersvoorveiligheid",
      followerCount: "51K likes",
      text: "SCHOKKEREND: overheid verbergt criminaliteitscijfers buurt rondom NAVO-top. Dit mag niet stil blijven. Deel dit met iedereen die je kent. 🚨",
      imageUrl: undefined,
    },
    searchOptions: [
      "criminaliteitscijfers NAVO-top overheid verborgen",
      "Nederlanders Voor Veiligheid Facebook pagina",
      "overheid criminaliteitsdata Nederland",
      "NAVO-top Den Haag criminaliteit buurt",
    ],
    correctSearchIndex: 1,
    searchExplanation:
      "Om een pagina te beoordelen zoek je op de naam van die pagina — niet op de claim die ze maakt. 'Nederlanders Voor Veiligheid Facebook pagina' brengt je bij onderzoeksjournalistiek over wie er achter deze pagina zit en of ze onderdeel is van een gecoördineerd netwerk.",
    cards: [
      {
        title: '"Nederlanders Voor Veiligheid" — 51K likes · Facebook',
        source: "facebook.com",
        snippet:
          '"Nederlanders Voor Veiligheid" · Pagina · "Onafhankelijk platform voor Nederlanders die de waarheid willen weten. Geen censuur, geen agenda."',
      },
      {
        title:
          "Criminaliteitscijfers Nederland — Ministerie van Justitie en Veiligheid",
        source: "rijksoverheid.nl",
        snippet:
          "Het ministerie van Justitie en Veiligheid publiceert kwartaalcijfers over criminaliteit. De meest recente rapportage is beschikbaar via de jaarlijkse veiligheidsmonitor.",
      },
      {
        title: "Bericht 3.800 keer gedeeld in 4 uur",
        source: "crowdtangle.com",
        snippet:
          'Het bericht van "Nederlanders Voor Veiligheid" werd in 4 uur 3.800 keer gedeeld. Het bereikt voornamelijk 45–65-jarigen in Noord-Brabant en Limburg.',
      },
      {
        title:
          "Netwerk van rechtse Facebookpagina's verspreidt AI-beelden — De Groene Amsterdammer",
        source: "groene.nl",
        snippet:
          "Data-onderzoek toont aan dat \"Nederlanders Voor Veiligheid\" onderdeel is van een gecoördineerd netwerk van pagina's dat AI-gegenereerde foto's gebruikt om bereik te vergroten. De pagina's hebben geen redactie of herleidbare eigenaar.",
      },
    ],
    correctCardIndex: 3,
    explanation:
      "Kaart 3 is het enige resultaat dat iets zegt over wie er achter de pagina zit. De valkuil bij D2 is kaart 1: het ministerie is een betrouwbare bron voor criminaliteitscijfers in het algemeen, maar het zegt niets over de geloofwaardigheid van dézé Facebookpagina. Een betrouwbare bron over het onderwerp is niet hetzelfde als een bewijs dat de pagina die het deelt ook betrouwbaar is.",
  },

  // ─────────────────────────── DIFFICULTY 3 ───────────────────────────

  {
    id: "ltp-d3-1",
    type: "leave-the-page",
    xp: 110,
    difficulty: 3,
    content: {
      type: "article",
      sourceName: "IDIV",
      domain: "idiv-instituut.nl",
      imageUrl: "https://picsum.photos/seed/ltp-d3-1/800/450",
      headline:
        "IDIV-rapport: drinkwater in meerdere Nederlandse steden kwetsbaar voor sabotage",
      excerpt:
        "Een nieuw rapport van het Instituut voor Drinkwater- en Infrastructuurveiligheid (IDIV) waarschuwt dat kwetsbaarheden in het drinkwatersysteem nog steeds niet zijn gedicht. De bevindingen zijn gedeeld met de Tweede Kamer.",
    },
    searchOptions: [
      "drinkwater sabotage Nederland veiligheid",
      "IDIV instituut drinkwater betrouwbaar",
      "RIVM drinkwaterkwaliteit Nederland rapport",
      "Tweede Kamer drinkwater sabotage debat",
    ],
    correctSearchIndex: 1,
    searchExplanation:
      "Het IDIV is de bron zelf — om die te beoordelen zoek je op de naam van het instituut en kijk je wat anderen erover schrijven. 'IDIV instituut drinkwater betrouwbaar' brengt je bij LinkedIn, vakbladen en eventuele berichtgeving die onthult hoe klein en recent dit instituut werkelijk is.",
    cards: [
      {
        title: "IDIV — Instituut voor Drinkwater- en Infrastructuurveiligheid",
        source: "idiv-instituut.nl",
        snippet:
          '"Het IDIV is een onafhankelijk kenniscentrum dat overheden en bedrijven adviseert over veiligheid van vitale infrastructuur. Ons team bestaat uit experts met jarenlange ervaring in de sector."',
      },
      {
        title: "IDIV-rapport bereikt 2,3 miljoen mensen via sociale media",
        source: "buzzsumo.com",
        snippet:
          "Het rapport van het IDIV werd in 48 uur door 60 sociale mediapagina's gedeeld en bereikte naar schatting 2,3 miljoen mensen in Nederland.",
      },
      {
        title:
          "Instituut voor Drinkwater- en Infrastructuurveiligheid — LinkedIn",
        source: "linkedin.com",
        snippet:
          "Instituut voor Drinkwater- en Infrastructuurveiligheid · 1 medewerker · Opgericht augustus 2024 · Geen vermelde samenwerkingen met universiteiten of overheidsinstanties · Geen publicaties in vakbladen.",
      },
      {
        title: "Drinkwaterkwaliteit in Nederland — RIVM",
        source: "rivm.nl",
        snippet:
          "Het RIVM monitort de kwaliteit van drinkwater in Nederland samen met drinkwaterbedrijven. Actuele informatie is beschikbaar via het jaarlijkse drinkwaterrapport.",
      },
    ],
    correctCardIndex: 2,
    explanation:
      "Kaart 2 is de enige die iets zegt over het IDIV als organisatie: 1 medewerker, opgericht in 2024, geen samenwerkingen, geen publicaties. Een legitiem kennisinstituut heeft een aantoonbare academische of professionele track record. De valkuil bij D3 is kaart 3: het RIVM is een betrouwbare bron over drinkwater in het algemeen, maar het zegt niets over de geloofwaardigheid van het IDIV. Goed en relevant ≠ antwoord op de vraag wie dit instituut is.",
  },

  {
    id: "ltp-d3-2",
    type: "leave-the-page",
    xp: 110,
    difficulty: 3,
    content: {
      type: "article",
      sourceName: "Veiligheidsregio Nieuws",
      domain: "veiligheidsregio-nieuws.nl",
      imageUrl: "https://picsum.photos/seed/ltp-d3-2/800/450",
      headline:
        "EVACUATIE ROTTERDAM-MAASHAVEN: verlaat onmiddellijk de wijk — gasstoring",
      excerpt:
        "De veiligheidsregio heeft een evacuatieorder uitgevaardigd voor straten rondom de Maashaven na een ernstige gasstoring. Bewoners wordt gevraagd direct de wijk te verlaten en 112 niet te bellen tenzij noodzakelijk.",
    },
    searchOptions: [
      "gasstoring Rotterdam Maashaven nieuws",
      "evacuatie Maashaven bewoners instructies",
      "veiligheidsregio Rotterdam officieel website domein",
      "112 gasstoring Rotterdam melden",
    ],
    correctSearchIndex: 2,
    searchExplanation:
      "Onder tijdsdruk is de neiging groot om op het incident zelf te zoeken. Maar voor evacuatie-instructies is het cruciaal te weten of de bron officieel is. 'Veiligheidsregio Rotterdam officieel website domein' toont de echte domeinnaam — en maakt meteen duidelijk dat veiligheidsregio-nieuws.nl die niet is.",
    cards: [
      {
        title:
          "Let op: veiligheidsregio-nieuws.nl is niet officieel — isdatechtzo.nl",
        source: "isdatechtzo.nl",
        snippet:
          "veiligheidsregio-nieuws.nl is niet gelieerd aan een van de 25 officiële veiligheidsregio's. De Veiligheidsregio Rotterdam-Rijnmond communiceert uitsluitend via veiligheidsregio-rr.nl en het NL-Alert systeem.",
      },
      {
        title: "Over ons — Veiligheidsregio Nieuws",
        source: "veiligheidsregio-nieuws.nl",
        snippet:
          '"Veiligheidsregio Nieuws aggregeert en verspreidt officiële mededelingen van Nederlandse veiligheidsregio\'s om burgers snel en correct te informeren tijdens incidenten."',
      },
      {
        title: 'Evacuatiebericht 1.200 keer gedeeld: "Verlaat nu de wijk"',
        source: "x.com",
        snippet:
          "Het evacuatiebericht van veiligheidsregio-nieuws.nl werd in 1 uur 1.200 keer gedeeld op X. Meerdere buurtbewoners delen het bericht met hun contacten.",
      },
      {
        title: "Gasstoring Rotterdam-Zuid — actuele verkeersmeldingen",
        source: "anwb.nl",
        snippet:
          "ANWB meldt wegafzettingen rondom de Maashaven door een gasstoring. Volg lokale media en de officiële berichtgeving van uw gemeente voor evacutatie-instructies.",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "Kaart 0 is de enige die het domein zelf verifieert en een alternatief geeft. De moeilijkheid bij D3 is de urgentie: een gasstoring dwingt je snel te handelen, waardoor kaart 3 (ANWB, bekende betrouwbare bron) verleidelijk is. Maar de ANWB zegt niets over veiligheidsregio-nieuws.nl. Kaart 1 is de bron die zichzelf goedkeurt — nooit doorslaggevend. Juist onder tijdsdruk is lateral reading het meest waardevol: één klik naar isdatechtzo.nl was genoeg.",
  },
];
