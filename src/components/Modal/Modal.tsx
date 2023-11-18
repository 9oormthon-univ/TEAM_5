import styled from 'styled-components';
import theme from '../../styles/theme';
import { useEffect, useRef, useState } from 'react';
interface Props {
  inputState : boolean
  RecommendState : boolean
}
function Modal({inputState, RecommendState} : Props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [InputOpen, setInputOpen] = useState(false);
  const [RecommendOpen, setRecommendOpen] = useState(false);

  useEffect(() => {
    setInputOpen(inputState);
    setRecommendOpen(RecommendState);
  },[inputState, RecommendState]);

  useEffect(() => {
    if(InputOpen === true || RecommendOpen === true) {
      setModalOpen(true);
    }
    else {
      setModalOpen(false);
    }
  },[InputOpen, RecommendOpen]);

  function InputModalContent() {
    return (
      <>
        <StyledBookTitle>책 이름</StyledBookTitle>
        <StyledInput placeholder={"발제를 입력해주세요"}></StyledInput>
        <StyledSubmitBtn>등록</StyledSubmitBtn>
      </>
    )
  }
  function RecommendModalContent() {
    return (
      <>
        <StyledBookTitle>추천 질문</StyledBookTitle>
        <StyledInput placeholder={"발제를 입력해주세요"}></StyledInput>
      </>
    )
  }

  return (
    <>
      {modalOpen ?
        <StyledModalContent >
          <StyledCloseBtn onClick={() => InputOpen ? setInputOpen(false) : setRecommendOpen(false) }>X</StyledCloseBtn>
          {InputOpen ? <InputModalContent/> : <></>}
          {RecommendOpen ? <RecommendModalContent/> : <></>}
        </StyledModalContent> : <></>}
    </>

  )
}
export default Modal;

const StyledModalContent= styled.div`
  background-color: #ffffff;
  width: 40rem;
  height: 30rem;
  border-radius: 30px;
  flex-shrink: 0;
  padding: 15px;
  z-index: 20;
  position: absolute;
  display: flex;
  margin-top: -13%;
`

const StyledBookTitle = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  margin-top: 1%;
  color: ${theme.color.black};
  font-size: 28px;
  font-weight: ${theme.fontWeight.bold};
  left: 10%;
  top: 5%;
`
const StyledInput = styled.input`
  position: absolute;
  display: flex;
  width: 80%;
  height: 60%;
  margin-top: 10%;
  font: ${theme.color.black}
  outline: none;
  border: none;
  :focus {
    outline: none;
    border: none;
  }

  &::placeholder {
    position: absolute;
    display: inline-flex;
    top: 5%;
    left: 10%;
  }
`
const StyledSubmitBtn = styled.button`
  border-radius: 20px;
  background: rgba(6, 16, 40, 0.40);
  width: 90px;
  height: 25px;
  flex-shrink: 0;
  color: ${theme.color.white};
  font-size: 15px;
  font-weight: ${theme.fontWeight.light};
  float: right;
  display: inline-flex;
  position: absolute;
  justify-content: center;
  right: 5%;
  bottom: 5%;
  padding: 7px 0px 0 0;
`
const StyledCloseBtn = styled.div`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.26);
  color: black;
  width: 25px;
  height: 25px;
  flex-shrink: 0;
  z-index: 30;
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  right: 5%;
  top: 7%;
`