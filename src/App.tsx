import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import '../src/styles/main.css'
import { Router } from './routes/Router'
import { queryClient } from './services/reactQuery/client'

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  )
}
