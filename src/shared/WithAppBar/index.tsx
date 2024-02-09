import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Stack } from "./styles";
import styled from "styled-components"; // Импортируем styled из styled-components

const withAppBar = (
  WrappedComponent: React.ComponentType,
  title: string,
  icon?: string | null
) => {
  return () => {
    const handleIconClick = () => {
      window.location.href = "/settings";
    };

    return (
      <>
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
