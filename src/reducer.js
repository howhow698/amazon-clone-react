export const initialState = {
  cartList: []
}

// selector
export const getCartListTotal = (cartList) => {
  return cartList?.reduce((amount, item) => item.price + amount, 0);
}

const reducer = (state, action) => {
  switch(action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartList: [...state.cartList, action.item],
      }

    default:
      return state;
  }
}

export default reducer; 
