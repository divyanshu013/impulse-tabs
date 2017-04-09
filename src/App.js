import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

// Components
import Main from './Components/Main';

const App = () => (
  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>
);

export default App;
