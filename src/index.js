import React from 'react';
import ReactDOM from 'react-dom';

// for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
