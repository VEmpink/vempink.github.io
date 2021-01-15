import {createGlobalStyle} from 'styled-components/macro';
import Inter from '../assets/fonts/Inter-VariableFont_slnt,wght.ttf';

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

export default GlobalStyle;
