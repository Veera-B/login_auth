import React, { Component } from 'react'
const  AsyncComponent = (importingComponent) => {

    return class extends Component{
        state = {
            component: null,
        }
        componentDidMount(){
            importingComponent.then(cmpt=>{
                this.setState({component: cmpt})
            })
        }
        render(){
            const Cmpt = this.state.component;
            return Cmpt?<Cmpt {...this.props} />:null;
        }
    }
}

export default AsyncComponent
