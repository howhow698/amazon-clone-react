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
    case "REMOVE_FROM_CART":
      const index = state.cartList.findIndex((item) => item.id === action.id);
      let newCartList = [...state.cartList];

      if (index >= 0) {
        newCartList.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as its not in shopping cart.`);
      }

      return {...state, cartList: newCartList};

    default:
      return state;
  }
}

export default reducer; 
