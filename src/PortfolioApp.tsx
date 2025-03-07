import 'react-toastify/dist/ReactToastify.min.css';

import {useRef} from 'react';
import {ToastContainer} from 'react-toastify';
import {Container, useMediaQuery} from '@mui/material';

import {AboutPage, HomePage, ProjectsPage} from './pages';
import {Menu} from './components/Menu';
import {Footer} from './components/Footer';

import {AppTheme} from './theme/AppTheme';
import {portfolioTheme} from './theme/portfolioTheme';
import {useToggle} from './hooks';

function PortfolioApp() {
  const {t: toggleMenu, s: handleMenu} = useToggle(false);

  //Media queries
  const isLaptop = useMediaQuery(portfolioTheme.breakpoints.up('lg'));

  const sections: Record<string, React.RefObject<HTMLDivElement>> = {
    ['Home']: useRef(null),
    ['About me']: useRef(null),
    ['Services']: useRef(null),
    ['Projects']: useRef(null),
    ['Get in touch']: useRef(null),
  };

  const scrollToSection = (sectionName: string) => {
    const sectionToScroll = sections[sectionName];

    handleMenu(false);

    sectionToScroll?.current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <AppTheme>
      <Container
        disableGutters
        maxWidth={false}
        sx={{
          bgcolor: 'primary.main',
          margin: '0',
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          overflowY: 'hidden',
        }}>
        <Menu
          toggleMenu={toggleMenu}
          handleMenu={handleMenu}
          scrollToSection={scrollToSection}
        />

        {/* TODO fix types here */}
        <HomePage
          ref={sections['Home']}
          sections={sections}
          handleMenu={handleMenu}
          scrollToSection={scrollToSection}
        />

        {/* MOBILE */}
        {/* These components are rendered in mobile view only. */}
        {!isLaptop && (
          <>
            <AboutPage
              ref={sections['About me']}
              scrollToSection={scrollToSection}
            />

            <ProjectsPage ref={sections['Projects']} />

            <Footer />
          </>
        )}

        {/* NOTIFICATIONS */}
        <ToastContainer />
      </Container>
    </AppTheme>
  );
}

export default PortfolioApp;
