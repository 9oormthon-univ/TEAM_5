import SearchResult from 'components/Search/SearchResult';
import { ChangeEvent, useState } from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

function Search() {
  const [searchField, setSearchField] = useState<string>('');

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    setSearchField(e.target.value);
  }
  
  return (
    <StyledWrapper>
      <StyledInput
        type="text"
        id="search"
        placeholder="책 제목 검색"
        value={searchField}
        onChange={onChange}
      />
      <SearchResult searchField={searchField} />
    </StyledWrapper>
  );
}

export default Search;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;

  overflow: hidden;
  width: 100%;
  height: 100%;
  gap: 30px;
  padding: 1rem;
`;

const StyledInput = styled.input`
  all: unset;
  background-color: ${theme.color.modal};
  color: ${theme.color.black};
  font-size: 0.95rem;
  width: 20rem;

  padding: 0.5rem 1rem;
  border-radius: 4px;
  z-index: 20;
`;
