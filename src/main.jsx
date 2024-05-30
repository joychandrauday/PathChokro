import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Provider from "../src/Provider/Provider.jsx";
import router from "./Routes/Routes";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <Provider>
          <RouterProvider router={router} />
        </Provider>
      </QueryClientProvider>
    </HelmetProvider>
  </React.StrictMode>
);
