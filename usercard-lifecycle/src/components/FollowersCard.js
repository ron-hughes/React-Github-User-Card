import React from 'react'
import styled from 'styled-components';

const Followers = props => {

    const FollowersDiv = styled.div`
    background-color: white;
    color: white;
    display: flex;
    flex-direction: row;
    img {
        width: 300px;
        height: 300px;
    }
    `


return(
<>

<FollowersDiv>
    
    <div>
    {props.followerdata.map((name) => { 
    return <img src={name.avatar_url}></img>
    })}
    </div>
   
  
</FollowersDiv>
</>
)
}

export default Followers
