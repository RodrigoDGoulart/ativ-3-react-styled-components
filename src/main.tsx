import ReactDOM from 'react-dom/client'
import './index.css'
import { ContextoProvider } from './context/contexto'
import AppRouter from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ContextoProvider>
    <AppRouter />
  </ContextoProvider>,
)
