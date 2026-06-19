import type { LeaveThePageQuestion } from "../../questions";
import { social, article } from "../helpers";

export const leaveThePageQuestions: LeaveThePageQuestion[] = [
  // ─────────────────────────── DIFFICULTY 1 ───────────────────────────

  {
    id: "ltp-d1-1",
    type: "leave-the-page",
    xp: 60,
    difficulty: 1,
    question: "Wat zou je zoeken om deze informatie te controleren?",
    content: article("ltp-d1-1", {
      sourceName: "Nieuws Alert",
      domain: "nieuwsalert.nl",
      headline:
        "Veiligheidsdiensten halen noodplan tevoorschijn voor NAVO-top Den Haag",
      excerpt:
        "Bronnen binnen de veiligheidsdiensten bevestigen dat er een noodprotocol klaarligt voor de komende NAVO-top in Den Haag. Details zijn uit veiligheidsoverwegingen niet openbaar gemaakt.",
      imageUrl: "/images/navo-top-the-hague.jpg",
    }),
    searchOptions: [
      "NAVO-top Den Haag noodplan veiligheidsdiensten",
      "nieuwsalert.nl betrouwbaar",
      "is het noodplan NAVO-top echt waar",
      "NAVO-top Den Haag noodplan schokkend",
    ],
    correctSearchIndex: 0,
    searchExplanation:
      "Zoek de claim zelf op met neutrale woorden en kijk of betrouwbare bronnen hetzelfde melden. Woorden als 'schokkend' leveren vooral méér viraal nieuws op.",
    cards: [
      {
        title: "NAVO-top in Den Haag: dit zijn de veiligheidsmaatregelen",
        source: "nos.nl",
        snippet:
          "Rond de NAVO-top gelden uitgebreide veiligheidsmaatregelen: afgesloten wegen, extra marechaussee en een no-flyzone. De NCTV noemt het dreigingsbeeld 'beheersbaar'.",
      },
      {
        title: "Noodplan klaar voor NAVO-top in Den Haag",
        source: "nieuwsalert.nl",
        snippet:
          "Nieuws Alert meldt als eerste dat de veiligheidsdiensten een geheim noodplan klaar hebben liggen. Details zijn niet bekendgemaakt.",
      },
      {
        title: "Den Haag bereidt zich voor op NAVO-top",
        source: "nu.nl",
        snippet:
          "Bekijk het laatste nieuws en de achtergronden over de aankomende NAVO-top in Den Haag, de beveiliging en de verkeershinder voor bewoners.",
      },
      {
        title: '"Eindelijk de waarheid!" – noodplan NAVO-top',
        source: "frontnieuws-blog.nl",
        snippet:
          "Frontnieuws deelt het bericht van Nieuws Alert over het geheime noodplan. 'De mainstream media zwijgen hierover', aldus de blog.",
      },
    ],
    correctCardIndex: [0, 2],
    explanation:
      "De NOS en Nu.nl zijn de enige onafhankelijke, betrouwbare bronnen: die bevestigen de gewone beveiliging rond de top, maar nergens een 'geheim noodplan'. De site zelf, een opgewonden blog of het aantal keer delen bewijzen niet dat de claim klopt.",
  },

  {
    id: "ltp-d1-2",
    type: "leave-the-page",
    xp: 60,
    difficulty: 1,
    question: "Kun je dit account vertrouwen als nieuwsbron?",
    content: social("ltp-d1-2", {
      sourceName: "NieuwsFlitsNL",
      handle: "@NieuwsFlitsNL",
      followerCount: "28K volgers",
      text: "🚨 Eritrese asielzoekers gewapend met messen op straat in Almelo — politie doet niets. Deel dit voordat het verwijderd wordt!! 📹 #Almelo #veiligheid",
    }),
    searchOptions: [
      "asielzoekers messen Almelo nieuws",
      "@NieuwsFlitsNL wie zit erachter",
      "politie Almelo steekincident",
      "Almelo nieuws vandaag",
    ],
    correctSearchIndex: 1,
    searchExplanation:
      "Om te beoordelen of je dit account kunt vertrouwen, zoek je op het account zelf en kijk je wie erachter zit. De claim opzoeken zegt iets over dít bericht, maar niet of het account in het algemeen klopt.",
    cards: [
      {
        title: "NieuwsFlitsNL (@NieuwsFlitsNL) / X",
        source: "x.com",
        snippet:
          "Het nieuws dat ze niet willen dat je ziet. 🚨 Ongecensureerd. 28K volgers · 23 berichten.",
      },
      {
        title: "Politie Oost-Nederland: geen melding van incident in Almelo",
        source: "politie.nl",
        snippet:
          "De politie heeft geen melding ontvangen van een gewapend incident in Almelo zoals dat op sociale media wordt rondgestuurd.",
      },
      {
        title: "@NieuwsFlitsNL — accountstatistieken en groei",
        source: "socialblade.com",
        snippet:
          "Aangemaakt 9 dagen geleden. 28.000 volgers (+27.900 in 48 uur). 23 berichten, geen activiteit vóór deze week. Geen verificatie.",
      },
      {
        title: "Trending in Nederland: video 'asielzoekers Almelo'",
        source: "trendingnl.nl",
        snippet:
          "De video staat vandaag in de top 5 van meest gedeelde berichten op X, met ruim 19.000 keer delen.",
      },
    ],
    correctCardIndex: 2,
    explanation:
      "De accountstatistieken zijn het enige resultaat dat laat zien wíé dit is: 9 dagen oud met bijna 28.000 volgers in twee dagen, een klassiek teken van een nep- of opgeblazen account. Het aantal volgers, de trending-cijfers of zelfs de politiemelding zeggen niets over wie er achter het account zit.",
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
      followerCount: "54K volgers",
      text: '🇳🇱 Elon Musk: "Mark Rutte is een dictator. De Nederlandse boeren hebben gelijk." Eindelijk iemand die de waarheid zegt — deelverbod ingesteld! 🔥 Deel dit voordat het weg is!!',
    }),
    searchOptions: [
      "Elon Musk Mark Rutte boeren uitspraak",
      "Elon Musk controversiële uitspraken Twitter",
      "boeren protest Nederland nieuws",
      "Musk video viral boeren factcheck",
    ],
    correctSearchIndex: 0,
    searchExplanation:
      "Zoek zo concreet mogelijk: de naam van de persoon plus de beweerde uitspraak. 'Elon Musk Mark Rutte boeren uitspraak' brengt je direct bij factchecks en nieuwsartikelen over deze specifieke claim.",
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
      "Alleen Nieuwscheckers verifieert het filmpje zelf en laat zien dat het gemanipuleerd is. De Wikipedia-pagina gaat over Musk in het algemeen, en likes, views of enthousiaste reacties bewijzen alleen dat iets snel verspreidt — niet dat het echt is.",
  },

  {
    id: "ltp-d2-2",
    type: "leave-the-page",
    xp: 85,
    difficulty: 2,
    question: "Verteld dit account de waarheid?",
    content: social("ltp-d2-2", {
      sourceName: "Nederlanders Voor Veiligheid",
      handle: "@nederlandersvoorveiligheid",
      followerCount: "51K likes",
      text: "SCHOKKEREND: overheid verbergt criminaliteitscijfers buurt rondom NAVO-top. Dit mag niet stil blijven. Deel dit met iedereen die je kent. 🚨",
    }),
    searchOptions: [
      "criminaliteitscijfers Nederland buurt opvragen",
      "Nederlanders Voor Veiligheid Facebook",
      "overheid verbergt criminaliteit NAVO-top",
      "criminaliteit Den Haag schokkend onthuld",
    ],
    correctSearchIndex: 0,
    searchExplanation:
      "De claim is dat cijfers verborgen worden, dus check je eerst of die cijfers ergens openbaar staan. Zoeken met de woorden van de post zelf ('verbergt', 'schokkend') levert vooral meer berichten op die dezelfde claim herhalen.",
    cards: [
      {
        title: "Cijfers over criminaliteit per wijk en buurt",
        source: "cbs.nl",
        snippet:
          "Het CBS publiceert geregistreerde criminaliteit per gemeente, wijk en buurt. Cijfers zijn vrij opvraagbaar via StatLine en worden elk kwartaal bijgewerkt.",
      },
      {
        title: "Wat doet de overheid tegen criminaliteit?",
        source: "rijksoverheid.nl",
        snippet:
          "Informatie over het landelijke veiligheidsbeleid, de aanpak van ondermijning en de rol van politie en justitie bij het bestrijden van criminaliteit.",
      },
      {
        title: '"Nederlanders Voor Veiligheid" · Pagina · Facebook',
        source: "facebook.com",
        snippet:
          "Onafhankelijk platform voor Nederlanders die de waarheid willen weten. Geen censuur, geen agenda. 51K vind-ik-leuks.",
      },
      {
        title: "Bericht 3.800 keer gedeeld in 4 uur",
        source: "crowdtangle.com",
        snippet:
          "Het bericht bereikte in vier uur 3.800 keer delen, vooral onder 45–65-jarigen in Noord-Brabant en Limburg.",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "Het CBS publiceert criminaliteitscijfers gewoon openbaar tot op buurtniveau, dus de claim dat de overheid ze 'verbergt' klopt niet. De pagina die zichzelf 'onafhankelijk' noemt en het aantal keer delen zeggen niets over of de claim waar is.",
  },

  // ─────────────────────────── DIFFICULTY 3 ───────────────────────────

  {
    id: "ltp-d3-1",
    type: "leave-the-page",
    xp: 110,
    difficulty: 3,
    question: "Kun je dit instituut vertrouwen als bron?",
    content: article("ltp-d3-1", {
      sourceName: "IDIV",
      domain: "idiv-instituut.nl",
      headline:
        "IDIV-rapport: drinkwater in meerdere Nederlandse steden kwetsbaar voor sabotage",
      excerpt:
        "Een nieuw rapport van het Instituut voor Drinkwater- en Infrastructuurveiligheid (IDIV) waarschuwt dat kwetsbaarheden in het drinkwatersysteem nog niet zijn gedicht. De bevindingen zijn gedeeld met de Tweede Kamer.",
      imageUrl: "/images/tap-water.jpg",
    }),
    searchOptions: [
      "drinkwater sabotage Nederland veiligheid",
      "IDIV instituut wie zit erachter",
      "RIVM drinkwater rapport Nederland",
      "drinkwater sabotage schokkend rapport",
    ],
    correctSearchIndex: 1,
    searchExplanation:
      "Het IDIV is hier de bron, dus zoek je op de naam van het instituut en kijk je wat anderen erover schrijven. Het onderwerp opzoeken vertelt je of drinkwaterveiligheid speelt, maar niet of dít instituut te vertrouwen is.",
    cards: [
      {
        title:
          "Over IDIV — Instituut voor Drinkwater- en Infrastructuurveiligheid",
        source: "idiv-instituut.nl",
        snippet:
          "Onafhankelijk kenniscentrum dat overheden en bedrijven adviseert over de veiligheid van vitale infrastructuur. Ons team bestaat uit ervaren experts uit de sector.",
      },
      {
        title: "IDIV-rapport veelgedeeld op sociale media",
        source: "buzzsumo.com",
        snippet:
          "Het rapport werd in 48 uur door zo'n 60 pagina's gedeeld en bereikte naar schatting 2,3 miljoen mensen in Nederland.",
      },
      {
        title:
          "Instituut voor Drinkwater- en Infrastructuurveiligheid | LinkedIn",
        source: "linkedin.com",
        snippet:
          "1 medewerker · Opgericht augustus 2024 · Geen vermelde samenwerkingen met universiteiten of overheden · Geen publicaties.",
      },
      {
        title: "Drinkwaterkwaliteit in Nederland",
        source: "rivm.nl",
        snippet:
          "Het RIVM bewaakt samen met drinkwaterbedrijven de kwaliteit van het Nederlandse drinkwater. Actuele cijfers staan in het jaarlijkse drinkwaterrapport.",
      },
    ],
    correctCardIndex: 2,
    explanation:
      "Alleen het LinkedIn-resultaat laat zien wie het IDIV is: één medewerker, opgericht in 2024, geen samenwerkingen en geen publicaties. Het RIVM is betrouwbaar over drinkwater zelf maar zegt niets over dit instituut, en de 'over ons'-pagina beoordeelt alleen zichzelf.",
  },

  {
    id: "ltp-d3-2",
    type: "leave-the-page",
    xp: 110,
    difficulty: 3,
    question: "Is er echt een evacuatie afgekondigd?",
    content: article("ltp-d3-2", {
      sourceName: "Veiligheidsregio Nieuws",
      domain: "veiligheidsregio-nieuws.nl",
      headline:
        "EVACUATIE ROTTERDAM-MAASHAVEN: verlaat onmiddellijk de wijk — gasstoring",
      excerpt:
        "De veiligheidsregio heeft een evacuatieorder uitgevaardigd voor straten rondom de Maashaven na een ernstige gasstoring. Bewoners wordt gevraagd direct de wijk te verlaten en 112 niet te bellen tenzij noodzakelijk.",
      imageUrl: "/images/rotterdam-skyline.jpg",
    }),
    searchOptions: [
      "NL-Alert evacuatie Rotterdam Maashaven",
      "veiligheidsregio-nieuws.nl betrouwbaar",
      "evacuatie Maashaven verlaat de wijk nu",
      "gasstoring Rotterdam delen viral",
    ],
    correctSearchIndex: 0,
    searchExplanation:
      "Een echte evacuatie wordt afgekondigd via officiële kanalen zoals NL-Alert, dus daar check je of de order bestaat. Zoeken met de paniekwoorden uit het bericht zelf levert vooral meer kopieën van dezelfde claim op.",
    cards: [
      {
        title: "Geen NL-Alert of evacuatie voor Maashaven",
        source: "nl-alert.nl",
        snippet:
          "Er is geen NL-Alert verstuurd voor de Maashaven of omgeving. Bij een echte evacuatie ontvangt u een NL-Alert op uw telefoon; volg alleen officiële instructies.",
      },
      {
        title: "Veiligheidsregio Rotterdam-Rijnmond — actuele incidenten",
        source: "vr-rr.nl",
        snippet:
          "Overzicht van actuele incidenten in de regio. Op dit moment zijn er geen meldingen van een gasstoring of evacuatie rond de Maashaven.",
      },
      {
        title: "Over ons — Veiligheidsregio Nieuws",
        source: "veiligheidsregio-nieuws.nl",
        snippet:
          "Wij verspreiden snel en betrouwbaar mededelingen van Nederlandse veiligheidsregio's om burgers tijdens incidenten te informeren.",
      },
      {
        title: 'Evacuatiebericht 1.200 keer gedeeld: "Verlaat nu de wijk"',
        source: "x.com",
        snippet:
          "Het bericht werd in een uur ruim 1.200 keer gedeeld. Buurtbewoners sturen het door aan hun contacten.",
      },
    ],
    correctCardIndex: 0,
    explanation:
      "Een echte evacuatie loopt via NL-Alert, en daar staat dat er geen melding voor de Maashaven is verstuurd — de order bestaat dus niet. De site die zichzelf 'betrouwbaar' noemt en het aantal keer delen zeggen niets over of er echt iets aan de hand is.",
  },
];
