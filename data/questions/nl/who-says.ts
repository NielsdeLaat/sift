import type { WhoSaysQuestion } from '../../questions';
import { social, article } from '../helpers';

export const whoSaysQuestions: WhoSaysQuestion[] = [
  // ─────────────────────────── DIFFICULTY 1 ───────────────────────────

  {
    id: 'ws-d1-1',
    type: 'who-says',
    xp: 65,
    difficulty: 1,
    content: article('ws-d1-1', {
      sourceName: 'NOS Nieuws',
      domain: 'nos.nl',
      headline: 'Dagelijks koffie drinken verkleint kans op Alzheimer met twintig procent',
      publishedAt: '14 mei 2024',
      excerpt: 'Nieuwe studie richt zich op de verbanden tussen cafeïnegebruik en cognitieve gezondheid op lange termijn.',
    }),
    sections: [
      'Onderzoekers van de Harvard Medical School publiceerden gisteren een studie in het wetenschappelijk tijdschrift The Lancet. Zij volgden 50.000 mensen gedurende tien jaar en keken naar hun koffiegebruik en cognitieve achteruitgang.',
      'Deelnemers die dagelijks twee tot drie koppen koffie dronken, hadden gemiddeld twintig procent minder kans op de ziekte van Alzheimer dan niet-koffiedrinkers.',
      'Een woordvoerder van Douwe Egberts liet weten blij te zijn met de uitkomsten en gaf aan verdere studies financieel te willen ondersteunen.',
    ],
    correctSectionIndex: 0,
    explanation:
      'De eerste alinea noemt de bron: onderzoekers van de Harvard Medical School, gepubliceerd in The Lancet. Dat is een gerenommeerd peer-reviewed tijdschrift — dit is de verificeerbare bron van de claim. De woordvoerder van Douwe Egberts heeft er financieel belang bij en is geen onafhankelijke bron.',
  },

  {
    id: 'ws-d1-2',
    type: 'who-says',
    xp: 65,
    difficulty: 1,
    content: social('ws-d1-2', {
      avatarUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=rtlnieuws',
      sourceName: 'RTL Nieuws',
      handle: '@rtlnieuws',
      followerCount: '1,2M volgers',
      text: 'Huizenprijzen stegen in het eerste kwartaal van 2024 met gemiddeld 8,3 procent — het hoogste kwartaalcijfer in drie jaar.',
      imageUrl: 'https://picsum.photos/seed/ws-d1-2/800/400',
    }),
    sections: [
      'Dat blijkt uit nieuwe cijfers van het Centraal Bureau voor de Statistiek (CBS), die dinsdag zijn gepubliceerd. Het CBS houdt al decennia de woningmarkt bij via kwartaalrapportages.',
      'Makelaarsvereniging NVM verwacht dat prijzen de rest van het jaar verder zullen stijgen door een aanhoudend tekort aan woningen in de Randstad.',
      'De gemeente Amsterdam overweegt nieuwe maatregelen om starters te helpen bij de aankoop van een eerste woning, maar concrete plannen zijn er nog niet.',
    ],
    correctSectionIndex: 0,
    explanation:
      'De eerste alinea benoemt de bron expliciet: het CBS, een onafhankelijk statistisch overheidsorgaan. De NVM is een brancheorganisatie van makelaars die er belang bij heeft dat de markt positief klinkt. De gemeente Amsterdam doet uitspraken over beleid, niet over de prijscijfers zelf.',
  },

  // ─────────────────────────── DIFFICULTY 2 ───────────────────────────

  {
    id: 'ws-d2-1',
    type: 'who-says',
    xp: 85,
    difficulty: 2,
    content: article('ws-d2-1', {
      sourceName: 'EconomieVandaag',
      domain: 'economievandaag.nl',
      headline: 'Rapport: goedkope Chinese zonnepanelen schaden Nederlandse maakindustrie',
      publishedAt: '3 juni 2024',
      excerpt: 'Europese producenten klagen over toenemende concurrentiedruk van Chinese aanbieders op de groene energiemarkt.',
    }),
    sections: [
      'Een nieuw rapport concludeert dat de invoer van goedkope zonnepanelen uit China de Nederlandse maakindustrie ernstig schaadt en duizenden banen bedreigt.',
      'Het rapport is opgesteld door het Verbond van de Nederlandse Maakindustrie (VNM), de branchevereniging die de belangen behartigt van Nederlandse fabrikanten van onder meer zonnepanelen.',
      'Wetenschappers van de TU Delft ondersteunen de zorgen over eerlijke concurrentie in een apart persbericht, al noemen ze de gehanteerde methode in het rapport \'te beperkt\'.',
      'De Europese Commissie overweegt importtarieven om Europese producenten te beschermen en zou het rapport hebben ontvangen.',
    ],
    correctSectionIndex: 1,
    explanation:
      'De tweede alinea onthult wie het rapport heeft opgesteld: het VNM, de brancheorganisatie van dezelfde fabrikanten die door de conclusie worden bevoordeeld. Dat is een directe belangenverstrengeling — de I van IMVAIN (Independent) faalt. De naam \'rapport\' klinkt neutraal, maar de afzender bepaalt de betrouwbaarheid.',
  },

  {
    id: 'ws-d2-2',
    type: 'who-says',
    xp: 85,
    difficulty: 2,
    content: article('ws-d2-2', {
      sourceName: 'GezondheidNU',
      domain: 'gezondheidnu.nl',
      headline: 'Arts: mondkapjes gevaarlijker dan het virus zelf',
      publishedAt: '11 april 2024',
      excerpt: 'De medische wereld is verdeeld over de rol van mondkapjes in de verspreiding van infectieziekten.',
    }),
    sections: [
      'Internist dr. Annelies Smit claimt op haar persoonlijke gezondheidswebsite dat langdurig mondkapjesgebruik aantoonbare zuurstoftekorten veroorzaakt en schadelijker is dan het virus zelf.',
      'Dr. Smit studeerde geneeskunde aan de Erasmus Universiteit en werkte jarenlang als internist in een ziekenhuis in Dordrecht.',
      'Haar claim is niet gepubliceerd in een medisch tijdschrift en is niet beoordeeld door andere medische experts. Het betreft uitsluitend haar eigen website.',
      'Verschillende Nederlandse ziekenhuizen en de Inspectie Gezondheidszorg en Jeugd (IGJ) onderschrijven de claim niet.',
    ],
    correctSectionIndex: 2,
    explanation:
      'De derde alinea is de sleutel: de claim staat alleen op haar eigen website en is nooit peer-reviewed. Dr. Smit heeft wel een medische achtergrond (alinea 2), maar expertise maakt een claim nog niet geverifieerd. Publicatie buiten peer-reviewed kanalen betekent dat niemand de methode onafhankelijk heeft gecontroleerd — de V van IMVAIN (Verifying) faalt.',
  },

  // ─────────────────────────── DIFFICULTY 3 ───────────────────────────

  {
    id: 'ws-d3-1',
    type: 'who-says',
    xp: 110,
    difficulty: 3,
    content: article('ws-d3-1', {
      sourceName: 'FamilieWijzer',
      domain: 'familiewijzer.nl',
      headline: 'Suiker veroorzaakt ADHD bij kinderen, niet genen',
      publishedAt: '22 maart 2024',
      excerpt: 'Dieetadviezen voor kinderen met gedragsproblemen leiden tot controverse onder ouders en pedagogen.',
    }),
    sections: [
      'Studies tonen aan dat suiker de werkelijke oorzaak is van ADHD bij kinderen. Genetische factoren spelen een veel kleinere rol dan lang werd gedacht.',
      'Kinderen die minder suiker eten, gedragen zich aantoonbaar rustiger en presteren beter op school.',
      'Experts raden ouders aan om suiker volledig uit het dieet van jonge kinderen te verwijderen als eerste stap bij gedragsproblemen.',
    ],
    correctSectionIndex: null,
    explanation:
      'Geen enkele alinea noemt een specifieke studie, instelling, onderzoeker of publicatie die de claim onderbouwt. \'Studies tonen aan\' en \'experts raden aan\' zijn loze formuleringen zonder verwijzing — er is simpelweg geen bron. Dit is een teken van onbetrouwbare content: een bewering zonder aantoonbare herkomst.',
  },

  {
    id: 'ws-d3-2',
    type: 'who-says',
    xp: 110,
    difficulty: 3,
    content: social('ws-d3-2', {
      avatarUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=gezondvrij',
      sourceName: 'Gezond & Vrij',
      handle: '@gezondvrij',
      followerCount: '84K volgers',
      text: 'BEWEZEN: vaccins veroorzaken autisme. Tienduizenden ouders kunnen het bevestigen. De mainstream media praat er niet over.',
    }),
    sections: [
      'Het verband tussen vaccinaties en autisme is volgens de post wetenschappelijk bewezen, al worden de details van het onderzoek niet gedeeld.',
      'Tienduizenden ouders zouden dit bij hun huisarts hebben gemeld na de vaccinatie van hun kind.',
      'De mainstream media en de farmaceutische industrie zouden samenwerken om deze informatie verborgen te houden.',
    ],
    correctSectionIndex: null,
    explanation:
      'Geen enkele alinea verwijst naar een studie, instelling of verifieerbare bron. \'Wetenschappelijk bewezen\' zonder bronvermelding is geen bewijs. Anekdotische meldingen van ouders (alinea 2) zijn geen wetenschappelijke data. En een complotclaim (alinea 3) is geen bron — het verklaart juist waarom er geen bronnen zijn. Er is hier geen bron: kies \'Geen bron vermeld\'.',
  },
];
