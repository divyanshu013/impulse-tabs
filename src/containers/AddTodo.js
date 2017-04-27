import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

const AddTodoComponent = ({ dispatch }) => {
  let input;

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.value.trim()) {
      dispatch(addTodo(input.value));
      input.value = '';
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          ref={(node) => {
            input = node;
          }}
        />
        <button type="submit">
          +
        </button>
      </form>
    </div>
  );
};

AddTodoComponent.propTypes = {
  dispatch: PropTypes.func.isRequired
};

const AddTodo = connect()(AddTodoComponent);
export default AddTodo;
