import React from 'react';
import '../styles/userProfile.css';
import { useNavigate } from 'react-router-dom';

export default function UserProfile() {
  const navigate = useNavigate();

  const handleProfileUpdate = () => {
    window.history.back();
  };

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
                My status: <span>GUEST</span>
              </li>
              <li>
                first Name: <span>Tata</span>
              </li>
              <li>
                last Name: <span>Rash</span>
              </li>
              <li>
                email: <span>something@gmail.com</span>
              </li>
              <li>
                phone: <span>+237 67011</span>
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
              value="somethin@gmail.com"
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
