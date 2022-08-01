import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";

const theme = {
    colors: {
        primary: "#EAE3D2",
        secondary: "#607EAA"
    },
    shadows: {
        md: "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    }
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>
);
