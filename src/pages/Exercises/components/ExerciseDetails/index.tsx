import { Typography } from '@mui/material';
import { IExerciseProps } from '../ExerciseListItem';
import { Stack, ModalTitle } from './styles';

const ExerciseDetails: React.FC<IExerciseProps> = ({ exercise: { name, description, image_url } }) => {
  return (
    <Stack>
      <img src={image_url} alt="exercise instructions" />
      <ModalTitle>{name}</ModalTitle>
      <Typography>Инструкция</Typography>
      <Typography>{description}</Typography>
    </Stack>
  );
};

export default ExerciseDetails;
