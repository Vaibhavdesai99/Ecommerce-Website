import React from "react";

import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Instagram from "@iconscout/react-unicons/icons/uil-instagram";
import Youtube from "@iconscout/react-unicons/icons/uil-youtube";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div>The Generics</div>

      <a href="https://www.facebook.com/">
        <Facebook color="black" size="3rem" />
      </a>
      <a href="https://help.instagram.com/164895810321211">
        <Instagram color="black" size="3rem" />
      </a>
      <a href="https://www.youtube.com/">
        <Youtube color="black" size="3rem" />
      </a>
    </div>
  );
};

export default Footer;
