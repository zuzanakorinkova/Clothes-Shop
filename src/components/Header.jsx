import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './Home/Home';
import Layout from './Layout';

export default function Header() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="shop" element={<div></div>} />
          <Route path="cart" element={<div></div>} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>

  )
}
