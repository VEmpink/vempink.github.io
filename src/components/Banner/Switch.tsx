import {useContext} from 'react';
import styled from 'styled-components/macro';
import {CurrentThemeContext} from '../../context';

const SwitchWrapper = styled.span`
  align-self: flex-start;
  position: relative;
  margin-top: 40px;

  @media (max-height: 420px) {
    margin-top: 24px;
  }
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

  @media (max-width: 668px) {
    width: 30px;
    height: 8px;
    border-radius: 8px;
  }
`;

type SwitchThumbProps = {
  currentTheme: 'light' | 'dark';
};

const SwitchThumb = styled.div<SwitchThumbProps>`
  position: absolute;
  top: 50%;
  left: ${(props) => (props.currentTheme === 'light' ? 0 : '16px')};
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.currentTheme === 'light' ? '#7F92A4' : '#7F92A4'};
  transform: translateY(-50%);
  transition: left 0.3s cubic-bezier(0.4, 0.03, 0, 1);
  cursor: pointer;

  @media (max-width: 668px) {
    width: 14px;
    height: 14px;
  }
`;

function Switch() {
  const {theme, setTheme} = useContext(CurrentThemeContext);

  return (
    <SwitchWrapper>
      <SwitchTrack currentTheme={theme} />

      <SwitchThumb
        currentTheme={theme}
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light');
        }}
      />
    </SwitchWrapper>
  );
}

export default Switch;
