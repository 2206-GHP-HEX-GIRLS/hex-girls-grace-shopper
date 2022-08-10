import React from "react";
import "./css/Home.css";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { setGuest } from "../reducers/guest";

const Home = () => {
  const guestCookie = Math.floor(Math.random() * 10000000) + 1;
  const dispatch = useDispatch();
  console.log(guestCookie);

  dispatch(setGuest(guestCookie));

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
                  <Link to="/products/category/Cookies">
                    <img
                      src="https://images.aws.nestle.recipes/original/5b069c3ed2feea79377014f6766fcd49_Original_NTH_Chocolate_Chip_Cookie.jpg"
                      alt="cookies"
                      className="img-fluid category-img"
                    />
                  </Link>
                  <h2>Cookies</h2>
                </div>
                <div className="col-sm-6">
                  <Link to="/products/category/Cakes">
                    <img
                      src="https://i.imgur.com/YJ5ajzZ.jpg"
                      alt="cakes"
                      className="img-fluid category-img"
                    />
                  </Link>
                  <h2>Cakes</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <Link to="/products/category/Pastries">
                    <img
                      src="https://i.imgur.com/qWdYPVi.jpg"
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
