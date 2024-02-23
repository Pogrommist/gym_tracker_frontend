import { AddExerciseButton } from './styles';

const handleTrainingAppBarIconClick = () => {
  console.log('TrainingAppBarIcon clicked');
};
const ExerciseAppBarIcon = () => (
  <AddExerciseButton onClick={handleTrainingAppBarIconClick} />
);

export default ExerciseAppBarIcon;
