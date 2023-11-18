import styled from "styled-components";
import theme from '../../styles/theme';
import addPost from "assets/icons/addPost.svg";
import { useEffect, useState } from 'react';
import Modal from 'components/Modal/Modal';
import axios, { AxiosResponse } from 'axios';

// let presentList: any[] | AxiosResponse<any, any> = [];
// let List: never[] = [];

interface Props {   //사용자가 선택한 책 정보 => 통신할 때 필요
  bookId: number;
}

function PresentationList({bookId}:Props) {
  const [inputOpen, setInputOpen] = useState(false);
  const [recommendOpen, setRecommendOpen] = useState(false);
  const [presentList, setPresentList] = useState([]);
  useEffect(() => {

      axios.get('http://ec2-15-165-101-70.ap-northeast-2.compute.amazonaws.com/api/v1/question/list?readingBookId=' + bookId)
        .then((response) => {
          console.log(response.data.data[0].question);
          let newPresent = [];
          newPresent = response.data.data;
          for(var i = 0; i < response.data.data.length; i++) {
            newPresent[i] = response.data.data[i].question;
          }
          setPresentList(newPresent);

        })
        .catch((error) => {
          console.log(error);
        });

  });


  return (
    <StyledWrapper>
      <StyledTitleWrapper>
        <StyledTitle >발제</StyledTitle>
        <StyledBtnWrapper>
          <StyledAddWrapper onClick={() => {setInputOpen(true); setRecommendOpen(false);  console.log(presentList)} }>
            <StyledAdd  src={addPost} alt={"발제 추가"}></StyledAdd>
            <StyledAddText>발제 등록</StyledAddText>
          </StyledAddWrapper>
          <StyledRecommendWrapper onClick={() => {setRecommendOpen(true); setInputOpen(false)}}>
            <StyledRecommend src={addPost} alt={"발제 추천"}></StyledRecommend>
            <StyledRecommendText>추천 질문</StyledRecommendText>
          </StyledRecommendWrapper>
        </StyledBtnWrapper>
      </StyledTitleWrapper>
      <Modal inputState={inputOpen} RecommendState={recommendOpen} bookId={bookId}/>
      <StyledLine />
      <StyledListWrapper>

        {/*{presentList && presentList.map((item:any, idx:number) => (*/}

        {/*  <StyledPresentation key={idx}>Q.{"\u00A0\u00A0"} {item.question}*/}
        {/*    {item.comment.map((obj:any, idx2:number) =>(*/}
        {/*      <StyledCommentWrapper key={idx2}>*/}
        {/*        <StyledComment>A {"\u00A0\u00A0"} {obj.answer}</StyledComment>*/}
        {/*      </StyledCommentWrapper>*/}
        {/*    ))}*/}
        {/*  </StyledPresentation>*/}
        {/*))}*/}
      </StyledListWrapper>
    </StyledWrapper>
  );
}

export default PresentationList;

const StyledWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  width: 100%;
  margin-left: 3%;
  top: 0;
  left: 5%;
  width: 90%;
`;

const StyledTitleWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: left;
  flex-wrap: wrap;
  width: 50%;
  height: 100%;
`
const StyledTitle = styled.div`
  position: absolute;
  width: 100%;
  margin-top: 1%;
`
const StyledBtnWrapper =styled.div`
  position: absolute;
  display: inline-flex;
  flex-direction: column;
  flex-wrap: wrap;
  right: 1%;
  margin-top: 0%;
  width: 20%;
`
const StyledAddWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  flex-direction: row;
  cursor: pointer;
`
const StyledAdd= styled.img`
  position: relative;
  width: 30%;
`
const StyledAddText = styled.div`
  width: 100%;
  margin-top: 5%;
`
const StyledRecommendWrapper = styled.div`
  width: 100%;
  height: 100%;
  z-index: 20;
  display: flex;
  flex-direction: row;
  cursor: pointer;

`
const StyledRecommend = styled.img`
  position: relative;
  width: 30%;
`
const StyledRecommendText = styled.div`
  width: 100%;
  margin-top: 5%;
`
const StyledLine = styled.hr`
  position: absolute;
  width: 48%;
  height: 0.1rem;
  margin-top: 5%;
`
const StyledListWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
  margin-top: 7%;
  gap: 20px;
  left: 25%;
  color: ${theme.color.text};
`
const StyledPresentation = styled.div`
  float: left;
  position: relative;
  width: 100%;
  top: 100%;
`
const StyledCommentWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: left;
  flex-wrap: wrap;
  margin-top: 5%;
  gap: 20px;
  left: 15%;
`
const StyledComment = styled.div`

`
