import React from 'react';
import styled from 'styled-components';

const UserDiv = styled.div`
background-color: royalblue;
width: 350px;
height: 600px;
margin: 0 auto;
color: white;
li {
    text-align: left;
    font-size: 1.2rem;
}
`
class UserCard extends React.Component {
constructor(props){
    super(props)
    this.state = {

        inputText: " ",

    }
    

}

changeHandler = async event => {
    await this.setState({ inputText: event.target.value})
}
submitHandler = async event => {
    event.preventDefault();
    this.props.fetch(this.state.inputText)
    this.setState({inputText: ""})
}

    render() {
        return(
            <>
               <UserDiv>
            
               <img src={this.props.data.avatar_url} height="350px" width="350px" />
               <li>Username: {this.props.data.login}</li>
                <li>Full Name: {this.props.data.name}</li> 
               <li>Followers: {this.props.data.followers}</li>
    
               <form onSubmit={this.submitHandler}>
               <input type="text" onChange={this.changeHandler} name="inputText" value={this.state.inputText}/>
                    <button type="submit"> Search </button>
               </form>
    
             
            
               </UserDiv>
            </>
        )

    }
 

}

export default UserCard