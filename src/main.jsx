import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";
import store from "./redux/store.js";

const theme = {
    colors: {
        primary: "#EAE3D2",
        secondary: "#607EAA",
        light: "#ABC9FF"
    },
    shadows: {
        md: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
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
