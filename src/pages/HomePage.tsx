import React from 'react';
import {Avatar, Box, Typography} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import distantAvatar from '../assets/avatar.svg';
import fiverLogo from '../assets/fiverr_logo.svg';
import {DeviceFrameset} from 'react-device-frameset';
import 'react-device-frameset/styles/marvel-devices.min.css';

export const HomePage: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          py: 2,
        }}>
        <Avatar
          alt="distant_avatar"
          src={distantAvatar}
          sx={{ml: 4, width: '65px', height: '65px'}}
        />

        <Box sx={{mr: 4, display: 'flex', alignItems: 'center'}}>
          <GitHubIcon sx={{mx: 1, color: '#80868A', fontSize: '35px'}} />
          <LinkedInIcon sx={{mx: 1, color: '#80868A', fontSize: '40px'}} />
          <Avatar
            alt="fiver_logo"
            src={fiverLogo}
            sx={{mx: 1, width: '35px', height: '40px'}}
          />
        </Box>
      </Box>

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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          transform: 'scale(0.85)',
        }}>
        <DeviceFrameset device="iPhone X" color="gold">
          <div></div>
        </DeviceFrameset>
      </Box>
    </Box>
  );
};
