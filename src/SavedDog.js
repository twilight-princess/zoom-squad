
import Navbar from './Navbar';  
import React, { Component } from 'react'
import axios from 'axios'

export default class SavedDog extends Component {
    constructor(props){
        super(props)
        this.state = {
            currdog:{},
        }
    }

    componentDidMount(){
        axios.get(`https://vschool-cors.herokuapp.com?url=http://api.petfinder.com/pet.get?key=b2d01f997b5d0d9a277ff943820a934c&id=${this.props.match.params.id}&format=json`)
        .then(response =>{
            this.setState({currdog: response.data.petfinder.pet})
        }).catch(function (err) {
            console.log(err)
        })
    }
    render(){
        let doggo= () => {
            return(
                <div>
                    Hello
                </div>
            )
        }
        return(
            <div>
                {console.log(this.state.currdog.name)}
            </div>
        )
    }
}