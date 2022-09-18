import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  components: { 
    MuiTypography: { 
      styleOverrides: { 
        root: {
          wordBreak: "break-all"
        },
      },
   },
  },
  palette: {
    //mode: 'light',
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },    
    background: {
      default: '#fbfbfb',
      paper: '#fff'
    },
  },
  
});

export default theme;