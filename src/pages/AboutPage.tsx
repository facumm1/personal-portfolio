import React from 'react';
import {Box} from '@mui/material';

import {About} from '../components/About';
import {Experience} from '../components/Experience';
import {Education} from '../components/Education';

export const AboutPage: React.FC = () => {
  return (
    <Box>
      <About />

      <Experience />

      <Education />
    </Box>
  );
};

const styles = {};
