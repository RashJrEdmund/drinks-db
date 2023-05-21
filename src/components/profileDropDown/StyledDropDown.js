import styled from '@emotion/styled';

const StyledDropDown = styled.div`
  position: absolute;
  left: -170%;
  top: calc(100% + 3.8rem);
  background-color: #18191a;
  width: fit-content;
  min-width: 175px;
  height: fit-content;
  padding: 1rem;
  border: 1px solid grey;
  border-radius: 10px;
  z-index: 6;

  &::before {
    content: ' ';
    background-color: #18191a;
    position: absolute;
    top: 0;
    right: 0;
    transform: translateY(-50%) rotate(45deg);
    height: 30px;
    width: 30px;
    margin: 0 1rem 0 0;
    border-top: 1px solid grey;
    border-left: 1px solid grey;
    z-index: -1;
  }

  p {
    color: #ff1818;
    color: #a52a2a;
    color: #fff;
    text-align: left;
    line-height: 40px;
    letter-spacing: 2px;
    font-weight: 500;
    width: fit-content;
    margin: 1rem 0 0;
    word-break: keep-all;
  }

  @media only screen and (max-width: 800px) {
    left: -190%;
  }
`;

export default StyledDropDown;
