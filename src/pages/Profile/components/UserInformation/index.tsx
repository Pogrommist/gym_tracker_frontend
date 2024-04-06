import { Stack, Typography } from '@mui/material';
import { Avatar, GoToSettingsLink, NoAvatarIcon } from './styles';
import useCurrentUser from 'hooks/useCurrentUser';

const UserInformation = () => {
  // TODO: not the best implementation, but it's ok for now
  const user = useCurrentUser();
  const handleNavigateToSettings = () => console.log('NAvigation to settings');

  return (
    <Stack direction="row" spacing={2}>
      <Avatar>
        <NoAvatarIcon />
      </Avatar>
      <Stack>
        <Typography paragraph>{user?.name}</Typography>
        <GoToSettingsLink onClick={handleNavigateToSettings}>
          Редактировать профиль
        </GoToSettingsLink>
      </Stack>
    </Stack>
  );
};

export default UserInformation;
