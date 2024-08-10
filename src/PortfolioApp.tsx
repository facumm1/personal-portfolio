import {Container, Divider} from '@mui/material';

import {AppTheme} from './theme/AppTheme';
import {AboutPage, HomePage, ServicesPage} from './pages';

function PortfolioApp() {
  return (
    <AppTheme>
      <Container
        disableGutters
        sx={{bgcolor: 'primary.main', minHeight: '100vh'}}>
        <HomePage />

        <Divider sx={{borderColor: 'info.main'}} />

        <ServicesPage />

        <Divider sx={{borderColor: 'info.main'}} />

        <AboutPage />
      </Container>
    </AppTheme>
  );
}

export default PortfolioApp;
