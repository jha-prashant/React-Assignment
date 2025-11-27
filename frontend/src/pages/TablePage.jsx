import "./Table.css";

export default function TablePage() {
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <div className="table-container">

      <div className="table-header">
        <h2>Welcome, {user?.name}</h2>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Project</th>
            <th>Assigned To</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>Web Development Task</td>
            <td>{user?.name}</td>
          </tr>

          <tr>
            <td>2</td>
            <td>UI Design Review</td>
            <td>Team</td>
          </tr>

          <tr>
            <td>3</td>
            <td>API Integration Work</td>
            <td>{user?.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
