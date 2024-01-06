import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from './Home/Home';
import Layout from './Layout';
import AllItems from './Shop/AllItems';
import SingleItem from './Shop/SingleItem';
import ScrollToTop from '../ScrollToTop';

export default function Router() {
  return (
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout  />}>
          <Route index element={<Main />} />
          <Route path="/shop" element={<AllItems/>} />
          <Route path="/shop/:id" element={<SingleItem/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}
