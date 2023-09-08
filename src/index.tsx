import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {store} from "./app/store";
import {Provider} from "react-redux";
import {createTheme, ThemeProvider} from "@mui/material";
import "react-toastify/dist/ReactToastify.css";
import {ToastProvider} from "./components/Layouts/toastContext";
import {ToastContainer} from "react-toastify";

const theme = createTheme({
  typography: {
    fontFamily: ["Oxygen"].join(","),
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <ToastProvider>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
        <ToastContainer
          position="bottom-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </Provider>
    </ThemeProvider>
  </ToastProvider>
);
