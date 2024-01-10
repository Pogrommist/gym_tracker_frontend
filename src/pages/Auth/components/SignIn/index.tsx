import { useNavigate } from "react-router-dom";
import { fetchWithAuthHeaders } from "../../../../utils/httpClient";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction } from "react";
import AuthForm from "../AuthForm";

interface ISignInForm {
  email: string;
  password: string;
}

interface ISignInProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const SignIn: React.FC<ISignInProps> = ({ setIsLogin }) => {
  const navigate = useNavigate();
  const handleRedirect = () => setIsLogin(false);
  const handleSubmit = async ({ email, password }: ISignInForm) => {
    try {
      await fetchWithAuthHeaders(
        `auth/sign_in`,
        {
          method: "POST",
          body: JSON.stringify({ email, password }),
        },
      );
      navigate("/exercises");
    } catch (error) {
      console.error("Error happened during sign in", error);
    }
  };
  return (
    <AuthForm handleSubmit={handleSubmit} buttonText="Log in">
      <>
        <Typography fontSize={12} justifyContent="center">
          Forgot it?
        </Typography>
        <Typography onClick={handleRedirect}>Регистрация</Typography>
      </>
    </AuthForm>
  );
};

export default SignIn;
