import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledUserProfile from '../styles/StyledUserProfile';
import MyContext from '../context/MyContext';
import { deleteUser } from '../api/authentication';

export default function UserProfile() {
  const { userDetails, setdialogueDetails, setLoadingAime, customAlert } =
    React.useContext(MyContext);
  const navigate = useNavigate();

  const handleProfileUpdate = () => {
    window.history.back();
  };

  const deleteAccount = async () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) return;

    setLoadingAime({ message: 'deleting...', show: true });
    navigate('/');

    await deleteUser(user)
      .then(() => {
        localStorage.clear('currentUser');
        localStorage.removeItem('filteredDrinks');
        localStorage.removeItem('localDrinks');
        navigate('/', { replace: true });
        window.location.reload();
        customAlert('account deleted');
      })
      .catch(() => customAlert('error occured while deleting account'))
      .finally(() => setLoadingAime({ message: '', show: false }));
  };

  const handleDeleteAccount = () => {
    setdialogueDetails({
      message1: 'are you sure you want to delete account?',
      message2: 'your progress will be lost',
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
              <li>
                Joined Since: <span>{currentUser?.joinedSince}</span>
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

        {JSON.parse(localStorage.getItem('currentUser')) && (
          <button
            type="button"
            className="delete_acount_btn"
            onClick={handleDeleteAccount}
          >
            delte account
          </button>
        )}
      </div>
    </StyledUserProfile>
  );
}
