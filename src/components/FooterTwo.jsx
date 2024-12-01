import React from 'react'
import { Link } from 'react-router-dom'

const FooterTwo = () => {
    return (
        <footer className="footer py-80">
            <div className="container container-lg">
                <div className="footer-item-two-wrapper d-flex align-items-start flex-wrap">
                  
                    <div className="footer-item">
                        <h6 className="footer-item__title">About us</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Company Profile
                                </Link>
                            </li>
                           
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Rules &amp; Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">Customer Support</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    Help Center
                                </Link>
                            </li>
                            <li className="mb-16">
                                <Link
                                    to="/contact"
                                    className="text-gray-600 hover-text-main-600"
                                >
                                    Contact Us
                                </Link>
                            </li>
                          
                        </ul>
                    </div>
                    <div className="footer-item">
                        <h6 className="footer-item__title">My Account</h6>
                        <ul className="footer-menu">
                            <li className="mb-16">
                                <Link to="/shop" className="text-gray-600 hover-text-main-600">
                                    My Account
                                </Link>
                            </li>
                           
                        </ul>
                    </div>
                   
                
                </div>
            </div>
        </footer>

    )
}

export default FooterTwo