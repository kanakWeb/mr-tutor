import React from "react";
import "./Banner.css";
const Banner = () => {
  return (
    <div className="w-100">
      <div className="banner d-flex justify-content-center align-items-center py-5">
        <div>
        <h1 className="pt-5 fw-bold  fs-1 text-danger text-center">
          Largest Tuition Mr.Tutor
        </h1>
        <h3 className="pt-4 fs-4 fw-bold mx-5 text-primary text-center">
          Are you looking for a Home Tutor or Tuition?
        </h3>
       <div className="w-25 mx-auto"> <img  className="border-pill img-fluid img-cotainer"  src="https://i.ibb.co/wLTJxCL/1646062999181-1-removebg-preview.png" alt="" /></div>
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
     
    </div>
  );
};

export default Banner;
