import useExerciseSets from 'hooks/useExerciseSets';
import { FC } from 'react';
import ExerciseSetItem from './components/ExerciseSetItem';
import { Stack } from '@mui/material';
import { ButtonContainer, StartTrainingButton } from './styles';

const TrainingTab: FC = () => {
  const onStartTraining = () => {
    console.log('Training started');
  };

  const { exerciseSets } = useExerciseSets();
  return (
    <>
      <Stack spacing={2}>
        {exerciseSets.map((exerciseSet) => (
          <ExerciseSetItem exerciseSet={exerciseSet} key={exerciseSet.id} />
        ))}
      </Stack>
      <ButtonContainer>
        <StartTrainingButton
          variant="contained"
          color="primary"
          onClick={onStartTraining}
        >
          Начать Тренировку
        </StartTrainingButton>
      </ButtonContainer>
    </>
  );
};

export default TrainingTab;
