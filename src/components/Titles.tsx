import React from 'react';
import {useTheme} from '@emotion/react';
import {Box, Typography, useMediaQuery} from '@mui/material';
import {LaptopDevice, MobileDevice} from './Devices';
import {Header} from './Header';
import {ReactTyped} from 'react-typed';

const subtitles = [`Hi, I'm Facundo Mamani...`, 'A frontend developer...'];

export const Titles: React.FC<{handleMenu: (state: boolean) => void}> = ({
  handleMenu,
}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        width: isDesktop ? '50%' : '100%',
        position: isDesktop ? 'fixed' : 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        left: 0,
      }}>
      {isDesktop && (
        <Box sx={{alignSelf: 'flex-start'}}>
          <Header handleMenu={handleMenu} />
        </Box>
      )}

      <Typography
        sx={{
          mt: isDesktop ? 1 : 3,
          color: 'secondary.main',
          fontFamily: 'typography.fontFamily',
          fontSize: isDesktop ? '28px' : '22px',
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
        }}
        loop
        strings={subtitles}
        typeSpeed={120}
      />

      {/* Device frame */}
      {isDesktop ? <LaptopDevice /> : <MobileDevice />}
    </Box>
  );
};
