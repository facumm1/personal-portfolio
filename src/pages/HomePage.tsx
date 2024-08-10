import 'react-device-frameset/styles/marvel-devices.min.css';

import React from 'react';
import {DeviceFrameset} from 'react-device-frameset';
import {Avatar, Box, Link, Typography} from '@mui/material';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import distantAvatar from '../assets/avatar.svg';
import fiverLogo from '../assets/fiverr_logo.svg';

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
          <Link href="https://github.com/facumm1" target="_blank">
            <GitHubIcon sx={{mx: 1, color: '#80868A', fontSize: '35px'}} />
          </Link>

          <Link
            href="https://www.linkedin.com/in/facundo-mamani31"
            target="_blank">
            <LinkedInIcon sx={{mx: 1, color: '#80868A', fontSize: '40px'}} />
          </Link>

          <Link href="https://es.fiverr.com/facumm1" target="_blank">
            <Avatar
              alt="fiver_logo"
              src={fiverLogo}
              sx={{mx: 1, width: '35px', height: '40px'}}
            />
          </Link>
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
          <Box>2A</Box>
        </DeviceFrameset>
      </Box>
    </Box>
  );
};
