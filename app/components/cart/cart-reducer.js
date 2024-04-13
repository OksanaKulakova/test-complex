export default function CartReducer(state, { type, payload }) {
  switch (type) {
    case "APPEND_ITEM":
      let newCart = null;
      const itemIndex = state.items.findIndex(
        (value) => value.id === payload.item.id
      );
      if (itemIndex < 0) {
        const newItem = {
          ...payload.item,
          quantity: payload.quantity,
        };
        newCart = [...state.items, newItem];
      } else {
        const newItem = {
          ...state.items[itemIndex],
          quantity: payload.quantity,
        };
        newCart = [...state.items];
        newCart.splice(itemIndex, 1, newItem);
      }
      return {
        ...state,
        items: newCart,
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== payload.id),
      };
    case "REMOVE_ALL_ITEM":
      return {
        ...state,
        items: [],
      };
    case "SET_ITEMS":
      return {
        ...state,
        items: [...payload.items],
      };
    default:
      return state;
  }
}
