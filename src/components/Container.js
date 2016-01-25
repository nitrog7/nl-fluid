import React from 'react';
import Component from './Component';
import Box from './Box';
import _ from 'lodash';

export default class Container extends Component {
  static propTypes() {
    return {
      children: React.PropTypes.string
    };
  }

  constructor(props) {
    super(props, 'container');
  }

  render() {
    let props = _.omit(this.props, ['className', 'children']);

    return (
      <Box className={this.getStyles()} {...props}>
        {this.props.children}
      </Box>
    );
  }
}
