import { styled } from '@mui/material';
import { Stack as BaseStack, Toolbar as BaseToolbar } from '@mui/material';

export const Stack = styled(BaseStack)`
  padding: 1rem;
`;

export const AppBarIconContainer = styled(Stack)`
  padding: 0;
`;

export const Toolbar = styled(BaseToolbar)`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
