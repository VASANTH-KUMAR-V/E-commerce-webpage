import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCarSide, faUserShield, faPhoneAlt, faRecycle } from '@fortawesome/free-solid-svg-icons';
import './feature.css'; // Ensure the path is correct

function Features() {
  return (
    <div className="container-fluid features">
      <div className="text-center">
        <h1 className="text2">Why Ollir Products?</h1>
      </div>
      <div className="row g-4">
        {/* Free Shipping for First Orders */}
        <div className="col-lg-3 col-md-6">
          <div className="features-item text-center rounded bg-light p-4">
            <div className="features-icon btn-square rounded-circle  mx-auto">
              <FontAwesomeIcon icon={faCarSide} size="3x" className="text-white" />
            </div>
            <div className="features-content text-center">
              <h5>Free Shipping</h5>
              <p className="mb-0">For first orders</p>
            </div>
          </div>
        </div>

        {/* Quality of Products */}
        <div className="col-lg-3 col-md-6">
          <div className="features-item text-center rounded bg-light p-4">
            <div className="features-icon btn-square rounded-circle mb-3 mx-auto">
              <FontAwesomeIcon icon={faUserShield} size="3x" className="text-white" />
            </div>
            <div className="features-content text-center">
              <h5>Quality of Products</h5>
              <p className="mb-0">100% organic products</p>
            </div>
          </div>
        </div>

        {/* Eco-Friendly Packaging */}
        <div className="col-lg-3 col-md-6">
          <div className="features-item text-center rounded bg-light p-4">
            <div className="features-icon btn-square rounded-circle mb-3 mx-auto">
              <FontAwesomeIcon icon={faRecycle} size="3x" className="text-white" />
            </div>
            <div className="features-content text-center">
              <h5>Eco-Friendly Packaging</h5>
              <p className="mb-0">Eco-friendly for a better planet.</p>
            </div>
          </div>
        </div>

        {/* 24/7 Support */}
        <div className="col-lg-3 col-md-6">
          <div className="features-item text-center rounded bg-light p-4">
            <div className="features-icon btn-square rounded-circle mb-3 mx-auto">
              <FontAwesomeIcon icon={faPhoneAlt} size="3x" className="text-white" />
            </div>
            <div className="features-content text-center">
              <h5>24/7 Support</h5>
              <p className="mb-0">Support every time, fast</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
