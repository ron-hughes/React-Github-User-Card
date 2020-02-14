import React from 'react'
import styled from 'styled-components';

const Followers = props => {

    const FollowersDiv = styled.div`
    background-color: royalblue;
    width: 450px;
    height: 400px;
    color: white;
    display: inline-flex;
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
