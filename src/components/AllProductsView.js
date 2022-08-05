import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../reducers/products";
import AllProductsCard from "./AllProductsCard";
import "./css/AllProductsView.css";

const AllProductsView = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let [mappedProducts, setMappedProducts] = useState(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filterProducts = (e) => {
    e.preventDefault();

    let filteredArr = products;

    const cookies = filteredArr.filter(
      (product) => product.category === "Cookies"
    );

    const cakes = filteredArr.filter((product) => product.category === "Cakes");

    const pastries = filteredArr.filter(
      (product) => product.category === "Pastries"
    );

    switch (e.target.value) {
      case "Cookies":
        setMappedProducts(cookies);
        break;
      case "Cakes":
        setMappedProducts(cakes);
        break;
      case "Pastries":
        setMappedProducts(pastries);
        break;
      case "All":
        dispatch(getProducts());
        setMappedProducts(products);
        break;
      default:
        dispatch(getProducts());
        setMappedProducts(products);
    }

    dispatch(getProducts());
  };

  return (
    <div className="AllProductsView container">
      <h1>All Products</h1>
      <select onChange={(e) => filterProducts(e)}>
        <option>All</option>
        <option>Cookies</option>
        <option>Cakes</option>
        <option>Pastries</option>
      </select>
      <div className="row align-items-center">
        {mappedProducts.length > 0
          ? mappedProducts.map((product) => (
              <AllProductsCard key={product.id} product={product} />
            ))
          : products.map((product) => (
              <AllProductsCard key={product.id} product={product} />
            ))}
      </div>
    </div>
  );
};

export default AllProductsView;
