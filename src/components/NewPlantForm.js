import React, { useState } from "react";

function NewPlantForm({ onAddPlant }) {
  const [names, setNames] = useState("")
  const [images, setImages] = useState("")
  const [prices, setPrices] = useState("")
  


  function handleSubmit(e){
    e.preventDefault();

    const newPlant = {
      name: names,
      image: images,
      price: prices
    }

    fetch("http://localhost:6001/plants",{
      method: "POST",
      headers:{
        "Content-Type": "Application/JSON"
      },
      body: JSON.stringify(newPlant)
    })
    .then(res=> res.json())
    .then((addedPlant) => {
      onAddPlant(addedPlant)
      setImages("")
      setNames("")
      setPrices("")
    })
    .catch(err => console.error("Error adding item:", err))
  }
  function handleImage(e){
    setImages(e.target.value)
  }
  function handleName(e){
    setNames(e.target.value)
  }
  function handlePrice(e){
    setPrices(e.target.value)
  }

  
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={names} onChange={handleName} />
        <input type="text" name="image" placeholder="Image URL" value={images} onChange={handleImage} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={prices} onChange={handlePrice} />
        <button type="submit" >Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
