import styled from 'styled-components';
import {Text} from '../common';
import Logo from './Logo';

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const titleStyle: React.CSSProperties = {
  fontSize: 40,
  fontWeight: 900,
};

const LinkRepo = styled.a`
  color: #526475;
`;

function Banner() {
  return (
    <StyledDiv>
      <div>
        <Logo />

        <div style={{marginTop: 40, marginBottom: 40}}>
          <Text style={titleStyle}>Halo! Firmansyah here,</Text>
          <Text style={titleStyle}>I'm JavaScript Developer.</Text>
        </div>

        <Text style={{marginBottom: 8, fontSize: 15, color: '#526475'}}>
          Currently looking for a Job with over 2 years experience in
          JavaScript, highly understanding of Native Codes, and a fan of React
          Framework.
        </Text>

        <LinkRepo
          href='https://github.com/VEmpink?tab=repositories'
          target='_blank'
          style={{fontSize: 14}}
        >
          See my Works/Repositories
        </LinkRepo>
      </div>
    </StyledDiv>
  );
}

export default Banner;
