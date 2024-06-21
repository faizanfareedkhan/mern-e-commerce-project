import React from "react";
import "./Newsletter.css";

function Newsletter() {
  return <div className="news-letter">
    <h1>
      Get Exclusive Offers on Your Email
    </h1>
    <p>Subscribe to our newsletter and stay update</p>
    <div>
      <input type="email" placeholder="Your Email ID"/>
      <button>Subscribe</button>
    </div>
  </div>;
}

export default Newsletter;
