export const initialState = {
  cartList: []
}

// selector
export const getCartListTotal = (cartList) => {
  return cartList?.reduce((amount, item) => item.price + amount, 0);
}

export const ActionType = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_FROM_CART: "REMOVE_FROM_CART",
  SET_USER: "SET_USER"
}

const reducer = (state, action) => {
  switch(action.type) {
    case ActionType.ADD_TO_CART:
      return {
        ...state,
        cartList: [...state.cartList, action.item],
      }
    case ActionType.REMOVE_FROM_CART:
      const index = state.cartList.findIndex((item) => item.id === action.id);
      let newCartList = [...state.cartList];
      removeFromCart(index, newCartList, action);
      return {...state, cartList: newCartList};

    case ActionType.SET_USER:
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
}

function removeFromCart(index, newCartList, action) {
  if (index >= 0) {
    newCartList.splice(index, 1);
  } else {
    console.warn(`Can't remove product (id: ${action.id}) as its not in shopping cart.`);
  }
}

export default reducer; 
