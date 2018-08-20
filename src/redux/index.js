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
    case "FIND_PETS":
      return {
        ...prevState,
        pets: action.pets,
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

export const findPet = (...args) => {
  let url = "http://api.petfinder.com/pet.find?key=b2d01f997b5d0d9a277ff943820a934c&animal=dog&location=84105&format=json"
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
              media: Dog[i].media.photos.photo[2].$t,
              description: Dog[i].description.$t,
              city: Dog[i].contact.city.$t,
              email: Dog[i].contact.email.$t,
              options: Dog[i].optios.option.$t
            })
          }
        }
        store.dispatch({
          type: "FIND_PET", 
          pets: pets
        })
      })
  }
}

export const saveDog = (Dog) => {
  return dispatch => {
    store.dispatch({type: "START_LOADING"})
    if(store.getState().currentUser) {
      let dbUrl = 
      axios.put('/user/'+store.getState().currentUser._id, store.getState().currentUser)
    } else {
      axios.put('/user/pet'+Dog.name.$t, store.getState().Dog)
    }
      .then(response => {
        if (response) {
          store.dispatch({
            type: "SAVE_DOG",
            dogs: response.data.dogs
          })
        }
      })
    
  }
}

export default store;