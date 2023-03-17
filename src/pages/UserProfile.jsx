import React from 'react';
import '../styles/userProfile.css';
import { useNavigate } from 'react-router-dom';
import MyContext from '../context/MyContext';

export default function UserProfile() {
  const { userDetails } = React.useContext(MyContext);
  const navigate = useNavigate();

  const handleProfileUpdate = () => {
    window.history.back();
  };

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <div className="profile_page">
      <div className="profile_update_container">
        <button type="button" onClick={() => navigate('/')}>
          go to home
        </button>

        <div className="profile_detail_holder">
          <div className="profile_sidebar">
            <div className="profile_img" />
            <ul>
              <li className="status">
                My status: <span>{userDetails?.status}</span>
              </li>
              <li>
                first Name: <span>{currentUser?.first_name}</span>
              </li>
              <li>
                last Name: <span>{currentUser?.last_name}</span>
              </li>
              <li>
                email: <span>{currentUser?.email}</span>
              </li>
              <li>
                phone: <span>{currentUser?.phone}</span>
              </li>
            </ul>
          </div>

          <form
            className="profile_update_form"
            onSubmit={(e) => {
              e.preventDefault();
              handleProfileUpdate();
            }}
          >
            <h1>Update Profile</h1>

            <input type="file" id="upload_image" />
            <input type="text" placeholder="first Name" name="lastName" />
            <input type="text" placeholder="Last Name" name="lastName" />
            <input
              type="email"
              value={currentUser?.email}
              name="emailAddress"
              disabled
            />
            <input type="tel" placeholder="Phone Number" name="phone" />

            <button type="submit">Update Profile</button>
          </form>
        </div>
      </div>
    </div>
  );
}
