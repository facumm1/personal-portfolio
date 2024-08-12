import {Box, Typography} from '@mui/material';
import React from 'react';

const lightGray = '#E2E8F080';

export const Education: React.FC = () => {
  return (
    <Box sx={styles.educationBox}>
      <Typography sx={{color: lightGray, fontSize: '32px'}}>
        Education
      </Typography>

      {/* Ingenieria informatica */}
      <Box sx={{my: 2}}>
        <Typography sx={{color: lightGray, fontSize: '14px'}}>
          March 2024 - Present
        </Typography>
        <Typography sx={{color: 'info.main', fontSize: '22px', my: 1}}>
          Computer engineering
        </Typography>
        <Typography sx={{color: 'info.main', fontSize: '14px'}}>
          Universidad de Buenos Aires (UBA)
        </Typography>

        <Typography sx={{color: 'info.main', fontSize: '18px', my: 2}}>
          I've already completed half of my first year's career. My aim is to
          continue improving in software development, learn the fundamentals of
          machine learning, and eventually become an AI engineer in the future.
        </Typography>
      </Box>

      <Box sx={{my: 2}}>
        <Typography sx={{color: lightGray, fontSize: '14px'}}>
          2015 - 2020
        </Typography>
        <Typography sx={{color: 'info.main', fontSize: '22px', my: 1}}>
          Electronic technician
        </Typography>
        <Typography sx={{color: 'info.main', fontSize: '14px'}}>
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
    mx: 5,
    display: 'flex',
    flexDirection: 'column',
  },
};
