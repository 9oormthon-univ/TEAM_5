import { instance } from 'libs/api/api';
import { useEffect, useState } from 'react';

function useGetGoorm() {
  const [goorm, setGoorm] = useState<GoormById>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getGoorm() {
    setIsLoading(true);
    const response = await instance.get<{}, GoormById>(`/clouds?bookClubId=1`);

    setGoorm(response);
    setIsLoading(false);
  }

  useEffect(() => {
    getGoorm();
  }, []);

  return { goorm, isLoading };
}

export default useGetGoorm;
