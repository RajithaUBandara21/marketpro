import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactSlider from 'react-slider'

const ShopSection = () => {

    let [grid, setGrid] = useState(false)

    let [active, setActive] = useState(false)
    let sidebarController = () => {
        setActive(!active)
    }




    return (
        <section className="shop py-80">
            <div className={`side-overlay ${active && "show"}`}></div>
            <div className="container container-lg">
                <div className="row">
                   
                    {/* Content Start */}
                    <div className="col-lg">
                        {/* Top Start */}
                        <div className="flex-between gap-16 flex-wrap mb-20 ">
                           
                            <div className="position-relative flex-align gap-16 flex-wrap">
                                <div className="list-grid-btns flex-align gap-16">
                                    <button onClick={() => setGrid(true)}
                                        type="button"
                                        className={`w-44 h-44 flex-center border rounded-6 text-2xl list-btn border-gray-100 ${grid === true && "border-main-600 text-white bg-main-600"}`}
                                    >
                                        <i className="ph-bold ph-list-dashes" />
                                    </button>
                                    <button onClick={() => setGrid(false)}
                                        type="button"
                                        className={`w-44 h-44 flex-center border rounded-6 text-2xl grid-btn border-gray-100 ${grid === false && "border-main-600 text-white bg-main-600"}`}
                                    >
                                        <i className="ph ph-squares-four" />
                                    </button>
                                </div>
                               
                                <button onClick={sidebarController}
                                    type="button"
                                    className="w-44 h-44 d-lg-none d-flex flex-center border border-gray-100 rounded-6 text-2xl sidebar-btn"
                                >
                                    <i className="ph-bold ph-funnel" />
                                </button>
                            </div>
                        </div>
                        {/* Top End */}
                        <div className={`list-grid-wrapper ${grid && "list-view"}`}>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/thumbs/product-two-img1.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Best Sale{" "}
                                    </span>
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/thumbs/product-two-img2.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/thumbs/product-two-img3.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Sale 50%{" "}
                                    </span>
                                    <img
                                        src="assets/images/thumbs/product-two-img4.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/thumbs/product-two-img5.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/thumbs/product-two-img6.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/thumbs/product-two-img7.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/thumbs/product-two-img8.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Sale 50%{" "}
                                    </span>
                                    <img
                                        src="assets/images/thumbs/product-two-img9.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/thumbs/product-two-img10.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/thumbs/product-two-img11.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        New
                                    </span>
                                    <img
                                        src="assets/images/thumbs/product-two-img12.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/thumbs/product-two-img13.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/thumbs/product-two-img14.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Best Sale{" "}
                                    </span>
                                    <img
                                        src="assets/images/thumbs/product-two-img15.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <span className="product-card__badge bg-warning-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        New
                                    </span>
                                    <img
                                        src="assets/images/thumbs/product-two-img15.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/thumbs/product-two-img1.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                    <span className="product-card__badge bg-primary-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Best Sale{" "}
                                    </span>
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/thumbs/product-two-img2.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <img
                                        src="assets/images/thumbs/product-two-img3.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                            <div className="product-card h-100 p-16 border border-gray-100 hover-border-main-600 rounded-16 position-relative transition-2">
                                <Link
                                    to="/product-details-two"
                                    className="product-card__thumb flex-center rounded-8 bg-gray-50 position-relative"
                                >
                                    <span className="product-card__badge bg-danger-600 px-8 py-4 text-sm text-white position-absolute inset-inline-start-0 inset-block-start-0">
                                        Sale 50%{" "}
                                    </span>
                                    <img
                                        src="assets/images/thumbs/product-two-img4.png"
                                        alt=""
                                        className="w-auto max-w-unset"
                                    />
                                </Link>
                                <div className="product-card__content mt-16">
                                    <h6 className="title text-lg fw-semibold mt-12 mb-8">
                                        <Link
                                            to="/product-details-two"
                                            className="link text-line-2"
                                            tabIndex={0}
                                        >
                                            Taylor Farms Broccoli Florets Vegetables
                                        </Link>
                                    </h6>
                                    <div className="flex-align mb-20 mt-16 gap-6">
                                        <span className="text-xs fw-medium text-gray-500">4.8</span>
                                        <span className="text-15 fw-medium text-warning-600 d-flex">
                                            <i className="ph-fill ph-star" />
                                        </span>
                                        <span className="text-xs fw-medium text-gray-500">(17k)</span>
                                    </div>
                                    <div className="mt-8">
                                        <div
                                            className="progress w-100 bg-color-three rounded-pill h-4"
                                            role="progressbar"
                                            aria-label="Basic example"
                                            aria-valuenow={35}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        >
                                            <div
                                                className="progress-bar bg-main-two-600 rounded-pill"
                                                style={{ width: "35%" }}
                                            />
                                        </div>
                                        <span className="text-gray-900 text-xs fw-medium mt-8">
                                            Sold: 18/35
                                        </span>
                                    </div>
                                    <div className="product-card__price my-20">
                                        <span className="text-gray-400 text-md fw-semibold text-decoration-line-through">
                                            $28.99
                                        </span>
                                        <span className="text-heading text-md fw-semibold ">
                                            $14.99 <span className="text-gray-500 fw-normal">/Qty</span>{" "}
                                        </span>
                                    </div>
                                    <Link
                                        to="/cart"
                                        className="product-card__cart btn bg-gray-50 text-heading hover-bg-main-600 hover-text-white py-11 px-24 rounded-8 flex-center gap-8 fw-medium"
                                        tabIndex={0}
                                    >
                                        Add To Cart <i className="ph ph-shopping-cart" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Pagination Start */}
                        <ul className="pagination flex-center flex-wrap gap-16">
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    <i className="ph-bold ph-arrow-left" />
                                </Link>
                            </li>
                            <li className="page-item active">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    01
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    02
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    03
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    04
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    05
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    06
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-md rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    07
                                </Link>
                            </li>
                            <li className="page-item">
                                <Link
                                    className="page-link h-64 w-64 flex-center text-xxl rounded-8 fw-medium text-neutral-600 border border-gray-100"
                                    to="#"
                                >
                                    <i className="ph-bold ph-arrow-right" />
                                </Link>
                            </li>
                        </ul>
                        {/* Pagination End */}
                    </div>
                    {/* Content End */}
                </div>
            </div>
        </section>

    )
}

export default ShopSection