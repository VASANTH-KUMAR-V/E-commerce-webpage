import React from 'react';
import './footer.css'; // Ensure the path is correct

function Footer() {
    return (
        <div className="container-fluid text-white footer pt-5 mt-5">
            <div className="container py-5">
                <div className="row g-4">
                    <div className="col-lg-3">
                        <h1 className="h1 mb-3">Ollir Organics</h1>
                        <h5 className="h5 mb-0">Natural Products</h5>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center justify-content-center">
                        <a href="https://api.whatsapp.com/send?phone=919363620057&text=For%20Orders" target="_blank" rel="noopener noreferrer">
                            <button type="button" className="btn button border-0 border-secondary py-3 px-4 rounded-pill text-white">
                                <i className="bi bi-whatsapp"></i> Buy Now
                            </button>
                        </a>
                    </div>
                </div>
                <hr className="footer-divider mb-5" />

                <div className="row g-4">
                    <div className="col-lg-3 col-md-6">
                        <h4 className="mb-3">Why People Like Us!</h4>
                        <p className="mb-4">A holistic living is fueled with Organic Cosmetics who chooses faster routes to get blended with nature...</p>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h4 className="mb-3">Page Info</h4>
                        <ul className="list-unstyled">
                            <li><a className="btn-link" href="#Handmade">Home</a></li>
                            <li><a className="btn-link" href="#product-filters">Our Products</a></li>
                            <li><a className="btn-link" href="#nattu-sakkarai">Nattu Sakkarai</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h4 className="mb-3">Reach Us On</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a className="footer-icon-link" href="https://www.instagram.com/ollirorganics?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                    <i className="bi bi-instagram"></i> Instagram
                                </a>
                            </li>
                            <li>
                                <a className="footer-icon-link" href="https://api.whatsapp.com/send?phone=919363620057&text=For%20Orders" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-whatsapp"></i> WhatsApp
                                </a>
                            </li>
                            <li>
                                <a className="footer-icon-link" href="mailto:ollirorganics@gmail.com">
                                    <i className="bi bi-envelope"></i> Email
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h4 className="mb-3">Contact</h4>
                        <p>C.K Colony, New Sidhapudur, Coimbatore.</p>
                        <p><span>Email:</span> ollirorganics@gmail.com</p>
                        <p><span>Phone:</span> 9363620057</p>
                    </div>
                </div>
            </div>

            {/* Copyright Notice */}
            <div className="container text-center py-4">
                <p className="mb-0">© {new Date().getFullYear()} Ollir Organics. All Rights Reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
