import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.css';

const Navigation =(props) => {
    return (
        <ul className = {classes.listStyle}>
            <li >
                <a className = {classes.active} href = "/">Home</a>
            </li>
            <li>
               { props.isAuth?<NavLink to = "/logout">Logout</NavLink>:<NavLink to = "/auth">Login</NavLink>}
            </li>
        </ul>
    )
}
const mapStateToProps = state =>{
    return {
        isAuth: state.auth.token !==null,
    }
}
export default connect(mapStateToProps,null) (Navigation);
