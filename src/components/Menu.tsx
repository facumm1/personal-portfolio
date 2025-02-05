import React from 'react';

import {
  Avatar,
  Box,
  Button,
  Link,
  Drawer,
  Divider,
  Typography,
  useMediaQuery,
} from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {useTheme} from '@emotion/react';

import fiverLogo from '../assets/fiverr_blue.svg';

type Props = {
  toggleMenu: boolean;
  handleMenu: (toggle: boolean) => void;
  scrollToSection: (section: string) => void;
};

export const Menu: React.FC<Props> = ({
  toggleMenu,
  handleMenu,
  scrollToSection,
}) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{bgcolor: 'secondary.main', width: '100%'}}>
      <Drawer
        open={toggleMenu}
        onClose={() => handleMenu(false)}
        anchor={isLaptop ? 'left' : 'top'}>
        <Box
          sx={{
            width: '100%',
            px: 3,
            height: '100vh',
            bgcolor: 'secondary.main',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
          role="presentation">
          {/* Close menu */}
          <CloseButton handleMenu={handleMenu} />

          {/* Buttons */}
          <List sx={{my: 4}}>
            {['Home', 'About me', 'Projects', 'Get in touch'].map(text => {
              const isHomeSection = text === 'Home';
              const responsiveHome = !isLaptop ? 'Home' : 'Services';

              const section = isHomeSection ? responsiveHome : text;

              return (
                <SectionButton
                  key={text}
                  scrollToSection={scrollToSection}
                  text={text}
                  section={section}
                  isLaptop={isLaptop}
                />
              );
            })}
          </List>

          <Contact />
        </Box>
      </Drawer>
    </Box>
  );
};

const CloseButton = ({handleMenu}: {handleMenu: (state: boolean) => void}) => {
  return (
    <Box
      sx={{
        my: 2,
        p: 1,
        /* mx: 4, */
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Button onClick={() => handleMenu(false)}>
        <CloseOutlinedIcon sx={{fontSize: '48px', color: 'primary.main'}} />
      </Button>
    </Box>
  );
};

const SectionButton = ({
  scrollToSection,
  text,
  section,
  isLaptop,
}: {
  scrollToSection: (section: string) => void;
  text: string;
  section: string;
  isLaptop: boolean;
}) => {
  return (
    <ListItem key={text} disablePadding>
      <ListItemButton onClick={() => scrollToSection(section)}>
        <ListItemText
          primaryTypographyProps={{
            pl: 1,
            fontSize: isLaptop ? '28px' : '24px',
          }}
          primary={text}
          sx={{color: 'primary.main', fontSize: '32px'}}
        />
      </ListItemButton>
    </ListItem>
  );
};

const Contact = () => {
  const data = {
    github: 'https://github.com/facumm1',
    linkedin: 'https://www.linkedin.com/in/facundo-mamani31',
    fiverr: 'https://es.fiverr.com/facumm1',
    email: 'facundomamani120@gmail.com',
  };

  return (
    <>
      <Box sx={{my: 4}}>
        <Typography
          sx={{
            color: 'primary.main',
            textTransform: 'uppercase',
            fontSize: '18px',
            letterSpacing: '5px',
            mb: 2,
          }}>
          EMAIL
        </Typography>
        <Typography sx={{color: 'primary.main', fontSize: '18px'}}>
          {data.email}
        </Typography>
      </Box>

      <Divider sx={{color: 'primary.main', borderWidth: '1px'}} />

      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'flex-start',
          my: 3,
        }}>
        <Link href={data.github} target="_blank">
          <GitHubIcon sx={{mx: 1, color: 'primary.main', fontSize: '35px'}} />
        </Link>

        <Link href={data.linkedin} target="_blank">
          <LinkedInIcon sx={{mx: 1, color: 'primary.main', fontSize: '40px'}} />
        </Link>

        <Link href={data.fiverr} target="_blank">
          <Avatar
            alt="fiver_logo"
            src={fiverLogo}
            sx={{mx: 1, width: '40px', height: '40px'}}
          />
        </Link>
      </Box>
    </>
  );
};
