import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import PortfolioApp from './PortfolioApp.tsx';
import {AppTheme} from './theme/AppTheme.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppTheme>
      <PortfolioApp />
    </AppTheme>
  </StrictMode>,
);
