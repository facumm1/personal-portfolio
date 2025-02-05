import React from 'react';
import {Box, Divider} from '@mui/material';

import {About} from '../components/About';
import {Experience} from '../components/Experience';
import {Education} from '../components/Education';

export const AboutPage = React.forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <Box ref={ref}>
      <Divider sx={{borderColor: 'rgba(226, 233, 240, 0.25)'}} />

      <About />

      <Experience />

      <Education />
    </Box>
  );
});
