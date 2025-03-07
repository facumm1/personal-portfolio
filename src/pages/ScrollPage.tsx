import React from 'react';
import {Box} from '@mui/material';

import {Footer} from '../components/Footer';

import {AboutPage} from './AboutPage';
import {ProjectsPage} from './ProjectsPage';
import {SectionRefs} from './HomePage';

type Props = {
  scrollToSection: (section: string) => void;
  sections: SectionRefs;
};

export const ScrollPage: React.FC<Props> = ({sections, scrollToSection}) => {
  return (
    <Box
      sx={{
        borderLeft: '1px solid rgba(226, 233, 240, 0.25)',
        width: {xs: '100%', lg: '50%'},
        overflowY: 'auto',
      }}>
      <AboutPage ref={sections['About me']} scrollToSection={scrollToSection} />

      <ProjectsPage ref={sections['Projects']} />

      <Footer />
    </Box>
  );
};
