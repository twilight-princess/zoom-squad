
import Navbar from './Navbar';  
import React, { Component } from 'react'
import axios from 'axios'
import noPic from './No-picture.jpg'
import { saveDog } from './redux'


export default class Dog extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    componentDidMount(){
        axios.get(`https://vschool-cors.herokuapp.com?url=http://api.petfinder.com/pet.get?key=b2d01f997b5d0d9a277ff943820a934c&id=${this.props.match.params.id}&format=json`)
        .then(response =>{
            this.setState({Dog: response.data.petfinder.pet})
        }).catch(function (err) {
            console.log(err)
        })
    }
    render(){
        const Dog = this.state.Dog
        const dogPic = (Dog !== undefined && Dog.media.photos !== undefined && Dog.media.photos.photo[2].$t !== undefined ? Dog.media.photos.photo[2].$t : noPic)
        return(
            <div className="results">
                {Dog &&
                    <div className="moreInfo">
                        <h1>{Dog.name.$t}</h1>
                        <br />
                        <img className="dog2" src={dogPic} />
                        <br />
                        <h1>{Dog.breeds.breed.$t}</h1>
                        <h1>{Dog.age.$t} {Dog.sex.$t} {Dog.options.option ? Dog.options.option.map(option => (<span key={option.$t}> | {option.$t}</span>)) : ""}</h1>
                        <h2>{Dog.description.$t}</h2>
                        <h2>{Dog.contact.city.$t}</h2>
                        <h2>{Dog.contact.email.$t}</h2>
                        <button onClick={saveDog(Dog)}>Save for later</button>
                    </div>
                }
            </div>
        )
    }
}

