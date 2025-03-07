import React from 'react';
import {Box, Divider} from '@mui/material';

import {About} from '../components/About';
import {Experience} from '../components/Experience';
import {Education} from '../components/Education';

type Props = {
  scrollToSection: (section: string) => void;
};

export const AboutPage = React.forwardRef<HTMLDivElement, Props>(
  ({scrollToSection}, ref) => {
    return (
      <Box ref={ref}>
        <Divider sx={{borderColor: 'rgba(226, 233, 240, 0.25)'}} />

        <About scrollToSection={scrollToSection} />

        <Experience />

        <Education />
      </Box>
    );
  },
);
