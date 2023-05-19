import React from "react";
import "./ProductList.css";
import { CartState } from "../Store/Context";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Productlist = () => {
  const { state } = CartState();

  return (
    <div className="Grid">
      <Row xs={1} md={2} className="g-4">
        {state.products.map((product, index) => (
          <Col key={index}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={product.imageUrl} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.price}</Card.Text>
                <Button variant="primary">ADD TO CART</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Productlist;
