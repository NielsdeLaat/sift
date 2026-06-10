import type { WeakLinkQuestion } from "../../questions";

export const weakLinkQuestions: WeakLinkQuestion[] = [
  // ───────────────────────── DIFFICULTY 1 ─────────────────────────
  {
    id: "wl-d1-1",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/wl-d1-1/80/80",
      sourceName: "NOS Breaking",
      handle: "@NOS_Breaking",
      followerCount: "1.4K volgers",
      text: "⚠️ BREAKING: Dijkdoorbraak bij Roermond bevestigd — duizenden woningen lopen gevaar. Bewoners wordt gevraagd direct te evacueren. #Roermond #hoogwater",
      imageUrl: undefined,
    },
    correctPillar: "who",
    explanation:
      "Dit account lijkt op de NOS maar heeft slechts 1.400 volgers — de echte NOS heeft er meer dan een miljoen. Bovendien publiceert de NOS op @NOS, niet op @NOS_Breaking. Accounts die bekende mediaorganisaties nabootsen met kleine variaties zijn een veelvoorkomende vorm van misleiding.",
  },
  {
    id: "wl-d1-2",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/wl-d1-2/80/80",
      sourceName: "WakkerBurger040",
      handle: "@wakkerburger040",
      followerCount: "1.2K volgers",
      text: "De nieuwe zendmast in onze wijk maakt mensen ziek. Sinds hij er staat hebben 3 buren corona gehad. Toeval?? Deel dit voordat het verwijderd wordt!! 📡⚠️",
      imageUrl: undefined,
    },
    correctPillar: "who",
    explanation:
      "Voordat je onderzoekt wát er beweerd wordt, valt de bron al weg. Het account is twee weken oud, anoniem en heeft geen enkele medische of technische expertise — geen geloofwaardige afzender voor een claim over ziekte en zendmasten. Kijk eerst wie iets beweert; een gevoel van 'toeval' is geen bewijs.",
  },
  {
    id: "wl-d1-3",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/wl-d1-3/80/80",
      sourceName: "PureLife Water NL",
      handle: "@purelifewaternl",
      followerCount: "15K volgers",
      text: "⚠️ Het kraanwater in Brabant is besmet en de overheid zwijgt erover. Bescherm je gezin met onze waterfilter. Vandaag 40% korting — alleen de eerste 100 bestellingen! 💧",
      imageUrl: undefined,
    },
    correctPillar: ["why", "who"],
    explanation:
      "De angst is herkenbaar en de toon klinkt urgent, maar de afzender verkoopt waterfilters. De post bestaat om een product te slijten met kunstmatige urgentie en korting. Als de bron baat heeft bij jouw angst, is het motief de zwakke schakel — check het waarom.",
  },
  {
    id: "wl-d1-4",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    content: {
      type: "article",
      sourceName: "Nieuws Alert Nederland",
      domain: "nieuwsalert-nl.com",
      imageUrl: "https://picsum.photos/seed/wl-d1-4/800/450",
      headline: "VIDEO: Dijk bij Roermond bezweken, water stroomt de stad in",
      excerpt:
        "Schokkende beelden tonen hoe een dijk het begeeft en een woonwijk in korte tijd onderloopt. Volgens onze redactie gaat het om Roermond, gefilmd in de afgelopen nacht. [video]",
    },
    correctPillar: "what",
    explanation:
      "Bron en toon lijken te kloppen, maar het draait om het beeld zelf: een reverse image search toont dat de video van een overstroming in Duitsland uit 2021 is. Omdat het beeldmateriaal zelf niet klopt, valt de rest van de claim mee om. Controleer altijd de herkomst van het beeld (het 'wat') voordat je de plaats en tijd gelooft.",
  },

  // ───────────────────────── DIFFICULTY 2 ─────────────────────────
  {
    id: "wl-d2-1",
    type: "weak-link",
    xp: 120,
    difficulty: 2,
    content: {
      type: "social",
      avatarUrl: "https://picsum.photos/seed/wl-d2-1/80/80",
      sourceName: "Frank | Limburg Updates",
      handle: "@franklimburg",
      followerCount: "6.7K volgers",
      text: "Ongelofelijk… de dijk bij Arcen is net doorgebroken, dit is mijn straat NU. Iedereen wegwezen!! 😰 #hoogwater #Limburg",
      imageUrl: undefined,
    },
    correctPillar: "where",
    explanation:
      "De bron oogt lokaal en de timing past bij het hoogwater, dus dit lijkt te kloppen. Maar in de beelden rijdt een tram en zijn steile beboste heuvels te zien: Arcen heeft geen tramlijn en ligt in vlak rivierengebied. De video is ergens anders gefilmd — de locatie is de zwakke schakel. Zoek altijd naar herkenningspunten (trams, bergen, borden) die de geclaimde plek tegenspreken.",
  },
  {
    id: "wl-d2-2",
    type: "weak-link",
    xp: 120,
    difficulty: 2,
    content: {
      type: "article",
      sourceName: "NOS Nieuwsupdate",
      domain: "nos-nieuwsupdate.net",
      imageUrl: "https://picsum.photos/seed/wl-d2-2/800/450",
      headline:
        "RIVM: kraanwater in delen van Noord-Brabant tijdelijk onveilig",
      excerpt:
        "Het RIVM waarschuwt dat het kraanwater in meerdere Brabantse gemeenten besmet zou zijn met bacteriën. Inwoners wordt geadviseerd water minstens drie minuten te koken voor gebruik.",
    },
    correctPillar: "who",
    explanation:
      "Het artikel ziet er professioneel uit en citeert het RIVM, dus de inhoud lijkt gezaghebbend. Maar het domein is nos-nieuwsupdate.net — de echte NOS publiceert op nos.nl. Dit is een nagemaakte site. Kijk wie de afzender écht is (lateral reading): op nos.nl en rivm.nl staat dit bericht niet. Een betrouwbaar ogend logo of citaat zegt niets over wie er publiceert.",
  },
  {
    id: "wl-d2-3",
    type: "weak-link",
    xp: 120,
    difficulty: 2,
    content: {
      type: "article",
      sourceName: "De Vrije Onderzoeker",
      domain: "devrijeonderzoeker.nl",
      imageUrl: "https://picsum.photos/seed/wl-d2-3/800/450",
      headline: "Bewijs: overheid hield waarschuwing Limburg bewust achter",
      excerpt:
        "Uit ons onderzoek blijkt dat de overheid de evacuatiewaarschuwing urenlang bewust heeft uitgesteld om een politieke agenda te dienen. De gevestigde media zwijgen hier opvallend over.",
    },
    correctPillar: "why",
    explanation:
      "Het stuk oogt als onderzoek en de vertraagde communicatie in Limburg was deels echt — daarom voelt het overtuigend. Maar de kern­claim ('bewust achtergehouden voor een politieke agenda') rust op geen enkel primair bewijs, en de site publiceert uitsluitend stukken die hetzelfde narratief versterken en framet elke officiële bron als leugenaar. Het motief stuurt de 'feiten', niet andersom — het waarom is de zwakke schakel.",
  },
];
