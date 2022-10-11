import React from 'react';
import Dashboard from './Dashboard/Dashboard';
import MakeCourse from './MakeCourse/MakeCourse';

const Admin = () => {
    return (
      <Dashboard>
        <MakeCourse></MakeCourse>
      </Dashboard>
    );
};

export default Admin;