import "./App.css";
import { ThemeProvider } from "@mui/material/styles";

import Approuter from "./router/Approuter";
import theme from "./theme/Theme.";
import store from "./app/store";
import { Provider } from "react-redux";
import ErrorBoundary from './helper/ErrorBoundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <Approuter />
          </Provider>
        </ThemeProvider>
      </ErrorBoundary>
    </>
  );
}

export default App;
