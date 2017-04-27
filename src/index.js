import React from 'react';
import ReactDOM from 'react-dom';

// for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './App';

injectTapEventPlugin(); // adds onTouchTap to the context

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
