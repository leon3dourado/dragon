import React from "react";
import { SnackbarProvider } from "notistack";
import GlobalStyles from "./shared/components/styles/global";
import Routes from "./routes/App.routes";
import { AuthenticationProvider } from "./contexts/authentication/authenticationContext";

function App() {
  return (
    <SnackbarProvider>
      <AuthenticationProvider>
        <GlobalStyles />
        <Routes />
      </AuthenticationProvider>
    </SnackbarProvider>
  );
}

export default App;
