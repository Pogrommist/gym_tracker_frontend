import { IExerciseSet } from 'pages/Training/components/ExerciseSetItem';
import { useState, useEffect } from 'react';
import { fetchWithAuthHeaders } from 'utils/httpClient';

const useExerciseSets = () => {
  const [exerciseSets, setExerciseSets] = useState<IExerciseSet[]>([]);

  useEffect(() => {
    const fetchExerciseSets = async () => {
      try {
        const response = await fetchWithAuthHeaders('exercise_sets', {
          method: 'GET',
        });
        const data = await response.json();
        setExerciseSets(data);
      } catch (error) {
        console.error('Error fetching exercise sets:', error);
      }
    };

    fetchExerciseSets();
  }, []);

  return { exerciseSets };
};

export default useExerciseSets;
