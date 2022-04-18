import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useParams } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
const Checkout = () => {
  const [checkoutservice, setCheckoutservice] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/Services.json")
      .then((res) => res.json())
      .then((data) => setCheckoutservice(data));
  }, []);

  const chckoutHandle = () => {
    toast("Yeha! Done your CheckOut");
  };

  const { serviceId } = useParams();

  const service = checkoutservice.filter(
    (item) => item.id == serviceId
  );
  // const{name,id,img}=service[0]
  console.log(service);

  return (
    <div className="w-100 ">
      <h2 className="text-center py-5 text-primary">
        CheckOut : tutor----: {serviceId}
      </h2>
      <div className="card container mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={service[0]?.img}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{service[0]?.name}</h5>
              <h5 className="card-title">{service[0]?.price}</h5>
              <p className="card-text">{service[0]?.description}</p>
              <button onClick={chckoutHandle} className="card-text btn btn-warning">
                <small className="">checkout</small>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Checkout;
/* const plan =  purches.find(item => item.id == id )
  console.log(plan.name);
  <h3>name:{service[0]?.name}</h3> */
