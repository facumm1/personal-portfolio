import 'react-device-frameset/styles/marvel-devices.min.css';

import React from 'react';
import {Box, useMediaQuery} from '@mui/material';

import {useTheme} from '@emotion/react';

import {Header} from '../components/Header';
import {Titles} from '../components/Titles';
import {Services} from '../components/Services';

import {ScrollPage} from './ScrollPage';

export type SectionRefs = {
  Home: React.LegacyRef<HTMLDivElement> | undefined;
  'About me': React.LegacyRef<HTMLDivElement> | undefined;
  Projects: React.LegacyRef<HTMLDivElement> | undefined;
  'Get in touch': React.LegacyRef<HTMLDivElement> | undefined;
  Services: React.LegacyRef<HTMLDivElement> | undefined;
};

type Props = {
  handleMenu: (state: boolean) => void;
  scrollToSection: (section: string) => void;
  ref: React.MutableRefObject<React.LegacyRef<HTMLElement>>;
  sections: SectionRefs;
};

//TODO types of forwardRef
export const HomePage: React.FC<Props> = React.forwardRef(
  ({handleMenu, scrollToSection, sections}, ref) => {
    const theme = useTheme();
    const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

    return (
      <Box
        sx={{height: isDesktop ? '100vh' : 'auto', overflowY: 'auto'}}
        ref={ref}>
        {!isDesktop && <Header handleMenu={handleMenu} />}

        <Box
          sx={{
            display: 'flex',
            flexDirection: isDesktop ? 'row' : 'column',
            justifyContent: 'flex-end',
          }}>
          {/* Titles & devices */}
          <Titles handleMenu={handleMenu} />

          {isDesktop ? (
            <ScrollPage sections={sections} scrollToSection={scrollToSection} />
          ) : (
            <Services
              ref={sections['Services']}
              scrollToSection={scrollToSection}
            />
          )}
        </Box>
      </Box>
    );
  },
);
