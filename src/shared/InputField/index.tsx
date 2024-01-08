import { TextField } from "@mui/material";
import React from "react";
import { Field } from "react-final-form";
import { Container } from "./styles";

interface Props {
  label?: string;
  name: string;
  multiline?: boolean;
  type?: "email" | "text";
  disabled?: true | boolean;
  validator?: (value: string) => string | undefined;
}

export const InputField: React.FC<Props> = ({
  label,
  name,
  multiline,
  type = "text",
  disabled,
  validator,
}) => {
  return (
    <Field name={name} validate={validator}>
      {({ input, meta }) => {
        const error = meta.error && meta.touched;

        return (
          <Container multiline={multiline}>
            <TextField
              error={error}
              fullWidth
              helperText={error ? meta.error : undefined}
              label={label ?? name}
              name={input.name}
              multiline={multiline}
              type={type}
              value={input.value}
              onBlur={input.onBlur}
              onChange={input.onChange}
              disabled={disabled}
            />
          </Container>
        );
      }}
    </Field>
  );
};
