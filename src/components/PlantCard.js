import React, { useState } from "react";

function PlantCard({image, name, price}) {
  const [soldOut, setSoldOut] = useState(false)

  function handleClick(){
    setSoldOut((clicked)=> !clicked)
  }

  return (
    <li className="card" data-testid="plant-item">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button className={soldOut ? "": "primary"} onClick={handleClick} > {soldOut ? "Out of Stock": "In Stock"}</button>
    </li>
  );
}

export default PlantCard;
