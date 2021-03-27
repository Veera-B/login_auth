import React from 'react';
import Input from '../Ui/Inputs/Input';

const Auth = (props) =>{
    //console.log(props)
    return (
        <div>
            <Input change = {props.change} name = "email" type = "email" value = {props.email} label = "Email Address"/>
            <Input change = {props.change} name = "password" type = "password" value = {props.password} label = "Password"/>
        </div>
    )
}

export default Auth
