import React from 'react';
import PropTypes from 'prop-types';
import { List } from 'material-ui/List';

import TodoItem from './TodoItem';

const TodoList = ({ todos, onTodoClick }) => (
  <List>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        {...todo}
        onTodoClick={() => onTodoClick(todo.id)}
      />
    ))}
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
