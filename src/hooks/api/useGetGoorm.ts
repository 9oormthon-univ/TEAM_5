import { instance } from 'libs/api/api';
import { useEffect, useState } from 'react';

function useGetGoorm() {
  const [goorm, setGoorm] = useState<Goorm>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getGoorm() {
    setIsLoading(true);
    const response = await instance.get<{}, Goorm>(`/clouds/1`);

    setGoorm(response);
    setIsLoading(false);

    console.log(response);
  }

  useEffect(() => {
    getGoorm();
  }, []);

  return { goorm, isLoading };
}

export default useGetGoorm;
