import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() => navigate('/main')}>
        go to home
      </button>
      <p>User Profile</p>
    </div>
  );
}
