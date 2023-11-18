import styled from 'styled-components';
import theme from 'styles/theme';
import people from 'assets/icons/people.png';
import calendar from 'assets/icons/calendar.png';
import check from 'assets/icons/check.png';

interface Props {
  bookName: string;
  author: string;
  publisher: string;
  count: number;
  date: string;
  state: boolean;

}

function Info({ bookName, author, publisher, count, date, state }: Props) {
  return (
    <StyledWrapper>
      <StyledBookWrapper>
        <StyledBookTitle>{bookName}</StyledBookTitle>
        <StyledBookInfo>{author}</StyledBookInfo>
        <StyledBookInfo>{publisher}</StyledBookInfo>
      </StyledBookWrapper>
      <StyledInfoImgWrapper>
        <StyledInfoImg src={people} alt={'사람 아이콘'}></StyledInfoImg>
        <StyledInfoImg src={calendar} alt={'달력 아이콘'}></StyledInfoImg>
        <StyledInfoImg src={check} alt={'상태 아이콘'}></StyledInfoImg>
      </StyledInfoImgWrapper>
      <StyledInfoWrapper>
        <StyledInfo>{count} 명</StyledInfo>
        <StyledInfo>{date}</StyledInfo>
        <StyledInfo>{state? "진행중" : "종료" }</StyledInfo>
      </StyledInfoWrapper>
    </StyledWrapper>
  );
}

export default Info;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  white-space: pre-wrap;
`;

const StyledBookWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  
  gap: 20px;
  left: 20%;
  margin-top: 7%;
`
const StyledBookTitle = styled.div`
  font-size: 1.4rem;
  font-weight: ${theme.fontWeight.medium};
`
const StyledBookInfo = styled.div`
  font-size: 1rem;
  font-weight: ${theme.fontWeight.medium};
`

const StyledInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
  right: 3%;
  margin-top: 7%;
  width: 20%;
`
const StyledInfo = styled.div`
  width: 100%;
  font-size: 1rem;
  font-weight: ${theme.fontWeight.light};
`
const StyledInfoImgWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  right: 5%;
  margin-top: 7%;
  gap: 10px;
`

const StyledInfoImg = styled.img`
  width: 1.8rem;
`

