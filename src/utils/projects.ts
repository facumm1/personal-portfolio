import inventory from '../assets/inventory.png';
import arroyosWeb from '../assets/2a-web.png';
import arroyosMobile from '../assets/2a-mobile.png';
import pathway from '../assets/pathway.png';
import artInstituteApp from '../assets/art-institute-app.png';
import hud from '../assets/hud.png';

// Types
export type Project = {
  title: string;
  description: string;
  skills: string[];
  thumbnail: string;
  link: string;
  company: string;
  details: CodeProject[];
};

export type CodeProject = {
  title: string;
  description?: string;
  thumbnail: string;
  github?: string;
  preview?: string;
};

// Projects
export const arroyos: CodeProject[] = [
  {
    title: 'Dos Arroyos Admin Web App',
    description: 'Github repository not available due to private source code.',
    thumbnail: arroyosWeb,
    preview: 'https://youtu.be/ohoPSuTOEdQ?si=Y-ynSw7zKVsdln_k',
  },
  {
    title: 'Dos Arroyos Client Mobile App',
    description: 'Github repository not available due to private source code.',
    thumbnail: arroyosMobile,
    preview: 'https://youtu.be/DFxRTq4r2M0?si=18iuk2bND3w9C8Jg',
  },
];

export const laniakea: CodeProject[] = [
  {
    title: 'Pathway Chick-fil-A',
    description:
      'Uploading app preview soon! Github repository will not be available due to private source code.',
    thumbnail: pathway,
  },
];

export const personal: CodeProject[] = [
  {
    title: 'Art Institute Of Chicago Catalog App',
    description: 'Uploading app preview soon!',
    thumbnail: artInstituteApp,
    github: 'https://github.com/facumm1/art_institute_chicago',
  },
];

export const lix: CodeProject[] = [
  {
    title: 'Neon HUD for 7NIGHTSTORE',
    description: 'HUD interface developed using React.js and Lua.',
    thumbnail: hud,
    preview: 'https://youtu.be/eNt_Qb7nEDA?si=D2GNulolha6Rf7hW',
  },
  {
    title: 'Modded Ox Inventory with No Pixel 4.0 design made with React.js',
    description: 'Inventory interface developed using React.js and Lua.',
    thumbnail: inventory,
    preview: 'https://youtu.be/bsiKgrFFvVE?si=QsIlBQT40HqyC7ws',
  },
  /* {
    title: 'HUD inspired in original GTA V',
    thumbnail: inventory,
    preview: 'https://youtu.be/bsiKgrFFvVE?si=QsIlBQT40HqyC7ws',
  },
  {
    title: 'Modded R4-RPCHAT',
    thumbnail: inventory,
    preview: 'https://youtu.be/bsiKgrFFvVE?si=QsIlBQT40HqyC7ws',
  },
  {
    title: 'Origen Drawtext Clone',
    thumbnail: inventory,
    preview: 'https://youtu.be/bsiKgrFFvVE?si=QsIlBQT40HqyC7ws',
  }, */
];

// General projects
export const projects: Project[] = [
  {
    company: 'Freelance project',
    title: 'Dos Arroyos Cambios',
    description:
      'I built two React & React Native CLI apps that were integrated with an API REST. They used Firebase authentication and push notifications for agency announcements or users’ order statuses.',
    skills: ['React Native', 'React.js', 'Typescript', 'CSS'],
    thumbnail: arroyosWeb,
    link: 'https://www.youtube.com/playlist?list=PL6ICIrJ2y_2vVxn0bUrCvo6XDmWJV0UWZ',
    details: arroyos,
  },
  {
    company: 'Team Laniakea',
    title: 'Pathway Chick-fil-A',
    description:
      'A React Native CLI app destinated to new Chick-fil-A employees. Useful for them as a guide when cooking different meals or coffees. Also it had some training plans in order to measure their progress. It had users authentication using SSO Okta OAuth2 and Fastlane for deployment automation.',
    skills: ['React Native', 'Typescript', 'CSS', 'Fastlane'],
    thumbnail: pathway,
    link: 'https://www.youtube.com/playlist?list=PL6ICIrJ2y_2vVxn0bUrCvo6XDmWJV0UWZ',
    details: laniakea,
  },
  {
    company: 'Personal project',
    title: 'Artwork Mobile App',
    description:
      'React Native CLI app that consumes Art Institute of Chicago API for retrieving artworks information. It displays a list of thumbnails with an artwork pic which you can press and get more details.',
    skills: ['React Native', 'Redux', 'Typescript', 'CSS'],
    thumbnail: artInstituteApp,
    link: '',
    details: personal,
  },
  {
    company: 'Lix Software',
    title: 'FiveM UIs & scripts',
    description:
      'At Lix Software, I crafted Inventories, HUDs, Chats and more, for different clients. Here you can find some examples.',
    skills: ['Javascript', 'React.js', 'Lua', 'CSS'],
    thumbnail: inventory,
    link: 'https://www.youtube.com/playlist?list=PL6ICIrJ2y_2s3ViLVPNY6vbTniLX4Hysj',
    details: lix,
  },
];
