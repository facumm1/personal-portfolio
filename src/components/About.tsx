import React from 'react';
import {Avatar, Box, Button, Typography, useMediaQuery} from '@mui/material';

import {useTheme} from '@emotion/react';
import ArticleIcon from '@mui/icons-material/Article';

import distantPhoto from '../assets/distant.svg';

const link =
  'https://drive.google.com/file/d/1B3j7DZfLpVN-nO-wKIqPmJbsapbpziWd/view?usp=sharing';

export const About: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{...styles.aboutBox, minHeight: '100vh', mx: 4}}>
      <Typography
        sx={{...styles.mainTitle, fontSize: isDesktop ? '38px' : '30px'}}>
        About me
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: isDesktop ? 'row' : 'column',
          justifyContent: 'space-between',
        }}>
        <Box>
          <Typography sx={styles.name}>Facundo Mamani</Typography>
          <Typography sx={styles.dev}>Frontend Developer</Typography>

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
            , creating mobile & web applications and integrating them with
            backend services.
            <br />
            <br />I also had an experience developing with JQuery, Lua, Node.js,
            etc.
          </Typography>
        </Box>

        <Avatar
          alt="distant_photo"
          src={distantPhoto}
          sx={{
            ...styles.image,
            pr: 3,
            pl: 4,
            width: isDesktop ? '40%' : '100%',
            height: isDesktop ? '40%' : '100%',
          }}
        />
      </Box>

      <Button variant="text" sx={styles.resumeBtn} target="_blank" href={link}>
        <Typography sx={styles.btnTitle}>Download resume</Typography>

        <ArticleIcon sx={styles.btnIcon} />
      </Button>
    </Box>
  );
};

const styles = {
  aboutBox: {
    py: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  mainTitle: {color: 'info.main', textAlign: 'center', mb: 4},
  name: {color: 'info.main', textAlign: 'left', fontSize: '22px'},
  dev: {
    color: 'secondary.main',
    textAlign: 'left',
    fontSize: '22px',
    fontWeight: '800',
  },
  bold: {color: 'secondary.main', fontWeight: '600', fontSize: '18px'},
  image: {borderRadius: '25px', my: 5},
  resumeBtn: {
    alignSelf: 'center',
    border: '1px solid #FFF',
    borderColor: 'secondary.main',
    borderRadius: '10px',
    px: 3,
    width: 'fit-content',
    animation: 'pulse 2s infinite',
    position: 'relative',
    overflow: 'hidden',
    color: 'secondary.main',
    '&:hover': {
      bgcolor: 'secondary.main',
      color: 'primary.main',
    },
  },
  btnTitle: {
    textTransform: 'none',
    fontSize: '20px',
  },
  btnIcon: {
    fontSize: '40px',
    ml: 1,
  },
};
