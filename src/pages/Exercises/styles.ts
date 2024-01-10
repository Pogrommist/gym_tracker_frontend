import {
  Stack as BaseStack,
  styled,
} from '@mui/material';
import { COLORS } from 'colors';

export const Stack = styled(BaseStack)`
  height: 100%
`;

export const SearchContainer = styled(BaseStack)`
  margin-bottom: 20px;
`;

export const SearchbarDropdown = styled(BaseStack)`
  background-color: ${COLORS.MAIN};
  .MuiStack-root {
    margin: 0;
    border: 0;
    border-bottom: 1px solid white;
    border-radius: 0;
  }
`;