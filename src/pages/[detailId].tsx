import styled from 'styled-components';
import theme from 'styles/theme';
import detailDarkBg from 'assets/images/detailDarkBg.jpg';
import detailStar from 'assets/icons/detailStar.svg';
import primary from 'assets/images/primary.png';
import { useEffect } from 'react';
import axios from 'axios';
import Info from 'components/Info/Info';
import PresentationList from '../components/List/PresentationList';

interface Props {   //사용자가 선택한 책 정보 => 통신할 때 필요
  bookId: number;
  bookName: string;
}

//{bookId, bookName} : Props
function Detail() {

  // useEffect(() => {
  //   async function getData() {
  //     await axios.get("/api/독서모임책정보")
  //       .then((response) => {
  //
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //   }
  // })

  return (
    <>
      <StyledWrapper>
        <StyledBgWrapper>
          <StyledBg  src={detailDarkBg} alt="디테일 밤 배경" loading="lazy"/>
        </StyledBgWrapper>
        <StyledBookWrapper>
          <StyledBook>
          <Info bookName={'사람을 좋아하는 헤드헌터'} author={'윤재홍'} publisher={'TALK SHOW'} count={4} date={'11월 17일'} state={true}/>
          </StyledBook>
        </StyledBookWrapper>

        <StyledContentWrapper>
          <PresentationList></PresentationList>

          <StyledGoormWrapper>
            <StyledGoorm src={primary} alt={"구름"} />
          </StyledGoormWrapper>
          <StyledStarWrapper>
            <StyledStar src={detailStar} alt="별" loading="lazy" />
          </StyledStarWrapper>
        </StyledContentWrapper>

      </StyledWrapper>
    </>
  );
}

export default Detail;

const StyledWrapper = styled.main`
  width: 100%;
  overflow: hidden;
  
`;

const StyledBgWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const StyledBg = styled.img`
  width: 100%;
  height: 18rem;
`;

const StyledBookWrapper = styled.div`
  position: relative;
  display: block;
  height: 317px;    //content 넣기 전 임시
  width: 100%;
`

const StyledBook = styled.div`
  
`

const StyledContentWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: inline-block;
  overflow: hidden;
`;

const StyledStarWrapper = styled.div`
  position: absolute;
  overflow: hidden;
  right: -15%;
  top: -20rem;
  
`;

const StyledStar = styled.img`
  object-fit: cover;
  width: 90%;
`;



const StyledGoormWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 100%;
`

const StyledGoorm = styled.img`
  width: 12%;
  position: relative;
  display: inline-flex;
  margin-top: 1%;
  left: 15%;

`