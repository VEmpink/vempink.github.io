import {useContext} from 'react';
import styled from 'styled-components/macro';
import {CurrentThemeContext} from '../../context';

const SwitchWrapper = styled.span`
  display: inline-block;
  position: relative;
  margin-top: 40px;
`;

type SwitchTrackProps = {
  currentTheme: 'light' | 'dark';
};

const SwitchTrack = styled.div<SwitchTrackProps>`
  width: 32px;
  height: 10px;
  border-radius: 10px;
  background-color: ${(props) =>
    props.currentTheme === 'light' ? '#D7E0E7' : '#526475'};
`;

type SwitchThumbProps = {
  currentTheme: 'light' | 'dark';
};

const SwitchThumb = styled.div<SwitchThumbProps>`
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.currentTheme === 'light' ? '#7F92A4' : '#7F92A4'};
  transform: translateY(-50%);
  transition: left 0.3s cubic-bezier(0.4, 0.03, 0, 1);
  cursor: pointer;
`;

function Switch() {
  const {theme, setTheme} = useContext(CurrentThemeContext);

  return (
    <SwitchWrapper>
      <SwitchTrack currentTheme={theme} />

      <SwitchThumb
        currentTheme={theme}
        style={{left: theme === 'light' ? 0 : 16}}
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      />
    </SwitchWrapper>
  );
}

export default Switch;
