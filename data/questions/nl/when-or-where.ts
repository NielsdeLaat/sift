import type { WhenOrWhereQuestion } from '../../questions';
import { social, article } from '../helpers';

export const whenOrWhereQuestions: WhenOrWhereQuestion[] = [
  // ─────────────────────────── DIFFICULTY 1 ───────────────────────────

  // ── IMAGE BRIEF ──────────────────────────────────────────────────────
  // TYPE:    FIND (real CC0 photo)
  // SCENE:   A protest or crowd scene with the Brussels Atomium clearly
  //          visible in the background. Ideally a wide shot so both the
  //          crowd and the landmark are in frame. Daytime.
  // SOURCE:  Wikimedia Commons — search "Brussels protest Atomium" or
  //          "Belgian farmer protest 2022 Brussel". The Atomium is
  //          distinctive enough that any crowd photo showing it works.
  //          Alternative: Brussels Grand-Place architecture (gothic façades
  //          with golden details) would also be recognisable at D1 level.
  // CLUE:    The Atomium (or Brussels city hall) is unmistakably not Dutch.
  // CRISIS:  Boerenprotesten 2022 — Brussels protest footage misattributed
  //          to the Dutch protests (source library #4)
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'wow-d1-1',
    type: 'when-or-where',
    xp: 60,
    difficulty: 1,
    subtype: 'where',
    content: social('wow-d1-1', {
      avatarUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=boeren_ooggetuige',
      sourceName: 'Boeren Ooggetuige 🚜',
      handle: '@boeren_ooggetuige',
      followerCount: '4,2K volgers',
      publishedAt: '14 dec. 2022',
      text: 'Boeren protesteren bij het Malieveld in Den Haag, gisteren vastgelegd door een toeschouwer.',
      imageUrl: 'https://picsum.photos/seed/wow-d1-1/800/450',
    }),
    options: [
      'Den Haag, Nederland (zoals beweerd)',
      'Brussel, België',
      'Amsterdam, Nederland',
      'Parijs, Frankrijk',
    ],
    correctIndex: 1,
    explanation:
      'Het Atomium — het iconische gebouw van de Brusselse Wereldtentoonstelling — is zichtbaar op de achtergrond. Dat staat in Brussel, niet in Den Haag. Geolokalisatie begint altijd met het zoeken naar herkenbare elementen in het beeld: gebouwen, monumenten, straatnamen of verkeerstekens die de locatie vastleggen. Hier is de landmark onmiskenbaar.',
  },

  // ── IMAGE BRIEF ──────────────────────────────────────────────────────
  // TYPE:    FIND (real CC0 photo)
  // SCENE:   A flooded or waterlogged Dutch street or neighbourhood in
  //          winter. Key visual clues must be clearly visible:
  //          — snow on car rooftops and flat surfaces
  //          — bare deciduous trees (no leaves)
  //          — people in heavy winter coats
  //          Floodwater and winter conditions simultaneously.
  // SOURCE:  Wikimedia Commons — "Netherlands winter flood" or
  //          "Dutch flooding January". Some images exist from the 1995
  //          and 2003 winter floods along the Maas/Waal.
  //          Alternative: any CC0 Dutch winter street flood scene.
  // CLUE:    Snow + bare trees = impossible in August.
  // CRISIS:  Generic Dutch winter flooding — claimed as summer event
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'wow-d1-2',
    type: 'when-or-where',
    xp: 60,
    difficulty: 1,
    subtype: 'when',
    content: article('wow-d1-2', {
      sourceName: 'De Gelderlander',
      domain: 'gelderlander.nl',
      headline: 'Wateroverlast treft woonwijken rondom Tiel',
      byline: 'Redactie Regio',
      publishedAt: '27 aug.',
      excerpt: 'Hevige regenval zorgde afgelopen augustus voor overlast in meerdere straten rond Tiel. Bewoners deelden beelden van ondergelopen straten en tuinen.',
    }),
    options: [
      'Augustus, afgelopen zomer (zoals beweerd)',
      'September 2023',
      'Januari 2024',
      'Oktober 2022',
    ],
    correctIndex: 2,
    explanation:
      'Op de daken en auto\'s ligt duidelijk sneeuw, en de bomen zijn kaal. In augustus is het in Nederland zomers warm — sneeuw en kale bomen horen bij de winter. Het seizoen van een foto is een van de makkelijkste chronolokalisaties: natuur liegt niet over de tijd van het jaar.',
  },

  // ─────────────────────────── DIFFICULTY 2 ───────────────────────────

  // ── IMAGE BRIEF ──────────────────────────────────────────────────────
  // TYPE:    FIND (real CC0 photo)
  // SCENE:   A protest march or demonstration in the centre of Utrecht,
  //          with the Dom Tower clearly visible in the background —
  //          but not immediately obvious. It should be visible but
  //          require the player to scan the image rather than being
  //          the dominant feature.
  // SOURCE:  Wikimedia Commons — "Utrecht demonstration Dom Tower" or
  //          "Utrecht protest centrum". Many CC-BY images exist of
  //          political demonstrations in Utrecht.
  //          The Dom Tower must be identifiable (tall, gothic, brown stone).
  // CLUE:    Dom Tower = Utrecht. Den Haag has no such tower.
  // CRISIS:  Generic Dutch political demonstration
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'wow-d2-1',
    type: 'when-or-where',
    xp: 70,
    difficulty: 2,
    subtype: 'where',
    content: article('wow-d2-1', {
      sourceName: 'NRC',
      domain: 'nrc.nl',
      headline: 'Duizenden demonstranten trekken naar het Binnenhof in Den Haag',
      byline: 'Thomas van den Berg',
      publishedAt: '2 nov. 2023',
      excerpt: 'Een grote groep demonstranten marcheerde vrijdag door het stadscentrum in de richting van het Binnenhof om te protesteren tegen het klimaatbeleid.',
    }),
    options: ['Den Haag (zoals beweerd)', 'Amsterdam', 'Rotterdam', 'Utrecht'],
    correctIndex: 3,
    explanation:
      'In de achtergrond is de Domtoren zichtbaar — het herkenningspunt van Utrecht. Den Haag heeft geen domtoren. Geolokalisatie op D2-niveau werkt door herkenningspunten te zoeken die niet in de bewering staan, maar die wél zichtbaar zijn als je actief scant. De Domtoren is groot genoeg om op te vallen, maar alleen als je verder kijkt dan de voorgrond.',
  },

  // ── IMAGE BRIEF ──────────────────────────────────────────────────────
  // TYPE:    FIND (real CC0 photo)
  // SCENE:   An outdoor Dutch urban scene (street, square, or station
  //          forecourt) in summer, at midday. The key requirement:
  //          shadows must be clearly SHORT — falling almost directly
  //          underneath people and objects (indicating the sun is high,
  //          around 12:00 solar time). Summer daylight, no artificial light.
  // SOURCE:  Any CC0 Dutch outdoor crowd or street photo taken around noon
  //          on a sunny summer day. Pexels/Unsplash — "Dutch street summer
  //          midday" or "Netherlands crowd sunny noon".
  // CLUE:    Short/minimal shadows pointing directly downward = high sun
  //          = around midday. At 21:00, shadows would be very long and low.
  // CRISIS:  2024 riots / incidents Almelo (source library #19)
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'wow-d2-2',
    type: 'when-or-where',
    xp: 70,
    difficulty: 2,
    subtype: 'when',
    content: social('wow-d2-2', {
      avatarUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=almelo_alert',
      sourceName: 'Almelo Alert',
      handle: '@almelo_alert',
      followerCount: '5,7K volgers',
      publishedAt: 'vr. 18 okt.',
      text: 'Opnames van de rellen bij het station in Almelo, afgelopen vrijdag omstreeks 21:00 uur.',
      imageUrl: 'https://picsum.photos/seed/wow-d2-2/800/450',
    }),
    options: [
      '21:00 uur — avond (zoals beweerd)',
      '12:00 uur — hoogste zonnestand',
      '23:00 uur — na zonsondergang',
      '07:00 uur — ochtendlicht',
    ],
    correctIndex: 1,
    explanation:
      'De schaduwen in het beeld vallen bijna recht onder de mensen en objecten — dat wijst op een hoge zon: rond het middaguur. Om 21:00 staat de zon in Nederland laag aan de horizon (in de zomer) of is hij al onder (in de winter). Lange, lage schaduwen horen bij avondlicht; korte, bijna afwezige schaduwen horen bij de middag. Schaduwanalyse is een van de kernmethoden van chronolokalisatie.',
  },

  // ─────────────────────────── DIFFICULTY 3 ───────────────────────────

  // ── IMAGE BRIEF ──────────────────────────────────────────────────────
  // TYPE:    FIND (real CC0 photo)
  // SCENE:   An outdoor Dutch flooding or waterlogged scene in SUMMER —
  //          the critical requirement: deciduous trees must be in full,
  //          dense GREEN leaf. No bare branches. Long afternoon shadows
  //          (low sun angle) are a bonus clue but the green leaves are
  //          the primary tell.
  //          Can be along a Dutch river (Waal, Maas, IJssel) in summer.
  // SOURCE:  Wikimedia Commons — "Nijmegen high water summer" or
  //          "Netherlands river flood summer green". The 1995 floods
  //          happened in winter (bare trees), but 2016 and 2021 had
  //          some summer flooding events along the Waal.
  // CLUE:    Full green deciduous foliage = cannot be January (winter).
  // CRISIS:  Flooding along the Waal near Nijmegen — claimed as January
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'wow-d3-1',
    type: 'when-or-where',
    xp: 80,
    difficulty: 3,
    subtype: 'when',
    content: article('wow-d3-1', {
      sourceName: 'AD',
      domain: 'ad.nl',
      headline: 'Waal bij Nijmegen buiten oevers getreden: eerste foto\'s van de overstroming',
      byline: 'Maarten Leclercq',
      publishedAt: '3 jan.',
      excerpt: 'De Waal is bij Nijmegen op 3 januari buiten haar oevers getreden. Een fotograaf legde de situatie vast bij het begin van de overstroming.',
    }),
    options: [
      '3 januari — begin van het jaar (zoals beweerd)',
      'Vroege lente — maart',
      'Midden zomer — juli of augustus',
      'Late herfst — november',
    ],
    correctIndex: 2,
    explanation:
      'De bomen in het beeld staan vol met dicht groen loofblad. In januari zijn loofbomen in Nederland volledig kaal — ze krijgen pas weer blad vanaf april. Volledig groen loofblad sluit de winter én de herfst uit en wijst op de zomer. Seizoensgebonden vegetatie is een subtielere maar betrouwbare methode voor chronolokalisatie: bomen liegen niet over de maand.',
  },

  // ── IMAGE BRIEF ──────────────────────────────────────────────────────
  // TYPE:    FIND (real CC0 photo)
  // SCENE:   A street scene or crowd at night in a Dutch city, with a
  //          tram clearly visible — ideally a Rotterdam RET tram
  //          (yellow-grey livery) or any Dutch city tram.
  //          The tram should be identifiable but not the dominant
  //          element — visible in background or passing through frame.
  // SOURCE:  Wikimedia Commons — "Rotterdam RET tram night" or
  //          "Dutch tram street protest". Rotterdam trams have a
  //          distinctive yellow-grey colour scheme.
  // CLUE:    Eindhoven has NO tram network. Visible tram = Randstad city.
  //          Rotterdam-specific livery (RET, yellow-grey) = Rotterdam.
  // CRISIS:  2024 incidents / unrest Eindhoven (source library #19)
  // ─────────────────────────────────────────────────────────────────────
  {
    id: 'wow-d3-2',
    type: 'when-or-where',
    xp: 80,
    difficulty: 3,
    subtype: 'where',
    content: social('wow-d3-2', {
      avatarUrl: 'https://api.dicebear.com/7.x/identicon/svg?seed=eindhoven_nieuws',
      sourceName: 'Eindhoven Nieuws',
      handle: '@eindhoven_nieuws',
      followerCount: '21,4K volgers',
      publishedAt: 'gisteren',
      text: 'Ooggetuigenbeelden van rellen voor het Centraal Station in Eindhoven, gisteravond.',
      imageUrl: 'https://picsum.photos/seed/wow-d3-2/800/450',
    }),
    options: [
      'Eindhoven (zoals beweerd)',
      'Amsterdam',
      'Den Haag',
      'Rotterdam',
    ],
    correctIndex: 3,
    explanation:
      'In het beeld is een stadstram zichtbaar met het geel-grijze kleurschema van de RET — het Rotterdamse vervoersbedrijf. Eindhoven heeft geen tramnetwerk: het openbaar vervoer rijdt er uitsluitend op bussen. Als je infrastructuur in beeld ziet die geografisch onmogelijk is op de geclaimde locatie, heb je een locatiefout gevonden. De kleur en het type voertuig helpen bovendien om de échte stad te bepalen.',
  },
];
