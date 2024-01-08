import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import reportWebVitals from "./reportWebVitals";
import { routes } from "./routes";
import "./index.scss";

const themeLight = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#e4f0e2",
    },
  },
});

const themeDark = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#2A2933",
    },
    text: {
      primary: "#FFFFFF",
    },
    secondary: {
      main: "#1E1E1E",
    },
  },
  components: {
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: "#1E1E1E",
          color: "#6D6581",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: "#6D6581",
        },
      },
    },
  },
});

const App = () => {
  const [isLightTheme, setLightTheme] = useState(false);
  return (
    <ThemeProvider theme={isLightTheme ? themeLight : themeDark}>
      <RouterProvider router={routes} />
      <CssBaseline />
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
