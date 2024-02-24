import { IExercise } from 'pages/Exercises/components/ExerciseListItem';
import { FC, Fragment } from 'react';
import TuneIcon from '@mui/icons-material/Tune';
import {
  ContentWrapper,
  ExerciseName,
  ItemHeader,
  ItemWrapper,
  Typography,
} from './styles';

interface IExerciseSetItem {
  exerciseSet: IExerciseSet;
}
export interface IExerciseSet {
  id: string;
  name: string;
  exercise_registers: IExerciseRegister[];
}
interface IExerciseRegister {
  id: string;
  name: string;
  exercise: IExercise;
}

const ExerciseSetItem: FC<IExerciseSetItem> = ({
  exerciseSet: { id, name, exercise_registers },
}) => {
  const handleEditSet = () => {
    console.log('Edit set', id);
  };
  return (
    <ItemWrapper key={id}>
      <ItemHeader>
        <Typography>{name}</Typography>
        <TuneIcon onClick={handleEditSet} />
      </ItemHeader>

      <ContentWrapper>
        {exercise_registers.map(({ id, exercise: { name } }) => {
          return (
            <Fragment key={id}>
              <ExerciseName>{name}</ExerciseName>
            </Fragment>
          );
        })}
      </ContentWrapper>
    </ItemWrapper>
  );
};

export default ExerciseSetItem;
