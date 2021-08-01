import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { BlogDataContextProvider } from "./store/BlogData"

ReactDOM.render(
  <React.StrictMode>
    <BlogDataContextProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>
  </BlogDataContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

