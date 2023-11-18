import BookCard from 'components/Card/BookCard';
import styled from 'styled-components';

interface Props {
  img: string;
  title: string;
  author: string;
}

function BookList({ img, title, author }: Props) {
  return (
    <StyledWrapper>
      <BookCard img={img} title={title} author={author} />
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
