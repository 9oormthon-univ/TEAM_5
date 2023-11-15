import styled from 'styled-components';
import theme from 'styles/theme';

interface Props {
  background: string;
  color: string;
  content: string;
}

function Button({ background, color, content }: Props) {
  return (
    <StyledWrapper background={background} color={color}>
      {content}
    </StyledWrapper>
  );
}

export default Button;

const StyledWrapper = styled.button<{ background: string; color: string }>`
  width: 6rem;
  text-align: center;
  padding: 10px 13px;
  border-radius: 20px;
  background-color: ${(props) => props.background};
  color: ${(props) => props.color};
  font-weight: ${theme.fontWeight.medium};
`;
