import styled from 'styled-components';

function GoormMake() {
  return (
    <StyledWrapper>
      <div>
        <StyledInform>자유롭게 구름을 꾸며보세요!</StyledInform>
        <span>낮밤 전환</span>
      </div>
      <StyledHr />
    </StyledWrapper>
  );
}

export default GoormMake;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StyledInform = styled.span`
  font-size: 1.3rem;
`;

const StyledHr = styled.hr``;
