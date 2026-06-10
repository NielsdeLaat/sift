import type { UnderTheHoodQuestion } from "../../questions";

export const underTheHoodQuestions: UnderTheHoodQuestion[] = [
  // ─────────────────────────── DIFFICULTY 1 ───────────────────────────
  {
    id: "uth-d1-1",
    type: "under-the-hood",
    xp: 70,
    difficulty: 1,
    content: {
      type: "social",
      avatarUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=boerenalert",
      sourceName: "Boeren Alert 🚜",
      handle: "@boerenalert",
      followerCount: "12,4K volgers",
      publishedAt: undefined,
      text: "LIVE op de A28: tractoren blokkeren de snelweg op dit moment! 🚜🚜 #boerenprotest",
      imageUrl: "images/uth-farmer-highway-protest-2022.jpg",
    },
    items: [
      { label: "Bestandstype", value: "JPEG" },
      {
        label: "Datum en tijd",
        value: "[NIET GEVONDEN — metadata verwijderd]",
      },
      { label: "Cameramodel", value: "Huawei P30 Pro" },
      { label: "GPS-locatie", value: "[NIET GEVONDEN]" },
      {
        label: "Omgekeerd zoeken",
        value: "Geen eerdere afbeeldingen gevonden",
      },
    ],
    correctFlagIndex: 1,
    explanation:
      'Als iemand beweert dat een foto "live" en "op dit moment" is, verwacht je een tijdstempel in de metadata. Die ontbreekt hier volledig — en dat is zelden toeval. Metadata wordt verwijderd als er iets te verbergen valt, zoals een datum die bewijst dat de foto helemaal niet van vandaag is. Een foto zonder datum kan nooit bewijzen dat iets "nu" gebeurt.',
  },
  {
    id: "uth-d1-2",
    type: "under-the-hood",
    xp: 70,
    difficulty: 1,
    content: {
      type: "social",
      avatarUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=wakker_nld",
      sourceName: "Wakker Nederland",
      handle: "@wakker_nld",
      followerCount: "8,9K volgers",
      publishedAt: "16 apr. 2020",
      text: "Dit is de 5G-mast die vannacht in Rotterdam werd aangestoken 🔥 — doorgestuurd van een vriend",
      imageUrl: "/images/uth-mast-fire.jpg",
    },
    items: [
      { label: "Bestandstype", value: "JPEG" },
      { label: "Cameramodel", value: "Samsung Galaxy A52" },
      { label: "Datum genomen", value: "2026-02-08 23:14:02" },
      {
        label: "GPS-locatie",
        value: "51.9244 N, 4.4777 E (Rotterdam, Nederland)",
      },
      {
        label: "Omgekeerd zoeken",
        value: "Geen eerdere afbeeldingen gevonden",
      },
    ],
    correctFlagIndex: 2,
    explanation:
      'De GPS wijst naar Rotterdam en de reverse search vindt niets — dat ziet er goed uit. Maar de datum staat op 16 april 2020. De post beweert dat dit "vannacht" is, maar het tijdstempel is meer dan vijf jaar oud. De datum is de enige item die direct bewijst dat deze foto niet van gisteravond is.',
  },

  // ─────────────────────────── DIFFICULTY 2 ───────────────────────────

  {
    id: "uth-d2-1",
    type: "under-the-hood",
    xp: 80,
    difficulty: 2,
    content: {
      type: "social",
      avatarUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=lokaalalert",
      sourceName: "Lokaal Alert NL",
      handle: "@lokaalalert",
      followerCount: "34,2K volgers",
      publishedAt: "4 okt. 2024",
      text: "Ooggetuigefoto van de rellen bij het asielzoekerscentrum in Almelo, gisteravond",
      imageUrl: "/images/uth-protest-hengelo.jpg",
    },
    items: [
      { label: "Bestandstype", value: "JPEG" },
      { label: "Cameramodel", value: "iPhone 15" },
      { label: "Datum genomen", value: "2024-10-03 21:47:39" },
      {
        label: "GPS-locatie",
        value: "52.2640 N, 6.7935 E (Hengelo, Overijssel)",
      },
      {
        label: "Bewerkingssoftware",
        value: "Geen bewerkingssoftware gedetecteerd",
      },
      {
        label: "Omgekeerd zoeken",
        value: "Geen eerdere afbeeldingen gevonden",
      },
    ],
    correctFlagIndex: 3,
    explanation:
      "De datum klopt qua tijdstip en de software is niet bewerkt — dat ziet er allemaal goed uit. Maar de GPS-coördinaten kloppen niet: de foto is genomen in Hengelo, niet in Almelo. Almelo en Hengelo liggen allebei in Overijssel en zijn maar 14 kilometer uit elkaar — dicht genoeg om iemand te misleiden die de regio niet goed kent. GPS-data is een van de meest betrouwbare metadata-items en raakt zelden toevallig een andere stad.",
  },
  {
    id: "uth-d2-2",
    type: "under-the-hood",
    xp: 80,
    difficulty: 2,
    content: {
      type: "social",
      avatarUrl:
        "https://api.dicebear.com/7.x/identicon/svg?seed=omwonenden_ijmuiden",
      sourceName: "Omwonenden IJmuiden",
      handle: "@omwonenden_ijmuiden",
      followerCount: "2,1K volgers",
      publishedAt: "18 mrt. 2025",
      text: '"Ongecensureerd en onbewerkt bewijs van de echte luchtkwaliteitsmetingen bij het industrieterrein"',
      imageUrl: "/images/uth-tata-steel-ijmuiden.jpg",
    },
    items: [
      { label: "Bestandstype", value: "JPEG" },
      { label: "Cameramodel", value: "Canon EOS R6" },
      { label: "Datum genomen", value: "2025-03-18 14:23:07" },
      {
        label: "GPS-locatie",
        value: "52.4488 N, 4.6267 E (IJmuiden, Nederland)",
      },
      { label: "Bewerkingssoftware", value: "Adobe Photoshop 25.3" },
      {
        label: "Omgekeerd zoeken",
        value: "Geen eerdere afbeeldingen gevonden",
      },
    ],
    correctFlagIndex: 4,
    explanation:
      'De claim is expliciet "ongecensureerd en onbewerkt" — maar de metadata toont Adobe Photoshop 25.3 als bewerkingssoftware. Een echt onbewerkt ooggetuigenbeeld heeft geen bewerkingssoftware in de EXIF-data staan. Photoshop in de metadata bewijst niet dat het beeld nep is, maar het weerlegt direct de claim dat het "onbewerkt bewijs" is.',
  },

  // ─────────────────────────── DIFFICULTY 3 ───────────────────────────

  {
    id: "uth-d3-1",
    type: "under-the-hood",
    xp: 90,
    difficulty: 3,
    content: {
      type: "social",
      avatarUrl:
        "https://api.dicebear.com/7.x/identicon/svg?seed=nijmegen_live",
      sourceName: "NijmegenOnline",
      handle: "@nijmegen_live",
      followerCount: "18,7K volgers",
      publishedAt: "22 mei 2025",
      text: "Bewoner filmt explosie bij het gasdepot in Nijmegen, gisteravond om 02:30 's nachts",
      imageUrl: "/images/uth-gas-explosion-nijmegen.jpg",
    },
    items: [
      { label: "Bestandstype", value: "JPEG" },
      { label: "Cameramodel", value: "Xiaomi 13T Pro" },
      { label: "Datum en tijd", value: "2025-05-21 14:32:07" },
      {
        label: "GPS-locatie",
        value: "51.8583 N, 5.8627 E (Nijmegen, Nederland)",
      },
      {
        label: "Bewerkingssoftware",
        value: "Geen bewerkingssoftware gedetecteerd",
      },
      {
        label: "Omgekeerd zoeken",
        value: "Geen eerdere afbeeldingen gevonden",
      },
    ],
    correctFlagIndex: 2,
    explanation:
      "De GPS klopt met Nijmegen, er is geen bewerkingssoftware, en de datum (21 mei) past bij \"gisteravond\". Alles lijkt in orde — totdat je de tijdcode leest: 14:32:07 is kwart over twee 's middags, niet 's nachts. De post claimt 02:30, maar dat is het 24-uursformaat voor 's nachts. Zoek niet alleen naar een ontbrekend item, maar naar een item dat er goed uitziet totdat je het nauwkeurig leest.",
  },
  {
    id: "uth-d3-2",
    type: "under-the-hood",
    xp: 90,
    difficulty: 3,
    content: {
      type: "social",
      avatarUrl: "https://api.dicebear.com/7.x/identicon/svg?seed=geheim_nl",
      sourceName: "GeheimNL 👁️",
      handle: "@geheim_nl",
      followerCount: "156K volgers",
      publishedAt: "5 mrt. 2025",
      text: "Exclusief gelekte opname van binnenin de NAVO-top vergaderzaal in Den Haag — doorgestuurd door een insider 👀",
      imageUrl: "/images/uth-conference-getty-images.jpg",
    },
    items: [
      { label: "Bestandstype", value: "JPEG" },
      { label: "Cameramodel", value: "Nikon Z9" },
      { label: "Datum genomen", value: "2025-03-04 10:18:44" },
      {
        label: "GPS-locatie",
        value: "52.0799 N, 4.3113 E (Den Haag, Nederland)",
      },
      { label: "Bewerkingssoftware", value: "Adobe Lightroom Classic 13.0" },
      {
        label: "Omgekeerd zoeken",
        value:
          "Afbeelding gevonden op 1 site; vroegste: gettyimages.nl, gepubliceerd 2025-03-04",
      },
    ],
    correctFlagIndex: 5,
    explanation:
      'De GPS wijst naar Den Haag en de datum lijkt plausibel. Maar de reverse search geeft iets belangrijks: het beeld staat op Getty Images — een professioneel stockfotoplatform. Een echte "gelekte exclusieve opname" van een insider zou niet op een commerciële stockfotosite staan. De combinatie van een professionele camera (Nikon Z9), Lightroom-bewerking en een Getty-resultaat wijst op een commercieel persfoto dat opnieuw wordt gebruikt. Reverse search vertelt je niet alleen wánneer een beeld eerder opdook, maar ook in welke context.',
  },
];
