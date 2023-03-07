import styled from '@emotion/styled';

const StyledFooter = styled.div`
  background-color: grey;
  margin: 0;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  padding: 0 2rem;

  .to_top_btn {
    padding: 10px 15px;
    font-size: 1.2rem;
    font-weight: 700;
    transition: 0.5s;

    &:hover {
      background-color: darkgray;
    }
  }
`;

export default StyledFooter;
