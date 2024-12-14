import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faUserShield, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import './feature.css'; // Ensure the path is correct

function Featurs() {
  return (
    <div className="container-fluid featurs ">
      <div className="c">
        <div className="text-center mb-4">
          <h1 className="text2">Why Ollir Products?</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="featurs-item text-center rounded bg-light p-4">
              <div className="featurs-icon btn-square rounded-circle mb-3 mx-auto">
                <FontAwesomeIcon icon={faCarSide} size="3x" className="text-white" />
              </div>
              <div className="featurs-content text-center">
                <h5>Free Shipping</h5>
                <p className="mb-0">For first orders</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="featurs-item text-center rounded bg-light p-4">
              <div className="featurs-icon btn-square rounded-circle mb-3 mx-auto">
                <FontAwesomeIcon icon={faUserShield} size="3x" className="text-white" />
              </div>
              <div className="featurs-content text-center">
                <h5>Quality of Products</h5>
                <p className="mb-0">100% organic products</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="featurs-item text-center rounded bg-light p-4">
              <div className="featurs-icon btn-square rounded-circle mb-3 mx-auto">
                <FontAwesomeIcon icon={faCarSide} size="3x" className="text-white" />
              </div>
              <div className="featurs-content text-center">
                <h5>Free Shipping</h5>
                <p className="mb-0">Free on orders over ₹2000</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="featurs-item text-center rounded bg-light p-4">
              <div className="featurs-icon btn-square rounded-circle mb-3 mx-auto">
                <FontAwesomeIcon icon={faPhoneAlt} size="3x" className="text-white" />
              </div>
              <div className="featurs-content text-center">
                <h5>24/7 Support</h5>
                <p className="mb-0">Support every time fast</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featurs;
