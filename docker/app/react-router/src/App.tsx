import React from 'react';
import { BrowserRouter, Link, Routes, Route, Outlet } from "react-router-dom";

import { Router } from './router/Router'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">home</Link>
        <br />
        <Link to="/page1">page1</Link>
        <br />
        <Link to="/page2">page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;
