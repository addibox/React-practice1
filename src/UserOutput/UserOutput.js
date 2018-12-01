import React from 'react';

const UserOutput = (props) => {
    const outputStyle = {
        border: '2px solid gray',
        padding: '10px',
        margin: '10px',
        textAlign: 'center'
    }
    return(
        <div style={outputStyle}>
            <p>{props.userName}</p>
            <p>222</p>
        </div>        
    )
}

export default UserOutput;