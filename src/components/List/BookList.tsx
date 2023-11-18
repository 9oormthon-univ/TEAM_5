import BookCard from 'components/Card/BookCard';
import styled from 'styled-components';

function BookList({ imgUrl, title, authors }: BookList) {
  return (
    <StyledWrapper>
      <BookCard img={imgUrl} title={title} author={authors} />
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
