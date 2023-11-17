import styled from 'styled-components';
import theme from 'styles/theme';
import detailDarkBg from 'assets/images/detailDarkBg.jpg';
import detailStar from 'assets/icons/detailStar.svg';
import primary from 'assets/images/primary.png';

function Detail() {
  return (
    <>
      <StyledWrapper>
        <StyledBgWrapper>
          <StyledBg  src={detailDarkBg} alt="디테일 밤 배경" loading="lazy"/>
        </StyledBgWrapper>
        <StyledBookWrapper>
          <StyledBook>

          </StyledBook>
        </StyledBookWrapper>

        <StyledContentWrapper>
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
  right: -5%;
  top: -20rem;
  
`;

const StyledStar = styled.img`
  object-fit: cover;
  width: 95%;
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