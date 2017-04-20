import React from 'react';
import { connect } from 'react-redux';

import Weather from '../components/Weather';
import { setTemp, setTempFormat, setWeather } from '../actions';

const mapStateToProps = (state) => ({
  weather: state.weather
});

const mapDispatchToProps = (dispatch) => ({
  
})
