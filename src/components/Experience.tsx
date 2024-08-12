import {Box, Typography} from '@mui/material';
import React from 'react';

const lightGreen = '#59D9C120';
const lightGray = '#E2E8F080';

export const Experience: React.FC = () => {
  return (
    <Box sx={styles.expBox}>
      <Typography sx={{color: lightGray, fontSize: '32px'}}>
        Experience
      </Typography>

      {/* Dos arroyos */}
      <Box sx={{my: 2}}>
        <Typography sx={{color: lightGray, fontSize: '14px'}}>
          March 2024 - Present
        </Typography>
        <Typography sx={{color: 'info.main', fontSize: '22px', my: 1}}>
          Dos Arroyos Cambios
        </Typography>
        <Typography sx={{color: 'info.main', fontSize: '14px'}}>
          Web & Mobile developer - Freelance project
        </Typography>

        <Typography sx={{color: 'info.main', fontSize: '18px', my: 2}}>
          Currently developing software for Dos Arroyos Cambios, a currency
          exchange agency. In this project, I’m using React Native for building
          a mobile app where customers can buy or sell foreign currencies such
          as US dollar, euros, guaraníes, etc. On the other hand, I created a
          React.js web app that manages customers’ currency orders.
        </Typography>

        <Box>
          <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            <Typography sx={{...styles.skill, my: 1}}>React Native</Typography>
            <Typography sx={styles.skill}>React.js</Typography>
            <Typography sx={styles.skill}>Typescript</Typography>
            <Typography sx={styles.skill}>Material UI</Typography>
            <Typography sx={styles.skill}>Figma</Typography>
          </Box>
        </Box>
      </Box>

      {/* Lix software */}
      <Box sx={{my: 2}}>
        <Typography sx={{color: lightGray, fontSize: '14px'}}>
          March 2024 - May 2024
        </Typography>
        <Typography sx={{color: 'info.main', fontSize: '22px', my: 1}}>
          Lix Software
        </Typography>
        <Typography sx={{color: 'info.main', fontSize: '14px'}}>
          Lua & Web developer - Fiverr agency
        </Typography>

        <Typography sx={{color: 'info.main', fontSize: '18px', my: 2}}>
          I built in-game UI interfaces for the FiveM platform (GTA V online)
          using Vue.js, jQuery, and vanilla JavaScript. I also worked with Lua
          scripts to retrieve player and server information and display it in my
          UIs.
        </Typography>

        <Box>
          <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            <Typography sx={{...styles.skill, my: 1}}>Javascript</Typography>
            <Typography sx={styles.skill}>Vue.js</Typography>
            <Typography sx={styles.skill}>JQuery</Typography>
            <Typography sx={styles.skill}>Lua</Typography>
            <Typography sx={styles.skill}>CSS</Typography>
          </Box>
        </Box>
      </Box>

      {/* Team laniakea */}
      <Box sx={{my: 2}}>
        <Typography sx={{color: lightGray, fontSize: '14px'}}>
          July 2022 - June 2023
        </Typography>
        <Typography sx={{color: 'info.main', fontSize: '22px', my: 1}}>
          Team Laniakea
        </Typography>
        <Typography sx={{color: 'info.main', fontSize: '14px'}}>
          Mobile developer - Startup
        </Typography>

        <Typography sx={{color: 'info.main', fontSize: '18px', my: 2}}>
          I was responsible for developing two mobile applications using React
          Native for two different projects.
          <br />
          The first one was intended for new employees at a restaurant to
          provide them with guides or instructions on how to prepare different
          coffees or dishes. The second one was a fitness tracker app where you
          earn points for the distance that you travelled.
        </Typography>

        <Box>
          <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
            <Typography sx={{...styles.skill, my: 1}}>React Native</Typography>
            <Typography sx={styles.skill}>React.js</Typography>
            <Typography sx={styles.skill}>Node.js</Typography>
            <Typography sx={styles.skill}>Express.js</Typography>
            <Typography sx={styles.skill}>Javascript</Typography>
            <Typography sx={styles.skill}>Redux</Typography>
            <Typography sx={{...styles.skill, my: 1}}>CSS</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

const styles = {
  expBox: {
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
