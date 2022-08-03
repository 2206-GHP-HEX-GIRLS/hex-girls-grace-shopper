import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <main>
        <h1>Boolean Bakers</h1>
        <div className="category-card container">
          <div className="row align-items-center">
            <div className="col-sm-3">
              <Link to="/">
                <img
                  src="https://images.aws.nestle.recipes/original/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie.jpg"
                  alt="cookies"
                  className="img-fluid"
                />
              </Link>
              <h2>Cookies</h2>
            </div>
            <div className="col-sm-3">
              <Link to="/">
                <img
                  src="https://images.aws.nestle.recipes/original/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie.jpg"
                  alt="cakes"
                  className="img-fluid"
                />
              </Link>
              <h2>Cakes</h2>
            </div>
            <div className="col-sm-3">
              <Link to="/">
                <img
                  src="https://images.aws.nestle.recipes/original/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie.jpg"
                  alt="pastries"
                  className="img-fluid"
                />
              </Link>
              <h2>Pastries</h2>
            </div>
            <div className="col-sm-3">
              <Link to="/">
                <img
                  src="https://www.nicepng.com/png/detail/758-7586854_arrow-png-transparent-icon-right-arrow-in-circle.png"
                  alt="see-all"
                  className="img-fluid"
                />
              </Link>
              <h2>See All</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
