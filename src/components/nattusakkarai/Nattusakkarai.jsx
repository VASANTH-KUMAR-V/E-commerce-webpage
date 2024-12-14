import React from 'react';
import './nattusakkarai.css'
import Nattusakkarai from '../Assets/img/nattu-sakkarai.jpg';

function Banner() {
  return (
    <div className="container-fluid banner  my-5" id="nattu-sakkarai">
      <div>
        <div className="row g-4 align-items-center">
          <div className="col-lg-6">
            <div className="py-4">
              <h1 className="display-3 ">Fresh Nattu Sakkarai</h1>
              <p className="fw-normal display-3 text-white  mb-4">in Our Store</p>
              <p className="mb-4 ">We are happy to inform you that we KRRS JAGGERY PRODUCERS are launching our traditional organic #ROYALBLEND jaggery powder is getting ready to make our sweets more sweeter and our celebration's more colourful.. so get ready to grab your orders now.. Dm for orders..</p>
              <a href="https://api.whatsapp.com/send?phone=919363620057&text=For%20Orders" className="banner-btn btn border-2 border-white rounded-pill text-dark  py-3 px-5">BUY NOW</a>
            </div>
          </div>
            <div className="col-lg-6">
                <div className="position-relative">
                <img src={Nattusakkarai} className="img-fluid w-100 rounded"  alt="Nattu sakkarai" style={{ width: 322 }}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;