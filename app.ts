import { legacy_createStore as createStore } from "redux";
const initState = 0;

//Reducer
function reducer(state = initState, action: any) {
  switch (action.type) {
    case "DEPOSIT":
      return state + action.payload;
    case "WITHDRAW":
      return state - action.payload;
    default:
      return state;
  }
}

//Store
declare global {
  interface Window {
    store: any;
  }
}

const store = (window.store = createStore(reducer));
//Action
function actionDeposit(payload: number) {
  return {
    type: "DEPOSIT",
    payload,
  };
}

function actionWithdraw(payload: number) {
  return {
    type: "WITHDRAW",
    payload,
  };
}

// DOM events
const withdraw = document.querySelector("#withdraw") as HTMLButtonElement;
const deposit = document.querySelector("#deposit") as HTMLButtonElement;

//Event Handler
deposit.onclick = function () {
  console.log(store.getState());
  store.dispatch(actionDeposit(10));
};

withdraw.onclick = function () {
  store.dispatch(actionWithdraw(10));
};

function render() {
  const output = document.querySelector("#output") as HTMLOutputElement;
  output.innerHTML = String(store.getState());
}

render();

export default {};
