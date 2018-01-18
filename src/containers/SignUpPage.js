/* @flow */
import React from 'react';

type Props = {};

type State = {};

class SignUpPage extends React.Component<Props, State> {

  constructor(props: any) {
    console.log("constructor");
    super(props);
    this.state = {};
  }

  render() {
    console.log("Is this called?");
    return (
      <div>
        <h1>Hallo?!</h1>
      </div>
    )
  }
}

export default SignUpPage;
