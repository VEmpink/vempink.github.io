import styled from 'styled-components';
import {Text} from './common';

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
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={64}
          height={64}
          viewBox='0 0 270.93332 270.93334'
        >
          <g fill='#7f92a4'>
            <path d='m 202.76341,239.78655 c 24.02273,0 41.9043,-12.46292 41.9043,-35.22129 0,-21.13277 -12.10167,-30.52512 -33.59569,-39.73684 l -6.32177,-2.70933 c -10.83732,-4.69617 -15.53349,-7.76675 -15.53349,-15.35287 0,-6.14115 4.69617,-10.83732 12.10167,-10.83732 7.22488,0 11.92106,3.07057 16.25598,10.83732 l 19.6878,-12.64354 c -8.30861,-14.63038 -19.86842,-20.22966 -35.94378,-20.22966 -22.57774,0 -37.0275,14.44976 -37.0275,33.41507 0,20.5909 12.10167,30.34449 30.34449,38.11124 l 6.32177,2.70933 c 11.55981,5.05741 18.42344,8.12799 18.42344,16.79784 0,7.22488 -6.68301,12.46292 -17.15909,12.46292 -12.46291,0 -19.50717,-6.50239 -24.92583,-15.35287 L 156.7048,213.9576 c 7.4055,14.63038 22.57775,25.82895 46.05861,25.82895 z M 66.935719,238.16095 H 92.222798 V 200.7722 H 141.17136 V 178.19445 H 92.222798 V 137.5545 H 146.04815 V 115.33799 H 66.935719 Z M 1.1536574,0.9416995 H 272.08698 V 271.87502 H 1.1536574 Z' />
          </g>
        </svg>

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
