import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  IHeadersStore,
  loadHeadersFromLocalStorage,
} from "../../utils/httpClient";

interface IPrivateRoute<TProps> {
  element: React.ComponentType<TProps>;
}

const PrivateRoute = <TProps extends {}>({
  element: Element,
}: IPrivateRoute<TProps>) => {
  const navigate = useNavigate();
  const headersStore: IHeadersStore = loadHeadersFromLocalStorage();

  useEffect(() => {
    const isAuthenticated = !!headersStore.accessToken;
    if (!isAuthenticated) navigate("/auth");
  }, [navigate, headersStore]);

  return <Element {...({} as TProps)} />;
};

export default PrivateRoute;
