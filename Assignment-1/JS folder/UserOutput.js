
import React from 'react';
import './UserOutput.css';

const UserOutput = (prope) => {
    return (
    <div  className="UserOutputContainer">
       <h2>This Is What You Wroth</h2>
       <p>{prope.name}</p>

    </div>
    )
}

export default UserOutput;