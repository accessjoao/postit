import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>JOAO</h1>

      <Link to="/cards">
        <button className="save">Get Started!</button>
      </Link>
    </div>
  );
}
