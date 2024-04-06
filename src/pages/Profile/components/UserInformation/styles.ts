import { Avatar as BaseAvatar, styled, Typography } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { COLORS } from 'colors';

export const Avatar = styled(BaseAvatar)`
  width: 64px;
  height: 64px;
  background-color: ${COLORS.WHITE};
  border: 3px solid ${COLORS.LIGHT};
`;

export const NoAvatarIcon = styled(AccountCircleOutlinedIcon)`
  width: 45px;
  height: 45px;
  color: ${COLORS.LIGHT};
`;

export const GoToSettingsLink = styled(Typography)`
  color: ${COLORS.GraySuit};
  opacity: 0.5;
`;
