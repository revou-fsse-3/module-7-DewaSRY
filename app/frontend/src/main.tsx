import "@mantine/core/styles.css";
import "@mantine/core/styles/global.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createTheme, MantineProvider } from "@mantine/core";
import App from "./app";

const queryClient = new QueryClient();

const theme = createTheme({
  fontFamily: "Montserrat, sans-serif",
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </MantineProvider>
  </React.StrictMode>
);
