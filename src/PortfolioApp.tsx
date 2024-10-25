import 'react-toastify/dist/ReactToastify.min.css';
import {useRef} from 'react';
import {ToastContainer} from 'react-toastify';
import {Container} from '@mui/material';

import {AppTheme} from './theme/AppTheme';
import {useToggle} from './hooks';
import {Menu} from './components/Menu';
import {
  AboutPage,
  HomePage,
  ServicesPage,
  ProjectsPage,
  ContactPage,
} from './pages';
import {Footer} from './components/Footer';

function PortfolioApp() {
  const {t: toggleMenu, s: handleMenu} = useToggle(false);

  const sections = {
    ['Home']: useRef(null),
    ['My services']: useRef(null),
    ['About me']: useRef(null),
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
      <Container disableGutters sx={{bgcolor: 'primary.main'}}>
        <Menu
          toggleMenu={toggleMenu}
          handleMenu={handleMenu}
          scrollToSection={scrollToSection}
        />

        <HomePage handleMenu={handleMenu} ref={sections['Home']} />

        <ServicesPage
          sectionToScroll={sections['Projects']}
          ref={sections['My services']}
        />

        <AboutPage ref={sections['About me']} />

        <ProjectsPage ref={sections['Projects']} />

        <ContactPage ref={sections['Get in touch']} />

        <Footer />

        <ToastContainer />
      </Container>
    </AppTheme>
  );
}

export default PortfolioApp;
