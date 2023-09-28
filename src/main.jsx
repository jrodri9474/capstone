import React from 'react'
import ReactDOM from 'react-dom/client'
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>,
)
