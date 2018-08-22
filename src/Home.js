import React from "react";
import Navbar from './Navbar';  
import SearchForm from './SearchForm'
import Dogs from './Dogs'

function Home () {  
    return (
        <div>
            <SearchForm />
            <Dogs />
        </div>
    )
}

export default Home;
