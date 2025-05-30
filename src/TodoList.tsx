import React, { useState } from 'react';
import './TodoList.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    setTodos([
      ...todos,
      {
        id: Date.now(),
        text: newTodo.trim(),
        completed: false,
      },
    ]);
    setNewTodo('');
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-container">
      <h1>🐹 gwen's to do list 🐹</h1>
      <form onSubmit={addTodo} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>
      <div className="todo-list">
        {todos.map((todo) => (
          <div key={todo.id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <label className="todo-label">
              <div className="checkbox-container">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  className="todo-checkbox"
                />
                <span className="hamster-icon">🐹</span>
              </div>
              <span className="todo-text">{todo.text}</span>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList; 