import GlobalStyle from './components/GlobalStyle';
import MainContainer from './components/MainContainer';
import Banner from './components/Banner';

function App() {
  return (
    <>
      <GlobalStyle />

      <MainContainer>
        <Banner />
      </MainContainer>
    </>
  );
}

export default App;
