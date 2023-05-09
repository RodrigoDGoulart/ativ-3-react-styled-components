import ReactDOM from 'react-dom/client'
import './index.css'
import { ContextoProvider } from './context/contexto'
import AppRouter from './routes'
import { TemaProvider } from './context/tema'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TemaProvider>
    <ContextoProvider>
      <AppRouter />
    </ContextoProvider>,
  </TemaProvider>
)
