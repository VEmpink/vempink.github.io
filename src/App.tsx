import styled, {createGlobalStyle} from 'styled-components';
import Banner from './components/Banner';

const GlobalStyle = createGlobalStyle`
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
