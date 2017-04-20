const weather = (state = {}, action) => {
  switch (action.type) {
    case 'SET_WEATHER':
      return {
        ...state,
        icon: action.icon
      };

    case 'SET_TEMP':
      return {
        ...state,
        temp: action.temp
      };

    case 'SET_TEMP_FORMAT':
      return {
        ...state,
        format: action.format
      };

    default:
      return state;
  }
};

export default weather;
