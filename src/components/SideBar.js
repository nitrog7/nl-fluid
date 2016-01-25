import React from 'react';
import Component from './Component';
import Box from './Box';
import Icon from './Icon';
import { Link } from 'react-router';
import _ from 'lodash';

export default class SideBar extends Component {
  static propTypes() {
    return {
      items: React.PropTypes.array
    };
  }

  static get defaultProps() {
    return {
      items: []
    };
  }

  constructor(props) {
    super(props, 'sideBar');

    // Methods
    this.getStyles = this.getStyles.bind(this);
    this.getMenuItems = this.getMenuItems.bind(this);
  }

  getMenuItems() {
    let items = this.state.items || [];

    return items.map((obj, i) => {
      let props = _.omit(obj, ['label']);

      if(obj.to) {
        // If using React Router
        return <li key={`${this.name}-item-${i}`}><Link {...props}>{obj.label} <Icon name="angle-right" /></Link></li>;
      } else {
        // Otherwise use a normal link
        return <li key={`${this.name}-item-${i}`}><a {...props}>{obj.label} <Icon name="angle-right" /></a></li>;
      }
    });
  }

  render() {
    let props = _.omit(this.props, ['items']);

    return (
      <Box className={this.getStyles()} {...props}>
        <ul>
          {this.getMenuItems()}
        </ul>
      </Box>
    );
  }
}
