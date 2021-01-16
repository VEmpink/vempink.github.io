import styled from 'styled-components/macro';

const MainContainer = styled.div`
  width: 40%;
  margin: 0 auto;

  @media (max-width: 2560px) {
    width: 40%;
  }

  @media (max-width: 1440px) {
    width: 52%;
  }

  @media (max-width: 960px) {
    width: 60%;
  }

  @media (max-width: 668px) {
    width: 80%;
  }
`;

export default MainContainer;
