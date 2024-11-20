import React from 'react';
import {useTheme} from '@emotion/react';
import {Box, Typography, useMediaQuery} from '@mui/material';
import {LaptopDevice, MobileDevice} from './Devices';
import {Header} from './Header';
import {ReactTyped} from 'react-typed';

const subtitles = [
  `Hi, I'm Facundo Mamani...`,
  'A frontend developer...',
];

const subtitlesMobile = [
  `Hi, I'm Facundo </br> Mamani...`,
  'A frontend </br> developer...',
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
          fontSize: isLaptop ? '28px' : '22px',
          textAlign: 'center',
        }}>
        Welcome to my portfolio! 👋
      </Typography>

      <ReactTyped
        style={{
          color: '#E2E8F0',
          fontFamily: 'typography.fontFamily',
          fontSize: '38px',
          textAlign: 'center',
          fontWeight: '800',
          height: isLaptop ? 'auto' : '100px',
        }}
        loop
        strings={isLaptop ? subtitles : subtitlesMobile}
        typeSpeed={120}
      />

      {/* Device frame */}
      {isLaptop ? <LaptopDevice /> : <MobileDevice />}
    </Box>
  );
};
