import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductsView from './AllProductsView';
import SingleProductView from './SingleProductView';

const Paths = () => {
  return (
    <Router>
      <div>
        <main>
          <h1>Boolean Bakers</h1>
        </main>
        <Routes>
          <Route path="/allproducts">
            <Route index element={<AllProductsView />} />
            <Route path=":id" element={<SingleProductView />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default Paths;
