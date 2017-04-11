import React from 'react';
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
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onTodoClick: React.PropTypes.func.isRequired
};

export default TodoList;
