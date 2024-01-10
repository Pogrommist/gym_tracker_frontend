import { useState, useEffect } from 'react';
import { fetchWithAuthHeaders } from 'utils/httpClient';

const useExercises = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const response = await fetchWithAuthHeaders('exercises', { method: 'GET'});
        const data = await response.json();
        setExercises(data);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    fetchExercises();
  }, []);

  return exercises;
};

export default useExercises;
