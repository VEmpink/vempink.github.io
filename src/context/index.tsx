import {createContext, Dispatch, SetStateAction} from 'react';

type CurrentThemeContextTypes = {
  theme: 'light' | 'dark';
  setTheme: Dispatch<SetStateAction<'light' | 'dark'>>;
};

const CurrentThemeContext = createContext<CurrentThemeContextTypes>({
  theme: 'dark',
  setTheme: () => {},
});

export {CurrentThemeContext};
