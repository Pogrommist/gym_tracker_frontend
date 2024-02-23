import {
  Stack as BaseStack,
  Typography as BaseTypography,
  styled,
} from '@mui/material';
import { COLORS } from 'colors';

export const ItemWrapper = styled(BaseStack)`
  border: 1px solid ${COLORS.SECONDARY};
  padding: 10px 20px 10px;
  background-color: ${COLORS.DARKER};
  border-radius: 5px;
  margin-bottom: 10px;
  max-height: 80px;
  height: 100%
`;

export const Typography = styled(BaseTypography)`
  font-weight: 600;
  font-size: 16px;
`;

export const ItemHeader = styled(BaseStack)`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentWrapper = styled(BaseStack)`
  flex-direction: row;
`;

export const ExerciseName = styled(BaseTypography)`
  font-size: 14px;
  margin: 0 10px 10px 0;
`;
