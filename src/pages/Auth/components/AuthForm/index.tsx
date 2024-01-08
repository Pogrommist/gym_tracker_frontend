import { Button, Stack } from "@mui/material";
import { Form } from "react-final-form";
import { InputField } from "shared/InputField";

interface IAuthForm {
  handleSubmit: (params: any) => Promise<void>;
  children: any;
  buttonText: string;
  toggleIsLogin?: () => void;
}

const AuthForm = ({
  handleSubmit,
  children,
  buttonText,
  toggleIsLogin,
}: IAuthForm) => {
  return (
    <Form
      onSubmit={handleSubmit}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <Stack alignItems="center">
            <InputField name="email" label="Email" type="email" />
            <InputField name="password" label="Password" type="text" />
            {children}
            <Button
              fullWidth
              disabled={false}
              type="submit"
              variant="contained"
            >
              {buttonText}
            </Button>
          </Stack>
        </form>
      )}
    />
  );
};

export default AuthForm;
