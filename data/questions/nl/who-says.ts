import type { WhoSaysQuestion } from "../../questions";
import { social, article } from "../helpers";

export const whoSaysQuestions: WhoSaysQuestion[] = [
  // ─────────────────────────── DIFFICULTY 1 ───────────────────────────
  // Mix: one clearly-named good source, one blatantly source-less claim.

  {
    id: "ws-d1-1",
    type: "who-says",
    xp: 65,
    difficulty: 1,
    content: article("ws-d1-1", {
      sourceName: "NOS Nieuws",
      domain: "nos.nl",
      headline:
        "Dagelijks koffie drinken verkleint kans op Alzheimer met twintig procent",
      publishedAt: "14 mei 2024",
      excerpt:
        "Nieuwe studie richt zich op de verbanden tussen cafeïnegebruik en cognitieve gezondheid op lange termijn.",
    }),
    sections: [
      "Onderzoekers van de Harvard Medical School publiceerden gisteren een studie in het wetenschappelijk tijdschrift The Lancet. Zij volgden 50.000 mensen gedurende tien jaar en keken naar hun koffiegebruik en cognitieve achteruitgang.",
      "Deelnemers die dagelijks twee tot drie koppen koffie dronken, hadden gemiddeld twintig procent minder kans op de ziekte van Alzheimer dan niet-koffiedrinkers.",
      "Een woordvoerder van Douwe Egberts liet weten blij te zijn met de uitkomsten en gaf aan verdere studies financieel te willen ondersteunen.",
    ],
    correctSectionIndex: 0,
    explanation:
      "De claim komt van onderzoekers van Harvard Medical School, gepubliceerd in het peer-reviewed tijdschrift The Lancet — een controleerbare, onafhankelijke bron. De woordvoerder van Douwe Egberts heeft juist financieel belang en is dus geen onafhankelijke afzender.",
  },

  {
    id: "ws-d1-2",
    type: "who-says",
    xp: 65,
    difficulty: 1,
    content: article("ws-d1-2", {
      sourceName: "FamilieWijzer",
      domain: "familiewijzer.nl",
      headline: "Suiker veroorzaakt ADHD bij kinderen, niet genen",
      publishedAt: "22 maart 2024",
      excerpt:
        "Dieetadviezen voor kinderen met gedragsproblemen leiden tot controverse onder ouders en pedagogen.",
      imageUrl: "images/sugar.jpg",
    }),
    sections: [
      "Studies tonen aan dat suiker de werkelijke oorzaak is van ADHD bij kinderen. Genetische factoren spelen een veel kleinere rol dan lang werd gedacht.",
      "Kinderen die minder suiker eten, gedragen zich aantoonbaar rustiger en presteren beter op school.",
      "Experts raden ouders aan om suiker volledig uit het dieet van jonge kinderen te verwijderen als eerste stap bij gedragsproblemen.",
    ],
    correctSectionIndex: null,
    explanation:
      "Geen enkele alinea noemt een studie, instituut of onderzoeker: 'studies tonen aan' en 'experts raden aan' zijn loze woorden zonder vindplaats. Zonder aanwijsbare bron valt er niets te controleren — kies 'Geen bron vermeld'.",
  },

  // ─────────────────────────── DIFFICULTY 2 ───────────────────────────
  // Mix: one compromised (biased) source, one good source hidden behind louder voices.

  {
    id: "ws-d2-1",
    type: "who-says",
    xp: 85,
    difficulty: 2,
    content: article("ws-d2-1", {
      sourceName: "EconomieVandaag",
      domain: "economievandaag.nl",
      headline:
        "Rapport: goedkope Chinese zonnepanelen schaden Nederlandse maakindustrie",
      publishedAt: "3 juni 2024",
      excerpt:
        "Europese producenten klagen over toenemende concurrentiedruk van Chinese aanbieders op de groene energiemarkt.",
      imageUrl: "images/zonnepanelen.jpg",
    }),
    sections: [
      "Een nieuw rapport concludeert dat de invoer van goedkope zonnepanelen uit China de Nederlandse maakindustrie ernstig schaadt en duizenden banen bedreigt.",
      "Het rapport is opgesteld door het Verbond van de Nederlandse Maakindustrie (VNM), de branchevereniging die de belangen behartigt van Nederlandse fabrikanten van onder meer zonnepanelen.",
      "Wetenschappers van de TU Delft reageren in een apart persbericht op het onderwerp en noemen de in het rapport gehanteerde methode 'te beperkt'.",
      "De Europese Commissie overweegt importtarieven om Europese producenten te beschermen en zou het rapport hebben ontvangen.",
    ],
    correctSectionIndex: 1,
    explanation:
      "Het rapport klinkt neutraal, maar is opgesteld door het VNM — de brancheorganisatie van precies de fabrikanten die de conclusie bevoordeelt, dus de bron is niet onafhankelijk (de I van IMVAIN). De TU Delft-wetenschappers reageren slechts apart en zijn niet de afzender van het rapport zelf.",
  },

  {
    id: "ws-d2-2",
    type: "who-says",
    xp: 85,
    difficulty: 2,
    content: article("ws-d2-2", {
      sourceName: "1Limburg",
      domain: "1limburg.nl",
      headline: "Kookadvies voor kraanwater na overstroming in Zuid-Limburg",
      publishedAt: "19 juli 2024",
      excerpt:
        "Na de overstroming circuleert een waarschuwing over vervuild kraanwater in de regio. Maar waar komt die waarschuwing eigenlijk vandaan?",
      imageUrl: "images/easy-food.jpg",
    }),
    sections: [
      "De waarschuwing ging viral nadat een bekende weerinfluencer met 600.000 volgers opriep om voorlopig geen kraanwater meer te drinken in het overstroomde gebied.",
      "De oorspronkelijke waarschuwing komt van drinkwaterbedrijf WML, dat na de overstroming verhoogde vervuilingswaarden mat en daarop een officieel kookadvies afgaf.",
      "Op lokale Facebookgroepen werd de oproep duizenden keren gedeeld, vaak met de toevoeging 'deel dit met iedereen die je kent'.",
    ],
    correctSectionIndex: 1,
    explanation:
      "De oproep wordt het hardst verspreid door een weerinfluencer en Facebookgroepen, maar dat zijn doorgevers, geen bron. De waarschuwing komt oorspronkelijk van drinkwaterbedrijf WML, dat zelf de metingen deed — dáár komt de claim vandaan en dat is de controleerbare bron.",
  },
];
