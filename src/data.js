import workImage1 from './images/doga.png';
import workImage2 from './images/wordgame.jpg';
import workImage3 from './images/pizza.jpeg';
import workImage4 from './images/spinwheel.png';
import workImage5 from './images/puzzle.jpeg';
import workImage6 from './images/film.jpg';
import workImage7 from './images/blog.avif';
import IconReact from './images/react.png';
import IconJavascript from './images/javascript.png';
import IconCSS from './images/css.png';
import IconHTML from './images/html.webp';

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
    text:
      ' Sürdürülebilir yaşamı ve insanları doğayla bağlılıklarınızı güçlendirebilirsiniz',
    image: workImage1,
    link: 'https://bbc-blog.vercel.app/',
    icons: [
      { id: 1, img: IconHTML },
      { id: 2, img: IconCSS }
    ]
  },
  {
    title: 'KELİME OYUNU',
    text:
      'Kelime oyunu, İngilizce becerileri geliştiren ve eğlenceli şekilde dilinizi geliştirebilirsiniz',
    image: workImage2,
    link: 'https://word-games-phi.vercel.app/',
    icons: [
      { id: 1, img: IconHTML },
      { id: 2, img: IconCSS },
      { id: 3, img: IconJavascript }

    ]
  },
  {
    title: 'THE HUNGER',
    text:
      'Herkesin vazgeçilmez öğünü olan ve pizzalardan oluşan  bu menü, dilediğiniz pizzayı seçip sipariş verebilirsiniz.',
    image: workImage3,
    link: 'https://the-hunger.vercel.app/',
    icons: [
      { id: 1, img: IconHTML },
      { id: 2, img: IconCSS },
      { id: 2, img: IconReact },
      { id: 3, img: IconJavascript }

    ]
  },
  {
    title: 'SPIN WHEEL',
    text:
      'Çarkı çevir, soruları yanıtla ve bilgi seviyeni test et! Yanlış cevap verildiğinde cezan seni bekliyor ',
    image: workImage4,
    link: 'https://question-wheel.vercel.app/',
    icons: [
      { id: 1, img: IconHTML },
      { id: 2, img: IconCSS },
      { id: 3, img: IconJavascript }

    ]
  },
  {
    title: 'PUZZLE GAME',
    text:
      'Bu oyun, zihinsel becerilerinizi sınayacak ve sizi bulmacaların büyülü dünyasına götürecek',
    image: workImage5,
    link: 'https://puzzle-new.vercel.app/',
    icons: [
      { id: 1, img: IconHTML },
      { id: 2, img: IconCSS },
      { id: 3, img: IconJavascript }

    ]
  },
  {
    title: 'FAVORİTE MOVİES',
    text:
      'En sevdiğin filmleri bulmak artık daha kolay! Favori filmlerini işaretle ve istediğin zaman izle',
    image: workImage6,
    link: 'https://favorite-movies-wheat.vercel.app/',
    icons: [
      { id: 1, img: IconHTML },
      { id: 2, img: IconCSS },
      { id: 3, img: IconJavascript },
      { id: 3, img: IconReact }

    ]
  },
  {
    title: 'BLOG',
    text:
      'Eğitim sitesi, yazılım sektöründe donanımlı uzmanları yetiştiren bir uygulamadır',
    image: workImage7,
    link: 'https://www.merveozturk.dev/',
    icons: [
      { id: 1, img: IconHTML },
      { id: 2, img: IconCSS },
      { id: 3, img: IconJavascript }

    ]
  }
];
