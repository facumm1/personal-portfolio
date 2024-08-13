import {useRef} from 'react';
import {Container, Divider} from '@mui/material';

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
      <Container
        disableGutters
        sx={{bgcolor: 'primary.main', minHeight: '100vh'}}>
        <Menu
          toggleMenu={toggleMenu}
          handleMenu={handleMenu}
          scrollToSection={scrollToSection}
        />

        <Divider ref={sections['Home']} />
        <HomePage handleMenu={handleMenu} />

        <Divider
          sx={{borderColor: 'info.main'}}
          ref={sections['My services']}
        />
        <ServicesPage />

        <Divider sx={{borderColor: 'info.main'}} ref={sections['About me']} />
        <AboutPage />

        <Divider sx={{borderColor: 'info.main'}} ref={sections['Projects']} />
        <ProjectsPage />

        <Divider
          sx={{borderColor: 'info.main'}}
          ref={sections['Get in touch']}
        />
        <ContactPage />
      </Container>
    </AppTheme>
  );
}

export default PortfolioApp;
