import styled from 'styled-components';
import myPicture from '../assets/images/me.jpg';
import {Text} from './common';

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const MyPicture = styled.img`
  width: 80px;
  border-radius: 80px;
  cursor: pointer;
`;

const titleStyle: React.CSSProperties = {
  fontSize: 40,
  fontWeight: 'bold',
};

function Banner() {
  return (
    <StyledDiv>
      <div>
        <MyPicture src={myPicture} />

        <div style={{marginTop: 32, marginBottom: 32}}>
          <Text style={titleStyle}>Halo! Firmansyah here,</Text>
          <Text style={titleStyle}>I'm JavaScript Developer.</Text>
        </div>

        <Text style={{fontSize: 14, color: '#526475'}}>
          Currently looking for a Job with over 2 years experience in
          JavaScript, highly understanding of Native Codes, and a fan of React
          Framework.
        </Text>
      </div>
    </StyledDiv>
  );
}

export default Banner;
