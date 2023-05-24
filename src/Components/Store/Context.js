import React, { createContext, useContext, useReducer } from "react";
import { CartReducer } from "./CartReducer";

// create context
const Cart = createContext();

const Context = ({ children }) => {
  const products = [
    {
      id: 1,

      title: "fit denim jeans feature a high rise, finished hems and 5 pockets",

      price: 100,

      imageUrl:
        "https://cdn.pixabay.com/photo/2016/03/03/17/34/jeans-1234687_1280.jpg",

      Description:
        "Denim; Composition: 100% Cotton,These classic jeans are sure to give your look an instant bold edge. Team them with a cropped shirt and heels for drinks with the girls - says our inhouse stylist Shimoli Kapasi",

      Reviews:
        "Jeans is true to size..from waist and loose on thigh as expected. comfortable fit",
    },

    {
      id: 2,

      title: "Women Black Cheetah Print Design Casual Shirt",

      price: 50,

      imageUrl: "https://i.ebayimg.com/images/g/cMoAAOSwFFtgp~mw/s-l1600.png",

      Description:
        "The oversized fit style of this shirt loved by all body shapes. It's not only a shirt, but you can also wear it as a mini dress. You’ll love its cheetah print pocket which will highlight this ensemble. Recommend pairing with leggings, skinny jeans, denim shorts.",

      Reviews:
        "Jeans is true to size..from waist and loose on thigh as expected. comfortable fit",
    },

    {
      id: 3,

      title: "Men's Solid Button Down Collar Shirt",

      price: 70,

      imageUrl:
        "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/6/a/tr:w-960,/6a45f1fTBH-BUFFET-OL_1.jpg?rnd=20200526195200",

      Description:
        "Enhance your personality by wearing this elegant looking green shirt from The Bear House. This piece is crafted using breathable cotton, which features a full sleeves and button fly closure design which looks stylish and keeps you comfortable all day long. Style it up with a pair of ripped jeans and lace-up shoes to complete the look.",

      Reviews:
        "Same to same as it looks in image, Great Fit,  Loved the Brand, Speedy Delivery,  Trendy, Value for Money",
    },

    {
      id: 4,

      title: "Blue Solid Jacket",

      price: 100,

      imageUrl:
        "https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/catalog/product/a/w/tr:w-960,/aw20_jkdenim_m_pln_dnbl_1_40e44f2c.jpg?rnd=20200526195200",
      Description:
        "Freshen up your winter wardrobe with this jacket for men from Campus Sutra. This Jacket is made of polyester. Fetch a casual and cool look for yourself by teaming it with a pair of jeans and sneakers.Campus Sutra is a quirky clothing brand with a young enthusiastic heart. Each piece in our collection is created with utmost detail in print, dyeing & beautiful intricate embroideries, incorporating western styles with modern contemporary aesthetics.",

      Reviews:
        "Product is really good but the colour that given and the colour I get are not same",
    },

    {
      id: 4,

      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      Description: "",

      Reviews: "Blue Color , really nice , same as shown in the image",
    },
  ];

  // Here we set initialState to empty
  const [state, dispatch] = useReducer(CartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
  return useContext(Cart);
};
