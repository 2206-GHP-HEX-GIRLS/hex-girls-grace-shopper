import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../reducers/products";
import AllProductsCard from "./AllProductsCard";
import SearchBar from "./SearchBar";
import "./css/AllProductsView.css";
import { Link } from "react-router-dom";

const AllProductsView = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  // let [mappedProducts, setMappedProducts] = useState(products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filterProducts = (e) => {
    e.preventDefault();

    products.filter((product) => product.category === e.target.value);
    // setMappedProducts(filteredProducts);
  };

  return (
    <div className="AllProductsView container">
      <SearchBar />
      <h1>All Products</h1>
      <select onChange={(e) => filterProducts(e)}>
        <option>All</option>
        <option>Cookies</option>
        <option>Cakes</option>
        <option>Pastries</option>
      </select>
      <div className="row align-items-center">
        {products.map((product) => (
          <AllProductsCard key={product.id} product={product} />
        ))}
        <Link to={`/products/add`}>Add Product</Link>
      </div>
    </div>
  );
};

export default AllProductsView;
