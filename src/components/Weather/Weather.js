import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

import Temperature from './Temperature';

const defaults = {
  icon: 'FOG',
  color: 'teal',
  size: 128,
  animate: true
};

const Weather = () => (
  <div>
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
  </div>
);

export default Weather;
