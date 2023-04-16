/* eslint-disable */
/* eslint-disable prefer-destructuring */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MdDeleteForever,
  MdArrowBackIos,
  MdOutlineModeEditOutline,
  MdOutlineEditOff,
  MdBrightness4,
} from 'react-icons/md';
import FormData from 'form-data';
import StyledUserProfile from '../styles/StyledUserProfile';

import { MyContext } from '../context/MyContext';
import { deleteUser } from '../api/authentication';
import uploadIcon from '../images/darkImageIcon.png';
import ProfileSettingsGaurd from '../HOCs/ProfileSettingsGaurd';

function UserProfile({ currentUser }) {
  const {
    zoomPhoto,
    setZoomPhoto,

    setdialogueDetails,
    setLoadingAnime,
    customAlert,
  } = React.useContext(MyContext);
  const navigate = useNavigate();
  const profileRef = React.useRef();
  const [imagePath, setImagePath] = React.useState(null);
  const [showSideEdit, setShowSideEdit] = React.useState(false);

  const handleProfileUpdate = async (e) => {
    e.preventDefault();

    // setLoadingAnime({ message: 'updating...', show: true });
    const { firstName, lastName, phone, imageUpload } = e.target;
    const formData = new FormData();

    if (imageUpload.value) {
      formData.append('image', imageUpload.files[0]);
      console.clear();
      console.log('this image', imageUpload.files[0], formData);
    }

    if (
      !(firstName.value || lastName.value || phone.value || imageUpload.value)
    ) {
      setLoadingAnime({ message: '', show: false });
      customAlert('cannot update profile');
      return;
    }

    const user = {
      id: currentUser?.id,
    };
    if (firstName.value) user.first_name = firstName.value;

    if (lastName.value) user.last_name = lastName.value;

    if (phone.value) user.phone = phone.value;

    // if (imageUpload.value) user.image_url = imageUpload.files[0];

    // await updateUserProfile(user)
    //   .then(async (res) => {
    //     const { data } = res;
    //     customAlert('Profile Updated');
    //     window.scrollTo(0, profileRef.current.scrollIntoView());

    //     if (firstName.value) firstName.value = '';

    //     if (lastName.value) lastName.value = '';

    //     if (phone.value) phone.value = '';

    //     if (imageUpload.value) imageUpload.value = '';

    //     setShowSideEdit(false);
    //   })
    //   .catch((er) => {
    //     const { response, message } = er;
    //     customAlert(response?.data || message);
    //   })
    //   .finally(() => setLoadingAnime({ message: '', show: false }));
  };

  const deleteAccount = async () => {
    if (!currentUser) return;

    setLoadingAnime({ message: 'deleting...', show: true });

    await deleteUser(currentUser)
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
        <div className="profile-btns">
          <button
            className="back-btn"
            type="button"
            onClick={() => window.history.back()}
          >
            <MdArrowBackIos />
          </button>

          <button
            className="edit_profile_btn"
            type="button"
            onClick={() => setShowSideEdit((prev) => !prev)}
          >
            {showSideEdit ? <MdOutlineEditOff /> : <MdOutlineModeEditOutline />}
          </button>
        </div>

        <div ref={profileRef} className="profile_detail_holder">
          <div
            className={
              showSideEdit
                ? 'active_profile_sidebar profile_sidebar'
                : 'profile_sidebar'
            }
            style={{
              cursor: showSideEdit && 'pointer',
            }}
            onClick={() => {
              if (showSideEdit) setShowSideEdit(false);
            }}
          >
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
              title={!zoomPhoto ? 'view profile' : ''}
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
                apikey: {window.screen.availHeight < 600 && <br />}
                <span>{currentUser?.apikey}</span>
              </li>
              <li>
                Joined Since: <span>{currentUser?.joinedSince}</span>
              </li>

              <li className="to_settings" onClick={() => navigate('/settings')}>
                <MdBrightness4 /> Settings
              </li>

              <button
                type="button"
                className="delete_acount_btn"
                onClick={handleDeleteAccount}
              >
                <MdDeleteForever /> delete account
              </button>
            </ul>
          </div>

          <form
            className={
              !showSideEdit
                ? 'active_profile_update_form profile_update_form'
                : 'profile_update_form'
            }
            onSubmit={handleProfileUpdate}
            onClick={() => {
              if (!showSideEdit) setShowSideEdit(true);
            }}
            style={{
              cursor: !showSideEdit && 'pointer',
            }}
          >
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
                title="upload profile ?"
                className="upload_image_field"
                onChange={handleProfilePhoto}
              />
            </span>

            <input
              type="text"
              placeholder={`first Name: ${currentUser?.first_name}`}
              name="firstName"
            />
            <input
              type="text"
              placeholder={`last Name: ${currentUser?.last_name}`}
              name="lastName"
            />
            <input
              type="email"
              value={currentUser?.email}
              placeholder={`emai: ${currentUser?.email}`}
              disabled
            />
            <input
              type="tel"
              placeholder={`Phone: ${currentUser?.phone}`}
              name="phone"
            />

            <button type="submit">Update Profile</button>
          </form>
        </div>
      </div>
    </StyledUserProfile>
  );
}

export default ProfileSettingsGaurd(UserProfile);
