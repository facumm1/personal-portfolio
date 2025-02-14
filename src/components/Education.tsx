import React from 'react';
import {Box, Typography} from '@mui/material';

const lightGray = '#E2E8F080';

export const Education: React.FC = () => {
  return (
    <Box sx={{...styles.educationBox, minHeight: 'none'}}>
      <Typography
        sx={{color: lightGray, fontSize: {xs: '32px', xl: '40px'}, mx: 5}}>
        Education
      </Typography>

      <Box sx={styles.card}>
        <Typography sx={{color: lightGray, fontSize: {xs: '14px', xl: '20px'}}}>
          March 2024 - Present
        </Typography>
        <Typography
          sx={{color: 'info.main', fontSize: {xs: '22px', xl: '30px'}, my: 1}}
          className="eduTitle">
          Computer engineering
        </Typography>
        <Typography
          sx={{color: 'info.main', fontSize: {xs: '14px', xl: '20px'}}}
          className="eduTitle">
          Universidad de Buenos Aires (UBA)
        </Typography>

        <Typography
          sx={{color: 'info.main', fontSize: {xs: '18px', xl: '22px'}, my: 2}}>
          Finishing the first year of my degree. My aim is to continue improving
          in software development, learn the fundamentals of machine learning,
          and eventually become a ML engineer in the future.
        </Typography>
      </Box>

      <Box sx={styles.card}>
        <Typography sx={{color: lightGray, fontSize: {xs: '14px', xl: '20px'}}}>
          2015 - 2020
        </Typography>
        <Typography
          sx={{color: 'info.main', fontSize: {xs: '22px', xl: '30px'}, my: 1}}
          className="eduTitle">
          Electronic technician
        </Typography>
        <Typography
          sx={{color: 'info.main', fontSize: {xs: '14px', xl: '20px'}}}
          className="eduTitle">
          Escuela Técnica N°1 “Otto Krause”
        </Typography>

        <Typography
          sx={{color: 'info.main', fontSize: {xs: '18px', xl: '22px'}, my: 2}}>
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
