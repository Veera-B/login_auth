
import React,{Component}from 'react';
import classes from './Auth.module.css';
import {connect} from 'react-redux';
import Auth from '../../components/Auth/Auth';
import * as actions from '../../store/actions/actions';
class AuthContainer extends Component{
    state = {
        email: null,
        password: null
    }
   
    onInputChange =(e)=>{
       // console.log(e.target.value);
        this.setState(
            {
                [e.target.name]:e.target.value
            });
    }
    onSubmitForm = e =>{
       // console.log(this.state);
        e.preventDefault();
       this.props.onAuthenticate(this.state.email,this.state.password);
       this.props.history.push('/');
       //console.log(this.props)
    }
    render(){
        console.log(this.props.isAuthenticated)
    return (
        <div className ={classes.Auth}>
            <div >
                <form className =  {classes.Form} onSubmit = {(e)=>this.onSubmitForm(e)}>
                    <Auth {...this.state} change = {this.onInputChange}/>
                    <div><button type = "submit" className = {`btn btn-primary ${classes.formBtn}`}>Login</button></div>
                </form>
            </div>
        </div>
    )}
}
const mapStateToProps = state =>{
    return{
        isAuthenticated: state.auth.token !==null,
    }
}
const mapDispatchToProps = dispatch =>{
    return{
        onAuthenticate:(email,password) => dispatch(actions.authentication(email,password))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(AuthContainer);
