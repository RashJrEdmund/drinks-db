import styled from '@emotion/styled';

const StyledFooter = styled.div`
  background-color: none;
  border-top: 1px solid #cce;
  color: #fff;
  margin: 2rem auto;
  width: 97%;
  max-width: 1400px;
  height: fit-content;
  min-height: 100px;
  display: flex;
  justify-content: space-between;
  padding: 2rem 10px;
  gap: 10px;

  p {
    width: fit-content;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    height: 95vh;
    min-height: unset;
  }
`;

export default StyledFooter;
