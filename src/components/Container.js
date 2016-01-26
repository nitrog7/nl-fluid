import React from 'react';
import Component from './Component';
import Box from './Box';
import _ from 'lodash';

export default class Container extends Component {
  static propTypes() {
    return {
      children: React.PropTypes.string,
      hasNav: React.PropTypes.bool,
      type: React.PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      hasNav: false,
      type: 'full'
    };
  }

  addStyles() {
    let cls = [];

    if(this.props.hasNav) {
      cls.push('container-has-nav');
    }

    return cls;
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
