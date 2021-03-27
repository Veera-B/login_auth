import React from 'react';
import Axer from '../Auxer/Auxer';
import Toolbar from '../../components/Toolbar/Tollbar';

const Laout = (props) =>{
    return (
        <Axer>
            <Toolbar />
            <main>{props.children}</main>
        </Axer>
    )
}

export default Laout;
