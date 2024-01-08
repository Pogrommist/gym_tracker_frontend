import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import LogoSrc from "../../assets/images/logo.svg";
import { Logo } from "./styles";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const AuthTab: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Stack alignItems="center" justifyContent="center" height="100%">
      <Logo src={LogoSrc} alt="logo" />
      <Typography variant="h6">{isLogin ? "Войти" : "Регистрация"}</Typography>
      {isLogin ? (
        <SignIn setIsLogin={setIsLogin} />
      ) : (
        <SignUp setIsLogin={setIsLogin} />
      )}
    </Stack>
  );
};

export default AuthTab;
