/* @flow */
import * as React from 'react';
import {connect} from 'react-redux';

type Props = {
  children?: React.Node,
};

class MainLayout extends React.PureComponent<Props> {

  constructor(props: any) {
    super(props);
  }

  render() {

    return(
      <div className="main-layout">
        <div className="header"><h1>Header!</h1></div>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default MainLayout;
