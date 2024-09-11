import { createSignal, Suspense } from "solid-js";
import { A, Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import "./app.css";
import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";

export default function App() {
  return (
    <Router
      root={(props) => (
        <QueryClientProvider client={new QueryClient()}>
          <A href="/">Home</A>
          <A href="/test">To Test</A>
          <Suspense>{props.children}</Suspense>
        </QueryClientProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
