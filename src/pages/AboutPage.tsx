import React from 'react';
import {Avatar, Box, Button, Typography} from '@mui/material';

import ArticleIcon from '@mui/icons-material/Article';
import distantPhoto from '../assets/distant.svg';

export const AboutPage: React.FC = () => {
  return (
    <Box sx={styles.aboutBox}>
      <Typography sx={styles.mainTitle}>About me</Typography>

      <Typography sx={styles.name}>Facundo Mamani</Typography>
      <Typography sx={styles.dev}>Web & Mobile Developer</Typography>

      <Typography
        sx={{color: 'info.main', textAlign: 'left', fontSize: '18px'}}>
        23-year-old software developer. I’m also a electronic technician and
        computer engineering student.
        <br />
        <br />
        Since the last two years I’ve been working with{' '}
        <Typography component="span" sx={styles.bold}>
          React
        </Typography>{' '}
        and{' '}
        <Typography component="span" sx={styles.bold}>
          React Native
        </Typography>
        , creating mobile & web applications and integrating them with backend
        services.
        <br />
        <br />I also had an experience developing with Vue.js, JQuery, Node.js,
        Express.js, etc.
      </Typography>

      <Avatar alt="distant_photo" src={distantPhoto} sx={styles.image} />

      <Button
        variant="text"
        sx={styles.resumeBtn}
        href="https://drive.google.com/file/d/1zWVTlKaJ2BzC8NUbOz_Y5gmilOG62tT8/view?usp=sharing"
        target="_blank">
        <Typography sx={styles.btnTitle}>Download resume</Typography>

        <ArticleIcon sx={styles.btnIcon} />
      </Button>
    </Box>
  );
};

const styles = {
  aboutBox: {
    minHeight: '100vh',
    py: 4,
    mx: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  mainTitle: {color: 'info.main', textAlign: 'center', fontSize: '30px', mb: 4},
  name: {color: 'info.main', textAlign: 'left', fontSize: '22px'},
  dev: {
    color: 'secondary.main',
    textAlign: 'left',
    fontSize: '22px',
    fontWeight: '800',
  },
  bold: {color: 'secondary.main', fontWeight: '600', fontSize: '18px'},
  image: {width: '100%', height: '100%', borderRadius: '25px', my: 5},
  resumeBtn: {
    alignSelf: 'center',
    border: '1px solid #FFF',
    borderColor: 'secondary.main',
    borderRadius: '10px',
    px: 3,
    width: 'fit-content',
  },
  btnTitle: {
    color: 'secondary.main',
    textTransform: 'none',
    fontSize: '20px',
  },
  btnIcon: {
    color: 'secondary.main',
    fontSize: '40px',
    ml: 1,
  },
};
