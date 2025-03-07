import React from 'react';
import {Avatar, Box, Button, Link, Typography} from '@mui/material';

import ShortcutIcon from '@mui/icons-material/Shortcut';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import {personalData} from '../utils/data';
import fiverLogo from '../assets/fiverr_green.svg';

type Props = {
  scrollToSection: (section: string) => void;
};

export const About: React.FC<Props> = ({scrollToSection}) => {
  return (
    <Box sx={{...styles.aboutBox, minHeight: '100vh', mx: 4, mb: 4}}>
      <Typography
        sx={{
          ...styles.mainTitle,
          fontSize: {xs: '30px', lg: '30px', xl: '50px'},
          mt: '30px',
        }}>
        Welcome to my
        <Typography
          component="span"
          sx={{
            color: 'secondary.main',
            fontWeight: '600',
            fontSize: {xs: '30px', lg: '30px', xl: '50px'},
          }}>
          {'\n'}portfolio
        </Typography>
        !
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: {xs: 'column'},
          justifyContent: 'space-between',
          mt: 4,
          mb: 2,
        }}>
        <Box>
          <Typography
            sx={{
              color: 'info.main',
              textAlign: 'left',
              fontSize: {xs: '18px', xl: '24px'},
            }}>
            Hi! I'm Facundo, a 23-year-old software developer. I’m also a
            electronic technician and computer engineering student.
            <br />
            <br />
            During my two years of experience, I’ve been working with{' '}
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
            <br />
            I recently worked at Lix Software, a Fiverr agency, where I
            developed scripts and graphic interfaces for FiveM platform using
            web development tools such as Javascript, React.js and Lua.
            <br />
            <br />
            Currently I'm looking for new opportunities in frontend development
            or even backend development. I'm actively learning backend
            technologies such as C#, .NET, and MySQL to become a full-stack
            developer.
          </Typography>
        </Box>

        <Box sx={{display: 'flex', justifyContent: 'center', mt: {xs: 2, xl: 4}}}>
          <Link href={personalData.github} target="_blank">
            <GitHubIcon
              sx={{
                mx: 1,
                color: 'secondary.main',
                fontSize: {xs: '30px', xl: '50px'},
              }}
            />
          </Link>

          <Link href={personalData.linkedin} target="_blank">
            <LinkedInIcon
              sx={{
                mx: 1,
                color: 'secondary.main',
                fontSize: {xs: '30px', xl: '50px'},
              }}
            />
          </Link>

          <Link href={personalData.fiverr} target="_blank">
            <Avatar
              alt="fiver_logo"
              src={fiverLogo}
              sx={{
                mx: 1,
                width: {xs: '30px', xl: '50px'},
                height: {xs: '30px', xl: '50px'},
              }}
            />
          </Link>
        </Box>
      </Box>

      {/* Nav to projects */}
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => scrollToSection('Projects')}
        sx={{
          textAlign: 'center',
          borderRadius: '10px',
          width: 'fit-content',
          borderColor: 'secondary.main',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            bgcolor: 'secondary.main',
            color: 'primary.main',
          },
        }}>
        <Typography
          sx={{
            textTransform: 'none',
            fontSize: {xs: '20px', lg: '20px', xl: '32px'},
            px: 1,
          }}>
          Go to my projects
        </Typography>
        <ShortcutIcon sx={{fontSize: {xs: '30px', xl: '40px'}}} />
      </Button>
    </Box>
  );
};

const styles = {
  aboutBox: {
    py: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  mainTitle: {color: 'info.main', textAlign: 'center'},
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
};
