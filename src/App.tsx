import styled, {createGlobalStyle} from 'styled-components';
import Banner from './components/Banner';
import Inter from './assets/fonts/Inter-VariableFont_slnt,wght.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    src: url(${Inter});
  }

  * {
    font-family: 'Inter';
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #061b2e;
  }
`;

const Container = styled.div`
  width: 52%;
  margin: 0 auto;
`;

function App() {
  return (
    <>
      <GlobalStyle />

      <Container>
        <Banner />
      </Container>
    </>
  );
}

export default App;
