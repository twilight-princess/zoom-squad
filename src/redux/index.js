import { createStore, applyMiddleware } from "redux";
import axios from "axios";
import thunk from "redux-thunk";
import noPic from '../No-picture.jpg'

const initialState = {
  user: "",
  pets: [],
  authenticated: false,
  loading: false,
  dogs: []
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
    case "SEARCH_DOGS":
      return {
        ...prevState,
        dogs: action.dogs,
        loading: false
      }
    case "SAVE_DOG":
    return {
      ...prevState,
      dogs: action.dogs,
      loading: false
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

export const searchDogs = (...args) => {
  let url = "https://vschool-cors.herokuapp.com?url=http://api.petfinder.com/pet.find?key=b2d01f997b5d0d9a277ff943820a934c&animal=dog&format=json"
  if (args) {
    args.map(arg => {
      return url += "&" + arg.name + "=" + arg.value
    })
  }
  return dispatch => {
    store.dispatch({type: "START_LOADING"})
    axios.get(url)
      .then(response => {
        let Dog = response.data.petfinder.pets.pet 
        let pets = []
        if (Dog.length > 0) {
          console.log(Dog) 
          for (let i = 0; i < Dog.length; i++) {
            pets.push({
              id: Dog[i].id.$t,
              name:Dog[i].name.$t,
              breed: Dog[i].breeds.breed.$t,
              age: Dog[i].age.$t,
              image: Dog[i].media.photos ? Dog[i].media.photos.photo[2].$t : noPic,
              description: Dog[i].description.$t,
              city: Dog[i].contact.city.$t,
              email: Dog[i].contact.email.$t,
              options: Dog[i].options && Dog[i].options.option ? Dog[i].options.option.$t : ''
            })
          }
        }
        store.dispatch({
          type: "SEARCH_DOGS", 
          dogs: pets
        })
      })
  }
}

export const saveDog = (Dog) => {
  console.log(Dog)
  return dispatch => {
    store.dispatch({type: "START_LOADING"})
    Dog = {
      id: Dog.id.$t,
      name: Dog.name.$t,
    }
    axios.post('http://localhost:8080/dogs/', Dog)
      .then(response => {
        console.log(response)
        if (response) {
          store.dispatch({
            type: "SAVE_DOG",
            dog: response.data.dogs 
          })
        }
      })  
    
  }
}

export default store;