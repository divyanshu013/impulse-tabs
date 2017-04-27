import React from 'react';

const Temperature = ({temp, format}) => (
  <h1>
    {temp} &deg;{format}
  </h1>
);

export default Temperature;
