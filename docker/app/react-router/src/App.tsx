import React from 'react';
import { BrowserRouter, Link, Routes, Route, Outlet } from "react-router-dom";

import { Home } from './Home'
import { Page1 } from './Page1'
import { Page1DetailA } from './Page1DetailA';
import { Page1DetailB } from './Page1DetailB';
import { Page2 } from './Page2'

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1/detailA" element={<Page1DetailA />} />
        <Route path="/page1" element={<Page1 />} />
          <Route path="/page1/detailA" element={<Page1DetailA />} />
          <Route path="/page1/detailB" element={<Page1DetailB />} />
        <Route path="/page2" element={<Page2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
