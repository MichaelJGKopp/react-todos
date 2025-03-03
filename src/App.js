import "./App.css";
import TodoRowItem from "./components/TodoRowItem";

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
          <table className="table table-striped table-bordered table-hover table-dark">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Assigned</th>
              </tr>
            </thead>

            <tbody>
              {todos.map((todo) => (
                <TodoRowItem
                  key={todo.rowNumber}
                  rowNumber={todo.rowNumber}
                  rowDescription={todo.rowDescription}
                  rowAssigned={todo.rowAssigned}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
