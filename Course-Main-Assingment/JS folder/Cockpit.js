import  React, { useEffect } from "react";

import classes from "./Cockpit.css";

const cockpit = (prope) => {

    useEffect(() => {
        
        setTimeout(() => {
            alert('hi there')
        }, 1000);
    }, []);

    const assignedClasses = [];

    let btnClass = '';

    if(prope.showPersons){
        btnClass = classes.Red;
    }

    if (prope.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (prope.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }


    return (
        <div className = {classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
             <p className={assignedClasses.join(' ')}>This is really working!</p>
             <button className={btnClass} onClick={prope.clicked}>
            Toggle Persons
             </button>
        </div>
    )
}

export default  cockpit;