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
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{bgcolor: 'secondary.main', width: '100%'}}>
      <Drawer
        open={toggleMenu}
        onClose={() => handleMenu(false)}
        anchor={isDesktop ? 'left' : 'top'}>
        <Box
          sx={{
            width: '100%',
            px: 3,
            height: isDesktop ? '100vh' : '100vh',
            bgcolor: 'secondary.main',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}
          role="presentation">
          {/* Header */}
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
              <CloseOutlinedIcon
                sx={{fontSize: '48px', color: 'primary.main'}}
              />
            </Button>
          </Box>

          {/* Buttons */}
          <List sx={{my: 4}}>
            {['Home', 'About me', 'Projects', 'Get in touch'].map(text => {
              const isHomeSection = text === 'Home';
              const responsiveHome = !isDesktop ? 'Home' : 'Services';

              const section = isHomeSection ? responsiveHome : text;

              return (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => scrollToSection(section)}>
                    <ListItemText
                      primaryTypographyProps={{
                        pl: 1,
                        fontSize: isDesktop ? '28px' : '24px',
                      }}
                      primary={text}
                      sx={{color: 'primary.main', fontSize: '32px'}}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>

          <Box sx={{/* ml: 5, */ my: 4}}>
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
              facundomamani120@gmail.com
            </Typography>
          </Box>

          <Divider sx={{color: 'primary.main', borderWidth: '1px'}} />

          {/* Social networking */}
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'flex-start',
              /* ml: 4, */
              my: 3,
            }}>
            <Link href="https://github.com/facumm1" target="_blank">
              <GitHubIcon
                sx={{mx: 1, color: 'primary.main', fontSize: '35px'}}
              />
            </Link>

            <Link
              href="https://www.linkedin.com/in/facundo-mamani31"
              target="_blank">
              <LinkedInIcon
                sx={{mx: 1, color: 'primary.main', fontSize: '40px'}}
              />
            </Link>

            <Link href="https://es.fiverr.com/facumm1" target="_blank">
              <Avatar
                alt="fiver_logo"
                src={fiverLogo}
                sx={{mx: 1, width: '40px', height: '40px'}}
              />
            </Link>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};
