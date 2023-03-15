import styled from '@emotion/styled';

const StyledFooter = styled.div`
  background-color: #0f0303;
  color: #fff;
  margin: 0;
  width: 100%;
  height: fit-content;
  min-height: 500px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 2rem;
  gap: 20px;

  .footer_column1 {
    width: calc(100% - 10px);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    p {
      width: fit-content;
      margin: 10px 0;
      font-size: 1.3rem;
    }
  }

  .footer_column2 {
    width: calc(100% - 10px);
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .to_top_btn {
      padding: 10px 15px;
      font-size: 1.2rem;
      font-weight: 700;
      transition: 0.5s;

      &:hover {
        background-color: darkgray;
      }
    }

    p {
      width: fit-content;
      margin: 10px 0;
      font-size: 1.3rem;
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    height: 95vh;
    min-height: unset;
  }
`;

export default StyledFooter;
