import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AllProductsView } from './AllProductsView';

const Paths = () => {
  return (
    <Router>
      <div>
        <main>
          <h1>Boolean Bakers</h1>
        </main>
        <Routes>
          <Route path="/allproducts" element={<AllProductsView />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Paths;
