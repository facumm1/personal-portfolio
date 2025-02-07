import React from 'react';
import {ReactTyped} from 'react-typed';

import {useTheme} from '@emotion/react';
import {Box, Fade, Typography, useMediaQuery} from '@mui/material';

import {LaptopDevice, MobileDevice} from './Devices';
import {Header} from './Header';

const subtitles = [`Frontend developer`, 'Mobile developer', 'FiveM developer'];

export const Titles: React.FC<{handleMenu: (state: boolean) => void}> = ({
  handleMenu,
}) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up('lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Fade in={true} timeout={1500}>
      <Box
        sx={{
          width: {xs: '100%', lg: '50%'},
          position: isLaptop ? 'fixed' : 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          alignItems: 'center',
          left: 0,
        }}>
        {isLaptop && (
          <Box sx={{alignSelf: 'flex-start'}}>
            <Header handleMenu={handleMenu} />
          </Box>
        )}

        <Typography
          sx={{
            mt: {xs: 3, lg: 1, xl: 5},
            color: 'secondary.main',
            fontFamily: 'typography.fontFamily',
            fontSize: {xs: '32px', xl: '50px'},
            textAlign: 'center',
            fontWeight: '800',
          }}>
          Facundo Mamani
        </Typography>

        <ReactTyped
          style={{
            color: '#E2E8F0',
            fontFamily: 'typography.fontFamily',
            fontSize: isDesktop ? '40px' : '28px',
            textAlign: 'center',
            fontWeight: '500',
          }}
          loop
          strings={subtitles}
          typeSpeed={150}
        />

        {/* Device frame */}
        {isLaptop ? <LaptopDevice /> : <MobileDevice />}
      </Box>
    </Fade>
  );
};
