import {useContext} from 'react';
import styled from 'styled-components/macro';
import {CurrentThemeContext} from '../../context';
import {Theme} from '../../types';

const SwitchWrapper = styled.span`
  display: inline-block;
  position: relative;
  margin-top: 40px;
`;

const SwitchTrack = styled.div`
  width: 32px;
  height: 10px;
  border-radius: 10px;
  /**
   * Anoying in light mode
   */
  background-color: ${({theme}: {theme: Theme}) => theme.textHintColor};
`;

const SwitchThumb = styled.div`
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  /**
   * Anoying in light mode
   */
  background-color: ${({theme}: {theme: Theme}) => theme.textPrimaryColor};
  transform: translateY(-50%);
  transition: left 0.3s cubic-bezier(0.4, 0.03, 0, 1);
  cursor: pointer;
`;

function Switch() {
  const {theme, setTheme} = useContext(CurrentThemeContext);

  return (
    <SwitchWrapper>
      <SwitchTrack />

      <SwitchThumb
        style={{left: theme === 'light' ? 0 : 16}}
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      />
    </SwitchWrapper>
  );
}

export default Switch;
