import React from 'react';
import {Box, Typography} from '@mui/material';

const lightGreen = '#59D9C120';

export const ProjectsPage: React.FC = () => {
  return (
    <Box sx={styles.box}>
      <Typography sx={styles.mainTitle}>Projects</Typography>

      {/* 2A mobile app */}
      <Box sx={{mb: 3}}>
        <Typography sx={{color: 'info.main', fontSize: '22px', mb: 1}}>
          Dos Arroyos Cambios
        </Typography>

        <Typography sx={{color: 'info.main', fontSize: '18px'}}>
          React Native CLI app integrated with API REST. It has users
          authentication and push notifications for agency announcements or
          user’s order statuses. it will be on iOS & Android stores soon!
        </Typography>

        <Box sx={{mt: 1}}>
          <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            <Typography sx={{...styles.skill, my: 1}}>React Native</Typography>
            <Typography sx={styles.skill}>Typescript</Typography>
            <Typography sx={styles.skill}>CSS</Typography>
          </Box>
        </Box>
      </Box>

      {/* Brewery app */}
      <Box sx={{mb: 3}}>
        <Typography sx={{color: 'info.main', fontSize: '22px', mb: 1}}>
          Brewery Mobile App
        </Typography>

        <Typography sx={{color: 'info.main', fontSize: '18px'}}>
          React Native CLI app that consumes Open Brewery DB API for retrieving
          breweries information. It displays a list of thumbnails which you can
          press and get more details.
        </Typography>

        <Box sx={{mt: 1}}>
          <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            <Typography sx={{...styles.skill, my: 1}}>React Native</Typography>
            <Typography sx={styles.skill}>Redux</Typography>
            <Typography sx={styles.skill}>Typescript</Typography>
            <Typography sx={styles.skill}>CSS</Typography>
          </Box>
        </Box>
      </Box>

      {/* Artworks app */}
      <Box sx={{mb: 3}}>
        <Typography sx={{color: 'info.main', fontSize: '22px', mb: 1}}>
          Artwork Mobile App
        </Typography>

        <Typography sx={{color: 'info.main', fontSize: '18px'}}>
          React Native CLI app that consumes Art Institute of Chicago API for
          retrieving artworks information. It displays a list of thumbnails with
          an artwork pic which you can press and get more details.
        </Typography>

        <Box sx={{mt: 1}}>
          <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            <Typography sx={{...styles.skill, my: 1}}>React Native</Typography>
            <Typography sx={styles.skill}>Redux</Typography>
            <Typography sx={styles.skill}>Typescript</Typography>
            <Typography sx={styles.skill}>CSS</Typography>
          </Box>
        </Box>
      </Box>

      {/* News app */}
      <Box sx={{mb: 3}}>
        <Typography sx={{color: 'info.main', fontSize: '22px', mb: 1}}>
          News Mobile App
        </Typography>

        <Typography sx={{color: 'info.main', fontSize: '18px'}}>
          React Native CLI app that consumes newsAPI for retrieving news. It
          displays a list of thumbnails which you can press and get more
          details.
        </Typography>

        <Box sx={{mt: 1}}>
          <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            <Typography sx={{...styles.skill, my: 1}}>React Native</Typography>
            <Typography sx={styles.skill}>Redux</Typography>
            <Typography sx={styles.skill}>Typescript</Typography>
            <Typography sx={styles.skill}>CSS</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  mainTitle: {color: 'info.main', textAlign: 'center', fontSize: '30px', mb: 4},
  box: {
    minHeight: '100vh',
    py: 4,
    mx: 5,
    display: 'flex',
    flexDirection: 'column',
  },
  skill: {
    borderRadius: '15px',
    bgcolor: lightGreen,
    color: 'secondary.main',
    fontSize: '14px',
    fontWeight: '800',
    my: 'auto',
    mx: 0.5,
    px: 2,
    py: 1,
  },
};
