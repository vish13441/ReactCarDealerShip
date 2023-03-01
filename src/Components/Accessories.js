import React from "react";
import accessoriesData from "./accessoriesData"; // assuming data is stored in a separate file

const Accessories = () => {
  return (
    <div className="accessories-container">
      {accessoriesData.map((accessory) => (
        <div key={accessory.id} className="accessory-card">
          <img src={accessory.image} className="accessory-image"alt={accessory.name} />
          <h3>{accessory.name}</h3>
          <p>{accessory.description}</p>
          <p>${accessory.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Accessories;