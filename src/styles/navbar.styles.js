import styled from '@emotion/styled';

const StyledNavBar = styled.div`
  background-color: #18191a;
  border-bottom: 1px solid #cce;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: fit-content;
  transition: 0.4s transform;
  z-index: 5;

  &.active_navBar {
    transform: translateY(-100%);
  }

  .navBar-container {
    position: relative;
    background: none;
    width: 100%;
    min-height: 90px;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    margin: 0 auto;
    transition: 0.6s color;

    .left_group {
      width: fit-content;
      height: fit-content;
      margin: 0;
      display: flex;
      align-items: center;

      .side_menu_btn {
        background-color: green;
        font-weight: 700;
        font-size: 1rem;
        letter-spacing: 3px;
        padding: 12px 1rem;
        margin: 0 1rem 0 0;
        z-index: 4;
      }

      .user_status {
        width: fit-content;
        height: fit-content;
        color: #f5f5f5;
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0 0 0 4rem;

        span {
          color: #a52a2a;
          font-size: 2rem;
          font-weight: 700;
        }
      }
    }

    .profile_section {
      position: relative;
      height: fit-content;
      width: fit-content;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 1rem;
      padding: 0;
      cursor: pointer;

      .profile_logo {
        background-color: #f5f5f5;
        background-position: center;
        background-size: cover;
        height: 60px;
        width: 60px;
        border-radius: 50px;
        margin: 5px 0 0;
      }

      span {
        color: #a52a2a;
        font-weight: 700;
        margin: 5px 0 2px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .navBar-container {
      .left_group {
        .side_menu_btn {
          font-size: 0.9rem;
          letter-spacing: 2px;
          padding: 8px 10px;
        }
      }

      .profile_section {
        margin: 0;
      }
    }
  }

  @media only screen and (max-width: 600px) {
    .navBar-container {
      .left_group {
        margin: 0;

        .user_status {
          margin: 0 0 0 1rem;
        }
      }

      .profile_section {
        span {
          /* display: none; */
        }
      }
    }
  }
`;

export default StyledNavBar;
