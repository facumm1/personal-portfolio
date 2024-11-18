import React from 'react';
import {useTheme} from '@emotion/react';
import {Box, Typography, useMediaQuery} from '@mui/material';

const lightGray = '#E2E8F080';

export const Education: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box sx={{...styles.educationBox, minHeight: isDesktop ? 'none' : '100vh'}}>
      <Typography sx={{color: lightGray, fontSize: '32px', mx: 5}}>
        Education
      </Typography>

      <Box sx={styles.card}>
        <Typography sx={{color: lightGray, fontSize: '14px'}}>
          March 2024 - Present
        </Typography>
        <Typography
          sx={{color: 'info.main', fontSize: '22px', my: 1}}
          className="eduTitle">
          Computer engineering
        </Typography>
        <Typography
          sx={{color: 'info.main', fontSize: '14px'}}
          className="eduTitle">
          Universidad de Buenos Aires (UBA)
        </Typography>

        <Typography sx={{color: 'info.main', fontSize: '18px', my: 2}}>
          I've already completed half of my first year's career. My aim is to
          continue improving in software development, learn the fundamentals of
          machine learning, and eventually become an AI engineer in the future.
        </Typography>
      </Box>

      <Box sx={styles.card}>
        <Typography sx={{color: lightGray, fontSize: '14px'}}>
          2015 - 2020
        </Typography>
        <Typography
          sx={{color: 'info.main', fontSize: '22px', my: 1}}
          className="eduTitle">
          Electronic technician
        </Typography>
        <Typography
          sx={{color: 'info.main', fontSize: '14px'}}
          className="eduTitle">
          Escuela Técnica N°1 “Otto Krause”
        </Typography>

        <Typography sx={{color: 'info.main', fontSize: '18px', my: 2}}>
          During my years studying electronics at this technical school, I
          learned the fundamentals of programming and developed robotics
          projects using embedded systems like Arduino and CIAA.
        </Typography>
      </Box>
    </Box>
  );
};

const styles = {
  educationBox: {
    minHeight: '100vh',
    py: 4,
    display: 'flex',
    flexDirection: 'column',
  },
  card: {
    cursor: 'pointer',
    px: 3,
    py: 2,
    mx: 2,
    my: 1,
    '&:hover': {
      bgcolor: '#1a2640',
      color: 'secondary.main',
      transition: '0.5s',
    },
    '&:hover .eduTitle': {
      color: 'secondary.main',
      transition: '0.5s',
    },
  },
};
