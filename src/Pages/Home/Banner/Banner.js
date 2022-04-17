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
        <p className="text-justify text-dark fs-5 text-center w-50 mx-auto">
          <q>
            
            Well my teaching style can vary depending on the
            personality of the student. I consider myself to be
            optimistic and thus can divert the mind of my students
            into how studying can be fun. The results they'll be
            getting will be good because of the plans I have for the
            teaching. What makes me a great teacher? Well I can play
            guitar too and can teach....
          </q>
        </p>
      </div>
    </div>
  );
};

export default Banner;
