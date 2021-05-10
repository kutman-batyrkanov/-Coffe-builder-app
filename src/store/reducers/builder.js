import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS,
} from "../actions/types";

const initialState = {
  ingredients: {
    americano: 1,
    cappuccino: 1,
    latte: 1,
    smooth: 1,
    strcoffe: 1,
    coldcoffe: 1,
  },
  price: 200,
};
const prices = {
  americano: 50,
  cappuccino: 70,
};

const builder = (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    case ADD_INGREDIENT:
      newState.ingredients[action.ingredient]++;
      newState.price += prices[action.ingredient];
      break;
    case REMOVE_INGREDIENT:
      newState.ingredients[action.ingredient]--;
      newState.price -= prices[action.ingredient];
      break;
    case SET_INGREDIENTS:
      newState.ingredients = action.data.ingredients;
      newState.price = action.data.price;
      break;
    default:
      break;
  }
  return newState;
};

export default builder;
