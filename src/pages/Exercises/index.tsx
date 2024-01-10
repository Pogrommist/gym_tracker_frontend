import useExercises from 'hooks/useExercises';
import React, { useState } from 'react';
import ExerciseListItem, { IExercise } from './components/ExerciseListItem';
import { SearchContainer, SearchbarDropdown, Stack } from './styles';
import { SearchInput } from 'shared/SearchInput';
import useSearchExercises from 'hooks/useSearchExercises';
import { Typography } from '@mui/material';

const ExercisesTab: React.FC = () => {
  const exercises = useExercises();
  const [search, setSearch] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false)
  const { searchResults, searchExercises } = useSearchExercises();
  const handleSearch = async (value: string) => {
    if (value === '') return;
    
    setDropdownVisible(true)
    await searchExercises(value);
  };

  const handleReset = () => setDropdownVisible(false)

  return (
    <Stack>
      <SearchContainer>
        <SearchInput
          placeholder="Найти упражнение"
          value={search ?? ''}
          onSearch={handleSearch}
          onReset={handleReset}
          width="100%"
        />
        <SearchbarDropdown>
          {
            dropdownVisible ? (
              searchResults.map((exercise: IExercise) => (
                <ExerciseListItem exercise={exercise} key={exercise.id} />
              ))
            ) : null
          }
        </SearchbarDropdown>
      </SearchContainer>

      {exercises.map((exercise: IExercise) => (
        <ExerciseListItem exercise={exercise} key={exercise.id} />
      ))}
    </Stack>
  );
};

export default ExercisesTab;
