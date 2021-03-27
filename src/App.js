import React, {Component} from 'react';
import { Switch ,Route,withRouter} from 'react-router-dom';
import AuthContainer from './containers/Auth/Auth';
import Logout from './containers/Auth/Logout';

import Layout from './hoc/Layout/Laout';


class App extends Component {
  render(){
    let routes = (
      <Switch>
        <Route path = "/auth" exact component = {AuthContainer} />
        <Route path = "/logout" component = {Logout} />
      </Switch>
    );
    return (
      <div>
        <Layout > 
          {routes}
        </Layout>
      </div>
    );
  }
}


export default withRouter(App);
