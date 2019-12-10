import React from 'react';
import styled from 'styled-components';

const UserCard = (props) => {

const UserDiv = styled.div`
background-color: black;
width: 500px;
height: 500px;
margin: 0 auto;
color: white;
`

    return(
        <>
           <UserDiv>
            

            <li>Name: {props.data.name}</li> 
           <li>Followers: {props.data.followers}</li>

           <img src={props.data.avatar_url} />
        
           </UserDiv>
        </>
    )

}

export default UserCard