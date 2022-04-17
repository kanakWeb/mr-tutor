import React from "react";
import "./About.css";
import Kanak from "../../../images/kanak.jpg";
const h2 = () => {
  return (
    <div class=" container my-5 row">
      <div class=" col-sm-12 col-md-7   col-lg-6 ">
        <div class="Bar">
          <h1 className="text-warning">Kanak Chandra</h1>
        </div>

        <p class="paragraph">
          Hi I am leaning towards web development. I am a graduate
          student of Daffodil International University, Dhaka
          Bangladesh Measuring in Computer Science and engineering. I
          have some technical and analytical skills through my degree
          Some knowledge of working across front-end development
          skills I'm taking. And so I'm looking for some knowledge.
          And I stepped on the road from programming hero to web
          development hero.
        </p>
        <button class="button btn" href="#">
          Explore Now
        </button>
       
      </div>
      <div class="half col-md-12 px-2 d-flex justify-contet-center align-items-center col-sm-12 col-lg-6">
        <img src={Kanak} alt="kanak1" />
      </div>
    </div>
  );
};

export default h2;
