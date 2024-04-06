import { useEffect, useState } from 'react';
import { fetchWithAuthHeaders } from 'utils/httpClient';

interface IUser {
  name?: string;
}

const useCurrentUser = () => {
  const [user, setUser] = useState<IUser>({});

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const response = await fetchWithAuthHeaders('/users/get_profile', {
          method: 'GET',
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Error fetching current user:', error);
      }
    };
    fetchCurrentUser();
  }, []);

  return user;
};

export default useCurrentUser;
