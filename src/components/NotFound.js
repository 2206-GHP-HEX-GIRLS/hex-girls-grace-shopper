import React from 'react';
import { Link } from 'react-router-dom';
import './css/NotFound.css';

const NotFound = () => {
  return (
    <div>
      <div className="mainbox">
        <div className="err">4</div>
        <i className="far fa-question-circle fa-spin"></i>
        <div className="err2">4</div>
        <div className="msg">
          You've found a page that doesn't exist!
          <p>
            Let's go back <Link to="/">Home</Link> and try from there.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
