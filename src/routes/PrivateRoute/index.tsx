import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IPrivateRoute<TProps> {
	element: React.ComponentType<TProps>;
}

const PrivateRoute = <TProps extends {}>({
	element: Element,
}: IPrivateRoute<TProps>) => {
	const navigate = useNavigate();

	useEffect(() => {
		const isAuthenticated = !!localStorage.getItem("access-token");
		if (!isAuthenticated) navigate("/auth");
	}, [navigate]);

	return <Element {...({} as TProps)} />;
};

export default PrivateRoute;
