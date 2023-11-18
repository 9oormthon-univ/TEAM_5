import { instance } from 'libs/api/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Props {
  searchField: string;
}

function SearchResult({ searchField }: Props) {
  const [searchItems, setSearchItems] = useState<BookList[]>([]);

  useEffect(() => {
    const api = async () => {
      const response = await instance.get<{}, BookList[]>(
        `books/search?keyword=${searchField}`
      );
      setSearchItems(response);
    };
    api();
  }, [searchField]);

  return (
    <StyledWrapper>
      {/* {searchItems?.map((item) => (
        <BookCard
          key={item.id}
          img={item.imgUrl}
          title={item.title}
          author={item.authors}
        />
      ))} */}
    </StyledWrapper>
  );
}

export default SearchResult;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
