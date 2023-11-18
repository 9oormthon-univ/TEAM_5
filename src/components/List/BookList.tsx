import BookCard from 'components/Card/BookCard';

interface Props {
  img: string;
  title: string;
  author: string;
}

function BookList({ img, title, author }: Props) {
  return (
    <>
      <BookCard img={img} title={title} author={author} />
    </>
  );
}

export default BookList;
