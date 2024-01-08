import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { Dispatch, SetStateAction } from "react";
import AuthForm from "../AuthForm";
import { fetchWithAuthHeaders } from "utils/httpClient";

interface ISignUpForm {
  email: string;
  password: string;
}

interface ISignUpProps {
  setIsLogin: Dispatch<SetStateAction<boolean>>;
}

const SignUp: React.FC<ISignUpProps> = ({ setIsLogin }) => {
  const navigate = useNavigate();

  const handleRedirect = () => setIsLogin(true);
  const handleSubmit = async ({ email, password }: ISignUpForm) => {
    try {
      await fetchWithAuthHeaders(
        `${process.env.REACT_APP_API_URL}auth/sign_up`,
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
    <AuthForm handleSubmit={handleSubmit} buttonText="Sign up">
      <>
        <Typography fontSize={12} justifyContent="center">
          Have an account?
        </Typography>
        <Typography onClick={handleRedirect}>Log in</Typography>
      </>
    </AuthForm>
  );
};

export default SignUp;
