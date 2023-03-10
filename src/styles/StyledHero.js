import styled from '@emotion/styled';
import heroImg from '../images/wine_collection.png';

const StyledHero = styled.div`
  background: linear-gradient(to bottom, #00000065, #00000065, #00000065),
    url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  /* background-attachment: fixed; */

  margin: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    color: #f5f5f5;
  }
`;

export default StyledHero;
