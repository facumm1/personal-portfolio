import React from 'react';
import {DeviceFrameset} from 'react-device-frameset';
import {Box} from '@mui/material';

import arroyosWeb from '../../assets/2a-web.png';
import hud from '../../assets/hud.png';
import inventory from '../../assets/inventory.png';

import mobileScreen from '../../assets/2a_screen.png';

const laptopApps = [arroyosWeb, inventory, hud];

export const LaptopDevice: React.FC = () => {
  const [imageIndex, setImageIndex] = React.useState<number>(0);
  const [triggerFade, setTriggerFade] = React.useState<boolean>(true);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTriggerFade(false);

      setTimeout(() => {
        setImageIndex(prevIndex => (prevIndex + 1) % laptopApps.length);
        setTriggerFade(true);
      }, 250);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        mt: 3,
        transform: 'scale(0.55)',
        width: '100%',
        alignSelf: 'center',
        height: '100%',
      }}>
      <Box
        style={{
          transform: 'scale(0.9)',
          position: 'absolute',
          top: '-22.5%',
          right: '-25%',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <DeviceFrameset device="MacBook Pro">
          <Box sx={{bgcolor: 'primary.main', height: '100%', width: '100%'}}>
            <img
              src={laptopApps[imageIndex]}
              alt={`Screen ${imageIndex}`}
              style={{
                width: '100%',
                height: '100%',
                transition: 'opacity 0.5s ease-in-out',
                opacity: triggerFade ? 1 : 0,
              }}
            />
          </Box>
        </DeviceFrameset>
      </Box>

      <Box
        style={{
          transform: 'scale(0.7)',
          position: 'absolute',
          top: '-20%',
          right: '-35%',
        }}>
        <DeviceFrameset device="iPhone X" color="gold">
          <Box
            sx={{
              width: '100%',
              height: '100%',
              bgcolor: '#F2F3F4',
            }}>
            <img
              src={mobileScreen}
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
};
