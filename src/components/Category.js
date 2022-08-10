import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchCategories } from "../reducers/category";

const Category = () => {
  let { category } = useParams();
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories(categories, category));
  }, [dispatch]);
  console.log("Categories", categories);
  return (
    <div className="category container">
      <div className="row align-items-center">
        <h1>{category.name}</h1>
        {/* {categories.length > 0
          ? categories.map((category) => (
              <li key={category.name}>
                <Link to={`/products/${category.id}`}>
                  {category ? category.name : "no snacks here"}
                </Link>
              </li>
            ))
          : ""} */}
      </div>
    </div>
  );
};

export default Category;
