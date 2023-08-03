import styled from '@emotion/styled';

const StyleCrudSideMenu = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin: 3.9rem 0 0;
  padding: 0 5px;

  [data-test] {
    background-color: #a52a2a;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    color: #f5f5f5;
    width: 240px;
    height: 230px;
    border-radius: 10px;
    box-shadow: 0 0 10px #222;
    cursor: pointer;

    h1:nth-of-type(1) {
      color: black;
    }
  }

  @media only screen and (max-width: 768px) {
    max-height: 95vh;
    overflow-y: auto;
    position: fixed;
    top: 70px;
    right: 0;
    z-index: 5;
    transform: translate(
      ${({ activeMenu }) => (activeMenu.side ? '0' : '120%')}
    );
    margin: 0;
    transition: 400ms;

    [data-test] {
      width: 200px;
      height: 130px;
    }
  }
`;

export default StyleCrudSideMenu;
