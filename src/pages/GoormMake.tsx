import GoormCard from 'components/Card/GoormCard';
import { GOORM } from 'constants/goorm';
import styled from 'styled-components';
import theme from 'styles/theme';

function GoormMake() {
  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <StyledInform>자유롭게 구름을 꾸며보세요!</StyledInform>
        <span>낮밤 전환</span>
      </StyledContentWrapper>
      <StyledHr />

      <StyledGoormWrapper>
        {GOORM.map((item, index) => (
          <GoormCard key={index} name={item.name} img={item.img} />
        ))}
      </StyledGoormWrapper>
    </StyledWrapper>
  );
}

export default GoormMake;

const StyledWrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;

  padding: 10rem 7rem;
  width: 100%;
  height: 100vh;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledInform = styled.span`
  font-size: 1.5rem;
`;

const StyledHr = styled.hr`
  border: 1px solid ${theme.color.line};
`;

const StyledGoormWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 3rem 0;
  gap: 10px;
`;
