import GoormCard from 'components/Card/GoormCard';
import { GOORM_ARRAY } from 'constants/goorm';
import { useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

function GoormMake() {
  const [mode, setMode] = useState<string>('');

  const darkModeHandler = () => {
    setMode('밤');
    console.log(mode);
  };

  const brightModeHandler = () => {
    setMode('낮');
  };

  return (
    <StyledWrapper>
      <StyledContentWrapper>
        <StyledInform>자유롭게 구름을 꾸며보세요!</StyledInform>
        <StyledToggle onClick={brightModeHandler}>낮</StyledToggle>
        <StyledToggle onClick={darkModeHandler}>밤</StyledToggle>
      </StyledContentWrapper>
      <StyledHr />

      <StyledGoormWrapper>
        {GOORM_ARRAY.map((item, index) => (
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
  margin-bottom: 1rem;
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

const StyledToggle = styled.button``;
