import {createTheme} from '@mui/material';
import {red} from '@mui/material/colors';

export const portfolioTheme = createTheme({
  palette: {
    primary: {
      main: '#122140', // Blue
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
});
