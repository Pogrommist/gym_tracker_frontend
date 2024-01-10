import { useState } from 'react';
import { fetchWithAuthHeaders } from 'utils/httpClient';

const useSearchExercises = () => {
  const [searchResults, setExercises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const searchExercises = async (name: string) => {
    try {
      setLoading(true);
      const response = await fetchWithAuthHeaders(`exercises/search?name=${name}`, { method: 'GET'});
      const data = await response.json();
      setExercises(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { searchResults, loading, error, searchExercises };
};

export default useSearchExercises;
