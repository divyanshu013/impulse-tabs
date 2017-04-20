import { v4 } from 'node-uuid';

export const addTodo = (text) => (
  {
    type: 'ADD_TODO',
    id: v4(),
    text
  }
);

export const toggleTodo = (id) => (
  {
    type: 'TOGGLE_TODO',
    id
  }
);

export const setWeather = (icon) => (
  {
    type: 'SET_WEATHER',
    icon
  }
);

export const setTemp = (temp) => (
  {
    type: 'SET_TEMP',
    temp
  }
);

export const setTempFormat = (format) => (
  {
    type: 'SET_TEMP_FORMAT',
    format
  }
);
