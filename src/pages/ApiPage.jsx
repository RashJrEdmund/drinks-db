import React from 'react';
import styled from '@emotion/styled';

const StyledApiPage = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h1 {
    width: fit-content;
    height: fit-content;
  }

  a {
    background-color: green;
    color: white;
    width: fit-content;
    height: fit-content;
    margin: 1rem 0;
    padding: 7px 12px;
  }
`;

export default function ApiPage() {
  return (
    <StyledApiPage>
      <h1>gEt_ApI_pAgE</h1>
      <a href="http://localhost:3000/api-docs/" target="blank">
        how to use / guide
      </a>
    </StyledApiPage>
  );
}
