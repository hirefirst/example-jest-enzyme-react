/* @flow */
import React from 'react';

type Props = {
  text: string,
};

class Button extends React.PureComponent<Props> {

  render() {
    var test = this.props.text;
    return (
      <div className="button">
        {this.props.text}
      </div>
    )
  }
}

export default Button;
