import Image1 from '../assets/card-1.jpeg';
import Image2 from '../assets/card-2.jpeg';
import Image3 from '../assets/card-3.jpeg';
import Image4 from '../assets/card-4.jpeg';
import Image5 from '../assets/card-5.jpeg';

const cards = [
  {
    id: '1',
    title: 'A Special Thanks',
    summary: '(1) Read the series celebrating MSK heroes who go above and beyond for our patients each and every day.',
    image: Image4,
    imageAlt: 'Card #1 Image Alt Text',
    linkTitle: 'Link #1',
    linkHref: '/a_special_thanks',
  },
  {
    id: '2',
    title: 'A Special Thank You Video for the MSK Giving Community',
    summary: '(2) Read the series celebrating MSK heroes who go above and beyond for our patients each and every day.',
    image: Image3,
    imageAlt: 'Card #2 Image Alt Text',
    linkTitle: 'Link #2',
    linkHref: '/link2',
  },
  {
    id: '3',
    title: 'A Special Thank You Note, from Me to Me, for the MSK Giving Community',
    summary: '(3) Read the series celebrating MSK heroes for our patients each and every day.',
    image: Image1,
    imageAlt: 'Card #3 Image Alt Text',
    linkTitle: 'Link #3',
    linkHref: '#link3',
  },
  {
    id: '4',
    title: 'A Special Thank You to Me!',
    summary: '(4) Read the series celebrating MSK heroes for our patients each and every day.',
    image: Image5,
    imageAlt: 'Card #4 Image Alt Text',
    linkTitle: 'CTA Link #4',
    linkHref: '/link4',
  },
];

export default cards;
