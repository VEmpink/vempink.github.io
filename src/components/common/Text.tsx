import styled from 'styled-components/macro';
import {Theme} from '../../types';

const Text = styled.p`
  margin: 0;
  color: ${({theme}: {theme: Theme}) => theme.textPrimaryColor};
  line-height: 1;
`;

export default Text;
