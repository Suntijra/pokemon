import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query';
import { StoreProvider } from './store.tsx';
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import routers from './router.tsx';
const queryClient = new QueryClient();
const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container missing in index.html');
}

const router = createBrowserRouter(routers);


createRoot(container).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <RouterProvider router={router} />
      </StoreProvider>
    </QueryClientProvider>,
  </React.StrictMode >,


);
