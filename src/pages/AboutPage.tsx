import React from 'react';
import {Box, Divider} from '@mui/material';

import {About} from '../components/About';
import {Experience} from '../components/Experience';
import {Education} from '../components/Education';

type DOMComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLDivElement>
>;

export const AboutPage: DOMComponent = React.forwardRef((_, ref) => {
  return (
    <Box ref={ref}>
      <Divider sx={{borderColor: 'info.main'}} />

      <About />

      <Experience />

      <Education />
    </Box>
  );
});
