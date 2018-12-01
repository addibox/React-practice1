import React from 'react';
import './UserInput.css';

const UserInput = (props) => {
    return (      
        <input className="UserInput" 
            type="text" 
            value={props.userName} 
            onChange={props.entered}></input>
    )
}

export default UserInput;