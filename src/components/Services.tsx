import React from 'react';
import {Box, Button, Fade, SvgIconProps, Typography} from '@mui/material';

import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import {services} from '../utils/services';

type ServicesPageProps = {
  scrollToSection: (section: string) => void;
};

const icons: Record<string, React.FC<SvgIconProps>> = {
  web: WebIcon,
  phone: PhoneIphoneIcon,
  figma: BorderColorIcon,
  fivem: SportsEsportsIcon,
};

export const Services = React.forwardRef<HTMLDivElement, ServicesPageProps>(
  ({scrollToSection}, ref) => {
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
          {/* Title */}
          <Typography
            sx={{
              ...styles.mainTitle,
              fontSize: {xs: '30px', lg: '38px', xl: '50px'},
            }}>
            What can I do?
          </Typography>

          {/* Services */}
          <Box>
            {services.map(service => {
              const IconComponent = icons[service.icon] || WebIcon;

              return (
                <Box
                  key={service.title}
                  sx={{...styles.serviceBox, my: {xs: 5, lg: 2.5}}}>
                  <Box sx={styles.iconBox}>
                    <IconComponent
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
                        fontSize: {xs: '16px', lg: '20px', xl: '32px'},
                        fontWeight: '600',
                      }}>
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {xs: '16px', xl: '24px'},
                        color: 'info.main',
                      }}>
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>

          {/* Go to projects Button */}
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
                fontSize: {xs: '16px', lg: '20px', xl: '32px'},
                px: 1,
              }}>
              Go to my projects
            </Typography>
            <ShortcutIcon sx={{fontSize: {xs: '30px', xl: '40px'}}} />
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
