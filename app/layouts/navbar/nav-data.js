import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Articles',
    pathname: '/articles',
  },
];

export const socialLinks = [
  {
    label: 'Photography',
    url: 'https://photography.tomasps.com',
    icon: 'photography',
  },
  {
    label: 'twitter',
    url: `https://twitter.com/toomas_ps/`,
    icon: 'twitter',
  },
  {
    label: 'Mail',
    url: `mailto:contact@tomasps.com`,
    icon: 'email',
  },
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
