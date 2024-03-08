<<<<<<< HEAD
import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Stack } from "./styles";
import styled from "styled-components"; // Импортируем styled из styled-components
=======
import React, { ReactNode } from 'react';
import { AppBar, Typography } from '@mui/material';
import { AppBarIconContainer, Stack, Toolbar } from './styles';
>>>>>>> main

const withAppBar = (
  WrappedComponent: React.ComponentType,
  title: string,
<<<<<<< HEAD
  icon?: string | null
=======
  appBarIcon?: ReactNode,
  onAppBarIconClick?: () => void,
>>>>>>> main
) => {
  return () => {
    const handleIconClick = () => {
      window.location.href = "/settings";
    };

    return (
      <>
<<<<<<< HEAD
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              {title}
            </Typography>
            {icon && (
              <IconWrapper>
                <IconButton
                  size="large"
                  color="inherit"
                  onClick={handleIconClick}
                >
                  <IconImage src={icon} alt="Шестеренка" />
                </IconButton>
              </IconWrapper>
            )}
          </Toolbar>
        </AppBar>
=======
        <Toolbar>
          <Typography variant="h6" fontWeight={700}>
            {title}
          </Typography>
          {appBarIcon && (
            <AppBarIconContainer>{appBarIcon}</AppBarIconContainer>
          )}
        </Toolbar>
>>>>>>> main
        <Stack>
          <WrappedComponent />
        </Stack>
      </>
    );
  };
};

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
`;


export default withAppBar;
