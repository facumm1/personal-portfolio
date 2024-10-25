import 'react-device-frameset/styles/marvel-devices.min.css';

import React from 'react';
import {DeviceFrameset} from 'react-device-frameset';
import {Avatar, Box, Button, Typography} from '@mui/material';

import distantAvatar from '../assets/avatar.svg';
import screen from '../assets/2a_screen.png';

type Props = {
  handleMenu: (bool: boolean) => void;
  ref: React.MutableRefObject<React.LegacyRef<HTMLElement>>;
};

//TODO types

export const HomePage: React.FC<Props> = React.forwardRef(
  ({handleMenu}, ref) => {
    return (
      <Box ref={ref}>
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            py: 2,
          }}>
          <Button onClick={() => handleMenu(true)}>
            <Avatar
              alt="distant_avatar"
              src={distantAvatar}
              sx={{ml: 4, width: '65px', height: '65px'}}
            />
          </Button>
        </Box>

        {/* Titles */}
        <Typography
          sx={{
            mt: 3,
            color: 'secondary.main',
            fontFamily: 'typography.fontFamily',
            fontSize: '22px',
            textAlign: 'center',
          }}>
          Welcome to my portfolio! 👋
        </Typography>

        <Typography
          sx={{
            color: 'info.main',
            fontFamily: 'typography.fontFamily',
            fontSize: '32px',
            textAlign: 'center',
            fontWeight: '800',
          }}>
          Hi, I'm Facundo <br /> Mamani...
        </Typography>

        {/* Device frame */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            transform: 'scale(0.85)',
          }}>
          <DeviceFrameset device="iPhone X" color="gold">
            <Box
              sx={{
                width: '100%',
                height: '100%',
                bgcolor: '#F2F3F4',
              }}>
              <img
                src={screen}
                alt="2a_screen"
                style={{
                  marginTop: '30px',
                  width: '100%',
                  height: '98%',
                }}
              />
            </Box>
          </DeviceFrameset>
        </Box>
      </Box>
    );
  },
);
