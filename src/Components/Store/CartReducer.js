//Functionality for adding and removing product from cart.

export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // payload : who change with action type and go to reducer also  as well as chnages also.
      return { ...state, cart: [...state.cart, { ...action.payload, qty: 1 }] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.id !== action.payload.id),
      };
    default:
      return state;
  }
};
