/* @flow */
import React from 'react';
import {connect} from 'react-redux';

type Props = {};

type State = {};

class SignInPage extends React.Component<Props, State> {

  constructor(props: any) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <h1>SignIn</h1>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

//export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
export default SignInPage;
