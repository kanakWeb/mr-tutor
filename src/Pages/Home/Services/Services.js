import React, { useEffect } from "react";
import { useState } from "react";
import Service from "../Service/Service";
import './Services.css'
const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("Services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div  id='service' style={{background:'#2d2363'}} className=' py-4  pb-5' >
          <h2 className='services-title py-3 text-shadow'>Our Services</h2> 
          <div className='my-2 shadow all-service shadow-lg p-3 text-white container services-container'>
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
