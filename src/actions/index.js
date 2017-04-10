let todoId = 0;

export const addTodo = (text) => (
  {
    type: 'ADD_TODO',
    id: todoId++,
    text
  }
);

export const toggleTodo = (id) => (
  {
    type: 'TOGGLE_TODO',
    id
  }
);
