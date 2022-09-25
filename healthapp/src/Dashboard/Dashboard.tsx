import React from 'react';
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div>
        <SideBar />
      </div>
      <div style={{ padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;