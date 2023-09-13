import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../components/Header";


function BeersPage() {
  const [beersList, setBeer] = useState([]);

  useEffect(() => {
    axios.get("https://ih-beers-api2.herokuapp.com/beers").then((response) => {
      console.log(response.data);
      setBeer(response.data);
    });
  }, []);

  return (
    <div>
      <Header />
      <div className="beers-container">
        {beersList.map((beer) => {
          return (
            <div key={beer._id} className="card">
              <img src={beer.image_url} alt={beer.name} />
              <div className="card-content"> 
                <h2>{beer.name}</h2>
                <p>{beer.tagline}</p>
                <p>Created by: {beer.contributed_by}</p>
                <button>
                  <Link to={`/beers/${beer._id}`} className="beer-link">More info</Link>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default BeersPage;
