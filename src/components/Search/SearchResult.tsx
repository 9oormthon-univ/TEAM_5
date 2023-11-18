import Button from 'components/Button';
import { instance } from 'libs/api/api';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

interface Props {
  searchField: string;
}

function SearchResult({ searchField }: Props) {
  const [searchItems, setSearchItems] = useState<BookList[]>([]);
  // const [bookId, setBookId] = useState<number>();
  // const [bookClubId, setBookClubId] = useState<number>();

  useEffect(() => {
    const api = async () => {
      const response = await instance.get<{}, BookList[]>(
        `/books/search?keyword=${searchField}`
      );
      setSearchItems(response);
    };
    api();
  }, [searchField]);

  // function onSubmit() {
  //   instance
  //     .post<{}, AddBook>(`/readingBooks/save`, {
  //       bookId: bookId,
  //       bookClubId: bookClubId,
  //     })
  //     .then((res) => {
  //       console.log(res.bookId);
  //       console.log('슬희');
  //     })
  //     .catch((error) => console.log(error));
  // }

  return (
    <StyledWrapper>
      <StyledDataWrapper>
        {searchItems?.map((item) => (
          <StyledData key={item.id}>
            <img src={item.imgUrl} alt="책 이미지" />

            <StyledContentWrapper>
              <span>{item.title}</span>
              <p>{item.authors}</p>
            </StyledContentWrapper>

            <Button content="추가" background="#061028" color="white" />
          </StyledData>
        ))}
      </StyledDataWrapper>
    </StyledWrapper>
  );
}

export default SearchResult;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`;

const StyledDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const StyledContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;
`;

const StyledData = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 5px;
  color: ${theme.color.black};
`;
