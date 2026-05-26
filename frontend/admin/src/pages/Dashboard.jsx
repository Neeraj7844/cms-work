import React from "react";

import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";
import RecentTable from "../components/RecentTable";

import "../styles/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      <Sidebar />

      <div className="dashboard-main">

        <Navbar />

        <div className="dashboard-content">

          {/* HEADING */}

          <div className="dashboard-heading">
            <h1>Dashboard Overview</h1>
            <p>
              Welcome back Admin 👋
            </p>
          </div>

          {/* TOP CARDS */}

          <div className="dashboard-top">

            <DashboardCard
              title="Total Users"
              number="1,245"
            />

            <DashboardCard
              title="Projects"
              number="320"
            />

            <DashboardCard
              title="Messages"
              number="87"
            />

            <DashboardCard
              title="Revenue"
              number="$12K"
            />

          </div>

          {/* TABLE */}

          <div className="table-wrapper">

            <h2 className="table-title">
              Recent Activities
            </h2>

            <RecentTable />

          </div>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;