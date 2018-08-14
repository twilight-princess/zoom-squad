import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";

const initialState = {
  user: "",
  pets: [],
  authenticated: false,
  loading: false
}

const reducer = (prevState = initialState, action) => {
  switch (action.type) {
    case "START_LOADING":
      return {
        ...prevState,
        loading: true
      }
    case "CREATE_USER":
      return {
        ...prevState,
        username: "",
        pets: [],
        loading: false
      }
    case "AUTHENTICATE":
      return {
        // I don't remember
        prevState
      }
    default:
      return prevState
  }
}

const store = createStore(reducer, applyMiddleware(thunk));
store.subscribe(() => console.log(store.getState()));

export const isLoading = () => {
  return dispatch => {
    store.dispatch({
      type: "START_LOADING"
    })
  }
}

export const createUser = (username) => {
  return dispatch => {
      store.dispatch({
          type: "CREATE_USER"
      })
  }
}

export const createUser = (username, password) => {
  return dispatch => {
      store.dispatch({
          type: "AUTHENTICATE"
      })
  }
}

export default store;