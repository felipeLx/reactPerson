import React, { Fragment } from 'react';
import Aux from '../../../hoc/Aux';

import classes from './Person.css';

const person = props => {
  console.log('[Person.js] rendering...');
  return (
    // <Fragment>
    <Aux>
        <p onClick={props.click}>
          I'm {props.name} and I am {props.age} years old!
        </p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
    </Aux>
    // </Fragment>
  );
};

export default person;
