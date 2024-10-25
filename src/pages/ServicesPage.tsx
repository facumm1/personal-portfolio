import React from 'react';
import {Box, Button, Divider, Typography} from '@mui/material';

import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import StorageIcon from '@mui/icons-material/Storage';
import ShortcutIcon from '@mui/icons-material/Shortcut';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

/* type DOMComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDivElement>
>; */

interface ServicesPageProps {
  sectionToScroll: React.RefObject<HTMLDivElement>;
}

export const ServicesPage: React.FC<ServicesPageProps> = React.forwardRef(
  ({sectionToScroll}, ref) => {
    return (
      <Box sx={styles.box} ref={ref}>
        <Divider sx={{borderColor: 'info.main'}} />

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
                I am able to create a website based on UI design or ideas.
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
                I can develop and deploy a mobile application to app stores.
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
                I can discuss about UI ideas in order to create a Figma design.
              </Typography>
            </Box>
          </Box>

          {/* Backend service */}
          <Box sx={styles.serviceBox}>
            <Box sx={styles.iconBox}>
              <SportsEsportsIcon
                sx={{fontSize: '40px', color: 'primary.main'}}
              />
            </Box>

            <Box sx={{width: '70%'}}>
              <Typography sx={{color: 'secondary.main', fontWeight: '600'}}>
                FiveM scripting
              </Typography>
              <Typography sx={{color: 'info.main'}}>
                I am able to develop scripts for FiveM servers using popular
                frameworks.
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Fiverr button */}
        <Button
          variant="outlined"
          color="secondary"
          onClick={() =>
            sectionToScroll.current.scrollIntoView({behavior: 'smooth'})
          }
          sx={{borderRadius: '10px', width: 'fit-content', mt: 3}}>
          <Typography sx={{textTransform: 'none', fontSize: '20px', px: 1}}>
            Go to my projects
          </Typography>

          <ShortcutIcon />
        </Button>
      </Box>
    );
  },
);

const styles = {
  box: {
    minHeight: '100vh',
    maxHeight: '825px',
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
