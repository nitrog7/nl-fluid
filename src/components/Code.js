import React from 'react';
import Component from './Component';

export default class Code extends Component {
  static propTypes() {
    return {
      children: React.PropTypes.string
    };
  }

  constructor(props) {
    super(props, 'code');
  }

  render() {
    return (
      <pre className={this.getStyles()}>
        <code ref="code">
          {this.props.children}
        </code>
      </pre>
    );
  }
}
