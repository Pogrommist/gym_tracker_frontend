import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import { Stack } from "./styles";

const withAppBar = (
  WrappedComponent: React.ComponentType,
  title: string,
  icon?: string | null
) => {
  return () => {
    return (
      <>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              {title}
            </Typography>
            {icon && (
              <div style={{ position: "relative" }}>
                <IconButton size="large" color="inherit">
                  <img
                    src={icon}
                    alt="Шестеренка"
                    style={{ width: "24px", height: "24px" }}
                  />
                </IconButton>
              </div>
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

export default withAppBar;

