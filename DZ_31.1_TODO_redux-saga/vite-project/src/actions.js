export const loadTodos = () => ({
    type: 'LOAD_TODOS_REQUEST',
  });
  
  export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo,
  });
  
  export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id,
  });
  
  export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    payload: id,
  });
  
  export const editTodo = (id, text) => ({
    type: 'EDIT_TODO',
    payload: { id, text },
  });
  
  export const clearTodos = () => ({
    type: 'CLEAR_TODOS',
  });
  