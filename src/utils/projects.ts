import inventory from '../assets/inventory.png';
import arroyosWeb from '../assets/2a-web.png';
import artInstituteApp from '../assets/art-institute-app.png';

export const projects = [
  {
    title: 'FiveM UIs & scripts',
    description:
      'I craft Inventories, HUDs, Chats and more, for different clients in Lix Software. Here you can find some examples.',
    skills: ['Javascript', 'JQuery', 'React.js', 'Lua', 'CSS'],
    thumbnail: inventory,
    link: 'https://www.youtube.com/playlist?list=PL6ICIrJ2y_2s3ViLVPNY6vbTniLX4Hysj',
  },
  {
    title: 'Dos Arroyos Cambios',
    description:
      'React & React Native CLI apps integrated with API REST. It has users authentication and push notifications for agency announcements or user’s order statuses. it will be on iOS & Android stores soon!',
    skills: ['React Native', 'React.js', 'Typescript', 'CSS'],
    thumbnail: arroyosWeb,
    link: 'https://www.youtube.com/playlist?list=PL6ICIrJ2y_2vVxn0bUrCvo6XDmWJV0UWZ',
  },
  {
    title: 'Artwork Mobile App - Personal Project',
    description:
      'React Native CLI app that consumes Art Institute of Chicago API for retrieving artworks information. It displays a list of thumbnails with an artwork pic which you can press and get more details.',
    skills: ['React Native', 'Redux', 'Typescript', 'CSS'],
    thumbnail: artInstituteApp,
    link: 'https://github.com/facumm1/art_institute_chicago',
  },
];
