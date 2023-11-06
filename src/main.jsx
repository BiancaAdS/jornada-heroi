import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

import Theme from './styles.jsx'
import { AuthProvider } from './context/auth/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AuthProvider>
      <BrowserRouter>
        <Theme>
          <App />
        </Theme>
      </BrowserRouter>
    </AuthProvider>
  </>
);
