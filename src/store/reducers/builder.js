import { ADD_INGREDIENT, REMOVE_INGREDIENT, SET_INGREDIENTS } from "../actions/types";


const initialState = {
    ingredients: {
    },
    price:0,
};
const prices = {
    americano: 50,
    cappuccino: 55,
    coldcoffe: 45,
    latte: 60,
    smooth: 65,
    strcoffe: 70
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
            return { ...action.data };

        default:
            break;
    }

    return newState;
}

export default builder;
