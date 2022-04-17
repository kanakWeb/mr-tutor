import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";
const Service = ({ service }) => {
  const {id,name, price, img, description } = service;

  const navigate=useNavigate()
  const navigateToHandleChecOut = (id) => {
    navigate(`/service/${id}`);
  };

  return (
    <div className="service my-4">
      <img height="255px" className="pt-2" src={img} alt="" />
      <h2>{name}</h2>
      <h4 className="mb-0">(Tutoring)</h4>
      <p>Price: <span className="fs-3 text-light">৳</span> {price}</p>
      <p className="text-justify-center px-2">
        <small>{description}</small>
      </p>
      <button onClick={()=>navigateToHandleChecOut(id)} className="btn btn-danger my-2 mb-0">{name}Checkout</button>
    </div>
  );
};

export default Service;
