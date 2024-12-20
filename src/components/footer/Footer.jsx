import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./footer.css"; // Ensure the path is correct

function Footer() {
  return (
    <footer>
      <div className="container-footer">
        <div className="container-item">
          <div>
            <h2>Ollir Organics</h2>
            <h6>Natural Products</h6>
            <hr></hr>
          </div>
          <div className="menu">
            <div className="menu-items">
              <h5>Why People Like Us!</h5>
              <p>
                A holistic living is fueled with<br /> Organic Cosmetics who chooses<br />
                faster routes to get<br /> blended with nature...
              </p>
            </div>
            <div className="menu-items">
              <h5>Our Products</h5>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/cart">Cart</Link>
              </li>
              <li>
                <a href="#products-heading">Products</a> {/* External anchor link */}
              </li>
              <li>
                <a href="#nattu-sakkarai">Nattusakkarai</a> {/* External anchor link */}
              </li>
            </div>

            <div className="menu-items">
              <h5>Reach Us</h5>
              <li>
                <a
                  href="https://www.instagram.com/ollirorganics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=919363620057&text=For%20Orders"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Whatsapp
                </a>
              </li>
              <li>
                <a href="mailto:ollirorganics@gmail.com">Email</a>
              </li>
            </div>
            <div className="menu-items">
              <h5>Contact</h5>
              <p>
                C.K Colony, New Sidhapudur, Coimbatore. <br /> <b>Email:</b>{" "}
                ollirorganics@gmail.com <br /> <b>Phone: 9363620057</b>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <p className="copyright-text">
            © {new Date().getFullYear()} Ollir Organics. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
