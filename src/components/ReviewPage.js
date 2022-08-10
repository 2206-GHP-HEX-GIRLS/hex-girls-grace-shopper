import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { addNewReview } from '../reducers/review';
import './css/ReviewPage.css';

const ReviewPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();

  let [newReview, setReview] = useState({ rating: '', content: '' });

  // useEffect(() => {
  //   dispatch(addNewReview(review, id));
  // }, [dispatch, id, review]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addNewReview(newReview, id));
    setReview({ rating: '', content: '' });
  };

  return (
    <div>
      <h2 id="fh2">WE APPRECIATE YOUR REVIEW!</h2>
      <h6 id="fh6">
        Your review will help us to improve our quality products and customer
        services.
      </h6>

      <form id="feedback" onSubmit={handleSubmit}>
        <div className="pinfo">Rate our product🎂</div>

        <div className="form-group">
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-heart"></i>
              </span>
              <select className="form-control" id="rating">
                <option value="1star">1</option>
                <option value="2stars">2</option>
                <option value="3stars">3</option>
                <option value="4stars">4</option>
                <option value="5stars">5</option>
              </select>
            </div>
          </div>
        </div>

        <div className="pinfo">Write your feedback.</div>

        <div className="form-group">
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-pencil"></i>
              </span>
              <textarea
                className="form-control"
                id="content"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReviewPage;
