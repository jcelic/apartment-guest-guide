import {
  LuWaves,
  LuUtensils,
  LuShoppingBasket,
  LuHeartPulse,
  LuLandmark,
} from 'react-icons/lu';

import kolovareImg from '../assets/explore/kolovare.webp';
import uskokImg from '../assets/explore/uskok.webp';
import borikImg from '../assets/explore/borik.webp';
import butlerImg from '../assets/explore/butler.webp';
import harborImg from '../assets/explore/harbor.webp';
import bruschettaImg from '../assets/explore/bruschetta.webp';
import fosaImg from '../assets/explore/fosa.webp';
import kantunaImg from '../assets/explore/kantuna.webp';
import gardenImg from '../assets/explore/garden.webp';
import supernovaImg from '../assets/explore/supernova.webp';
import lidlImg from '../assets/explore/lidl.webp';
import kauflandImg from '../assets/explore/kaufland.webp';
import cityGalleriaImg from '../assets/explore/city-galleria.webp';
import seaOrganImg from '../assets/explore/sea-organ.webp';
import greetingSunImg from '../assets/explore/greeting-sun.webp';
import donatImg from '../assets/explore/donat.webp';
import forumImg from '../assets/explore/forum.webp';
import peoplesSquareImg from '../assets/explore/peoples-square.webp';
import kalelargaImg from '../assets/explore/kalelarga.webp';
import cathedralImg from '../assets/explore/cathedral.webp';
import landGateImg from '../assets/explore/land-gate.webp';
import farmaciaImg from '../assets/explore/farmacia.webp';
import jadranPharmacyImg from '../assets/explore/jadran.webp';
import emergencyImg from '../assets/explore/hitna.webp';
import touristClinicImg from '../assets/explore/dezurna.webp';

export const exploreCategories = [
  { id: 'beaches', labelKey: 'explore.categories.beaches', icon: LuWaves },
  { id: 'food', labelKey: 'explore.categories.food', icon: LuUtensils },
  {
    id: 'stores',
    labelKey: 'explore.categories.stores',
    icon: LuShoppingBasket,
  },
  {
    id: 'attractions',
    labelKey: 'explore.categories.attractions',
    icon: LuLandmark,
  },
  {
    id: 'health',
    labelKey: 'explore.categories.health',
    icon: LuHeartPulse,
  },
];

export const exploreData = {
  beaches: [
    {
      translationKey: 'kolovare',
      mapsUrl: 'https://maps.google.com/?q=Kolovare+Beach+Zadar',
      image: kolovareImg,
    },
    {
      translationKey: 'borik',
      mapsUrl: 'https://maps.google.com/?q=Borik+Beach+Zadar',
      image: borikImg,
    },
    {
      translationKey: 'uskok',
      mapsUrl: 'https://maps.app.goo.gl/WmZobm7i33KhZTTR8',
      image: uskokImg,
    },
  ],

  food: [
    {
      translationKey: 'butler',
      mapsUrl:
        'https://maps.google.com/?q=Butler+Gourmet+Cocktails+Garden+Zadar',
      image: butlerImg,
    },
    {
      translationKey: 'harbor',
      mapsUrl: 'https://maps.google.com/?q=Harbor+CookHouse+Zadar',
      image: harborImg,
    },
    {
      translationKey: 'bruschetta',
      mapsUrl: 'https://maps.google.com/?q=Restaurant+Bruschetta+Zadar',
      image: bruschettaImg,
    },
    {
      translationKey: 'fosa',
      mapsUrl: 'https://maps.google.com/?q=Restaurant+Fosa+Zadar',
      image: fosaImg,
    },
    {
      translationKey: 'kantuna',
      mapsUrl: 'https://maps.google.com/?q=4+Kantuna+Zadar',
      image: kantunaImg,
    },
    {
      translationKey: 'garden',
      mapsUrl: 'https://maps.google.com/?q=The+Garden+Lounge+Zadar',
      image: gardenImg,
    },
  ],

  stores: [
    {
      translationKey: 'supernova',
      mapsUrl: 'https://maps.google.com/?q=Supernova+Zadar',
      image: supernovaImg,
    },
    {
      translationKey: 'lidl',
      mapsUrl: 'https://maps.google.com/?q=Lidl+Zadar+Polacisce',
      image: lidlImg,
    },
    {
      translationKey: 'kaufland',
      mapsUrl: 'https://maps.google.com/?q=Kaufland+Zadar',
      image: kauflandImg,
    },
    {
      translationKey: 'cityGalleria',
      mapsUrl: 'https://maps.google.com/?q=City+Galleria+Zadar',
      image: cityGalleriaImg,
    },
  ],

  attractions: [
    {
      translationKey: 'seaOrgan',
      mapsUrl: 'https://maps.google.com/?q=Sea+Organ+Zadar',
      image: seaOrganImg,
    },
    {
      translationKey: 'greetingSun',
      mapsUrl: 'https://maps.google.com/?q=Greeting+to+the+Sun+Zadar',
      image: greetingSunImg,
    },
    {
      translationKey: 'donat',
      mapsUrl: 'https://maps.google.com/?q=St+Donatus+Church+Zadar',
      image: donatImg,
    },
    {
      translationKey: 'forum',
      mapsUrl: 'https://maps.google.com/?q=Roman+Forum+Zadar',
      image: forumImg,
    },
    {
      translationKey: 'peoplesSquare',
      mapsUrl: 'https://maps.google.com/?q=Narodni+Trg+Zadar',
      image: peoplesSquareImg,
    },
    {
      translationKey: 'kalelarga',
      mapsUrl: 'https://maps.app.goo.gl/zJ7NSCbcneK7XWR47',
      image: kalelargaImg,
    },
    {
      translationKey: 'cathedral',
      mapsUrl: 'https://maps.google.com/?q=St+Anastasia+Cathedral+Zadar',
      image: cathedralImg,
    },
    {
      translationKey: 'landGate',
      mapsUrl: 'https://maps.google.com/?q=Land+Gate+Zadar',
      image: landGateImg,
    },
  ],

  health: [
    {
      translationKey: 'farmacia',
      mapsUrl: 'https://maps.google.com/?q=Farmacia+City+Galleria+Zadar',
      image: farmaciaImg,
    },
    {
      translationKey: 'jadranPharmacy',
      mapsUrl: 'https://maps.google.com/?q=Ljekarna+Jadran+Zadar',
      image: jadranPharmacyImg,
    },
    {
      translationKey: 'emergency',
      mapsUrl:
        'https://maps.google.com/?q=Objedinjeni+hitni+bolnicki+prijem+OB+Zadar',
      image: emergencyImg,
    },
    {
      translationKey: 'touristClinic',
      mapsUrl: 'https://maps.app.goo.gl/L7vfsTueeBXGpgeUA',
      image: touristClinicImg,
    },
  ],
};
