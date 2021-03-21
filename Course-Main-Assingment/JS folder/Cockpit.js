import  React, { useEffect, useRef } from "react";

import classes from "./Cockpit.css";
import AuthContext from '../../context/auth-context';


const cockpit = props => {

    const toggelBtnRef = useRef(null);

    useEffect(() => {
        toggelBtnRef.current.click();
    }, []);

    const assignedClasses = [];

    let btnClass = '';

    if(props.showPersons){
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }


    return (
        <div className = {classes.Cockpit}>
            <h1>Hi, I'm a React App</h1>
             <p className={assignedClasses.join(' ')}>This is really working!</p>
             <button ref={toggelBtnRef} className={btnClass} onClick={props.clicked}>
            Toggle Persons
             </button>
             <AuthContext.Consumer>
                 {context => <button onClick={context.login}> Log In </button>}
             
             </AuthContext.Consumer>
        </div>
    )
}

export default  cockpit;
