import React from 'react';
import Component from './Component';
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
        return <Link key={`${this.name}-item-${i}`} {...props}><li>{obj.label} <Icon name="angle-right" /></li></Link>;
      } else {
        // Otherwise use a normal link
        return <a key={`${this.name}-item-${i}`} {...props}><li>{obj.label} <Icon name="angle-right" /></li></a>;
      }
    });
  }

  render() {
    return (
      <div className={this.getStyles()}>
        <ul>
          {this.getMenuItems()}
        </ul>
      </div>
    );
  }
}
