import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Stack } from "./styles";

const withAppBar = (WrappedComponent: React.ComponentType, title: string) => {
  return () => {
    return (
      <>
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
        </Toolbar>
        <Stack>
          <WrappedComponent />
        </Stack>
      </>
    );
  };
};

export default withAppBar;
