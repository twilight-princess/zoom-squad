import React, { Component } from "react";
import Navbar from './Navbar';  
import axios from 'axios'
import noPic from './No-picture.jpg'
import { Switch, Route, Link } from "react-router-dom";
export default class Dogs extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            Dogs: []
        };
    }
    componentWillMount() {
        axios.get('https://vschool-cors.herokuapp.com?url=http://api.petfinder.com/pet.find?key=b2d01f997b5d0d9a277ff943820a934c&animal=dog&location=84105&format=json')
            .then(response => {
               this.setState({Dogs: response.data.petfinder.pets.pet})
            })
            .catch(function (err) {
                console.log(err)
            })
    }
    render() {
        const dogList = this.state.Dogs.map( Dog  =>{
        //    const dogPic = (Dog.media.photos.photo[2].$t !== undefined ? Dog.media.photos.photo[2].$t : noPic)
            return(
                <div className="box1" key={Dog.id.$t}><div className='text1'>{Dog.name.$t} | {Dog.age.$t}<Link to={`/Dogs/${Dog.id.$t}`}><img className="dog1" src={noPic}/></Link>
                </div></div>
            )
        }) 
        return(
        <div>
            <div className="results">(number) (breed) found between the ages of (min age) and (max age)</div>
            {console.log(this.state.Dogs)}
            <div className="dogGrid">
                <div className="box1"><div className="text1">Penny | 3 years<Link to="{/Dogs/${Dog.id.$t}}"><img className="dog1" src="https://www.what-dog.net/Images/faces2/scroll001.jpg"/></Link></div></div>
                {dogList}
            </div>
        </div>
        )}}