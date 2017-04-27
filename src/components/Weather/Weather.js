import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

import Temperature from './Temperature';

const defaults = {
  icon: 'CLEAR_DAY',
  color: 'white',
  size: 64,
  animate: true
};

const Weather = () => (
  <div className="weather">
    <ReactAnimatedWeather
      icon={defaults.icon}
      color={defaults.color}
      size={defaults.size}
      animate={defaults.animate}
    />
    <Temperature
      temp={38}
      format="C"
    />
    <h2>Clear</h2>
  </div>
);

export default Weather;
