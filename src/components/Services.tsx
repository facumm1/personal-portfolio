import React from 'react';
import {
  Box,
  Button,
  Divider,
  Fade,
  Typography,
  useMediaQuery,
} from '@mui/material';

import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import {useTheme} from '@emotion/react';

/* type DOMComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDivElement>
>; */

type ServicesPageProps = {
  scrollToSection: (section: string) => void;
};

export const Services: React.FC<ServicesPageProps> = React.forwardRef(
  ({scrollToSection}, ref) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    const serviceTitleSize = isDesktop ? '20px' : '16px';
    const serviceSubtitleSize = isDesktop ? '16px' : '16px';

    return (
      <Fade in={true} timeout={1500}>
        <Box
          ref={ref}
          sx={{
            ...styles.box,
            position: 'relative',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            minHeight: '100vh',
          }}>
          <Divider sx={{borderColor: 'info.main'}} />

          <Typography
            sx={{...styles.mainTitle, fontSize: isDesktop ? '38px' : '30px'}}>
            What can I do?
          </Typography>
          {/* Services */}
          <Box>
            {/* Web service */}
            <Box sx={{...styles.serviceBox, my: isDesktop ? 2.5 : 5}}>
              <Box sx={styles.iconBox}>
                <WebIcon
                  sx={{
                    fontSize: '40px',
                    color: 'primary.main',
                  }}
                />
              </Box>

              <Box sx={{width: '70%'}}>
                <Typography
                  sx={{
                    color: 'secondary.main',
                    fontSize: serviceTitleSize,
                    fontWeight: '600',
                  }}>
                  Website development
                </Typography>
                <Typography
                  sx={{fontSize: serviceSubtitleSize, color: 'info.main'}}>
                  I am able to create a website based on UI design or ideas.
                </Typography>
              </Box>
            </Box>

            {/* Mobile service */}
            <Box sx={{...styles.serviceBox, my: isDesktop ? 2.5 : 5}}>
              <Box sx={styles.iconBox}>
                <PhoneIphoneIcon
                  sx={{fontSize: '40px', color: 'primary.main'}}
                />
              </Box>

              <Box sx={{width: '70%'}}>
                <Typography
                  sx={{
                    fontSize: serviceTitleSize,
                    color: 'secondary.main',
                    fontWeight: '600',
                  }}>
                  Mobile development
                </Typography>
                <Typography
                  sx={{fontSize: serviceSubtitleSize, color: 'info.main'}}>
                  I can develop and deploy a mobile application to app stores.
                </Typography>
              </Box>
            </Box>

            {/* UI service */}
            <Box sx={{...styles.serviceBox, my: isDesktop ? 2.5 : 5}}>
              <Box sx={styles.iconBox}>
                <BorderColorIcon
                  sx={{fontSize: '40px', color: 'primary.main'}}
                />
              </Box>

              <Box sx={{width: '70%'}}>
                <Typography
                  sx={{
                    fontSize: serviceTitleSize,
                    color: 'secondary.main',
                    fontWeight: '600',
                  }}>
                  UI design
                </Typography>
                <Typography
                  sx={{fontSize: serviceSubtitleSize, color: 'info.main'}}>
                  I can discuss about UI ideas in order to create a Figma
                  design.
                </Typography>
              </Box>
            </Box>

            {/* Backend service */}
            <Box sx={{...styles.serviceBox, my: isDesktop ? 2.5 : 5}}>
              <Box sx={styles.iconBox}>
                <SportsEsportsIcon
                  sx={{fontSize: '40px', color: 'primary.main'}}
                />
              </Box>

              <Box sx={{width: '70%'}}>
                <Typography
                  sx={{
                    fontSize: serviceTitleSize,
                    color: 'secondary.main',
                    fontWeight: '600',
                  }}>
                  FiveM scripting
                </Typography>
                <Typography
                  sx={{fontSize: serviceSubtitleSize, color: 'info.main'}}>
                  I am able to develop scripts for FiveM servers using popular
                  frameworks.
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* Fiverr button */}
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => scrollToSection('Projects')}
            sx={{
              borderRadius: '10px',
              width: 'fit-content',
              mt: 3,
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
                fontSize: serviceTitleSize,
                px: 1,
              }}>
              Go to my projects
            </Typography>
            <ShortcutIcon />
          </Button>
        </Box>
      </Fade>
    );
  },
);

const styles = {
  box: {
    height: '100vh',
    maxHeight: '825px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  mainTitle: {color: 'info.main', textAlign: 'center'},
  serviceBox: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  iconBox: {
    bgcolor: '#EBEBEB',
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    height: '50%',
    borderRadius: '10px',
    p: 1,
    mr: 2,
    mt: 1,
  },
};
