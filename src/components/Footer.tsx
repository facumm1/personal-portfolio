import React from 'react';
import {Box, Divider, Typography} from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box>
      <Divider sx={{borderColor: 'rgba(226, 233, 240, 0.25)'}} />
      <Typography
        sx={{
          fontSize: {xs: '18px', xl: '24px'},
          color: '#E2E8F0',
          textAlign: 'center',
          py: 2,
          px: 1,
          opacity: 0.7,
        }}>
        Designed with Figma, built using React.js and Material UI 😉.
      </Typography>
    </Box>
  );
};
