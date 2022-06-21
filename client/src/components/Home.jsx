import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";
import { imageData } from "./homepage/Data";

export default function Home() {
  return (
    <div className="container">
      <Icon icon="dashicons:admin-post" height={80} style={{ color: 'white' }} />

      <div className="home-cards">
        {imageData.map((slide, index)=> {
          return <img src={slide.image} alt='posts'/>
        })}
      </div>

      <br />

      <Link to="/posts">
        <button className="save">Get Started!</button>
      </Link>
      <br />
      <br />
    </div>
  );
}
