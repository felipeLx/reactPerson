import React, { useContext } from 'react';

import classes from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const cockpit = ( props ) => {
  const authContext = useContext(AuthContext);

    console.log(authContext.authenticated);

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if ( props.persons.length <= 2 ) {
      assignedClasses.push( classes.red ); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( classes.bold ); // classes = ['red', 'bold']
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button
                className={btnClass}
                onClick={props.clicked}>
                  Toggle Persons
            </button>
            
              <button onClick={authContext.login}>
                Log in
              </button>}
            
        </div>
    );
};

export default cockpit;