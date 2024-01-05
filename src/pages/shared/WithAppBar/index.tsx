import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Stack } from "./styles";

const withAppBar = (WrappedComponent: React.ComponentType, title: string) => {
	return () => {
		return (
			<>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6">{title}</Typography>
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
