import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {

  const [checkoutservice, setCheckoutservice] = useState([]);
  
    useEffect(() => {
        fetch("Services.json")
        .then((res) => res.json())
        .then((data) => console.log(data));
      }, []);

  const { serviceId } = useParams();
  return (
    <div className="w-100 ">
      <h2 className="text-center py-5 text-primary">
        CheckOut : tutor----: {serviceId}
      </h2>
    </div>
  );
};

export default Checkout;
/* const plan =  purches.find(item => item.id == id )
  console.log(plan.name); */
