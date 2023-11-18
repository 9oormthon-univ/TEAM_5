import styled from 'styled-components';
import groomProfile from 'assets/icons/goormProfile.png';
import theme from '../styles/theme';
import { Link } from 'react-router-dom';

let linkArr = [
  {img: 'help', title: '도움말', explain: '여기서 뭐뭐를 할 수 있어요', link: '/'},
  {img: 'move', title: '다른 모임 접속', explain: '여기서 뭐뭐를 할 수 있어요', link: '/'},
  {img: 'goorm', title: '구름 꾸미기', explain: '여기서 뭐뭐를 할 수 있어요', link: '/goorm'},
  {img: 'share', title: '공유', explain: '여기서 뭐뭐를 할 수 있어요', link: '/share'},
]

function Mypage() {
  return (
    <>
    <StyledWrapper>
      <StyledProfileWrapper>
        <StyledPrimaryImg src={groomProfile} alt={'프로필 이미지'} />
        <StyledUserName>아고라고라</StyledUserName>
        <StyledLine />
      </StyledProfileWrapper>
      <StyledLinkWrapper>
        {linkArr.map((item, idx) => (
         <StyledLink key={idx}>
           <Link to={item.link}>
             <StyledLinkImg src={require(`assets/icons/${item.img}.png`)}
                            alt={item.title}></StyledLinkImg>
             <StyledLinkTitle>{item.title}</StyledLinkTitle>
             <StyledLinkExplain>{item.explain}</StyledLinkExplain>
           </Link>
         </StyledLink>
        ))}
      </StyledLinkWrapper>
    </StyledWrapper>
    </>
  )
}

export default Mypage;

const StyledWrapper = styled.div`
  position: relative;
`
const StyledProfileWrapper = styled.div`
  position: relative;
  display: inline-flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  margin-top: 3%;
`

const StyledPrimaryImg = styled.img`
  width: 150px;
  display: inline-flex;
  position: absolute;
  left: 25%;
`
const StyledUserName = styled.div`
  width: 150px;
  display: inline-flex;
  position: absolute;
  left: 27%;
  margin-top: 12%;

  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: ${theme.fontWeight.medium}
  line-height: 150%; /* 36px */
`
const StyledLine = styled.hr`
  width: 50%;
  justify-content: center;
  height: 0.1rem;
  position: absolute;
  display: flex;
  margin-top: 16%;
`
const StyledLinkWrapper = styled.div`
  width: 50%;
  justify-content: center;
  display: grid;
  position: absolute;
  gap: 100px;
  grid-template-columns: 300px 300px;
  margin-top: 17%;
  left: 25%;
 justify-items: center;

  [class *= cell] {
    box-sizing: border-box;
    border: 5px solid black;
    border-radius: 10px;
    padding: 30px;
    /* 각각의 요소들이 눈에 보이도록 입력하였습니다. */
  }
`
const StyledLink = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
`

const StyledLinkImg = styled.img`
  display: inline-block;
  position: relative;
  
`
const StyledLinkTitle = styled.div`
  display: block;
  position: relative;
  margin-top: 10px;
`
const StyledLinkExplain = styled.div`
  display: block;
  position: relative;
  font-size: 15px;
  color: ${theme.color.text};
  margin-top: 10px;
`