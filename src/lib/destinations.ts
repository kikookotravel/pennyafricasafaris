// Destination data
export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  highlights: string[];
  nationalParks: {
    name: string;
    description: string;
    highlights: string[];
  }[];
  bestTime: string;
  visaInfo: string;
  gettingThere: string;
  locale: 'en' | 'de';
}

const destinations: Destination[] = [
  {
    id: 'uganda',
    slug: 'uganda',
    name: 'Uganda',
    tagline: 'The Pearl of Africa',
    locale: 'en',
    description:
      'Uganda, aptly named the Pearl of Africa by Winston Churchill, is a land of extraordinary biodiversity and natural beauty. Home to half the world\'s remaining mountain gorillas, this East African nation offers unparalleled wildlife encounters. From the mist-covered mountains of Bwindi to the vast savannahs of Queen Elizabeth National Park, Uganda delivers authentic safari experiences at budget-friendly prices.',
    heroImage: '/images/tours/gorilla-hero.jpg',
    highlights: [
      'Mountain gorilla trekking in Bwindi Impenetrable Forest',
      'Chimpanzee tracking in Kibale Forest',
      'Tree-climbing lions in Ishasha sector',
      'Source of the Nile River in Jinja',
      'Murchison Falls boat safaris',
      'Shoebill stork viewing',
      'Cultural encounters with local communities',
      '50% of world\'s mountain gorilla population',
    ],
    nationalParks: [
      {
        name: 'Bwindi Impenetrable National Park',
        description: 'UNESCO World Heritage Site home to nearly half the world\'s mountain gorillas.',
        highlights: ['19 habituated gorilla families', 'Bird watching (350+ species)', 'Batwa cultural experiences'],
      },
      {
        name: 'Queen Elizabeth National Park',
        description: 'Uganda\'s most popular savannah park with incredible biodiversity.',
        highlights: ['Tree-climbing lions', 'Kazinga Channel boat safari', 'Chimpanzee tracking'],
      },
      {
        name: 'Murchison Falls National Park',
        description: 'Uganda\'s largest national park featuring the dramatic Murchison Falls.',
        highlights: ['Powerful waterfalls', 'Big Five wildlife', 'Nile boat safaris'],
      },
      {
        name: 'Kibale Forest National Park',
        description: 'The primate capital of the world with highest density of primates in Africa.',
        highlights: ['13 primate species', '95% chimpanzee tracking success rate', 'Bigodi Wetland Sanctuary'],
      },
    ],
    bestTime: 'June-September and December-February (dry seasons). However, gorilla trekking is possible year-round.',
    visaInfo: 'East Africa Tourist Visa: $100 (Uganda, Kenya, Rwanda) or Single Entry: $50. Apply online before arrival.',
    gettingThere: 'Entebbe International Airport (EBB) is the main gateway, 40km from Kampala. Direct flights from major African hubs and Middle Eastern cities.',
  },
  {
    id: 'rwanda',
    slug: 'rwanda',
    name: 'Rwanda',
    tagline: 'Land of a Thousand Hills',
    locale: 'en',
    description:
      'Rwanda has emerged as one of Africa\'s premier safari destinations, combining world-class gorilla trekking with pristine national parks and vibrant culture. Known for its cleanliness, safety, and efficient tourism infrastructure, Rwanda offers luxury safari experiences in an intimate setting. The country\'s commitment to conservation makes it a model for sustainable tourism in Africa.',
    heroImage: '/images/tours/gorilla-family.jpg',
    highlights: [
      'Gorilla trekking in Volcanoes National Park',
      'Golden monkey tracking',
      'Nyungwe Forest chimpanzee trekking',
      'Lake Kivu relaxation',
      'Kigali Genocide Memorial',
      'Africa\'s cleanest capital city',
      'Community-based tourism experiences',
      'Luxury eco-lodges',
    ],
    nationalParks: [
      {
        name: 'Volcanoes National Park',
        description: 'Home to mountain gorillas made famous by Dian Fossey\'s research.',
        highlights: ['10 habituated gorilla families', 'Golden monkey tracking', 'Dian Fossey tomb visit'],
      },
      {
        name: 'Nyungwe Forest National Park',
        description: 'One of Africa\'s oldest rainforests with incredible biodiversity.',
        highlights: ['Chimpanzee tracking', 'Canopy walkway', '300+ bird species'],
      },
      {
        name: 'Akagera National Park',
        description: 'Rwanda\'s only Big Five park in stunning savannah landscape.',
        highlights: ['Big Five wildlife', 'Boat safaris on Lake Ihema', 'Successful conservation story'],
      },
    ],
    bestTime: 'June-September and December-February for dry weather. Gorilla trekking available year-round with advance booking.',
    visaInfo: 'Visa on arrival: $50 or East Africa Tourist Visa: $100 (Rwanda, Kenya, Uganda). Online application available.',
    gettingThere: 'Kigali International Airport (KGL) with connections from major European, African, and Middle Eastern cities. Only 1.5 hours to Volcanoes National Park.',
  },
  {
    id: 'tanzania',
    slug: 'tanzania',
    name: 'Tanzania',
    tagline: 'Home of the Serengeti',
    locale: 'en',
    description:
      'Tanzania encompasses Africa\'s most iconic safari destinations. Witness the Great Migration, explore the Ngorongoro Crater, and climb Africa\'s highest peak. From the endless Serengeti plains to the pristine beaches of Zanzibar, Tanzania offers the complete African experience. This is where safari dreams come true.',
    heroImage: '/images/tours/elephant-hero.jpg',
    highlights: [
      'The Great Migration (2 million wildebeest)',
      'Ngorongoro Crater - world\'s largest intact caldera',
      'Mount Kilimanjaro climbing',
      'Zanzibar beaches and Stone Town',
      'Big Five in multiple parks',
      'Tarangire elephant herds',
      'Lake Manyara tree-climbing lions',
      'Selous Game Reserve (Nyerere National Park)',
    ],
    nationalParks: [
      {
        name: 'Serengeti National Park',
        description: 'World-famous for the Great Migration and highest concentration of large mammals on earth.',
        highlights: ['Great Migration', 'Big Five', 'Hot air balloon safaris'],
      },
      {
        name: 'Ngorongoro Conservation Area',
        description: 'UNESCO World Heritage Site featuring the world\'s largest intact volcanic caldera.',
        highlights: ['Black rhinos', 'Dense wildlife concentration', 'Maasai cultural experiences'],
      },
      {
        name: 'Tarangire National Park',
        description: 'Famous for massive elephant herds and iconic baobab trees.',
        highlights: ['Elephant populations', 'Baobab landscapes', 'Bird paradise (550+ species)'],
      },
      {
        name: 'Lake Manyara National Park',
        description: 'Compact park known for tree-climbing lions and flamingo-filled lake.',
        highlights: ['Tree-climbing lions', 'Flamingos', 'Ground hornbills'],
      },
    ],
    bestTime: 'December-March and June-October. Great Migration timing varies: Western Corridor (May-July), Northern Serengeti (July-October).',
    visaInfo: 'Visa on arrival: $50 or online e-Visa. East Africa Tourist Visa not valid for Tanzania.',
    gettingThere: 'Kilimanjaro International Airport (JRO) for northern circuit or Julius Nyerere International Airport (DAR) in Dar es Salaam. Domestic flights connect to park airstrips.',
  },
  {
    id: 'uganda',
    slug: 'uganda',
    name: 'Uganda',
    tagline: 'Die Perle Afrikas',
    locale: 'de',
    description:
      'Uganda, treffend von Winston Churchill als Perle Afrikas bezeichnet, ist ein Land außergewöhnlicher Biodiversität und natürlicher Schönheit. Als Heimat der Hälfte der weltweit verbliebenen Berggorillas bietet diese ostafrikanische Nation unvergleichliche Tierbegegnungen. Von den nebelbedeckten Bergen Bwindis bis zu den weiten Savannen des Queen Elizabeth Nationalparks liefert Uganda authentische Safari-Erlebnisse zu budgetfreundlichen Preisen.',
    heroImage: '/images/tours/gorilla-hero.jpg',
    highlights: [
      'Berggorilla-Trekking im Bwindi Impenetrable Forest',
      'Schimpansen-Tracking im Kibale-Wald',
      'Baumkletternde Löwen im Ishasha-Sektor',
      'Quelle des Nils in Jinja',
      'Murchison Falls Boots-Safaris',
      'Schuhschnabel-Beobachtung',
      'Kulturelle Begegnungen mit lokalen Gemeinschaften',
      '50% der weltweiten Berggorilla-Population',
    ],
    nationalParks: [
      {
        name: 'Bwindi Impenetrable Nationalpark',
        description: 'UNESCO-Weltkulturerbe, Heimat von fast der Hälfte der weltweiten Berggorillas.',
        highlights: ['19 habituierte Gorilla-Familien', 'Vogelbeobachtung (über 350 Arten)', 'Batwa-Kulturerlebnisse'],
      },
      {
        name: 'Queen Elizabeth Nationalpark',
        description: 'Ugandas beliebtester Savannenpark mit unglaublicher Biodiversität.',
        highlights: ['Baumkletternde Löwen', 'Kazinga-Kanal Boots-Safari', 'Schimpansen-Tracking'],
      },
      {
        name: 'Murchison Falls Nationalpark',
        description: 'Ugandas größter Nationalpark mit den dramatischen Murchison-Fällen.',
        highlights: ['Kraftvolle Wasserfälle', 'Big Five Wildtiere', 'Nil-Boots-Safaris'],
      },
      {
        name: 'Kibale Forest Nationalpark',
        description: 'Die Primatenhauptstadt der Welt mit der höchsten Primatendichte Afrikas.',
        highlights: ['13 Primatenarten', '95% Erfolgsquote beim Schimpansen-Tracking', 'Bigodi Wetland Sanctuary'],
      },
    ],
    bestTime: 'Juni-September und Dezember-Februar (Trockenzeiten). Gorilla-Trekking ist jedoch ganzjährig möglich.',
    visaInfo: 'Ostafrikanisches Touristenvisum: 100 US-Dollar (Uganda, Kenia, Ruanda) oder Einzeleinreise: 50 US-Dollar. Online-Bewerbung vor Ankunft.',
    gettingThere: 'Entebbe International Airport (EBB) ist das Haupttor, 40 km von Kampala entfernt. Direktflüge von wichtigen afrikanischen Drehkreuzen und nahöstlichen Städten.',
  },
  {
    id: 'rwanda',
    slug: 'rwanda',
    name: 'Ruanda',
    tagline: 'Land der tausend Hügel',
    locale: 'de',
    description:
      'Ruanda hat sich zu einem der führenden Safari-Ziele Afrikas entwickelt und kombiniert Weltklasse-Gorilla-Trekking mit unberührten Nationalparks und lebendiger Kultur. Bekannt für seine Sauberkeit, Sicherheit und effiziente Tourismusinfrastruktur bietet Ruanda luxuriöse Safari-Erlebnisse in intimem Rahmen. Das Engagement des Landes für den Naturschutz macht es zu einem Vorbild für nachhaltigen Tourismus in Afrika.',
    heroImage: '/images/tours/gorilla-family.jpg',
    highlights: [
      'Gorilla-Trekking im Volcanoes Nationalpark',
      'Goldmeerkatzen-Tracking',
      'Nyungwe Forest Schimpansen-Trekking',
      'Entspannung am Kivu-See',
      'Kigali Völkermord-Gedenkstätte',
      'Afrikas sauberste Hauptstadt',
      'Community-basierte Tourismus-Erlebnisse',
      'Luxuriöse Öko-Lodges',
    ],
    nationalParks: [
      {
        name: 'Volcanoes Nationalpark',
        description: 'Heimat der Berggorillas, berühmt durch Dian Fosseys Forschung.',
        highlights: ['10 habituierte Gorilla-Familien', 'Goldmeerkatzen-Tracking', 'Besuch von Dian Fosseys Grab'],
      },
      {
        name: 'Nyungwe Forest Nationalpark',
        description: 'Einer der ältesten Regenwälder Afrikas mit unglaublicher Biodiversität.',
        highlights: ['Schimpansen-Tracking', 'Baumkronenpfad', 'Über 300 Vogelarten'],
      },
      {
        name: 'Akagera Nationalpark',
        description: 'Ruandas einziger Big Five Park in atemberaubender Savannenlandschaft.',
        highlights: ['Big Five Wildtiere', 'Boots-Safaris auf dem Ihema-See', 'Erfolgreiche Naturschutzgeschichte'],
      },
    ],
    bestTime: 'Juni-September und Dezember-Februar für trockenes Wetter. Gorilla-Trekking ganzjährig mit Voranmeldung verfügbar.',
    visaInfo: 'Visum bei Ankunft: 50 US-Dollar oder Ostafrikanisches Touristenvisum: 100 US-Dollar (Ruanda, Kenia, Uganda). Online-Bewerbung verfügbar.',
    gettingThere: 'Kigali International Airport (KGL) mit Verbindungen von wichtigen europäischen, afrikanischen und nahöstlichen Städten. Nur 1,5 Stunden zum Volcanoes Nationalpark.',
  },
  {
    id: 'tanzania',
    slug: 'tanzania',
    name: 'Tansania',
    tagline: 'Heimat der Serengeti',
    locale: 'de',
    description:
      'Tansania umfasst Afrikas ikonischste Safari-Destinationen. Erleben Sie die Große Migration, erkunden Sie den Ngorongoro-Krater und besteigen Sie Afrikas höchsten Gipfel. Von den endlosen Serengeti-Ebenen bis zu den unberührten Stränden Sansibars bietet Tansania das komplette afrikanische Erlebnis. Hier werden Safari-Träume wahr.',
    heroImage: '/images/tours/elephant-hero.jpg',
    highlights: [
      'Die Große Migration (2 Millionen Gnus)',
      'Ngorongoro-Krater - weltweit größte intakte Caldera',
      'Kilimandscharo-Besteigung',
      'Sansibar-Strände und Stone Town',
      'Big Five in mehreren Parks',
      'Tarangire-Elefantenherden',
      'Manyara-See baumkletternde Löwen',
      'Selous Game Reserve (Nyerere Nationalpark)',
    ],
    nationalParks: [
      {
        name: 'Serengeti Nationalpark',
        description: 'Weltberühmt für die Große Migration und höchste Konzentration von Großsäugern auf der Erde.',
        highlights: ['Große Migration', 'Big Five', 'Heißluftballon-Safaris'],
      },
      {
        name: 'Ngorongoro Conservation Area',
        description: 'UNESCO-Weltkulturerbe mit der weltweit größten intakten vulkanischen Caldera.',
        highlights: ['Schwarze Nashörner', 'Dichte Wildtierkonzentration', 'Massai-Kulturerlebnisse'],
      },
      {
        name: 'Tarangire Nationalpark',
        description: 'Berühmt für massive Elefantenherden und ikonische Baobab-Bäume.',
        highlights: ['Elefantenpopulationen', 'Baobab-Landschaften', 'Vogelparadies (über 550 Arten)'],
      },
      {
        name: 'Manyara-See Nationalpark',
        description: 'Kompakter Park bekannt für baumkletternde Löwen und flamingogefüllten See.',
        highlights: ['Baumkletternde Löwen', 'Flamingos', 'Hornraben'],
      },
    ],
    bestTime: 'Dezember-März und Juni-Oktober. Große Migration variiert zeitlich: Westlicher Korridor (Mai-Juli), Nördliche Serengeti (Juli-Oktober).',
    visaInfo: 'Visum bei Ankunft: 50 US-Dollar oder Online-e-Visum. Ostafrikanisches Touristenvisum gilt nicht für Tansania.',
    gettingThere: 'Kilimanjaro International Airport (JRO) für nördlichen Circuit oder Julius Nyerere International Airport (DAR) in Daressalam. Inlandsflüge verbinden zu Park-Landebahnen.',
  },
];

export async function getAllDestinations(): Promise<Destination[]> {
  return destinations;
}

export async function getDestination(slug: string): Promise<Destination | null> {
  return destinations.find((d) => d.slug === slug) || null;
}
