import React, { useEffect, useState } from "react";
import "./Cart.css";
import {
  Modal,
  Button,
  Badge,
  ListGroupItem,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import { CartState } from "../Store/Context";

const Cart = () => {
  const {
    state: { cart },
  } = CartState();
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = cart.reduce(
        (acc, curr) => acc + Number(curr.price),
        0
      );
      setTotal(totalPrice);
    };
    calculateTotal();
  }, [cart]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <Button variant="primary" onClick={handleOpenModal}>
        Cart <Badge bg="secondary">{cart.length}</Badge>
      </Button>
      <Modal show={showModal} onHide={handleCloseModal} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Cart Items</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBbody">
          {cart.length > 0 ? (
            <>
              {cart.map((prod) => (
                <ListGroupItem key={prod.id} className="cartItem">
                  <Row className="align-items-center">
                    <Col md={4}>
                      <label>TITLE :</label>
                      <span>{prod.title}</span>
                    </Col>
                    <Col md={2}>
                      <span>PRICE : {prod.price}</span>
                    </Col>
                    <Col md={2}>
                      <Image src={prod.imageUrl} className="cartItemImage" />
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </>
          ) : (
            <span className="msg">CART IS EMPTY !!</span>
          )}
        </Modal.Body>
        <Modal.Footer>
          <span>Total: {total}</span>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
