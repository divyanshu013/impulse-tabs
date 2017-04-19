import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather';

const defaults = {
  icon: 'FOG',
  color: 'teal',
  size: 128,
  animate: true
};

const Weather = () => (
  <ReactAnimatedWeather
    icon={defaults.icon}
    color={defaults.color}
    size={defaults.size}
    animate={defaults.animate}
  />
);

export default Weather;
