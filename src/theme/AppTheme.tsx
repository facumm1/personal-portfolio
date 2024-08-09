import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';

import { portfolioTheme } from './portfolioTheme';

export const AppTheme: React.FC<{children: React.ReactElement | React.ReactNode}> = ({ children }) => {
  return (
    <ThemeProvider theme={ portfolioTheme }>
      <CssBaseline />
      
      { children }
    </ThemeProvider>
  )
}