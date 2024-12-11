import React from 'react';
import './feature.css'; // Ensure the path is correct

function Featurs() {
  return (
    <div className="container-fluid featurs py-4">
      <div className="container">
        <div className="text-center mb-4">
          <h1 className="text2">Why Ollir Products?</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6">
            <div className="featurs-item text-center rounded bg-light p-4">
              <div className="featurs-icon btn-square rounded-circle mb-3 mx-auto">
                <i className="fas fa-car-side fa-3x text-white"></i>
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
                <i className="fas fa-user-shield fa-3x text-white"></i>
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
                <i className="fas fa-car-side fa-3x text-white"></i>
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
                <i className="fa fa-phone-alt fa-3x text-white"></i>
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
