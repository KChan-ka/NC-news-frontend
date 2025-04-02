import React from 'react';
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router";

window.React = React
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>

)
