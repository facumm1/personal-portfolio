import React from 'react';
import {Box} from '@mui/material';

import {Services} from '../components/Services';
import {Footer} from '../components/Footer';

import {AboutPage} from './AboutPage';
import {ProjectsPage} from './ProjectsPage';
import {ContactPage} from './ContactPage';
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
      <Services ref={sections['Services']} scrollToSection={scrollToSection} />

      <AboutPage ref={sections['About me']} />

      <ProjectsPage ref={sections['Projects']} />

      {/* <ContactPage ref={sections['Get in touch']} /> */}

      <Footer />
    </Box>
  );
};
