import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);

  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.error("Error fetching beer details:", error);
      });
  }, [beerId]);

  if (!beer) {
    return <div>Loading...</div>;
  }

  return (
    <div className="details-container">
    <div className="details-header"> 
      <Header />
    </div>
    <img src={beer.image_url} alt={beer.name} />
    <h2>{beer.name}</h2>
    <p>{beer.tagline}</p>
    <p>First Brewed: {beer.first_brewed}</p>
    <p>Attenuation Level: {beer.attenuation_level}</p>
    <p>Description: {beer.description}</p>
    <p>Contributed by: {beer.contributed_by}</p>
  </div>
  );
}

export default BeerDetailsPage;
