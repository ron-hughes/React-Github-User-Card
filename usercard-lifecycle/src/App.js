import React, { Component } from "react";
import axios from 'axios';
import UserCard from './components/UserCard'

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  async componentDidMount() {
    await axios.get("https://api.github.com/users/ron-hughes")
    .then( response => { this.setState( response.data )})
    .catch( error => { console.log("error", error)})
  }
  
  render() {
    return <div className="App">
    
        <UserCard data={this.state}/>
    </div>;
  }
}

export default App;
