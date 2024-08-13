import 'react-device-frameset/styles/marvel-devices.min.css';

import React from 'react';
import {DeviceFrameset} from 'react-device-frameset';
import {Avatar, Box, Button, Typography} from '@mui/material';

import distantAvatar from '../assets/avatar.svg';

type Props = {
  handleMenu: (bool: boolean) => void;
};

export const HomePage: React.FC<Props> = ({handleMenu}) => {
  return (
    <Box>
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
        I would love to create <br /> a beautiful app for you
      </Typography>

      {/* Device frame */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          transform: 'scale(0.85)',
        }}>
        <DeviceFrameset device="iPhone X" color="gold">
          <Box>2A</Box>
        </DeviceFrameset>
      </Box>
    </Box>
  );
};
