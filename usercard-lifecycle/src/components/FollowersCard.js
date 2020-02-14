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
        border: 5px solid #ff6550;
        margin: 0 auto;
        display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    `
    const divStyle = {
        border: '5px solid #ff6550',
        margin: '2px',
        margin: '2px auto',
        borderRadius: '10px'
    }

return(
<>
{/* {console.log(props.followerdata)} */}
<FollowersDiv>
    
    <Div>
    {props.followerdata.map((name) => { 
    return <div style={divStyle}><a href={name.html_url}><img src={name.avatar_url}></img></a></div>
    })}
    </Div>
   
  
</FollowersDiv>
</>
)
}

export default Followers
