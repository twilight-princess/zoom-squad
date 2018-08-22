import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { searchDogs } from './redux'
import axios from 'axios'


class SearchForm extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            location: '',
            name: '', 
            breeds: [], 
            sex: '', 
            age: '', 
            description: '',
            contactCity: '',
            contactEmail: '',
            breed: '',
            size: '',
            loggedIn: false }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    componentDidMount() {
        axios.get(`https://vschool-cors.herokuapp.com?url=http://api.petfinder.com/breed.list?key=b2d01f997b5d0d9a277ff943820a934c&animal=dog&format=json`)
            .then(response => {
                this.setState({breeds: response.data.petfinder.breeds.breed})
            }).catch((err) => {
                console.log(err)
            })
    }
    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
    }
    showLogin() {
        this.setState({loggedIn: true})
    }
    render() {
        return (
            <div className="dogSearch">
                <form>
                    <label>Location (Zipcode or City, State):</label>
                        <input type="text" name="location" value={this.state.location} onChange={this.handleChange} placeholder="Required" />
                    <br />
                    <label>Breed:</label>
                    <select name="breed" value={this.state.breed} onChange={this.handleChange}>
                        <option value="">Any</option>
                        {this.state.breeds.map((breed, i) => <option key={breed.$t + i} value={breed.$t}>{breed.$t}</option>)}
                    </select>
                    <br />
                    <label>Age:</label>
                    <select name="age" value={this.state.age} onChange={this.handleChange}>
                        <option value="">Any</option>
                        <option value="Baby">Baby</option>
                        <option value="Young">Young</option>
                        <option value="Adult">Adult</option>
                        <option value="Senior">Senior</option>
                    </select>
                    <label>Size:</label>
                    <select name="size" value={this.state.size} onChange={this.handleChange}>
                        <option value="">Any</option>
                        <option value="S">Small</option>
                        <option value="M">Medium</option>
                        <option value="L">Large</option>
                        <option value="XL">Extra Large</option>
                    </select>
                    <label>Sex:</label>
                    <select name="sex" value={this.state.sex} onChange={this.handleChange}>
                        <option value="F">Female</option>
                        <option value="M">Male</option>
                    </select>
                </form>
                <button id="search-button" onClick={searchDogs({name: "location", value: this.state.location}, {name:"breed", value: this.state.breed}, {name:"age", value: this.state.age}, {name:"size", value: this.state.size}, {name:"sex", value: this.state.sex})}>Find A Doggie!</button>
                <br />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchDogs: search => {
            dispatch(searchDogs(search))
        }
    }
}

export default withRouter(connect(prevState => prevState, mapDispatchToProps)(SearchForm))