const redux = require("redux");
const createStore = redux.createStore;

const BUY_COFFEE = "BUY_COFFEE";
const RETURN_COFFEE = "RETURN_COFFEE";

function returnCoffee() {
  return {
    type: RETURN_COFFEE,
    info: "placeholder",
  };
}
function buyCoffee() {
  return {
    type: BUY_COFFEE,
    info: "First Redux Action",
  };
}

const initialState = {
  numberOfCoffee: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_COFFEE:
      return {
        ...state,
        numberOfCoffee: state.numberOfCoffee - 1,
      };
    case RETURN_COFFEE:
      return {
        ...state,
        numberOfCoffee: state.numberOfCoffee + 1,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("Initial State" + JSON.stringify(store.getState()));
store.subscribe(() =>
  console.log("x " + JSON.stringify(store.getState()))
);
store.dispatch(buyCoffee());
store.dispatch(buyCoffee());
store.dispatch(buyCoffee());

store.dispatch(buyCoffee());
store.dispatch(returnCoffee());
store.dispatch(returnCoffee());
