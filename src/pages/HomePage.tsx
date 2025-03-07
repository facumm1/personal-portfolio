import 'react-device-frameset/styles/marvel-devices.min.css';

import React from 'react';
import {Box, useMediaQuery} from '@mui/material';

import {useTheme} from '@emotion/react';

import {Header} from '../components/Header';
import {Titles} from '../components/Titles';

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

export const HomePage = React.forwardRef<HTMLDivElement, Props>(
  ({handleMenu, scrollToSection, sections}, ref) => {
    const theme = useTheme();
    const isLaptop = useMediaQuery(theme.breakpoints.up('lg'));

    return (
      <Box
        sx={{height: isLaptop ? '100vh' : 'auto', overflowY: 'auto'}}
        ref={ref}>
        {/* MOBILE */}
        {/* Header is only rendered in mobile view. */}
        {!isLaptop && <Header handleMenu={handleMenu} />}

        <Box
          sx={{
            display: 'flex',
            flexDirection: isLaptop ? 'row' : 'column',
            justifyContent: 'flex-end',
          }}>
          {/* Titles & devices */}
          <Titles handleMenu={handleMenu} />

          {/* LAPTOP/DESKTOP */}
          {/* ScrollPage is rendered in laptop/desktop view only. */}
          {isLaptop && (
            <ScrollPage sections={sections} scrollToSection={scrollToSection} />
          )}
        </Box>
      </Box>
    );
  },
);
