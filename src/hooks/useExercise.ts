import { useState, useEffect } from 'react';
import { fetchWithAuthHeaders } from 'utils/httpClient';

const useExercise = (exerciseId: number) => {
  const [exercise, setExercise] = useState(null);

  useEffect(() => {
    const fetchExercise = async () => {
      try {
        const response = await fetchWithAuthHeaders(`/exercises/${exerciseId}`, { method: 'GET' });
        const data = await response.json();
        setExercise(data);
      } catch (error) {
        console.error(`Error fetching exercise with ID ${exerciseId}:`, error);
      }
    };

    if (exerciseId) {
      fetchExercise();
    }
  }, [exerciseId]);

  return exercise;
};

export default useExercise;
