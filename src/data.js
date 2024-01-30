import workImage1 from './images/doga.png';
import workImage2 from './images/wordgame.jpg';
import workImage3 from './images/pizza.jpeg';
import workImage4 from './images/spinwheel.png';
import workImage5 from './images/puzzle.jpeg';
import workImage6 from './images/film.jpg';
import workImage7 from './images/blog.avif';
import IconReact from './images/react.png';
import IconHTML from './images/javascript.png';
import IconCSS from './images/react.png';

export const languageIcons = [
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg',
  'https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg'
];

export const cardData = [
  {
    title: 'DOĞAYLA YAŞAM',
    text: 'Doğayla uyumlu  ve bilinçli yaşam için ',
    image: workImage1,
    link: 'https://bbc-blog.vercel.app/',
    icons: [
      { id: 1, img: IconCSS  },
      { id: 2, img: IconHTML },
    ]
  },
  {
    title: 'KELİME OYUNU',
    text: 'Kelimelerle zekânı zorla',
    image: workImage2,
    link: 'https://word-games-phi.vercel.app/',
    img: IconReact,
    IconHTML,
    IconCSS
  },
  {
    title: 'THE HUNGER',
    text: 'Lezzetli pizzalar ve çeşitli tadlar',
    image: workImage3,
    link: 'https://the-hunger.vercel.app/',
    img: IconReact,
    IconHTML,
    IconCSS
  },
  {
    title: 'SPIN WHEEL',
    text: 'Çarkı çevir, soruları cevapla ',
    image: workImage4,
    link: 'https://question-wheel.vercel.app/',
    img: IconReact,
    IconHTML,
    IconCSS
  },
  {
    title: 'PUZZLE GAME',
    text: 'Zihinsel becerilerini sına',
    image: workImage5,
    link: 'https://puzzle-new.vercel.app/',
    img: IconReact,
    IconHTML,
    IconCSS
  },
  {
    title: 'FAVORİTE MOVİES',
    text: 'Sevilen filmleri favorile',
    image: workImage6,
    link: 'https://favorite-movies-wheat.vercel.app/'
  },
  {
    title: 'BLOG',
    text: 'Yaratıcı içerik ve bilgi dolu blog',
    image: workImage7,
    link: 'https://www.merveozturk.dev/'
  }
];
