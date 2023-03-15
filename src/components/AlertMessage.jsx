/* eslint-disable react/prop-types */
import React from 'react';
import styled from '@emotion/styled';

const StyledAlertMessage = styled.div`
  @keyframes alertAnime {
    from {
      margin: 0;
    }
    to {
      margin: 3rem auto;
    }
  }

  animation-name: alertAnime;
  animation-duration: 0.5s;

  background-color: #000;
  color: #fff;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  margin: 3rem auto;
  padding: 1rem;
  z-index: 10;

  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border-radius: 10px;
`;

function AlertMessage({ message }) {
  return (
    <StyledAlertMessage>
      <p>{message}</p>
    </StyledAlertMessage>
  );
}

export default AlertMessage;
