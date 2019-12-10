import React from 'react';
import styled from 'styled-components';

const UserCard = (props) => {

const UserDiv = styled.div`
background-color: black;
width: 500px;
height: 500px;
margin: 0 auto;
color: white;
li {
    text-align: left;
}
`

    return(
        <>
           <UserDiv>
           <img src={props.data.avatar_url} height="350px" width="350px" />
           <li>Username: {props.data.login}</li>
            <li>Full Name: {props.data.name}</li> 
           <li>Followers: {props.data.followers}</li>

         
        
           </UserDiv>
        </>
    )

}

export default UserCard