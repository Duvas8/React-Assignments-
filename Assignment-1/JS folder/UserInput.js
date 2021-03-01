import React from 'react';
import './UserInput.css'

const UserInput = (prope) => {
    return (
    <div  className="Input">
        <h2>Will You Writh Something?</h2>
        <input type='text' className='UserInputContainer' 
        onChange = {prope.changed} 
        value = {prope.name}></input>

    </div>
    )
}

export default UserInput;