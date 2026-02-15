import { useEffect, useState } from "react";
import axiosInstance from "./utility/axios";

function NormalWayToCallAPI() {
  const [pokemonLocations, setPokemonLocations] = useState([]);

  useEffect(() => {
    async function fetchPokemonLocation() {
      const response = await axiosInstance.get("location-area/");
      const { data } = response;
      setPokemonLocations(data.results);
    }

    fetchPokemonLocation();
  });
  return (
    <>
      <h1>Pokemon Locations</h1>
      <ol>
        {pokemonLocations.map((location, index) => {
          return <li key={index}> {location.name}</li>;
        })}
      </ol>
    </>
  );
}

export default NormalWayToCallAPI;
