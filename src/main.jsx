import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";
import store from "./redux/store.js";

const theme = {
    colors: {
        primary: "#363062",
        secondary: "#231955",
        light: "#ABC9FF",
        accent: "#82DBD8"
    },
    shadows: {
        md: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        lg: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px"
    }
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <App />
            </ThemeProvider>
        </Provider>
    </React.StrictMode>
);
