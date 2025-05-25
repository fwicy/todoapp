// Import of Dependencies
import { useState } from "react";
import Todo from "./todo";
import './style.css';

// Main Function
function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  // Event Listener
  const handleAdd = () => {
    if (task.trim() === "") return;
    const newTodo = { id: Date.now(), text: task };
    setTodos([...todos, newTodo]);
    setTask("");
  };

  // List & Key
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    // Section displayed on the browser
    <div className="app">
      <h1>To-Do List</h1>
      <div className="input-group">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onDelete={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default App;



