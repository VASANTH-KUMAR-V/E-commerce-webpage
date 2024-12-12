import React from 'react';
import './hero.css'; // Ensure the path is correct
import homeImage from '../Assets/img/Home.jpg'; // Ensure the image path is correct
import Logo from '../Assets/img/ollir-organics-background.png';

const Handmade = () => {
    return (
        <div className="container-fluid hero-header py-5" id="Handmade">
            <div className="container py-5">
                <div className="row g-4 align-items-center">
                    <div className="col-lg-6">
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active rounded">
                                    <img src={Logo} className="img-fluid w-100 rounded" alt="First slide" />
                                </div>
                            </div>
                        </div>
                        <h4 className="text-secondar mt-4"><b>100% Natural</b></h4>
                        <h1 className="text-primar">Hand Made Organic Cosmetics</h1>
                    </div>
                    <div className="col-lg-6">
                        <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
                            <div className="carousel-inner" role="listbox">
                                <div className="carousel-item active" id='home-img'>
                                    <img src={homeImage} className="img-fluid w-100 rounded" alt="Second slide" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Handmade;
