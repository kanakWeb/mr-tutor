import React from "react";
import "./Service.css";
const Service = ({ service }) => {
  const { name, price, img, description } = service;
  return (
    <div className="service my-4">
      <img height="255px" className="pt-2" src={img} alt="" />
      <h2>{name}</h2>
      <p>Price:$ {price}</p>
      <p>
        <small>{description}</small>
      </p>
      <button className="btn btn-danger">Book:{name}</button>
    </div>
  );
};

export default Service;
