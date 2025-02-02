
import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <button>
        <Link to="/products">Go to Products</Link>
      </button>
      <button>
        <Link to="/users">Go to Users</Link>
      </button>
      <button>
        <Link to="/github">GitHub User Finder</Link>
      </button>
    </div>
  );
}

export default Dashboard;


