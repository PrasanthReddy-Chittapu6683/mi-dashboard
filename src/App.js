
import React from 'react'
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Dashboard from './components/Dashboard';
import { Box, Typography } from '@material-ui/core';
import './App.css'
function App() {
  // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  // const theme = React.useMemo(
  //   () =>
  //     createMuiTheme({
  //       palette: {
  //         type: prefersDarkMode ? 'dark' : 'light',
  //       },
  //     }),
  //   [prefersDarkMode],
  // );
  return (
    <div  >

      {/* <ThemeProvider theme={theme}> */}
        {/* <CssBaseline /> */}
        <Dashboard  />
        {/* <footer className='footer'>
          
          <p>
            MCR0690179 - Lending - BAW upgrade v19.0.0.3 
            </p>
          
        </footer> */}
      {/* </ThemeProvider> */}

    </div >
  );
}

export default App;
