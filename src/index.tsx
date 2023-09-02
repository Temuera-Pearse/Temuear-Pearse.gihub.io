import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'
import MainPage from './pages/MainPage'

export const routes = createRoutesFromElements(
  <Route>
    <Route path="/" element={<App />}>
      <Route index element={<MainPage />} />
    </Route>
  </Route>
)

function AppProvider() {
  return <RouterProvider router={createBrowserRouter(routes)} />
}

document.addEventListener('DOMContentLoaded', () => {
  const queryClient = new QueryClient()
  createRoot(document.getElementById('app') as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
      <Suspense>
        <AppProvider />
      </Suspense>
    </QueryClientProvider>
  )
})
