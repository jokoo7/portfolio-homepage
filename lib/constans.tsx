import { Github, Instagram, Linkedin, Mail } from 'lucide-react';

const NAVLINKS = [
  { path: '/projects', label: 'Projects' },
  { path: '/blogs', label: 'Blogs' },
  { path: '/about-me', label: 'About me' },
];

const SOCIALLINKS = [
  { path: '', label: 'Instagram', icon: Instagram },
  { path: '', label: 'Github', icon: Github },
  { path: '', label: 'Linkedln', icon: Linkedin },
  { path: '', label: 'Email', icon: Mail },
];

const PROJECTS = [
  {
    id: 'project1',
    slug: 'nextnime',
    name: 'Redesign project: fitness tracker App Revamp',
    description:
      'Elevating the user experience of a renowned fitness tracker app through a strategic.',
    link: 'https://pro.motion-primitives.com/',
    image: '/project_1.avif',
    images: ['/project_1.avif'],
  },
  {
    id: 'project2',
    slug: 'motion-primitives',
    name: 'Internship project: social dining app design',
    description:
      'Designing a mobile app to connect food enthusiasts through shared dining experiences, from concept to prototype.',
    link: 'https://motion-primitives.com/',
    image: '/project_2.avif',
    images: ['/project_2.avif'],
  },
];

export { NAVLINKS, PROJECTS, SOCIALLINKS };
