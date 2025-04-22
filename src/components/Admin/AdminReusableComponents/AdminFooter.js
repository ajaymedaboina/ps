import React from "react";
import "../Admin-CSS/Footer.css"; // Assuming you have a separate CSS file for the Footer component

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        <div className="footer-section-one">
            <h1 style={{textAlign:"center",marginLeft:"80px",fontSize:"3em"}}>PlaceX</h1>
          </div>
          

    <div class="footer-wrapper">
  <div class="footer-section-two">
    <div class="founders-section">
      <h3>Founders</h3>
      <ul>
        <li>Srivalli</li>
        <li>Amrutha</li>
        <li>Shreya sri</li>
      </ul>
    </div>
  </div>
  <div className="footer-section-columns">
  <div class="founders-section-2">
          <h3>Contact Us</h3>
          <ul>
        <li>srivalli@nmims.in</li>
        <li>amrutha@nmims.in</li>
        <li>shreya@nmims.in</li>
      </ul>
      </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Footer;
