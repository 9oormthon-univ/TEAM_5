import PlusBtn from 'assets/icons/plusBtn.svg';
import styled from 'styled-components';

interface Props {
  name: string;
  img: string;
}

function GoormCard({ name, img }: Props) {
  return (
    <StyledWrapper>
      <StyledGoormImg src={img} alt="구름" />
      <StyledContentWrapper>
        <span>{name}</span>
        <StyledPlusBtn src={PlusBtn} alt="플러스 버튼" />
      </StyledContentWrapper>
    </StyledWrapper>
  );
}

export default GoormCard;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  margin: 2rem 0;
`;

const StyledGoormImg = styled.img`
  width: 240px;
`;

const StyledContentWrapper = styled.div`
  all: unset;
  display: flex;
  flex-direction: row;
`;

const StyledPlusBtn = styled.img`
  width: 10px;
  margin-left: 10px;
`;
