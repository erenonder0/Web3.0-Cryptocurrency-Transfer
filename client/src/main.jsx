import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import './index.css'
import { TransactionProvider } from './context/TransactionContext'

createRoot(document.getElementById('root')).render(
    <TransactionProvider>
    <StrictMode>
      <App />
    </StrictMode>
    </TransactionProvider>,

)
