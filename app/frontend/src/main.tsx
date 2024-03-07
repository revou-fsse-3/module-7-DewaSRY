import "@mantine/core/styles.css";
import "@mantine/core/styles/global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createTheme, MantineProvider } from "@mantine/core";
import QueryProvider from "@features/query";
import App from "./app";

const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <QueryProvider>
        <App />
      </QueryProvider>
    </MantineProvider>
  </React.StrictMode>
);
