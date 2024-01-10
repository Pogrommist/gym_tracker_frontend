import BaseSearchIcon from '@mui/icons-material/Search';
import { TextField as BaseTextField, styled } from '@mui/material';
import { COLORS } from 'colors';


export const SearchIcon = styled(BaseSearchIcon)`
  color: rgba(255, 255, 255, 0.5);
`;


export const TextField = styled(BaseTextField)`
  background-color: ${COLORS.DARKER};
  flex-grow: 1;
  border-radius: 15px;
 
  .MuiOutlinedInput-notchedOutline{
    border-color: transparent;
  }

  .MuiInputBase-root{
    height: 48px;

  }
`;


