import 'react-toastify/dist/ReactToastify.min.css';
import {useRef} from 'react';
import {ToastContainer} from 'react-toastify';
import {Container, useMediaQuery} from '@mui/material';

import {AboutPage, HomePage, ProjectsPage, ContactPage} from './pages';
import {Menu} from './components/Menu';
import {Footer} from './components/Footer';

import {AppTheme} from './theme/AppTheme';
import {useToggle} from './hooks';
import {portfolioTheme} from './theme/portfolioTheme';

function PortfolioApp() {
  const {t: toggleMenu, s: handleMenu} = useToggle(false);
  const isDesktop = useMediaQuery(portfolioTheme.breakpoints.up('lg'));

  const sections = {
    ['Home']: useRef(null),
    ['About me']: useRef(null),
    ['Services']: useRef(null),
    ['Projects']: useRef(null),
    ['Get in touch']: useRef(null),
  };

  //TODO fix types
  const scrollToSection = (sectionName: string) => {
    const sectionToScroll = sections[sectionName];

    handleMenu(false);

    sectionToScroll.current.scrollIntoView({behavior: 'smooth'});
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

        <HomePage
          ref={sections['Home']}
          handleMenu={handleMenu}
          sections={sections}
          scrollToSection={scrollToSection}
        />

        {!isDesktop && (
          <>
            <AboutPage ref={sections['About me']} />

            <ProjectsPage ref={sections['Projects']} />

            <ContactPage ref={sections['Get in touch']} />

            <Footer />
          </>
        )}

        <ToastContainer />
      </Container>
    </AppTheme>
  );
}

export default PortfolioApp;
