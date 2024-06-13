import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer style={footerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <h5>LINKS</h5>
            <ul className="list-unstyled" >
              <li><a href="https://www.maconha.com" style={linkStyle}>www.maconha.com</a></li>
              <li><a href="https://www.tempo.com/" style={linkStyle}>www.tempo.com/</a></li>
              
            </ul>
          </div>
          <div className="col-lg-4 col-md-6">
            <h5>Contato</h5>
            <ul className="list-unstyled">
              <li>Email: meioambiente@gmail.com</li>
              <li>Telefone: (47) 4002-8922</li>
              <div>
                <FaInstagram/>
                <FaFacebook/>
                <FaWhatsapp/>
                <FaTwitter/>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}


const footerStyle = {
  backgroundColor: '#00ccff',
  color: '#fff',
  padding: '2rem 0',
};

const linkStyle = {
  color: '#fff',
  textDecoration: 'none',
  marginBottom: '0.5rem',
  display: 'block',
};


export default Footer;
