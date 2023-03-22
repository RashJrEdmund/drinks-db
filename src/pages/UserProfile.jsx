import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledUserProfile from '../styles/StyledUserProfile';
import MyContext from '../context/MyContext';

export default function UserProfile() {
  const { userDetails, setdialogueDetails, setLoadingAime, customAlert } =
    React.useContext(MyContext);
  const navigate = useNavigate();

  const handleProfileUpdate = () => {
    window.history.back();
  };

  const deleteAccount = () => {
    setLoadingAime({ message: 'deleting...', show: true });

    setTimeout(() => {
      setLoadingAime({ message: '', show: false });

      customAlert('account test deleted');
    }, 1000);
  };

  const handleDeleteAccount = () => {
    setdialogueDetails({
      message1: 'are you sure you want',
      message2: 'to delete account?',
      job: 'Proceed',
      fxntoCall() {
        deleteAccount();
      },
      show: true,
    });
  };

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <StyledUserProfile>
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
        <button
          type="button"
          className="delete_acount_btn"
          onClick={handleDeleteAccount}
        >
          {/* delte account */}
        </button>
      </div>
    </StyledUserProfile>
  );
}
