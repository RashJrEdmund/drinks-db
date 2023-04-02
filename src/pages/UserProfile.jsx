/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledUserProfile from '../styles/StyledUserProfile';
import { MyContext } from '../context/MyContext';
import { deleteUser, updateUserProfile } from '../api/authentication';
import uploadIcon from '../images/darkImageIcon.png';
import { getUserReady } from '../services/utils';

export default function UserProfile() {
  const {
    zoomPhoto,
    setZoomPhoto,

    currentUser,
    setCurrentUser,
    setdialogueDetails,
    setLoadingAnime,
    customAlert,
  } = React.useContext(MyContext);
  const navigate = useNavigate();
  const profileRef = React.useRef();
  const [imagePath, setImagePath] = React.useState(null);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    setLoadingAnime({ message: 'updating...', show: true });
    const { firstName, lastName, phone, imageUpload } = e.target;

    if (!(firstName.value || lastName.value || phone.value)) {
      setLoadingAnime({ message: '', show: false });
      customAlert('cannot update profile');
      return;
    }

    const user = {
      id: JSON.parse(localStorage.getItem('currentUser')).id,
    };
    if (firstName.value) {
      user.first_name = firstName.value;
      firstName.value = '';
    }
    if (lastName.value) {
      user.last_name = lastName.value;
      lastName.value = '';
    }
    if (phone.value) {
      user.phone = phone.value;
      phone.value = '';
    }
    if (imageUpload.value) {
      user.image_url = imageUpload.value;
      imageUpload.value = '';
    }

    await updateUserProfile(user)
      .then(async (res) => {
        const { data } = res;
        await getUserReady(data); // stores the user in local storage with the joined since attribute
        setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
        customAlert('Profile Updated');
        window.scrollTo(0, profileRef.current.scrollIntoView());
      })
      .catch((er) => {
        const { response, message } = er;
        customAlert(response?.data || message);
      })
      .finally(() => setLoadingAnime({ message: '', show: false }));
  };

  const deleteAccount = async () => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) return;

    setLoadingAnime({ message: 'deleting...', show: true });
    navigate('/');

    await deleteUser(user)
      .then(() => {
        localStorage.clear();
        navigate('/', { replace: true });
        window.location.reload();
        customAlert('account deleted');
      })
      .catch(() => customAlert('error occured while deleting account'))
      .finally(() => setLoadingAnime({ message: '', show: false }));
  };

  const handleDeleteAccount = () => {
    setdialogueDetails({
      message1: 'are you sure you want to delete account?',
      message2: "all changes you've made will be lost",
      message3: 'this action cannot be undone',
      job: 'Proceed',
      show: true,
      fxntoCall() {
        deleteAccount();
      },
    });
  };

  const handleProfilePhoto = (e) => {
    const path = URL.createObjectURL(e.target.files[0]);
    setImagePath(path);
  };

  return (
    <StyledUserProfile>
      <div className="profile_update_container">
        <button type="button" onClick={() => window.history.back()}>
          &lt; Back
        </button>

        <div ref={profileRef} className="profile_detail_holder">
          <div className="profile_sidebar">
            {zoomPhoto && (
              <div
                className="zoom_overlay"
                onClick={() => setZoomPhoto(false)}
              />
            )}

            <div
              className={
                zoomPhoto ? 'profile_img active_profile_img' : 'profile_img'
              }
              title={!zoomPhoto && 'view profile'}
              style={{
                backgroundImage: `url(${
                  imagePath || currentUser?.image_url || uploadIcon
                })`,

                cursor: !zoomPhoto && 'pointer',
              }}
              onClick={() => setZoomPhoto((prev) => !prev)}
            />

            <ul>
              <li className="status">
                My status:{' '}
                <span>
                  {currentUser?.is_admin
                    ? 'Admin'
                    : (currentUser && 'Api User') || 'Guest'}
                </span>
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
                apikey: <br />
                <span>{currentUser?.apikey}</span>
              </li>
              <li>
                Joined Since: <span>{currentUser?.joinedSince}</span>
              </li>
            </ul>
          </div>

          <form className="profile_update_form" onSubmit={handleProfileUpdate}>
            <h1>Update Profile</h1>

            <span
              className="upload_image_holder"
              style={{
                backgroundImage: `url(${
                  imagePath || currentUser?.image_url || uploadIcon
                })`,
              }}
            >
              <input
                type="file"
                accept="image/jpeg, image/png, image/jpg, image/svg"
                id="upload_image"
                name="imageUpload"
                className="upload_image_field"
                onChange={handleProfilePhoto}
              />
              <img src={uploadIcon} alt="upload_icon" />
            </span>

            <input type="text" placeholder="first Name" name="firstName" />
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
            delete account
          </button>
        )}
      </div>
    </StyledUserProfile>
  );
}
