import styled from 'styled-components/macro';
import {Text} from '../common';
import Logo from './Logo';
import Socials from './Socials';
import Switch from './Switch';

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled(Text)`
  font-size: 40px;
  font-weight: 800;
`;

const Subtitle = styled(Text)`
  font-size: 14px;
  color: #526475;
`;

function Banner() {
  return (
    <Div>
      <Logo />

      <div style={{marginTop: 40, marginBottom: 40}}>
        <Title>Halo! Firmansyah here,</Title>
        <Title>I'm JavaScript Developer.</Title>
      </div>

      <Subtitle style={{marginBottom: 16}}>
        Currently looking for a Job with over 2 years experience in JavaScript,
        highly understanding of Native Codes, and a fan of React Framework.
      </Subtitle>

      <Subtitle
        as='a'
        href='https://github.com/VEmpink?tab=repositories'
        target='_blank'
        rel='noreferrer'
      >
        See my Works/Repositories
      </Subtitle>

      <Socials />

      <Switch />
    </Div>
  );
}

export default Banner;
