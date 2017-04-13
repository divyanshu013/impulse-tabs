import React from 'react';
import { Card, CardHeader } from 'material-ui/Card';

import AddTodo from '../../containers/AddTodo';
import VisibleTodoList from '../../containers/VisibleTodoList';
import TodoFooter from './TodoFooter';

const styles = {
  width: 300,
  margin: 20,
  left: 5,
  bottom: 5,
  position: 'absolute'
};

const Todo = () => (
  <Card style={styles}>
    <CardHeader
      title="Todo"
      subtitle="View all todos"
    />
    <AddTodo />
    <VisibleTodoList />
  </Card>
);

export default Todo;
