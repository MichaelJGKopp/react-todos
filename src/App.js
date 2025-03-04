import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  // array of 3 java script objects
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed dog", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User Three" },
  ]);

  // const addTodo = () => alert("Add new todo");

  // function to add a new todo onClick
  const addTodo = () => {
    if (todos.length > 0) {
      const newTodo = {
        rowNumber: todos.length + 1,
        rowDescription: "New Todo",
        rowAssigned: "User Three",
      };
      setTodos([...todos, newTodo]);
    }
  };

  return (
    <div className="container mt-5">
      <div className="card text-white bg-dark mb-3">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} />
          <button className="btn btn-primary mx-5 my-1" onClick={addTodo}>
            Add new todo
          </button>
          <NewTodoForm />
        </div>
      </div>
    </div>
  );
}

export default App;
