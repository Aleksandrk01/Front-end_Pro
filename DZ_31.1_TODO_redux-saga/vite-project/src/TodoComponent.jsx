import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadTodos, addTodo, deleteTodo, toggleTodo, editTodo, clearTodos } from './actions';

const TodoComponent = () => {
  const todos = useSelector(state => state.todos.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadTodos());
  }, [dispatch]);

  const handleAddTodo = (text) => {
    dispatch(addTodo({ id: Date.now(), text, completed: false }));
  };

  return (
    <div>
      <button onClick={() => handleAddTodo('New Task')}>Add Todo</button>
      <button onClick={() => dispatch(clearTodos())}>Clear Todos</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
            >
              {todo.text}
            </span>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
            <button onClick={() => dispatch(editTodo(todo.id, 'Updated Task'))}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
