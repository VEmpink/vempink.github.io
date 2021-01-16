import {useState} from 'react';
import {ThemeProvider} from 'styled-components/macro';
import GlobalStyle from './components/GlobalStyle';
import MainContainer from './components/MainContainer';
import Banner from './components/Banner';
import lightTheme from './assets/json/light-theme.json';
import darkTheme from './assets/json/dark-theme.json';
import {Theme} from './types';
import {CurrentThemeContext} from './context';

type ListThemes = {
  light: Theme;
  dark: Theme;
};

const themes: ListThemes = {
  light: lightTheme,
  dark: darkTheme,
};

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  return (
    <CurrentThemeContext.Provider value={{theme, setTheme}}>
      <ThemeProvider theme={theme === 'light' ? themes.light : themes.dark}>
        <GlobalStyle />

        <MainContainer>
          <Banner />
        </MainContainer>
      </ThemeProvider>
    </CurrentThemeContext.Provider>
  );
}

export default App;
