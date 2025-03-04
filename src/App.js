import React, { useState } from "react";
import "./App.css";
import TodoTable from "./components/TodoTable";
import NewTodoForm from "./components/NewTodoForm";

function App() {
  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  // array of 3 java script objects
  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: "Feed dog", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User Three" },
  ]);

  // const addTodo = () => alert("Add new todo");

  // function to add a new todo onClick
  const addTodo = (description, assigned) => {
    let rowNumber = 0;

    if (todos.length > 0) {
      rowNumber = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumber = 1;
    }

    const newTodo = {
      rowNumber: rowNumber,
      rowDescription: description,
      rowAssigned: assigned,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (rowNumber) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== rowNumber;
    });

    filtered.map((item) => {
      item.rowNumber = filtered.indexOf(item) + 1;
      return item;
    });
    setTodos([...filtered]);
  };

  return (
    <div className="container mt-5">
      <div className="card text-white bg-dark mb-3">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={deleteTodo} />
          <button
            className="btn btn-primary ms-0 mt-1"
            onClick={() => setShowAddTodoForm(!showAddTodoForm)}
          >
            {!showAddTodoForm ? "Add new todo" : "Close form"}
          </button>
          {showAddTodoForm && <NewTodoForm addTodo={addTodo} />}
        </div>
      </div>
    </div>
  );
}

export default App;
