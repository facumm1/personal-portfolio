import React from 'react';
import {Box, Divider, Typography} from '@mui/material';

export const Footer: React.FC = () => {
  return (
    <Box>
      <Divider sx={{borderColor: 'rgba(226, 233, 240, 0.25)'}} />
      <Typography sx={{color: '#E2E8F0', textAlign: 'center', py: 2}}>
        Created with 💚 using React.js + Material UI
      </Typography>
    </Box>
  );
};
