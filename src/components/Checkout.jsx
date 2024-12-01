import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Checkout = () => {
    const [selectedPayment, setSelectedPayment] = useState("payment1");

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.id);
    };
    return (
        <section className="checkout py-80">
            <div className="container container-lg">

                <div className="row">
                    <div className="col-xl-9 col-lg-8">
                        <form action="#" className="pe-xl-5">
                            <div className="row gy-3">
                                <div className="col-sm-6 col-xs-6">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div className="col-sm-6 col-xs-6">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="Business Name"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="United states (US)"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="House number and street name"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="Apartment, suite, unit, etc. (Optional)"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="City"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="Sans Fransisco"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="text"
                                        className="common-input border-gray-100"
                                        placeholder="Post Code"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="number"
                                        className="common-input border-gray-100"
                                        placeholder="Phone"
                                    />
                                </div>
                                <div className="col-12">
                                    <input
                                        type="email"
                                        className="common-input border-gray-100"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="col-12">
                                    <div className="my-40">
                                        <h6 className="text-lg mb-24">Additional Information</h6>
                                        <input
                                            type="text"
                                            className="common-input border-gray-100"
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                        />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-xl-3 col-lg-4">
                        <div className="checkout-sidebar">
                            <div className="bg-color-three rounded-8 p-24 text-center">
                                <span className="text-gray-900 text-xl fw-semibold">
                                    Your Orders
                                </span>
                            </div>
                            <div className="border border-gray-100 rounded-8 px-24 py-40 mt-24">
                                <div className="mb-32 pb-32 border-bottom border-gray-100 flex-between gap-8">
                                    <span className="text-gray-900 fw-medium text-xl font-heading-two">
                                        Product
                                    </span>
                                    <span className="text-gray-900 fw-medium text-xl font-heading-two">
                                        Subtotal
                                    </span>
                                </div>
                                <div className="flex-between gap-24 mb-32">
                                    <div className="flex-align gap-12">
                                        <span className="text-gray-900 fw-normal text-md font-heading-two w-144">
                                            HP Chromebook With Intel Celeron
                                        </span>
                                        <span className="text-gray-900 fw-normal text-md font-heading-two">
                                            <i className="ph-bold ph-x" />
                                        </span>
                                        <span className="text-gray-900 fw-semibold text-md font-heading-two">
                                            1
                                        </span>
                                    </div>
                                    <span className="text-gray-900 fw-bold text-md font-heading-two">
                                        $250.00
                                    </span>
                                </div>
                                <div className="flex-between gap-24 mb-32">
                                    <div className="flex-align gap-12">
                                        <span className="text-gray-900 fw-normal text-md font-heading-two w-144">
                                            HP Chromebook With Intel Celeron
                                        </span>
                                        <span className="text-gray-900 fw-normal text-md font-heading-two">
                                            <i className="ph-bold ph-x" />
                                        </span>
                                        <span className="text-gray-900 fw-semibold text-md font-heading-two">
                                            1
                                        </span>
                                    </div>
                                    <span className="text-gray-900 fw-bold text-md font-heading-two">
                                        $250.00
                                    </span>
                                </div>
                                <div className="flex-between gap-24 mb-32">
                                    <div className="flex-align gap-12">
                                        <span className="text-gray-900 fw-normal text-md font-heading-two w-144">
                                            HP Chromebook With Intel Celeron
                                        </span>
                                        <span className="text-gray-900 fw-normal text-md font-heading-two">
                                            <i className="ph-bold ph-x" />
                                        </span>
                                        <span className="text-gray-900 fw-semibold text-md font-heading-two">
                                            1
                                        </span>
                                    </div>
                                    <span className="text-gray-900 fw-bold text-md font-heading-two">
                                        $250.00
                                    </span>
                                </div>
                                <div className="flex-between gap-24 mb-32">
                                    <div className="flex-align gap-12">
                                        <span className="text-gray-900 fw-normal text-md font-heading-two w-144">
                                            HP Chromebook With Intel Celeron
                                        </span>
                                        <span className="text-gray-900 fw-normal text-md font-heading-two">
                                            <i className="ph-bold ph-x" />
                                        </span>
                                        <span className="text-gray-900 fw-semibold text-md font-heading-two">
                                            1
                                        </span>
                                    </div>
                                    <span className="text-gray-900 fw-bold text-md font-heading-two">
                                        $250.00
                                    </span>
                                </div>
                                <div className="border-top border-gray-100 pt-30  mt-30">
                                    <div className="mb-32 flex-between gap-8">
                                        <span className="text-gray-900 font-heading-two text-xl fw-semibold">
                                            Subtotal
                                        </span>
                                        <span className="text-gray-900 font-heading-two text-md fw-bold">
                                            $859.00
                                        </span>
                                    </div>
                                    <div className="mb-0 flex-between gap-8">
                                        <span className="text-gray-900 font-heading-two text-xl fw-semibold">
                                            Total
                                        </span>
                                        <span className="text-gray-900 font-heading-two text-md fw-bold">
                                            $859.00
                                        </span>
                                    </div>
                                </div>
                            </div>
                           
                       
                            <Link
                                to="/checkout"
                                className="btn btn-main mt-40 py-18 w-100 rounded-8 mt-56"
                            >
                                Place Order
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Checkout