import styled from 'styled-components/macro';
import mailIcon from '../../assets/images/mail.svg';
import whatsappIcon from '../../assets/images/whatsapp.svg';
import telegramIcon from '../../assets/images/telegram.svg';
import githubIcon from '../../assets/images/github.svg';
import stackoverflowIcon from '../../assets/images/stackoverflow.svg';
import linkedinIcon from '../../assets/images/linkedin.svg';
// import mediumIcon from '../../assets/images/medium.svg';
// import twitterIcon from '../../assets/images/twitter.svg';
import facebookIcon from '../../assets/images/facebook.svg';

const Div = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Link = styled.a`
  margin-right: 16px;
  text-decoration: none;
`;

const Svg = styled.svg`
  width: 20px;
  height: 20px;

  & > * {
    fill: #526475;
  }

  &:hover > * {
    fill: #7f92a4;
  }
`;

function Socials() {
  return (
    <Div>
      <Link
        href='https://mail.google.com/mail/u/0/?view=cm&fs=1&to=fiermandt@gmail.com&su=Hello!&tf=1'
        target='_blank'
        rel='noreferrer'
      >
        <Svg>
          <use href={mailIcon + '#mail'}></use>
        </Svg>
      </Link>

      <Link href='https://wa.me/6285215517605' target='_blank' rel='noreferrer'>
        <Svg>
          <use href={whatsappIcon + '#whatsapp'}></use>
        </Svg>
      </Link>

      <Link href='https://t.me/VEmpink' target='_blank' rel='noreferrer'>
        <Svg>
          <use href={telegramIcon + '#telegram'}></use>
        </Svg>
      </Link>

      <Link href='https://github.com/VEmpink' target='_blank' rel='noreferrer'>
        <Svg>
          <use href={githubIcon + '#github'}></use>
        </Svg>
      </Link>

      <Link
        href='https://stackoverflow.com/users/7716289/firmansyah'
        target='_blank'
        rel='noreferrer'
      >
        <Svg>
          <use href={stackoverflowIcon + '#stackoverflow'}></use>
        </Svg>
      </Link>

      <Link
        href='https://www.linkedin.com/in/VEmpink'
        target='_blank'
        rel='noreferrer'
      >
        <Svg>
          <use href={linkedinIcon + '#linkedin'}></use>
        </Svg>
      </Link>

      <Link href='https://fb.me/VEmpink' target='_blank' rel='noreferrer'>
        <Svg>
          <use href={facebookIcon + '#facebook'}></use>
        </Svg>
      </Link>
    </Div>
  );
}

export default Socials;
