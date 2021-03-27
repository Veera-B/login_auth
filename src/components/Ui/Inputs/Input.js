import React from 'react';
import classes from './input.module.css';

const  Input= (props) => {
    //console.log(props);
    return (
        <div className="mb-3">
            <label for="exampleFormControlInput1"
            className={`form-label ${classes.InputLabel}`}>{props.label}</label>
            <input
                onChange = {props.change}
                name = {props.name}
                value={props.value}
                type={props.email} 
                className={`form-control ${classes.Input}`}
                id="exampleFormControlInput1"
            />
        </div>

    )
}

export default Input;
