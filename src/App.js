import "./App.css";
import TodoTable from "./components/TodoTable";

function App() {
  // array of 3 java script objects
  const todos = [
    { rowNumber: 1, rowDescription: "Feed dog", rowAssigned: "User One" },
    { rowNumber: 2, rowDescription: "Water plants", rowAssigned: "User Two" },
    { rowNumber: 3, rowDescription: "Make dinner", rowAssigned: "User Three" },
  ];

  return (
    <div className="container mt-5">
      <div className="card text-white bg-dark mb-3">
        <div className="card-header">Your Todo's</div>
        <div className="card-body">
          <TodoTable 
            todos={todos}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
