import { instance } from 'libs/api/api';
import { useEffect, useState } from 'react';

interface Props {
  bookClubId: number;
}

function useGetBookClub() {
  const [bookClubs, setBookClubs] = useState<Book>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getBookById() {
    setIsLoading(true);
    const response = await instance.get<{}, Book>(`/bookClubs`);

    setBookClubs(response);
    setIsLoading(false);
  }

  useEffect(() => {
    getBookById();
  }, []);
  //   if (typeof bookClubId === 'number') getBookById(bookClubId);
  // }, [bookClubId, setBookClubs]);

  return { bookClubs, isLoading };
}

export default useGetBookClub;
