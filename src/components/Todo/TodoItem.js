import React from 'react';
import PropTypes from 'prop-types';
import { ListItem } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const isChecked = (completed) => ({
  textDecoration: completed ? 'line-through' : 'none'
});

const TodoItem = ({ text, completed, onTodoClick }) => (
  <ListItem
    leftCheckbox={<Checkbox checked={completed} />}
    primaryText={text}
    onClick={onTodoClick}
    style={isChecked(completed)}
  />
);

TodoItem.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoItem;
