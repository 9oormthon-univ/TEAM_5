import useGetClubs from 'hooks/api/useGetClubs';
import styled from 'styled-components';
import theme from 'styles/theme';

function BookClubs() {
  const { clubs } = useGetClubs();

  console.log(clubs);
  return (
    <StyledWrapper>
      <span>내 독서모임</span>

      <div>{clubs?.title}</div>
    </StyledWrapper>
  );
}

export default BookClubs;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  background-color: ${theme.color.modal};
`;
