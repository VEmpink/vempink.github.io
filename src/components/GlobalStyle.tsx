import {createGlobalStyle} from 'styled-components/macro';
import Inter from '../assets/fonts/Inter-VariableFont_slnt,wght.ttf';
import {Theme} from '../types';

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
    background-color: ${({theme}: {theme: Theme}) => theme.primaryColor};
    transition: background-color 0.3s cubic-bezier(0.4, 0.03, 0, 1);
  }
`;

export default GlobalStyle;
