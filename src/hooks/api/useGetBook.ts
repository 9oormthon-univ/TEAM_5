import { instance } from 'libs/api/api';
import { useEffect, useState } from 'react';

function useGetBookList() {
  const [bookLists, setBookLists] = useState<BookList>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getBook() {
    setIsLoading(true);
    const response = await instance.get<{}, BookList>(`books/random`);

    setBookLists(response);
    setIsLoading(false);

    console.log(response)
  }

  useEffect(() => {
    getBook();
  }, []);

  return { bookLists, isLoading };
}

export default useGetBookList;
