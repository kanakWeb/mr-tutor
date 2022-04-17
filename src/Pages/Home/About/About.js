import React from "react";
import "./About.css";
import Kanak from "../../../images/kanak.jpg";
const h2 = () => {
  return (
    <div className="container">
      <div class=" container my-5 row">
        <div class=" col-sm-12 col-md-7   col-lg-6 ">
          <div class="Bar">
            <h1 className="text-warning">Kanak Chandra</h1>
          </div>

          <p class="paragraph">
            Hi I am leaning towards web development. I am a graduate
            student of Daffodil International University, Dhaka
            Bangladesh Measuring in Computer Science and engineering.
            I have some technical and analytical skills through my
            degree Some knowledge of working across front-end
            development skills I'm taking. And so I'm looking for some
            knowledge. And I stepped on the road from programming hero
            to web development hero.
          </p>
          <button class="button btn" href="#">
            Explore Now
          </button>
        </div>
        <div class="half col-md-12 px-2 d-flex justify-contet-center align-items-center col-sm-12 col-lg-6">
          <img src={Kanak} alt="kanak1" />
        </div>
      </div>

      <div class="size-text container py-5">
        <h2 className="text-center py-5 text-warning fs-2">Goals</h2>
        <p class="card-text text-justify fs-4 w-75 mx-auto">
         
          I want to be a good MERN(MongoDB, Express. JS, React. JS, Node.
          JS) devloper I will start with some  Tools that
          our should know, then cover the Programming Languages and
          Libraries/Frameworks that you need to learn to become a
         MERN or a Full-stack Developer.I want to good human and
          good Web developer.
        </p>
      </div>
    </div>
  );
};

export default h2;
