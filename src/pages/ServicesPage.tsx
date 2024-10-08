import React from 'react';
import {Avatar, Box, Button, Typography} from '@mui/material';

import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import StorageIcon from '@mui/icons-material/Storage';
import fiverLogo from '../assets/fiverr_green.svg';

export const ServicesPage: React.FC = () => {
  return (
    <Box sx={styles.box}>
      <Typography sx={styles.mainTitle}>My services</Typography>

      {/* Services */}
      <Box>
        {/* Web service */}
        <Box sx={styles.serviceBox}>
          <Box sx={styles.iconBox}>
            <WebIcon sx={{fontSize: '40px', color: 'primary.main'}} />
          </Box>

          <Box sx={{width: '70%'}}>
            <Typography sx={{color: 'secondary.main', fontWeight: '600'}}>
              Website development
            </Typography>
            <Typography sx={{color: 'info.main'}}>
              I will create your website based on your UI design or your ideas.
            </Typography>
          </Box>
        </Box>

        {/* Mobile service */}
        <Box sx={styles.serviceBox}>
          <Box sx={styles.iconBox}>
            <PhoneIphoneIcon sx={{fontSize: '40px', color: 'primary.main'}} />
          </Box>

          <Box sx={{width: '70%'}}>
            <Typography sx={{color: 'secondary.main', fontWeight: '600'}}>
              Mobile development
            </Typography>
            <Typography sx={{color: 'info.main'}}>
              I will develop and deploy your mobile application to app stores.
            </Typography>
          </Box>
        </Box>

        {/* UI service */}
        <Box sx={styles.serviceBox}>
          <Box sx={styles.iconBox}>
            <BorderColorIcon sx={{fontSize: '40px', color: 'primary.main'}} />
          </Box>

          <Box sx={{width: '70%'}}>
            <Typography sx={{color: 'secondary.main', fontWeight: '600'}}>
              UI design
            </Typography>
            <Typography sx={{color: 'info.main'}}>
              We can discuss about your UI ideas in order to make them a
              reality.{' '}
            </Typography>
          </Box>
        </Box>

        {/* Backend service */}
        <Box sx={styles.serviceBox}>
          <Box sx={styles.iconBox}>
            <StorageIcon sx={{fontSize: '40px', color: 'primary.main'}} />
          </Box>

          <Box sx={{width: '70%'}}>
            <Typography sx={{color: 'secondary.main', fontWeight: '600'}}>
              Backend development
            </Typography>
            <Typography sx={{color: 'info.main'}}>
              I will create a backend application in order to have your apps
              connected.
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Fiverr button */}
      <Button
        variant="outlined"
        color="secondary"
        sx={{borderRadius: '10px', width: 'fit-content', mt: 3}}
        href="https://es.fiverr.com/facumm1"
        target="_blank">
        <Typography sx={{textTransform: 'none', fontSize: '20px', px: 1}}>
          Find me on Fiverr
        </Typography>

        <Avatar
          alt="fiver_logo"
          src={fiverLogo}
          sx={{mx: 1, width: '32px', height: '32px'}}
        />
      </Button>
    </Box>
  );
};

const styles = {
  box: {
    minHeight: '100vh',
    pt: 4,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mainTitle: {color: 'info.main', textAlign: 'center', fontSize: '30px'},
  serviceBox: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    my: 5,
  },
  iconBox: {
    bgcolor: '#EBEBEB',
    width: 'fit-content',
    display: 'flex',
    alignItems: 'center',
    height: '50%',
    borderRadius: '10px',
    p: 1,
    mr: 2,
    mt: 1,
  },
};
