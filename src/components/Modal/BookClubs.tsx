import useGetClubs from 'hooks/api/useGetClubs';
import styled from 'styled-components';
import theme from 'styles/theme';

function BookClubs() {
  const { clubs } = useGetClubs();

  return (
    <StyledWrapper>
      <StyledTitle>내 독서모임</StyledTitle>
      <StyledDataWrapper>
        {clubs.map((item, index) => (
          <StyledData key={index}>
            <span>{item.title}</span>
            <span> {item.overview}</span>
            <StyledHr />
          </StyledData>
        ))}
      </StyledDataWrapper>
    </StyledWrapper>
  );
}

export default BookClubs;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${theme.color.darkBlack};
`;

const StyledTitle = styled.span`
  font-size: 1.2rem;
  font-weight: ${theme.fontWeight.bold};
  color: ${theme.color.black};
`;

const StyledDataWrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 3rem 0;
`;

const StyledData = styled.div`
  display: flex;
  flex-direction: column;

  width: 600px;

  margin: 2rem 0;
`;

const StyledHr = styled.hr`
  margin-top: 5px;
`;
