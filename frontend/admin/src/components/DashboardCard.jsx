import React from "react";

const DashboardCard = ({ title, number }) => {
  return (
    <div className="dashboard-card">

      <h3>{title}</h3>
      <h1>{number}</h1>

    </div>
  );
};

export default DashboardCard;