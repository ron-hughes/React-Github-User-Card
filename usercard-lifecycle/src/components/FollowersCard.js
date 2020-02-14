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
    const Div = styled.div`
        border: 20px solid #ff6550;
        margin: 0 auto;
        display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `
    const divStyle = {
        border: '20px solid #ff6550',
        margin: '2px',
        margin: '2px auto'
    }

return(
<>

<FollowersDiv>
    
    <Div>
    {props.followerdata.map((name) => { 
    return <div style={divStyle}><img src={name.avatar_url}></img></div>
    })}
    </Div>
   
  
</FollowersDiv>
</>
)
}

export default Followers
