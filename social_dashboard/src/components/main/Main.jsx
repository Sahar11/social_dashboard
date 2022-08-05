import React from "react";
import "./main.css";

export default function Main() {
  return (
    <section className="main">
      <div className="main_message loader"> 
        <h2 className="main-blue">Welcome!</h2>
        <h3 className="main-green">to your Social Dashboard</h3>
        <h3 className="main-orange">What would you like to do?</h3>
      </div>
    </section>
  );
}
