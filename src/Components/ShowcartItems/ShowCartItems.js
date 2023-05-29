import React, { useEffect, useState } from "react";
import { ListGroupItem, Row, Col, Image } from "react-bootstrap";

import { CartState } from "../Store/Context";
const ShowCartItems = () => {
  const [cartt, setcart] = useState("");

  useEffect(() => {
    const getItem = JSON.parse(localStorage.getItem("cartItem"));
    console.log(getItem);
  });
  return <div></div>;
};

export default ShowCartItems;
