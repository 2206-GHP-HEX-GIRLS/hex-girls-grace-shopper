import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleProduct } from "../reducers/singleProduct";
import { Link, useParams } from "react-router-dom";
import "./css/SingleProductView.css";

const SingleProductView = () => {
  let { id } = useParams();

  const product = useSelector((state) => state.singleProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch, id]);

  return (
    <div className="SingleProductView container">
      <div className="row align-items-center">
        <div className="col-sm-6">
          <img
            src={product.imageUrl}
            alt="baked goods img"
            className="img-fluid"
          />
        </div>
        <div className="col-sm-6">
          <div key={product.id}>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.description}</div>
            <div>{product.review}</div>
            <div>
              Quantity
              <select name="Quantity">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <button type="submit">Add To Cart🛒</button>
            <Link to={`/allproducts/${product.id}/review`}>
              Write a review!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductView;
