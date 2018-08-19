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
        ...prevState
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

export const authenticate = (username, password) => {
  return dispatch => {
      store.dispatch({
          type: "AUTHENTICATE"
      })
  }
}

export const findPet = (...args) => {
  let url = "http://api.petfinder.com/pet.find?key=b2d01f997b5d0d9a277ff943820a934c&format=json"
  if (args) {
    args.map(arg => {
      return url += "&" + arg.name + "=" + arg.value
    })
  }
  return dispatch => {

    axios.get(url)
      .then(response => {
        let pet = {}
        if (response.data) {
          console.log(response.data)
        }
      })
      store.dispatch({
        type: "FIND_PET", 
        pet: "pet"
      })
  }
}

export default store;