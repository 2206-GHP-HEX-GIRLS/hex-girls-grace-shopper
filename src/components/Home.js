import React from 'react';
import './css/Home.css';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Home = () => {
  return (
    <div className="Home">
      <h1 className="mb-5">Welcome to Boolean Bakers!</h1>
      <main>
        <div className="category-card container">
          <div className="row align-items-top">
            <div className="col-sm-4">
              <img
                className="main-logo img-fluid"
                src="https://i.imgur.com/iKrhfI0.png"
                alt="main-logo"
              />
              <SearchBar />
            </div>
            <div className="col-sm-8">
              <div className="row">
                <div className="col-sm-6">
                  <Link to="/">
                    <img
                      src="https://images.aws.nestle.recipes/original/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie.jpg"
                      alt="cookies"
                      className="img-fluid category-img"
                    />
                  </Link>
                  <h2>Cookies</h2>
                </div>
                <div className="col-sm-6">
                  <Link to="/">
                    <img
                      src="https://img.freepik.com/premium-photo/cake-with-white-cream-chocolate-drips-pomegranate-nuts-chocolate-decor_199620-5923.jpg?w=2000"
                      alt="cakes"
                      className="img-fluid category-img"
                    />
                  </Link>
                  <h2>Cakes</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <Link to="/">
                    <img
                      src="https://nomadparadise.com/wp-content/uploads/2022/03/french-pastries-05.jpg"
                      alt="pastries"
                      className="img-fluid category-img"
                    />
                  </Link>
                  <h2>Pastries</h2>
                </div>
                <div className="col-sm-6">
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
