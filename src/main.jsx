import React from 'react';
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router";
import { CurrentUserProvider } from "../contexts/User.jsx";

window.React = React
import App from './App.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
      <CurrentUserProvider>
        <App />
        </CurrentUserProvider>
  </BrowserRouter>

)
