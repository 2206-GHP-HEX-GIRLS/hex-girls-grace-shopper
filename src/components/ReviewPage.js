import React from 'react';
import './css/ReviewPage.css';

const ReviewPage = () => {
  return (
    <div>
      <h2 id="fh2">WE APPRECIATE YOUR REVIEW!</h2>
      <h6 id="fh6">
        Your review will help us to improve our web hosting quality products,
        and customer services.
      </h6>

      <form id="feedback" action="">
        <div className="pinfo">Your personal info</div>

        <div className="form-group">
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-user"></i>
              </span>
              <input
                name="name"
                placeholder="First and Last name"
                className="form-control"
                type="text"
              />
            </div>
          </div>
        </div>

        <div className="form-group">
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-envelope"></i>
              </span>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Valid Email Address"
              />
            </div>
          </div>
        </div>

        <div className="pinfo">Rate our overall services.</div>

        <div className="form-group">
          <div className="col-md-4 inputGroupContainer">
            <div className="input-group">
              <span className="input-group-addon">
                <i className="fa fa-heart"></i>
              </span>
              <select className="form-control" id="rate">
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
                id="review"
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
