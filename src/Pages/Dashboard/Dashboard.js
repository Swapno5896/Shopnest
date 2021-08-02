import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Dashboard = () => {
  const [error, setError] = useState('');
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError('');
    try {
      await logout();
      history.push('/login');
    } catch {
      setError('Failed to log out.');
    }
  }

  return (
    <div className="p-5 text-center">
      <h1 className="bg-blue-700 text-white p-5 mb-5">Welcome to dashboard</h1>
      {error && <h1>{error}</h1>}
      <strong>Email: </strong> {currentUser?.email}
      <Link
        to="/updateProfile"
        className="ml-5 text-white bg-green-600 rounded p-2"
      >
        Update Profile
      </Link>
      <button onClick={handleLogout} className="ml-5 bg-red-500 rounded p-2">
        Log out
      </button>
    </div>
  );
};

export default Dashboard;
