import logo from 'assets/icons/logo.svg';
import profile from 'assets/icons/profile.svg';
import media from 'constants/media';
import { navItems } from 'constants/nav';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import theme from 'styles/theme';

function Nav() {
  return (
    <StyledWrapper>
      <StyledLogoWrapper>
        <Link to="/">
          <StyledLogo src={logo} alt="로고" />
        </Link>
      </StyledLogoWrapper>

      {navItems.map((item, index) => (
        <Link to={item.link} key={index}>
          <StyledItem>{item.title}</StyledItem>
        </Link>
      ))}

      <Link to="/Mypage">
        <StyledInformWrapper>
          아고라고라 님
          <StyledProfile src={profile} alt="프로필" />
        </StyledInformWrapper>
      </Link>


      {/*<StyledInformWrapper>*/}
      {/*  Login*/}
      {/*  <StyledProfile src={profile} alt="프로필" />*/}
      {/*</StyledInformWrapper>*/}
    </StyledWrapper>
  );
}

export default Nav;

const StyledWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  padding: 12px 0px;
  background-color: ${theme.color.darkBlack};
  color: ${theme.color.navText};

  ${media.mobile} {
    font-size: 0.6rem;
  }
`;

const StyledLogoWrapper = styled.div`
  position: relative;
  width: 60px;

  ${media.mobile} {
    width: 30px;
  }
`;

const StyledLogo = styled.img`
  width: 100%;
  height: 100%;
`;

const StyledItem = styled.span`
  font-weight: ${theme.fontWeight.light};
`;

const StyledInformWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-family: 'Advent Pro';
  font-weight: ${theme.fontWeight.light};
  gap: 9px;
  cursor: pointer;
`;

const StyledProfile = styled.img`
  width: 30px;

  ${media.mobile} {
    width: 15px;
  }
`;
