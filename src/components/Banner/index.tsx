import styled from 'styled-components/macro';
import { Text } from '../common';
import Logo from './Logo';
import Socials from './Socials';
import Switch from './Switch';
import { Theme } from '../../types';

const Div = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /**
   * Samsung Galaxy Fold
   */
  @media (max-height: 319px) {
    height: auto;
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

const TitleWrapper = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;

  @media (max-height: 420px) {
    margin-top: 24px;
    margin-bottom: 24px;
  }
`;

const Title = styled(Text)`
  font-size: 48px;
  font-weight: 900;

  @media (max-width: 2560px) {
    font-size: 48px;
  }

  @media (max-width: 1440px) {
    font-size: 40px;
  }

  @media (max-width: 960px) {
    font-size: 32px;
  }

  @media (max-width: 568px) {
    font-size: 24px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

const Subtitle = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: Theme }) => theme.textHintColor};

  @media (max-width: 2560px) {
    font-size: 16px;
  }

  @media (max-width: 1440px) {
    font-size: 14px;
  }

  @media (max-width: 960px) {
    font-size: 12px;
  }
`;

const LinkRepos = styled(Subtitle)`
  margin-top: 16px;
  align-self: flex-start;

  @media (max-height: 420px) {
    margin-top: 12px;
  }
`;

function Banner() {
  return (
    <Div>
      <Logo />

      <TitleWrapper>
        <Title>👋 Firmansyah here,</Title>
        <Title>I'm JavaScript Developer.</Title>
      </TitleWrapper>

      <Subtitle>
        Currently working for{' '}
        <LinkRepos as='a' href='https://nusantech.com/' target='_blank' rel='noreferrer'>
          Nusantech Indonesia
        </LinkRepos>{' '}
        with over 4 years experience in JavaScript, highly understanding of Native Codes, and a fan of React Framework.
      </Subtitle>

      <LinkRepos as='a' href='https://github.com/VEmpink?tab=repositories' target='_blank' rel='noreferrer'>
        See my Works/Repositories
      </LinkRepos>

      <Socials />

      <Switch />
    </Div>
  );
}

export default Banner;
