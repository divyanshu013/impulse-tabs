import React from 'react';
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
  text: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired,
  onTodoClick: React.PropTypes.func.isRequired
};

export default TodoItem;
