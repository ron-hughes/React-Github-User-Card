import React, { Component } from "react";
import axios from 'axios';
import UserCard from './components/UserCard';
import Followers from './components/FollowersCard';

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: [

      ],
      followers: [

      ],
    };
  }

  fetchFollowers = (userName) => {
    axios.get(`https://api.github.com/users/${userName}/followers`)
    .then( followers => { this.setState({ followers : [...followers.data]}) })
    .catch( error => {})
  }

  fetchNewUser = async (userName) => {
   await axios.get(`https://api.github.com/users/${userName}`)
    .then ( newUser => { this.setState({ user: newUser.data})})
    .catch ( error => { console.log("error", error)})
    this.fetchFollowers(userName);
  }

  async componentDidMount() {
    await axios.get("https://api.github.com/users/ron-hughes")
    .then( user => { this.setState( { user :user.data})})
    .catch( error => { console.log("error", error)})
    this.fetchFollowers("ron-hughes");
  }
  
  render() {
    return <div className="App">
        <UserCard data={this.state.user} fetch={this.fetchNewUser} /><br />
        <Followers followerdata={this.state.followers} />
    </div>;
  }
}

export default App;
