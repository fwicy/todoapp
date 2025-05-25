// Delete Function 
function todo({ todo, onDelete }) {
    return (
      <li className="todo-item">
        <span>{todo.text}</span>
        <button onClick={() => onDelete(todo.id)}>×</button>
      </li>
    )
  }
  
  export default todo