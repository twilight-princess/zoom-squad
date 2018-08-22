import React, { Component } from "react";
import Navbar from './Navbar';  
import axios from 'axios'
import { connect } from "react-redux"
import { Switch, Route, Link, withRouter } from "react-router-dom";

const mapStateToProps = state => {
    return {dogs: state.dogs}
}

class Dogs extends Component {  
    constructor(props) {
        super(props);
        this.state = {
            Dogs: [],
            dogs: []
        };
    }
    
    render() {
        // {this.props.Dog.length ?}
        const dogList = this.props.dogs.map( (Dog, i)  =>{
            return(
                <div className="box1" key={i}><div className='text1'>{Dog.name} | {Dog.age}<Link to={`/Dogs/${Dog.id}`}><img className="dog1" src={Dog.image}/></Link>
                </div></div>
            )
        }) 
        return(
        <div>
            <div className="results">{this.props.dogs.length} (breed) found between the ages of (min age) and (max age)</div>
            {console.log("state: ", this.state)}
            {console.log("props: ", this.props)}
            <div className="dogGrid">
                {/* <div className="box1"><div className="text1">Penny | 3 years<Link to="{/Dogs/${Dog.id.$t}}"><img className="dog1" src="https://www.what-dog.net/Images/faces2/scroll001.jpg"/></Link></div></div> */}
                {dogList}
            </div>
        </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Dogs))