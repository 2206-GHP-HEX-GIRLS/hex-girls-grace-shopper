import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCategories } from '../reducers/category';

const Category = () => {
  let { category } = useParams();
  const categories = useSelector((state) => state.category);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories(categories, category));
  }, [dispatch]);

  return (
    <div className="category container">
      <div>
        <h1>{category}</h1>
        <div className="row align-items-center">
          {categories.length > 0
            ? categories.map((category) => (
                <div key={category.id} className="col-sm-4">
                  <h2>{category.name}</h2>
                  <Link to={`/products/${category.id}`}>
                    <img
                      src={category.imageUrl}
                      alt="baked goods img"
                      className="img-fluid mb-3"
                    />
                  </Link>
                  <p>${category.price}</p>
                </div>
              ))
            : ''}
        </div>
      </div>
    </div>
  );
};

export default Category;
