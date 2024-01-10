import React, { KeyboardEvent, useState } from 'react';
import { InputAdornment } from '@mui/material';
import { SearchIcon, TextField } from './styles';

export interface Props {
  placeholder?: string;
  value?: string;
  wait?: number;
  width?: string;
  className?: string;
  onSearch: (value: string) => void;
  onReset: () => void;
}

export const SearchInput: React.FC<Props> = ({
  placeholder = '',
  value = '',
  width = '200px',
  className,
  onSearch,
  onReset
}: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>(value);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.value;
    if (value === '') onReset()
    setSearchTerm(value);
  };

  const submit = (): void => onSearch(searchTerm.trim());

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') submit();
  };

  const handleSearchClick = (): void => submit();

  return (
    <TextField
      className={className}
      variant="outlined"
      value={searchTerm}
      placeholder={placeholder}
      sx={{ width }}
      type="search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon onClick={handleSearchClick} sx={{cursor: 'pointer'}} />
          </InputAdornment>
        ),
      }}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
};
