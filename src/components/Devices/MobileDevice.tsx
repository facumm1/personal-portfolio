import React from 'react';
import {DeviceFrameset} from 'react-device-frameset';
import {Box} from '@mui/material';

import screen from '../../assets/2a_screen.png';

export const MobileDevice: React.FC = () => {
  return (
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
  );
};
