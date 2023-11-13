import logo from 'assets/icons/logo.svg';
import mainStar from 'assets/icons/mainStar.svg';
import darkBg from 'assets/images/mainDarkBg.jpg';
import temple from 'assets/images/temple.svg';
import BookList from 'components/List/BookList';
import styled from 'styled-components';
import theme from 'styles/theme';

function Main() {
  return (
    <>
      <StyledWrapper>
        <StyledBgWrapper>
          <StyledBg src={darkBg} alt="밤 배경" />
        </StyledBgWrapper>

        <StyledItemWrapper>
          <StyledLogoWrapper>
            <StyledLogo src={logo} alt="로고" />
            <StyledSubTitle>무슨 무슨 아고라</StyledSubTitle>
          </StyledLogoWrapper>

          <StyledTemple src={temple} alt="신전" />
        </StyledItemWrapper>
      </StyledWrapper>

      <StyledBookListWrapper>
        <StyledStarWrapper>
          <StyledStar src={mainStar} alt="별" />
        </StyledStarWrapper>
        <StyledBookWrapper>
          <StyledAgoraName>무슨 무슨 아고라</StyledAgoraName>
          <BookList />
        </StyledBookWrapper>
      </StyledBookListWrapper>
    </>
  );
}

export default Main;

const StyledWrapper = styled.main`
  width: 100vw;
  height: 100vh;
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
`;

const StyledItemWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const StyledLogoWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 2rem 0;
  gap: 15px;
  z-index: 2;
`;

const StyledLogo = styled.img`
  width: 65%;
`;

const StyledSubTitle = styled.span`
  font-weight: ${theme.fontWeight.light};
`;

const StyledTemple = styled.img`
  position: relative;
  width: 100%;
  margin-top: 2.8rem;
`;

const StyledBookListWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledStarWrapper = styled.div`
  position: absolute;
  overflow: hidden;
`;

const StyledStar = styled.img`
  position: relative;
  object-fit: cover;
  width: 100%;
`;

const StyledBookWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 22px;
`;

const StyledAgoraName = styled.span`
  color: ${theme.color.title};
  font-size: 1.3rem;
  font-weight: ${theme.fontWeight.light};
`;
