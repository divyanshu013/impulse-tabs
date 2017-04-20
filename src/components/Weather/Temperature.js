import React from 'react';

const styles = {
  padding: 20,
  color: 'teal'
};

const Temperature = ({temp, format}) => (
  <h1 style={styles}>
    {temp} &deg; {format}
  </h1>
);

export default Temperature;
