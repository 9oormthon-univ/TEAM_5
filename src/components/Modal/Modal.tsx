import styled from 'styled-components';
import theme from '../../styles/theme';
import { useEffect, useState } from 'react';
import addBtn from 'assets/icons/addBtn.png';
import axios from 'axios';
interface Props {
  inputState : boolean
  RecommendState : boolean
  bookId : number
}

let recommendList = [
  {id : 1, content : '가장 기억에 남았던 부분은?'},
  {id : 2, content : '책의 한줄평을 작성해 보기'},
  {id : 3, content : '이 책을 누구에게 추천하고 싶은가요?'},
]


function Modal({inputState, RecommendState, bookId} : Props) {
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

 let text : string;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    text = e.target.value;
  };

  // http://15.165.101.70:8080/api/v1/question
  function inputTest() {
      axios.post('http://ec2-15-165-101-70.ap-northeast-2.compute.amazonaws.com/api/v1/question', {
        "readingBookId" : bookId,
        "content" : text,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

  }

  function InputModalContent() {
    return (
      <>
        <StyledBookTitle>책 이름</StyledBookTitle>
        <StyledInput placeholder={"발제를 입력해주세요"} onChange={(e) => onChange(e)}  value={text} ></StyledInput>
        <StyledSubmitBtn onClick={() => {inputTest()}}>등록</StyledSubmitBtn>
      </>
    )
  }
  function RecommendModalContent() {
    return (
      <>
        <StyledBookTitle>추천 질문</StyledBookTitle>
          <StyledListWrapper>
            {recommendList.map((item, idx) => (
              <div key={idx}>
                <StyledList>{item.content}</StyledList>
                <StyledAddBtn src={addBtn} alt={'발제 추가'} onClick={() => {console.log(item)}} ></StyledAddBtn>
              </div>
              ))}
          </StyledListWrapper>
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
  font: ${theme.color.black};
  outline: none;
  border: none;

  :focus {
    outline: none;
    border: none;
  }

  &::placeholder {
    /* position:absolute 스타일 제거 및 필요에 따라 top 및 left 값을 조정하세요 */
    display: inline-flex;
    margin-top: 10%;
    margin-left: 10%;
  }

  &::-ms-value {
    /* position:absolute 스타일 제거 및 필요에 따라 top 및 left 값을 조정하세요 */
    display: inline-flex;
    margin-top: 10%;
    margin-left: 10%;
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

const StyledListWrapper = styled.div`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  margin-top: 10%;
  width: 100%;
`
const StyledList = styled.div`
  display: inline-block;
  color: black;
  margin-top: 10%;
  width: 80%;
  margin-left: 7%;
`
const StyledAddBtn = styled.img`
  display: inline-flex;
  width: 5%;
  height: 5%;
  
`