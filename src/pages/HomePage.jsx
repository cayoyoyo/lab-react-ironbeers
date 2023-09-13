import React from "react";
import { Link } from "react-router-dom";
import beerImage from "../assets/beers.png";
import randomImage from "../assets/random-beer.png";
import newImage from "../assets/new-beer.png";


function HomePage() {
  return (
    <div className="home-page-container">
      <img src={beerImage} alt="Beer" className="beer-image" />
      <Link to="/beers" className="beer-link">All Beers</Link>
      <img src={randomImage} alt="Beer" className="beer-image" />
      <Link to="/random-beer" className="beer-link">Random Beer</Link>
      <img src={newImage} alt="Beer" className="beer-image" />
      <Link to="/new-beer" className="beer-link">New Beer</Link>
    </div>
  );
}

export default HomePage;
