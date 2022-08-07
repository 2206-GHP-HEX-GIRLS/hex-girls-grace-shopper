import React from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Home = () => {
  return (
    <div className="Home">
      <main>
        <SearchBar />
        <img
          className="main-logo img-fluid"
          src="https://i.imgur.com/iKrhfI0.png"
          alt="main-logo"
        />
        <div className="category-card container">
          <div className="row align-items-center">
            <div className="col-sm-3">
              <Link to="/">
                <img
                  src="https://images.aws.nestle.recipes/original/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie.jpg"
                  alt="cookies"
                  className="img-fluid category-img"
                />
              </Link>
              <h2>Cookies</h2>
            </div>
            <div className="col-sm-3">
              <Link to="/">
                <img
                  src="https://images.aws.nestle.recipes/original/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie.jpg"
                  alt="cakes"
                  className="img-fluid category-img"
                />
              </Link>
              <h2>Cakes</h2>
            </div>
            <div className="col-sm-3">
              <Link to="/">
                <img
                  src="https://images.aws.nestle.recipes/original/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie.jpg"
                  alt="pastries"
                  className="img-fluid category-img"
                />
              </Link>
              <h2>Pastries</h2>
            </div>
            <div className="col-sm-3">
              <Link to="/products">
                <img
                  src="https://i.insider.com/5dc5ed063afd371308615ae3?width=1000&format=jpeg&auto=webp"
                  alt="see-all"
                  className="img-fluid category-img"
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
