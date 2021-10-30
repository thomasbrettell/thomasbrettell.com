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

interface WorkItem {
  name: string;
  description: string;
  image: StaticImageData;
  link: string | 'not-available' | 'coming-soon';
}

export const work: WorkItem[] = [
  {
    name: 'Evolving Forest',
    description: 'A NFT project involving randomly generated fantasy trees.',
    image: EvolvingForestImg,
    link: 'https://evolvingforest.io/',
  },
  {
    name: 'Rainicorn',
    description: 'A cryptocurrency + NFT trading platform and card game.',
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
    name: 'The Limbic',
    description: 'Site for global health news, events and webinars.',
    image: TheLimbicImg,
    link: 'https://www.google.com',
  },
  {
    name: 'Mindr',
    description:
      'Decsission making tool for friends and family to agree on a film to watch.',
    image: MedaxImg,
    link: 'https://www.google.com',
  },
  {
    name: 'Medax',
    description: 'Platform to host Patient Familiarisation Programs.',
    image: MedaxImg,
    link: 'not-available'
  },
  {
    name: 'Switz',
    description: 'Website for an Insurance Firm.',
    image: SwitzImg,
    link: 'https://www.switz.com.au/',
  },
  {
    name: 'Cazna',
    description:
      'Website for an Australian and New Zealand horticulture company.',
    image: CaznaImg,
    link: 'https://www.google.com',
  },
  {
    name: 'Sacred Shapes',
    description: 'Website for a bespoke jewellery company + custom CMS.',
    image: SacredShapesImg,
    link: 'coming-soon'
  },
  {
    name: 'The Company We:Keep',
    description: 'Website for an events company.',
    image: CWKImg,
    link: 'https://www.thecwk.com/',
  },
];

export default work;
