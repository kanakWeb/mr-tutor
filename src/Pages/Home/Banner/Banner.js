import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="w-100">
      <div className="banner py-5">
        <h1 className="pt-5 text-danger text-center">
          Largest Tuition Mr.Tutor{" "}
        </h1>
        <h3 className="py-3 fs-3 fw-bold mx-5 text-primary text-center">
          Are you looking for a Home Tutor or Tuition?
        </h3>
        <p className="text-justify text-dark fs-5 text-center w-50 mx-auto"><q>
          Largest Tuition Media in Bangladesh Are you looking for a
          Home Tutor or Tuition? The Biggest Online Home Tutor Media
          and Education Directory. Find a best Home Tutor or Tuition
          Job in Dhaka, Chattogram, Sylhet, Rajshahi, Rangpur or
          anywhere in Bangladesh. Just register as a Home Tutor for
          free to get a Tuition or publish a Tuition Circular to hire
          a qualified Tutor without wasting your valuable time.
          </q></p>
      </div>
    </div>
  );
};

export default Banner;
