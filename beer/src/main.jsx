import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './routes/Layout';
import Detailpage from './routes/Details';
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index={true} element={<App />} />
        <Route index={false} path="/beers/:id" element={<Detailpage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  </React.StrictMode>,
)
