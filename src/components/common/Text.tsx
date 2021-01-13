import styled from 'styled-components';

const SyledParagraph = styled.p`
  margin: 0;
  color: #7f92a4;
`;

type TextProps = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

const Text: React.FC<TextProps> = (props) => {
  return <SyledParagraph style={props.style}>{props.children}</SyledParagraph>;
};

export default Text;
