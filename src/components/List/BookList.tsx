import BookCard from "components/Card/BookCard";
import styled from "styled-components";

function BookList() {
  return (
    <StyledWrapper>
      <BookCard
        img="https://github.com/10-rolling/rollingPolling/assets/63100352/985a687b-3e9b-40bd-90a3-d0f1e815201e"
        title="책 이름"
        author="슬희"
      />
    </StyledWrapper>
  );
}

export default BookList;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;

  width: 85%;
  gap: 30px;
`;
