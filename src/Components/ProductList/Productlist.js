import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
import { CartState } from "../Store/Context";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Summary from "../Summary/Summary";
import axios from "axios";
const Productlist = () => {
  const [email, setEmail] = useState("");
  const {
    state: { cart, products },
    dispatch,
  } = CartState();

  console.log(cart);

  useEffect(() => {
    const userEmail = localStorage
      .getItem("email")
      .replace("@", "")
      .replace(".", "");
    setEmail(userEmail);
  }, []);

  console.log(email);

  // Post req crudcrud :
  const handleAddToCart = async (product) => {
    try {
      const response = await axios.post(
        `https://crudcrud.com/api/0a59d8d3fa20479eb0f488fdd84f6474/${email}`,
        product
      );
      alert("product added to cart ...");
      console.log(response.data);
    } catch (error) {
      console.log("error:", error);
    }
  };

  return (
    <>
      <Summary />
      <div className="Grid">
        <Row xs={1} md={2} className="g-4">
          {products.map((product, index) => (
            <Col key={product.title}>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.imageUrl} />

                {/* Link to more details : when user click on More Details then new link open  */}
                <Link to={`/Store/${product.id}`}>
                  {console.log(product.id)}
                  More Details
                </Link>

                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>$:{product.price}</Card.Text>
                  <div className="button">
                    {cart.some((p) => p.id === product.id) ? (
                      <Button
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: product,
                          })
                        }
                        variant="danger"
                      >
                        REMOVE FROM CART
                      </Button>
                    ) : (
                      <Button
                        onClick={() => {
                          handleAddToCart(product);
                          dispatch({ type: "ADD_TO_CART", payload: product });
                        }}
                        variant="primary"
                      >
                        ADD TO CART
                      </Button>
                    )}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default Productlist;
