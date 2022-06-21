import React from "react";
import { Link } from "react-router-dom";
import { sliderData } from "./homepage/Data";

export default function Home() {
  return (
    <div className="container">
      <h1>JOAO</h1>

      <div>
        {sliderData.map((slide, index)=> {
          return <img src={slide.image} alt='posts'/>
        })}
      </div>

      <Link to="/cards">
        <button className="save">Get Started!</button>
      </Link>
    </div>
  );
}
