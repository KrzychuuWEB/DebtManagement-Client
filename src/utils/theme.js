import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        main: "#ff5722",
      },
      secondary: {
        main: '#304ffe',
      },
    },
  });

const ApplicationThemeConfig = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
    );
};

export default ApplicationThemeConfig;  