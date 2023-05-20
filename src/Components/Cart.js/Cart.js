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
  Alert,
} from "react-bootstrap";
import { CartState } from "../Store/Context";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  //   To show Modal :
  const [showModal, setShowModal] = useState(false);
  // Purchase Handler :To show alert message inside that modal:
  const [showAlert, setShowAlert] = useState(false);

  const [total, setTotal] = useState(0);

  //useEffect hook is used to calculate the total amount of the cart items after the component re-renders
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

  // Purchase Handler :
  const handlePurchase = () => {
    if (cart.length > 0) {
      setShowAlert(true);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleOpenModal}>
        Cart <Badge bg="danger">{cart.length}</Badge>
      </Button>
      <Modal show={showModal} onHide={handleCloseModal} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>CART ITEMS ADDED </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBbody">
          {cart.length > 0 ? (
            <>
              {cart.map((prod) => (
                <ListGroupItem key={prod.id} className="cartItem">
                  <Row className="align-items-center">
                    <Col md={4}>
                      <label style={{ fontWeight: "bold" }}>TITLE :</label>
                      <span>{prod.title}</span>
                    </Col>
                    <Col md={2}>
                      <label style={{ fontWeight: "bold" }}>Price :</label>
                      <span>{prod.price}</span>
                    </Col>
                    <Col md={2}>
                      <Image
                        src={prod.imageUrl}
                        className="cartItemImage"
                        fluid
                        rounded
                      />
                    </Col>
                    <Col md={2}>
                      <div className="button">
                        <button
                          type="button"
                          onClick={() =>
                            dispatch({
                              type: "REMOVE_FROM_CART",
                              payload: prod,
                            })
                          }
                          className="remove-button"
                        >
                          Remove
                        </button>
                      </div>
                    </Col>
                  </Row>
                </ListGroupItem>
              ))}
            </>
          ) : (
            <span className="msg">
              CART IS EMPTY !! WANT TO ADD SOMETHING ....???
            </span>
          )}
        </Modal.Body>
        <Modal.Footer>
          <span>Total AMOUNT OF CART ITEMS: {total}</span>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {showAlert && (
            <Alert
              variant="success"
              onClose={() => setShowAlert(false)}
              dismissible
            >
              Thanks for the purchase!!! Keep Visiting...
            </Alert>
          )}

          <Button variant="secondary" onClick={handlePurchase}>
            PURCHASE
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;
