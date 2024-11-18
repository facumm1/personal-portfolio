import {createTheme} from '@mui/material';
import {red} from '@mui/material/colors';

export const portfolioTheme = createTheme({
  palette: {
    primary: {
      main: '#141c2e', // Blue #122140 # 0F182A
    },
    secondary: {
      main: '#59D9C1', // Green
    },
    info: {
      main: '#E2E8F0', // Gray
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: '"Be Vietnam Pro", Arial, sans-serif',
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
