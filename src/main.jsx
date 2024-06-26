import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Content from './Content.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Content>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Content>,
)
