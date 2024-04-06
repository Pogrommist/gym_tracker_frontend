import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const handleProfileAppBarIconClick = () => {
  console.log('ProfileAppBarIcon clicked');
};
const ProfileAppBarIcon = () => (
  <SettingsOutlinedIcon onClick={handleProfileAppBarIconClick} />
);

export default ProfileAppBarIcon;
