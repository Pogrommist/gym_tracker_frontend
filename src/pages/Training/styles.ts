import {
  Button as BaseButton,
  Stack as BaseStack,
  styled,
} from '@mui/material';

import { COLORS } from 'colors';

export const ButtonContainer = styled(BaseStack)`
  position: fixed;
  bottom: 80px;
  left: 0;
  align-items: center;
  width: 100%;
`;

export const StartTrainingButton = styled(BaseButton)`
  margin-top: 20px;
  width: 80%;
  height: 58px;
  background-color: ${COLORS.MAIN};
  color: ${COLORS.WHITE};
  font-weight: 600;
  &:hover {
    background-color: ${COLORS.MAIN};
  }
`;
