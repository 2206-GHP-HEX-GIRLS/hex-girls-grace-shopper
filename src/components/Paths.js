import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductsView from './AllProductsView';
import SingleProductView from './SingleProductView';
import NotFound from './NotFound';
import Header from './Header';
import Home from './Home';
import NavBar from './NavBar';
import ReviewPage from './ReviewPage';

const Paths = () => {
  return (
    <Router>
      <div className="Paths">
        <div className="fixed-top">
          <Header />
          <NavBar />
        </div>
        <Routes>
          <Route path="/allproducts">
            <Route index element={<AllProductsView />} />
            <Route path=":id" element={<SingleProductView />} />
            <Route path="/review" element={<ReviewPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Paths;
