import React from 'react';
import {Avatar, Box, Button, Typography} from '@mui/material';

import ArticleIcon from '@mui/icons-material/Article';

import distantPhoto from '../assets/distant.svg';
import {personalData} from '../utils/data';

export const About: React.FC = () => {
  return (
    <Box sx={{...styles.aboutBox, minHeight: '100vh', mx: 4}}>
      <Typography
        sx={{
          ...styles.mainTitle,
          fontSize: {xs: '30px', lg: '38px', xl: '50px'},
        }}>
        About me
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column', lg: 'row'},
          justifyContent: 'space-between',
        }}>
        <Box>
          <Typography sx={styles.name}>Facundo Mamani</Typography>
          <Typography sx={styles.dev}>Frontend Developer</Typography>

          <Typography
            sx={{
              color: 'info.main',
              textAlign: 'left',
              fontSize: {xs: '18px', xl: '24px'},
            }}>
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
            width: {xs: '100%', lg: '40%'},
            height: {xs: '100%', lg: '40%'},
          }}
        />
      </Box>

      <Button
        variant="text"
        sx={styles.resumeBtn}
        target="_blank"
        href={personalData.resumeLink}>
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
  name: {
    color: 'info.main',
    textAlign: 'left',
    fontSize: {xs: '22px', xl: '34px'},
  },
  dev: {
    color: 'secondary.main',
    textAlign: 'left',
    fontSize: {xs: '22px', xl: '34px'},
    fontWeight: '800',
  },
  bold: {
    color: 'secondary.main',
    fontWeight: '600',
    fontSize: {xs: '18px', xl: '24px'},
  },
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
    fontSize: {xs: '20px', xl: '24px'},
  },
  btnIcon: {
    fontSize: {xs: '40px', xl: '50px'},
    ml: 1,
  },
};
