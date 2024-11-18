import React from 'react';
import {Box, Divider, useMediaQuery} from '@mui/material';
import {useTheme} from '@emotion/react';

import {Services} from '../components/Services';
import {Footer} from '../components/Footer';

import {AboutPage} from './AboutPage';
import {ProjectsPage} from './ProjectsPage';
import {ContactPage} from './ContactPage';
import {SectionRefs} from './HomePage';

interface Props {
  scrollToSection: (section: string) => void;
  sections: SectionRefs;
}

export const ScrollPage: React.FC<Props> = ({sections, scrollToSection}) => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Box
      sx={{
        borderLeft: '1px solid rgba(226, 233, 240, 0.25)',
        width: isDesktop ? '50%' : '100%',
        overflowY: 'auto',
      }}>
      <Services ref={sections['Services']} scrollToSection={scrollToSection} />

      <AboutPage ref={sections['About me']} />

      <ProjectsPage ref={sections['Projects']} />

      <ContactPage ref={sections['Get in touch']} />

      <Footer />
    </Box>
  );
};
