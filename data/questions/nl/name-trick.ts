import type { NameTrickQuestion } from '../../questions';
import { social } from '../helpers';

export const nameTrickQuestions: NameTrickQuestion[] = [
  // ─────────────────────────── DIFFICULTY 1 ───────────────────────────

  {
    id: 'nt-d1-1',
    type: 'name-trick',
    xp: 50,
    difficulty: 1,
    content: social('nt-d1-1', {
      sourceName: 'Voedselveiligheid Nu',
      handle: '@voedselnu',
      followerCount: '5.3K volgers',
      text: '🚨 STOP MET ETEN!! Spinazie van Albert Heijn BESMET met gevaarlijke E.coli — mijn buurvrouw is al opgenomen!! GOOI HET WEG en waarschuw iedereen in je buurt!! Dit is URGENT!!',
    }),
    options: [
      'Speelt in op angst',
      'Zegt dat je maar twee opties hebt',
      'Wijst één groep aan als schuldige',
      'Stelt verdachte vragen',
    ],
    correctIndex: 0,
    explanation: 'Dit bericht maakt je bang met hoofdletters, uitroeptekens en een anoniem ooggetuigenverhaal. Er staat geen officiële recall bij, geen naam, geen bron. Angst vervangt bewijs.',
  },

  {
    id: 'nt-d1-2',
    type: 'name-trick',
    xp: 50,
    difficulty: 1,
    content: social('nt-d1-2', {
      sourceName: 'ReizigersRecht NL',
      handle: '@reizigersrecht',
      followerCount: '9.1K volgers',
      text: 'Een oud-medewerker van ProRail vertelde mij dat de constante treinvertragingen bewust in stand worden gehouden om extra subsidies te rechtvaardigen. Dit schijnt al jaren zo te gaan. Ze willen niet dat dit uitkomt.',
    }),
    options: [
      'Maakt je bang',
      'Beroept zich op iemand die je niet kunt controleren',
      'Geeft één groep overal de schuld van',
      'Suggereert dat er maar twee keuzes zijn',
    ],
    correctIndex: 1,
    explanation: 'De post noemt een \'oud-medewerker van ProRail\' maar geeft geen naam, functie of bewijs. Je kunt niet controleren of deze persoon echt bestaat of dit echt gezegd heeft. Een onbekende expert is geen bewijs.',
  },

  {
    id: 'nt-d1-3',
    type: 'name-trick',
    xp: 50,
    difficulty: 1,
    content: social('nt-d1-3', {
      sourceName: 'Zorg voor Nederlanders',
      handle: '@zorgvnl',
      followerCount: '16K volgers',
      text: 'Wachtlijsten bij de huisarts zo lang? Simpel: praktijken zitten overvol door mensen die hier nooit premie hebben betaald. Nederlandse patiënten betalen al jaren de prijs. Zo werkt het systeem.',
    }),
    options: [
      'Wekt angst op',
      'Stelt vragen in plaats van beschuldigingen',
      'Geeft één groep de schuld van een complex probleem',
      'Citeert een expert die je niet kunt nagaan',
    ],
    correctIndex: 2,
    explanation: 'Wachtlijsten hebben complexe oorzaken: personeelstekort, vergrijzing, budgetten, bureaucratie. De post gooit dat in één zin op één groep. Zo werkt schuldaanwijzing: een ingewikkeld probleem krijgt een makkelijk doelwit.',
  },

  {
    id: 'nt-d1-4',
    type: 'name-trick',
    xp: 50,
    difficulty: 1,
    content: social('nt-d1-4', {
      sourceName: 'Woningmarkt NL',
      handle: '@woningmarktnl',
      followerCount: '28K volgers',
      text: 'Kies: je betaalt €1.600 huur per maand en raakt financieel alles kwijt, of je koopt een huis van €450.000 en gaat tientallen jaren diep in de schulden. Dit zijn je enige twee opties in 2025. Succes ermee.',
    }),
    options: [
      'Speelt in op je gevoel',
      'Citeert een onbekende expert',
      'Geeft een groep de schuld',
      'Zegt dat er maar twee keuzes zijn',
    ],
    correctIndex: 3,
    explanation: 'De post noemt twee extreme opties als de enige keuzes. Maar er zijn altijd meer mogelijkheden: huurtoeslag, sociale huur, gedeeld eigendom, verhuizen naar een andere regio. Door alternatieven weg te laten, creëert de post een gevoel van hopeloosheid.',
  },

  // ─────────────────────────── DIFFICULTY 2 ───────────────────────────

  {
    id: 'nt-d2-1',
    type: 'name-trick',
    xp: 80,
    difficulty: 2,
    content: social('nt-d2-1', {
      sourceName: 'Groningen Spreekt',
      handle: '@groningenspreekt',
      followerCount: '12K volgers',
      text: 'Ik zeg niet dat het opzet is. Maar is het niet opvallend dat de zwaarste aardbevingen in Groningen precies samenvielen met de piekjaren van de gaswinning? En dat dezelfde politici die de winning goedkeurden nu verklaren dat er \'onvoldoende bewijs\' is voor een verband? Ik stel alleen maar vragen. #Groningen #gaswinning 🤔',
    }),
    options: [
      'Stelt beschuldigende vragen zonder iets te hoeven bewijzen',
      'Speelt in op angst en onzekerheid',
      'Wijst één partij als schuldige aan',
      'Noemt een niet-verifieerbare expert',
      'Schetst een vals dilemma',
    ],
    correctIndex: 0,
    explanation: 'De post stelt alleen vragen en trekt nooit een conclusie. Maar de vragen samen suggereren opzet en bedrog. Door nooit een bewering te doen, hoeft de schrijver niets te bewijzen — de lezer trekt de conclusie zelf.',
  },

  {
    id: 'nt-d2-2',
    type: 'name-trick',
    xp: 80,
    difficulty: 2,
    content: social('nt-d2-2', {
      sourceName: 'Klimaat & Recht NL',
      handle: '@klimaatrecht',
      followerCount: '23K volgers',
      text: 'Gisteren werden studenten van begin twintig hardhandig van straat gesleurd terwijl ze vredig demonstreerden voor hun toekomst. Ze kregen traangas in het gezicht. Gewone jongeren die niets anders deden dan schreeuwen dat ze willen overleven. Dit is hoe onze overheid hun toekomst beschermt. Schaam je.',
    }),
    options: [
      'Wijst de overheid aan als schuldige',
      'Wekt verontwaardiging op als vervanging voor bewijs',
      'Citeert een niet-controleerbare getuige',
      'Schetst een vals dilemma',
      'Stelt beschuldigende vragen',
    ],
    correctIndex: 1,
    explanation: 'Het bericht gebruikt specifieke details om verontwaardiging op te wekken, maar noemt geen bron, officieel rapport of naam. De emotionele kracht van het verhaal is bedoeld om verificatie overbodig te laten lijken.',
  },

  {
    id: 'nt-d2-3',
    type: 'name-trick',
    xp: 80,
    difficulty: 2,
    content: social('nt-d2-3', {
      sourceName: 'Energie Waakhond',
      handle: '@energiewaakhond',
      followerCount: '7.8K volgers',
      text: 'Een voormalig directeur van een groot energiebedrijf — die anoniem wil blijven uit angst voor zijn pensioen — liet mij weten dat de energieprijzen de afgelopen drie jaar kunstmatig zijn opgehoogd met minimaal 40%. De winstmarges voor aandeelhouders zijn nog nooit zo hoog geweest. Hij durft niet met zijn naam naar buiten. Dat zegt genoeg.',
    }),
    options: [
      'Speelt in op angst en urgentie',
      'Stelt beschuldigende vragen',
      'Noemt een anonieme, niet-controleerbare expert',
      'Schetst een vals dilemma: slechts twee opties',
      'Wijst één industrie als schuldige aan',
    ],
    correctIndex: 2,
    explanation: 'De post noemt een \'voormalig directeur\' die anoniem wil blijven. Je kunt zijn identiteit, zijn functie en zijn cijfers (40%) niet controleren. Hoe specifieker een anonieme bron klinkt, hoe geloofwaardiger hij lijkt — maar anoniem blijft anoniem.',
  },

  {
    id: 'nt-d2-4',
    type: 'name-trick',
    xp: 80,
    difficulty: 2,
    content: social('nt-d2-4', {
      sourceName: 'Patiënten Stem NL',
      handle: '@patientenstem',
      followerCount: '18K volgers',
      text: 'De situatie is helder: óf het kabinet grijpt deze week in en dwingt farmaceutische bedrijven tot directe levering van insuline en andere levensreddende medicijnen, óf er vallen de komende maanden doden onder chronisch zieken. Er is geen derde optie. Politici, de bal ligt bij jullie.',
    }),
    options: [
      'Speelt in op angst',
      'Noemt een niet-verifieerbare expert',
      'Wijst de farmaceutische industrie als schuldige aan',
      'Schetst een vals dilemma: alsof er maar twee opties zijn',
      'Stelt beschuldigende vragen',
    ],
    correctIndex: 3,
    explanation: 'De post presenteert twee opties alsof er geen alternatieven zijn: direct ingrijpen of mensen sterven. In werkelijkheid zijn er meer mogelijkheden — noodvoorraden, Europese inkoop, tijdelijke regelingen. Het vals dilemma creëert kunstmatige urgentie.',
  },

  // ─────────────────────────── DIFFICULTY 3 ───────────────────────────

  {
    id: 'nt-d3-1',
    type: 'name-trick',
    xp: 110,
    difficulty: 3,
    content: social('nt-d3-1', {
      sourceName: 'Vrij & Onafhankelijk NL',
      handle: '@vrijennl',
      followerCount: '54K volgers',
      text: 'De explosie in energiekosten, de onbetaalbare boodschappen, de woningmarkt die definitief op slot zit: het zijn geen toevalligheden. Ze zijn het rechtstreekse gevolg van een klimaatbeleid dat werd doorgevoerd zonder mandaat en waarvan de rekening bij de gewone burger terechtkomt. Het sluiten van de Groningse gasvelden, de windmolens, de stikstofregels — het zijn schakels in dezelfde keten. Terwijl multinationals miljarden aan subsidie opstrijken, betaalt het modale huishouden de prijs. De politici die dit beleid verdedigen, doen dat omdat hun financiers er baat bij hebben.',
    }),
    options: [
      'Emotionele manipulatie via verontwaardiging',
      'Scapegoating: meerdere complexe problemen worden aan één agenda toegeschreven',
      'Vals dilemma: slechts twee opties gepresenteerd',
      'Just asking questions: beschuldigingen als vragen verpakt',
      'Onverifieerbare expert geciteerd',
    ],
    correctIndex: 1,
    explanation: 'De post verbindt een breed scala aan problemen — energie, voedsel, wonen, stikstof — aan één oorzaak: het klimaatbeleid. Elk van deze problemen heeft zijn eigen oorzaken en context. Als alles wordt teruggebracht tot dezelfde agenda, zonder bewijs per probleem afzonderlijk, is dat scapegoating.',
  },

  {
    id: 'nt-d3-2',
    type: 'name-trick',
    xp: 110,
    difficulty: 3,
    content: social('nt-d3-2', {
      sourceName: 'Woonrecht Onderzoek',
      handle: '@woononderzoek',
      followerCount: '31K volgers',
      text: 'Het woningtekort staat officieel op 400.000 huizen. Maar wie houdt die statistieken bij? Het CBS — dat rapporteert aan dezelfde overheid die het beleid heeft bepaald. Hoe is het mogelijk dat een land dat twintig jaar geleden nog bouwoverschotten kende, nu ineens een half miljoen huizen tekort heeft? Is het toeval dat dit tekort samenvalt met de periode waarin de migratiestroom het sterkst groeide? Ik zeg niet dat er een verband is. Maar waarom worden die vragen niet gesteld in de Tweede Kamer? Wat heeft de overheid hier te verbergen?',
    }),
    options: [
      'Emotionele manipulatie: verontwaardiging als bewijs',
      'Scapegoating: complexe problemen aan één oorzaak toegeschreven',
      'Vals dilemma: slechts twee opties gepresenteerd',
      'Onverifieerbare expert geciteerd als autoriteit',
      'Just asking questions: beschuldigingen verpakken als neutrale vragen',
    ],
    correctIndex: 4,
    explanation: 'De post stelt zes retorische vragen maar maakt nooit een directe claim. Elke vraag plant een suggestie — het CBS liegt, de overheid verbergt iets — zonder die te hoeven bewijzen. Het slotwoord \'wat heeft de overheid te verbergen?\' is een beschuldiging verpakt als vraag.',
  },

  {
    id: 'nt-d3-3',
    type: 'name-trick',
    xp: 110,
    difficulty: 3,
    content: social('nt-d3-3', {
      sourceName: 'Zorgslachtoffer NL',
      handle: '@zorgslachtoffer',
      followerCount: '44K volgers',
      text: 'Mijn moeder lag 14 maanden op een wachtlijst voor een heupoperatie. In die tijd is ze drie keer gevallen. Ze kan nu nauwelijks meer lopen. Ze is 73 jaar, heeft 47 jaar lang netjes haar zorgpremie betaald en dit is wat ze terugkrijgt. Intussen mag ik van politici horen dat er \'geen geld\' is — terwijl de zorgtoeslag is afgebouwd en de premies elk jaar stijgen. Ze is niet de enige: honderdduizenden ouderen zitten in dezelfde situatie. Ik blijf dit posten totdat iemand in Den Haag wakker wordt.',
    }),
    options: [
      'Emotionele manipulatie: persoonlijke verhalen als vervanging voor bewijs',
      'Vals dilemma: twee opties, geen middenweg',
      'Scapegoating: één groep als schuldige aangewezen',
      'Just asking questions: beschuldigingen als vragen stellen',
      'Onverifieerbare expert geciteerd als autoriteit',
    ],
    correctIndex: 0,
    explanation: 'Het bericht vertelt een indringend persoonlijk verhaal — herkenbaar, gedetailleerd, emotioneel. Maar er zijn geen officiële wachtlijstcijfers, geen naam, geen medische bron. Het verhaal is oprecht bedoeld, maar de emotionele kracht vervangt hier de verificatie.',
  },

  {
    id: 'nt-d3-4',
    type: 'name-trick',
    xp: 110,
    difficulty: 3,
    content: social('nt-d3-4', {
      sourceName: 'Groningen Onderzoeksplatform',
      handle: '@grononderzoek',
      followerCount: '8.2K volgers',
      text: 'Dr. Pieter Klaassens, geofysicus en voormalig adviseur bij een Scandinavisch energieconcern, heeft zijn bevindingen gepubliceerd op zijn persoonlijke onderzoekssite. Zijn conclusie: de aardbevingen in Groningen zijn ernstiger dan officieel gemeld en zullen de komende tien jaar in kracht toenemen, ongeacht of de gaswinning stopt. \'De schade aan de ondergrond is onomkeerbaar,\' aldus Klaassens. \'Bewoners worden stelselmatig misleid over de daadwerkelijke veiligheidsrisico\'s.\' Het rapport circuleert al weken, maar wordt door noch het KNMI noch het ministerie erkend. Dat zegt genoeg.',
    }),
    options: [
      'Emotionele manipulatie via angst en verontwaardiging',
      'Vals dilemma: slechts twee opties gepresenteerd',
      'Onverifieerbare expert: specifiek klinkende autoriteit zonder controleerbare achtergrond',
      'Scapegoating: één instituut als schuldige aangewezen',
      'Just asking questions: beschuldigingen als vragen verpakt',
    ],
    correctIndex: 2,
    explanation: '\'Dr. Pieter Klaassens\' klinkt gezaghebbend — geofysicus, voormalig adviseur, specifieke cijfers. Maar je kunt zijn rapport niet vinden in wetenschappelijke databases, zijn achtergrond niet verifiëren en zijn instituut niet traceren. Hoe concreter een expert klinkt, hoe geloofwaardiger hij lijkt — maar dat maakt hem nog niet verifieerbaar.',
  },
];
