import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './pages/Login'

import GlobalStyles from "./global";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>
)
