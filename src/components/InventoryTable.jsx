import React from 'react'
import { Link } from 'react-router-dom'

const InventoryManagement = () => {
    return (
        <section className="account py-80">
            <div className="container container-lg">
                <form action="#">
                    <div className="row gy-4">
                        {/* Product List Card Start */}
                        <div className="col-xl-6 pe-xl-5">
                            <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40 h-100">
                                <h6 className="text-xl mb-32">Product List</h6>
                                {/* Example of product list (this would ideally be dynamic) */}
                                <div className="mb-24">
                                    <table className="table table-striped">
                                        <thead>
                                            <tr>
                                                <th>Product Name</th>
                                                <th>Category</th>
                                                <th>Price</th>
                                                <th>Stock</th>
                                                <th>Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Product 1</td>
                                                <td>Electronics</td>
                                                <td>$99.99</td>
                                                <td>50</td>
                                                <td>
                                                    <button className="btn btn-sm btn-primary">Edit</button>
                                                    <button className="btn btn-sm btn-danger ms-2">Delete</button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Product 2</td>
                                                <td>Clothing</td>
                                                <td>$49.99</td>
                                                <td>100</td>
                                                <td>
                                                    <button className="btn btn-sm btn-primary">Edit</button>
                                                    <button className="btn btn-sm btn-danger ms-2">Delete</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div className="mt-48">
                                    <Link to="/add-product" className="btn btn-main py-18 px-40">
                                        Add New Product
                                    </Link>
                                </div>
                            </div>
                        </div>
                        {/* Product List Card End */}

                        {/* Add or Edit Product Card Start */}
                        <div className="col-xl-6">
                            <div className="border border-gray-100 hover-border-main-600 transition-1 rounded-16 px-24 py-40">
                                <h6 className="text-xl mb-32">Add / Edit Product</h6>

                                <div className="mb-24">
                                    <label
                                        htmlFor="productName"
                                        className="text-neutral-900 text-lg mb-8 fw-medium"
                                    >
                                        Product Name <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        className="common-input"
                                        id="productName"
                                        placeholder="Enter Product Name"
                                    />
                                </div>

                                <div className="mb-24">
                                    <label
                                        htmlFor="productCategory"
                                        className="text-neutral-900 text-lg mb-8 fw-medium"
                                    >
                                        Category <span className="text-danger">*</span>
                                    </label>
                                    <select id="productCategory" className="common-input">
                                        <option value="">Select Category</option>
                                        <option value="electronics">Electronics</option>
                                        <option value="clothing">Clothing</option>
                                        <option value="furniture">Furniture</option>
                                    </select>
                                </div>

                                <div className="mb-24">
                                    <label
                                        htmlFor="productPrice"
                                        className="text-neutral-900 text-lg mb-8 fw-medium"
                                    >
                                        Price <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="common-input"
                                        id="productPrice"
                                        placeholder="Enter Product Price"
                                    />
                                </div>

                                <div className="mb-24">
                                    <label
                                        htmlFor="productStock"
                                        className="text-neutral-900 text-lg mb-8 fw-medium"
                                    >
                                        Stock Quantity <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="number"
                                        className="common-input"
                                        id="productStock"
                                        placeholder="Enter Stock Quantity"
                                    />
                                </div>

                                <div className="mb-24">
                                    <label
                                        htmlFor="productDescription"
                                        className="text-neutral-900 text-lg mb-8 fw-medium"
                                    >
                                        Description
                                    </label>
                                    <textarea
                                        className="common-input"
                                        id="productDescription"
                                        placeholder="Enter Product Description"
                                    />
                                </div>

                                <div className="mt-48">
                                    <button type="submit" className="btn btn-main py-18 px-40">
                                        Save Product
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Add or Edit Product Card End */}
                    </div>
                </form>
            </div>
        </section>
    )
}

export default InventoryManagement
