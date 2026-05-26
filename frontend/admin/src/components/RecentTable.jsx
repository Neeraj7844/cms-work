import React from "react";
import "../styles/table.css";

const RecentTable = () => {
  return (
    <div className="recent-table">

      <h2>Recent Projects</h2>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>Modern Villa</td>
            <td>Completed</td>
            <td>24 May</td>
          </tr>

          <tr>
            <td>Interior Design</td>
            <td>Pending</td>
            <td>20 May</td>
          </tr>

          <tr>
            <td>Office Setup</td>
            <td>Running</td>
            <td>18 May</td>
          </tr>
    <td>
  <span className="status completed">
    Completed
  </span>
</td>

<td>
  <span className="status pending">
    Pending
  </span>
</td>

<td>
  <span className="status running">
    Running
  </span>
</td>
        </tbody>

      </table>

    </div>
  );
};

export default RecentTable;