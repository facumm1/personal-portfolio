import React from 'react';
import {
  Box,
  Button,
  Fade,
  SvgIconProps,
  Typography,
  useMediaQuery,
} from '@mui/material';
import {useTheme} from '@emotion/react';

import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

import {services} from '../utils/services';

/* type DOMComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDivElement>
>; */

const icons: Record<string, React.FC<SvgIconProps>> = {
  web: WebIcon,
  phone: PhoneIphoneIcon,
  figma: BorderColorIcon,
  fivem: SportsEsportsIcon,
};

type ServicesPageProps = {
  scrollToSection: (section: string) => void;
};

export const Services: React.FC<ServicesPageProps> = React.forwardRef(
  ({scrollToSection}, ref) => {
    const theme = useTheme();
    const isLaptop = useMediaQuery(theme.breakpoints.up('lg'));

    const serviceTitleSize = isLaptop ? '20px' : '16px';
    const serviceSubtitleSize = isLaptop ? '16px' : '16px';

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
            sx={{...styles.mainTitle, fontSize: isLaptop ? '38px' : '30px'}}>
            What can I do?
          </Typography>

          {/* Services */}
          <Box>
            {services.map(service => {
              const IconComponent = icons[service.icon] || WebIcon;

              return (
                <Box
                  key={service.title}
                  sx={{...styles.serviceBox, my: isLaptop ? 2.5 : 5}}>
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
                        fontSize: serviceTitleSize,
                        fontWeight: '600',
                      }}>
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{fontSize: serviceSubtitleSize, color: 'info.main'}}>
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
