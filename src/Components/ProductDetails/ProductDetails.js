import React from "react";
import { useParams } from "react-router-dom";
import { CartState } from "../Store/Context";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { state } = CartState();
  const { id } = useParams();
  const products = state.products;

  // Find the selected product based on the id
  const selectedProduct = products.find((product) => product.id === Number(id));

  if (!selectedProduct) {
    return <h1>Product not found</h1>;
  }

  return (
    <div className="ProductDetails">
      <div className="titleandprice">
        <h1 className="title">Title : {selectedProduct.title}</h1>
        <p className="price">Price : ${selectedProduct.price}</p>
      </div>

      <img
        className="image"
        src={selectedProduct.imageUrl}
        alt={selectedProduct.title}
      />
      <div className="desReview">
        <p className="description">
          Description : {selectedProduct.Description}
        </p>
        <p className="reviews">Reviews : {selectedProduct.Reviews}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
