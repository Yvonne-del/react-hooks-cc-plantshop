import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  const filteredItems = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data))
      .catch((error) => console.log(error));
  }, []);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search handleSearch={handleSearch} />
      <PlantList plants={filteredItems} />
    </main>
  );
}

export default PlantPage;

