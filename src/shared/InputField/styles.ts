import styled from "@emotion/styled";

export const Container = styled("div")<{ multiline?: boolean }>`
  flex-basis: ${(props) => (props.multiline ? "100%" : "0")};
  width: 100%;

  & .MuiTextField-root {
    height: 100%;
  }

  & .MuiInputBase-root {
    height: 100%;
  }
`;
