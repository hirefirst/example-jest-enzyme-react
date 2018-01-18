import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//import MainLayout
import MainLayout from './layouts/MainLayout';

//import containers
import SignUpPage from './containers/SignUpPage';
import SignInPage from './containers/SignInPage';


const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
  <Route {...rest} render={props => (
    <Layout>
      <Component {...props} />
    </Layout>
  )} />
)

class App extends Component {
  render() {
    return (
        <Router>
          <div className="app">
            <AppRoute exact path="/" layout={MainLayout} component={SignUpPage} />
            <Route exact path="/login" component={SignInPage} />
          </div>
        </Router>
    );
  }
}

export default App;
