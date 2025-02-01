import React from 'react';
import {useTheme} from '@emotion/react';
import {Box, Typography, useMediaQuery} from '@mui/material';
import {LaptopDevice, MobileDevice} from './Devices';
import {Header} from './Header';
import {ReactTyped} from 'react-typed';

const subtitles = [`Frontend developer`, 'Mobile developer', 'FiveM developer'];

const subtitlesMobile = [
  `Frontend developer`,
  'Mobile developer',
  'FiveM developer',
];

export const Titles: React.FC<{handleMenu: (state: boolean) => void}> = ({
  handleMenu,
}) => {
  const theme = useTheme();
  const isLaptop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        width: isLaptop ? '50%' : '100%',
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
          mt: isLaptop ? 1 : 3,
          color: 'secondary.main',
          fontFamily: 'typography.fontFamily',
          fontSize: isLaptop ? '32px' : '32px',
          textAlign: 'center',
          fontWeight: '800',
        }}>
        Facundo Mamani
      </Typography>

      <ReactTyped
        style={{
          color: '#E2E8F0',
          fontFamily: 'typography.fontFamily',
          fontSize: '28px',
          textAlign: 'center',
          fontWeight: '500',
          height: isLaptop ? 'auto' : '100px',
        }}
        loop
        strings={isLaptop ? subtitles : subtitlesMobile}
        typeSpeed={150}
      />

      {/* Device frame */}
      {isLaptop ? <LaptopDevice /> : <MobileDevice />}
    </Box>
  );
};
