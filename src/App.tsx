import { QueryClientProvider } from 'react-query'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './routes/Router'
import { queryClient } from './services/reactQuery/client'
import { GlobalStyle } from './styles/global'
import { LightTheme } from './styles/themes/light'

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyle />

      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </QueryClientProvider>
    </ThemeProvider>
  )
}
