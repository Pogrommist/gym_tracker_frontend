import { useState } from 'react';
import { Stack, Typography } from './styles';
import BaseModal from 'shared/BaseModal';
import ExerciseDetails from '../ExerciseDetails';

export interface IExercise {
  created_at: Date;
  updated_at: Date;
  description: string;
  id: number;
  image_url: string;
  name: string;
  video_url: string;
}

export interface IExerciseProps {
  exercise: IExercise;
}

const ExerciseListItem: React.FC<IExerciseProps> = ({ exercise }) => {
  const [open, setOpen] = useState(false);
  const { name, id } = exercise;
  const handleOpenModal = () => setOpen(!open);

  return (
    <Stack key={id} onClick={handleOpenModal}>
      <Typography>{name}</Typography>
      <BaseModal open={open} onClose={handleOpenModal} title={name}>
        <ExerciseDetails exercise={exercise} />
      </BaseModal>
    </Stack>
  );
};

export default ExerciseListItem;
