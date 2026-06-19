import type { WeakLinkQuestion } from "../../questions";
import { social, article } from "../helpers";

export const weakLinkQuestions: WeakLinkQuestion[] = [
  // ───────────────────────── DIFFICULTY 1 ─────────────────────────

  {
    id: "wl-d1-1",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    content: social("wl-d1-1", {
      sourceName: "NOS Breaking",
      handle: "@NOS_Breaking",
      followerCount: "1.4K volgers",
      text: "⚠️ BREAKING: Dijkdoorbraak bij Roermond bevestigd — duizenden woningen lopen gevaar. Bewoners wordt gevraagd direct te evacueren. #Roermond #hoogwater",
    }),
    correctPillar: "who",
    explanation:
      "Dit account lijkt op de NOS maar heeft maar 1.400 volgers en gebruikt @NOS_Breaking, terwijl de echte NOS er miljoenen heeft en op @NOS publiceert. Een account dat een bekend medium nabootst met een kleine naamsvariatie is de zwakke schakel.",
  },

  {
    id: "wl-d1-2",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    content: social("wl-d1-2", {
      sourceName: "WakkerBurger040",
      handle: "@wakkerburger040",
      followerCount: "1.2K volgers",
      text: "De nieuwe zendmast in onze wijk maakt mensen ziek. Sinds hij er staat hebben 3 buren corona gehad. Toeval?? Deel dit voordat het verwijderd wordt!! 📡⚠️",
    }),
    correctPillar: ["who", "what"],
    explanation:
      'Een anoniem account zonder enige medische kennis koppelt drie gevallen corona aan een zendmast — dat is geen geloofwaardige afzender. En "toeval??" verwart samenloop met oorzaak, dus zowel wie het zegt als waarop de claim rust is hier zwak.',
  },

  {
    id: "wl-d1-3",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    content: social("wl-d1-3", {
      sourceName: "PureLife Water NL",
      handle: "@purelifewaternl",
      followerCount: "15K volgers",
      text: "⚠️ Het kraanwater in Brabant is besmet en de overheid zwijgt erover. Bescherm je gezin met onze waterfilter. Vandaag 40% korting — alleen de eerste 100 bestellingen! 💧",
    }),
    correctPillar: ["why", "who"],
    explanation:
      "De toon klinkt alarmerend, maar de afzender verkoopt waterfilters en duwt met korting en 'alleen de eerste 100' aan op een snelle aankoop. Als de bron baat heeft bij jouw angst, is het motief de zwakke schakel.",
  },

  {
    id: "wl-d1-4",
    type: "weak-link",
    xp: 80,
    difficulty: 1,
    content: article("wl-d1-4", {
      sourceName: "Nieuws Alert Nederland",
      domain: "nieuwsalert-nl.com",
      headline: "VIDEO: Dijk bij Roermond bezweken, water stroomt de stad in",
      excerpt:
        "Schokkende beelden tonen hoe een dijk het begeeft en een woonwijk in korte tijd onderloopt. Volgens onze redactie gaat het om Roermond, gefilmd in de afgelopen nacht.",
      imageUrl: "images/dutch-dike-flood.jpg",
    }),
    correctPillar: ["who", "what"],
    explanation:
      "De beelden ogen dramatisch, maar de afzender publiceert op nieuwsalert-nl.com — geen bekend, betrouwbaar nieuwsdomein. En een losse video bewijst niets zolang je niet kunt nagaan waar en wanneer hij gemaakt is, dus zowel de bron als het beeld is hier zwak.",
  },

  // ───────────────────────── DIFFICULTY 2 ─────────────────────────

  {
    id: "wl-d2-1",
    type: "weak-link",
    xp: 120,
    difficulty: 2,
    content: article("wl-d2-1", {
      sourceName: "NOS Nieuwsupdate",
      domain: "nos-nieuwsupdate.net",
      headline:
        "RIVM: kraanwater in delen van Noord-Brabant tijdelijk onveilig",
      excerpt:
        "Het RIVM waarschuwt dat het kraanwater in meerdere Brabantse gemeenten besmet zou zijn met bacteriën. Inwoners wordt geadviseerd water minstens drie minuten te koken voor gebruik.",
      imageUrl: "images/tap-water.jpg",
    }),
    correctPillar: "who",
    explanation:
      "Het artikel oogt professioneel en citeert het RIVM, maar het domein is nos-nieuwsupdate.net terwijl de echte NOS op nos.nl publiceert. Een betrouwbaar ogend logo of citaat zegt niets over wie er publiceert — de afzender is de zwakke schakel.",
  },

  {
    id: "wl-d2-2",
    type: "weak-link",
    xp: 120,
    difficulty: 2,
    content: article("wl-d2-2", {
      sourceName: "De Vrije Onderzoeker",
      domain: "devrijeonderzoeker.nl",
      headline: "Bewijs: overheid hield waarschuwing Limburg bewust achter",
      excerpt:
        "Uit ons onderzoek blijkt dat de overheid de evacuatiewaarschuwing urenlang bewust heeft uitgesteld om een politieke agenda te dienen. De gevestigde media zwijgen hier opvallend over.",
      imageUrl: "images/real-limburg-2021-aerial.jpeg",
    }),
    correctPillar: ["why", "what"],
    explanation:
      "Het stuk oogt als onderzoek en de trage communicatie in Limburg was deels echt, maar de kernclaim ('bewust achtergehouden voor een agenda') rust op geen enkel bewijs. De site framet bovendien elke officiële bron als leugenaar — het motief stuurt hier de 'feiten', niet andersom.",
  },

  // ───────────────────────── DIFFICULTY 3 ─────────────────────────

  {
    id: "wl-d3-1",
    type: "weak-link",
    xp: 160,
    difficulty: 3,
    content: social("wl-d3-1", {
      sourceName: "Frank | Limburg Updates",
      handle: "@franklimburg",
      followerCount: "6.7K volgers",
      text: "Ongelofelijk… de dijk bij Arcen is net doorgebroken, dit is mijn straat NU. Iedereen wegwezen!! 😰 #hoogwater #Limburg",
      imageUrl: "images/flooded-tram-english.jpg",
    }),
    correctPillar: "where",
    explanation:
      "De afzender oogt lokaal en de timing past bij het hoogwater, maar in de beelden rijdt een Engelse tram, aan de tekst is te zien dat deze niet in Limburg is, daarnaast heeft Arcen geen tramlijn.",
  },
];
