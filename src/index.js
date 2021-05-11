import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./theme";
import AuthProvider from "./auth/AuthContext";
import LayoutProvider from "./layout/LayoutContext";
import "./index.css";


ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <LayoutProvider>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </AuthProvider>
    </LayoutProvider>
  </React.StrictMode>,
  document.getElementById("root")
);



reportWebVitals();
