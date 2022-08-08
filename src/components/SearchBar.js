import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../reducers/products";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import "./css/SearchBar.css";

const SearchBar = () => {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  let [filteredProducts, setFilteredProducts] = useState(allProducts);
  let [showResults, setShowResults] = useState("results hidden");
  let [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchWord(e.target.value);
    let filtered = allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchWord.toLowerCase())
    );

    if (searchWord.length !== 0) {
      setFilteredProducts(filtered);
      setShowResults("results");
    } else if (searchWord <= 0) {
      setShowResults("results hidden");
    }
  };

  console.log(searchWord);

  return (
    <div className="SearchBar container">
      <div className="search-bar row">
        <div className="col-sm-12">
          <input
            type="text"
            onChange={handleSearch}
            placeholder="Search for yummy treats"
            value={searchWord}
          ></input>
          {searchWord.length <= 0 ? (
            <SearchIcon />
          ) : (
            <ClearIcon
              onClick={() => {
                setSearchWord("");
                setShowResults("results hidden");
              }}
            />
          )}
        </div>
      </div>
      {searchWord.length > 0 ? (
        <div className={showResults}>
          {filteredProducts.map((product) => (
            <Link to="/allProducts" key={product.id}>
              {product.name}
            </Link>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SearchBar;
