import { StrictMode } from 'react' // react  18
import { createRoot } from 'react-dom/client' // react  18
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
