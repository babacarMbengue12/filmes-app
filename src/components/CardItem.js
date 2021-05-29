import React from "react";

const CardItem = ({ item }) => {
  return (
    <div className="card" style={{ width: "100%", height: "100%" }}>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">{item.description}</p>
      </div>
    </div>
  );
};

export default CardItem;
