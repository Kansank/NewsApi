import React from "react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <div className="About">
      <div className="about-l"> </div>
      <div className="about-r">
        <div className="ab-head">
          <h1>About Festival</h1>
          <hr />
        </div>
        <div className="ab-detail-f">
          <h3>Phasellus fermentum in dolor</h3>
          <p>
            Suspendisse a pellentesque maecen as malesuada elit lectus felis
          </p>
        </div>
        <div className="ab-detail-s">
          <h3>Aliquam erat ac ipsum</h3>
          <p>
            Suspendisse a pellentesque maecen as malesuada elit lectus felis
          </p>
        </div>
        <div className="see-all">
          <Link to="/">LEARN MORE</Link>
        </div>
      </div>
    </div>
  );
}
