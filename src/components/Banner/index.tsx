import styled from 'styled-components/macro';
import {Text} from '../common';
import Logo from './Logo';
import Socials from './Socials';
import Switch from './Switch';

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const titleStyle: React.CSSProperties = {
  fontSize: 40,
  fontWeight: 900,
};

function Banner() {
  return (
    <StyledDiv>
      <Logo />

      <div style={{marginTop: 40, marginBottom: 40}}>
        <Text style={titleStyle}>Halo! Firmansyah here,</Text>
        <Text style={titleStyle}>I'm JavaScript Developer.</Text>
      </div>

      <Text style={{marginBottom: 8, fontSize: 15, color: '#526475'}}>
        Currently looking for a Job with over 2 years experience in JavaScript,
        highly understanding of Native Codes, and a fan of React Framework.
      </Text>

      <a
        href='https://github.com/VEmpink?tab=repositories'
        target='_blank'
        style={{fontSize: 14, color: '#526475'}}
      >
        See my Works/Repositories
      </a>

      <Socials />

      <Switch />
    </StyledDiv>
  );
}

export default Banner;
