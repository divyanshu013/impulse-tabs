import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

// components
import Main from './components/Main';

const App = () => (
  <MuiThemeProvider>
    <Main />
  </MuiThemeProvider>
);

export default App;
