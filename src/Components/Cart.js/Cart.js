import React, { useEffect, useState } from "react";
import "./Cart.css";
import axios from "axios";
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

const Cart = () => {
  const [showModal, setShowModal] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState([]);
  // To Calculate Total amount :
  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = data.reduce(
        (acc, curr) => acc + Number(curr.price),
        0
      );
      setTotal(totalPrice);
    };
    calculateTotal();
  }, [data]);

  const userEmail = localStorage
    .getItem("email")
    .replace("@", "")
    .replace(".", "");

  const fetchCartItems = async () => {
    try {
      const response = await axios.get(
        `https://crudcrud.com/api/0a59d8d3fa20479eb0f488fdd84f6474/${userEmail}`
      );
      console.log(response);

      setData(response.data);
    } catch (error) {
      console.log("error:", error);
    }
  };
  useEffect(() => {
    fetchCartItems();
  }, [showModal]);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Purchase Handler :
  const handlePurchase = () => {
    if (data.length > 0) {
      setShowAlert(true);
    }
  };

  // To Remove Data from CartItems:
  const RemoveItem = async (id) => {
    const res = await axios.delete(
      `https://crudcrud.com/api/0a59d8d3fa20479eb0f488fdd84f6474/${userEmail}/${id}`
    );
    fetchCartItems();
    console.log(res);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleOpenModal}
        style={{ fontFamily: "Merriweather" }}
      >
        Cart <Badge bg="danger"></Badge>
      </Button>

      <Modal show={showModal} onHide={handleCloseModal} className="modal">
        <Modal.Header closeButton>
          <Modal.Title style={{ fontFamily: "Merriweather" }}>
            CART ITEMS ADDED : Total CartItems = {data.length}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBbody">
          {data.length > 0 ? (
            <>
              {data.map((prod) => (
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
                          onClick={() => RemoveItem(prod._id)}
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
          <span style={{ fontFamily: "Merriweather" }}>
            Total AMOUNT OF CART ITEMS: {total}
          </span>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          {showAlert && (
            <Alert
              style={{ fontFamily: "Merriweather" }}
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
