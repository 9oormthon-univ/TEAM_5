import { instance } from 'libs/api/api';
import { useEffect, useState } from 'react';

interface Props {
  bookClubId: number;
}

function useGetBookClub({ bookClubId }: Props) {
  const [bookClubs, setBookClubs] = useState<Book>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getBookById(id: number) {
      setIsLoading(true);
      const response = await instance.get<{}, Book>(`bookClubs/${bookClubId}`);

      setBookClubs(response);
      setIsLoading(false);
    }

    if (typeof bookClubId === 'number') getBookById(bookClubId);
  }, [bookClubId, setBookClubs]);

  return { bookClubs, isLoading };
}

export default useGetBookClub;
