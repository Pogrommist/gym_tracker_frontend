import React, { ReactNode } from 'react';
import { AppBar, Typography } from '@mui/material';
import { AppBarIconContainer, Stack, Toolbar } from './styles';

const withAppBar = (
  WrappedComponent: React.ComponentType,
  title: string,
  appBarIcon?: ReactNode,
  onAppBarIconClick?: () => void,
) => {
  return () => {
    return (
      <>
        <Toolbar>
          <Typography variant="h6" fontWeight={700}>
            {title}
          </Typography>
          {appBarIcon && (
            <AppBarIconContainer>{appBarIcon}</AppBarIconContainer>
          )}
        </Toolbar>
        <Stack>
          <WrappedComponent />
        </Stack>
      </>
    );
  };
};

export default withAppBar;
