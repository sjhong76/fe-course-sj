import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import App from './AppAvatar.jsx'
// import App from './AppMenu.jsx'
// import App from './AppButton.jsx'
// import App from './AppCommon.jsx'
// import App from './AppCounter.jsx'
// import App from './AppCounter2.jsx'
import App from './AppForm.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)