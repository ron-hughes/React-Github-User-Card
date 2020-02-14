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

  fetchFollowers = () => {
    axios.get('https://api.github.com/users/ron-hughes/followers')
    .then( followers => { this.setState({ followers : followers.data}) })
    .catch( error => {})
  }

  async componentDidMount() {
    await axios.get("https://api.github.com/users/ron-hughes")
    .then( user => { this.setState( { user :user.data})})
    .catch( error => { console.log("error", error)})
    this.fetchFollowers();
  }
  
  render() {
    return <div className="App">
        <UserCard data={this.state.user} /><br />
        <Followers followerdata={this.state.followers} />
    </div>;
  }
}

export default App;
