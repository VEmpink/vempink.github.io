import {useState} from 'react';
import styled from 'styled-components';

const SwitchWrapper = styled.span`
  display: inline-block;
  position: relative;
  margin-top: 40px;
`;

const SwitchTrack = styled.div`
  width: 32px;
  height: 10px;
  border-radius: 10px;
  background-color: #526475;
`;

const SwitchThumb = styled.div`
  position: absolute;
  top: 50%;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #7f92a4;
  transform: translateY(-50%);
  transition: left 0.3s cubic-bezier(0.4, 0.03, 0, 1);
  cursor: pointer;
`;

function Switch() {
  const [isDarkMode, setDarkMode] = useState(true);

  return (
    <SwitchWrapper>
      <SwitchTrack />

      <SwitchThumb
        style={{left: isDarkMode ? 16 : 0}}
        onClick={() => {
          setDarkMode(!isDarkMode);
        }}
      />
    </SwitchWrapper>
  );
}

export default Switch;
