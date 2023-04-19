import React from 'react';
import styled from '@emotion/styled';

export default function LoadingText() {
  const StyledLoadingMessage = styled.p`
    @keyframes LoadingAnime {
      from {
        color: #4682b4;
      }
      to {
        color: #a52a2a;
      }
    }

    height: 90vh;
    width: 100%;
    letter-spacing: 3px;
    display: flex;
    align-items: center;
    justify-content: center;

    animation: LoadingAnime;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
  `;

  return <StyledLoadingMessage>Loading...</StyledLoadingMessage>;
}
