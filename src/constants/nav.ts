import night from 'assets/images/mainDarkBg.jpg';
import light from 'assets/images/mainLightBg.jpg';
import theme from 'styles/theme';

export const THEME = [
  {
    theme: '밤',
    background: `${theme.color.darkBlack}`,
    img: night,
  },
  { theme: '낮', background: ``, img: light },
];

export const navItems = [
  {
    title: '독서 투표',
    link: '/',
  },
  {
    title: '책 리스트',
    link: '/',
  },
  {
    title: '발제 작성',
    link: '/',
  },
  {
    title: '구름 꾸미기',
    link: '/goorm',
  },
];
