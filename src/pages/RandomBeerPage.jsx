import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/Header";

function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get("https://ih-beers-api2.herokuapp.com/beers/random")
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching random beer:", error);
      });
  }, []);

  if (!randomBeer) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header />
    <div className="details-container"> {/* Aplica la clase al contenedor principal */}
    <img src={randomBeer.image_url} alt={randomBeer.name} className="details-container img" /> {/* Aplica las clases a la imagen */}
    <h2 className="details-header">{randomBeer.name}</h2> {/* Aplica la clase al encabezado */}
    <p>{randomBeer.tagline}</p>
    <p>First Brewed: {randomBeer.first_brewed}</p>
    <p>Attenuation Level: {randomBeer.attenuation_level}</p>
    <p>Description: {randomBeer.description}</p>
    <p>Contributed by: {randomBeer.contributed_by}</p>
  </div>
  </>
  );
}

export default RandomBeer;
