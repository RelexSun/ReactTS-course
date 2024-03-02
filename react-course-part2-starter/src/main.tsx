import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routing/routes";

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
// retry 3 times when there's a problem occures while fetching
//       retry: 3,

// if no component is using that query in 5m it'll be removed
//       cacheTime: 300_000, //5m
//       staleTime: 0, // auto refresh
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//       refetchOnMount: false,
//     },
//   },
// });
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools />
    </QueryClientProvider>
  </React.StrictMode>
);
