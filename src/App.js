import "./App.css";

function App() {
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
              <tr>
                <th scope="row">1</th>
                <td>Feed dog</td>
                <td>Eric</td>
              </tr>

              <tr>
                <th scope="row">2</th>
                <td>Get haircut</td>
                <td>Eric</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
