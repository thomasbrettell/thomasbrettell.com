import EvolvingForestImg from './assets/work-images/evolving-forest.png';
import RainiImg from './assets/work-images/raini.png';
import ATAImg from './assets/work-images/ata.png';
import NDHSImg from './assets/work-images/ndhs.png';
import TheLimbicImg from './assets/work-images/thelimbic.png';
import CaznaImg from './assets/work-images/cazna.png';
import MedaxImg from './assets/work-images/medax.png';
import SacredShapesImg from './assets/work-images/sacredshapes.png';
import SwitzImg from './assets/work-images/switz.png';
import CWKImg from './assets/work-images/cwk.png';
import SleepOrbitImg from './assets/work-images/sleeporbit.jpg';
import CarbonQuizImg from './assets/work-images/carbonquiz.png';

interface WorkItem {
  name: string;
  description: string;
  image: StaticImageData;
  link?: string;
  notPublic?: boolean;
  comingSoon?: boolean;
}

export const work: WorkItem[] = [
  {
    name: 'Mindr',
    description:
      'Decsission making tool for friends and family to agree on a film to watch.',
    image: MedaxImg,
    link: 'https://www.google.com',
  },
  {
    name: 'National Digital Health Strategy Survey',
    description:
      "Collection of surveys to help guide the future of Australia's digital health approach.",
    image: NDHSImg,
    link: 'https://nationalstrategy.digitalhealth.gov.au/',
  },
  {
    name: 'Medax',
    description: 'Platform to host Patient Familiarisation Programs.',
    image: MedaxImg,
    notPublic: true,
  },
  {
    name: 'Evolving Forest',
    description: 'NFT project involving randomly generated fantasy trees.',
    image: EvolvingForestImg,
    link: 'https://evolvingforest.io/',
  },
  {
    name: 'Rainicorn',
    description: 'Cryptocurrency + NFT trading platform and card game.',
    image: RainiImg,
    link: 'https://www.raini.io/',
  },
  {
    name: 'Australian Tutoring Association',
    description:
      'Platform for parents to find tutors and for tutors to gain qualifications.',
    image: ATAImg,
    link: 'https://ata.college/',
  },
  {
    name: 'National Digital Health Strategy Survey',
    description:
      "Collection of surveys to help guide the future of Australia's digital health approach.",
    image: NDHSImg,
    link: 'https://nationalstrategy.digitalhealth.gov.au/',
  },
  {
    name: 'Sleep Orbit',
    description: 'Concept design for a mental health Space Travel application.',
    image: SleepOrbitImg,
    link: 'https://www.youtube.com/watch?v=kIWMUkRbbkg&ab_channel=ThomasBrettell',
  },
  {
    name: 'The Carbon Quiz',
    description: '3D first person game to learn about Carbon Emissions.',
    image: CarbonQuizImg,
    link: 'https://thomasbrettell.itch.io/the-carbon-quiz-webgl',
  },
  {
    name: 'Switz',
    description: 'Website for an Insurance Firm.',
    image: SwitzImg,
    link: 'https://www.switz.com.au/',
  },
  {
    name: 'The Limbic',
    description: 'Site for global health news, events and webinars.',
    image: TheLimbicImg,
    link: 'https://thelimbic.com/',
  },
  {
    name: 'Cazna',
    description:
      'Website for an Australian and New Zealand horticulture company.',
    image: CaznaImg,
    link: 'https://www.cazna.com.au/',
  },
  {
    name: 'Sacred Shapes',
    description: 'Website for a bespoke jewellery company + custom CMS.',
    image: SacredShapesImg,
    comingSoon: true,
  },
  {
    name: 'The Company We:Keep',
    description: 'Website for an events company.',
    image: CWKImg,
    link: 'https://www.thecwk.com/',
  },
];

export default work;
