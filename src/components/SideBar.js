import React from 'react';
import Component from './Component';
import Box from './Box';
import Icon from './Icon';
import { Link } from 'react-router';
import _ from 'lodash';

export default class SideBar extends Component {
  static propTypes() {
    return {
      items: React.PropTypes.array,
      active: React.PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      items: []
    };
  }

  constructor(props) {
    super(props, 'sideBar');

    console.log('NavBar::router', this);

    // Methods
    this.getStyles = this.getStyles.bind(this);
    this.getMenuItems = this.getMenuItems.bind(this);
  }

  getMenuItems(items) {
    items = items || [];

    let li = items.map((obj, i) => {
      let props = _.omit(obj, ['label']);
      let cls, sub;
      let iconName = 'angle-right';
      let iconStyle = 'sideBar-open';

      if(obj.items) {
        let active = this.props.active.indexOf(obj.to) === 0;
        sub = this.getMenuItems(obj.items);
        iconName = 'angle-down';
        iconStyle = 'sideBar-expand';

        if(active) {
          cls = 'sideBar-active';
        }
      }

      if(obj.to) {
        if(obj.to === this.props.active) {
          cls = 'sideBar-active';
        }

        // If using React Router
        return (
          <li key={`${this.name}-item-${i}`} className={cls}>
            <Link {...props}>{obj.label} <Icon className={iconStyle} name={iconName}/></Link>{sub}
          </li>);
      } else {
        if(obj.href === this.props.active) {
          cls = 'sideBar-active';
        }

        // Otherwise use a normal link
        return (
          <li key={`${this.name}-item-${i}`} className={cls}>
            <a {...props}>{obj.label} <Icon className={iconStyle} name={iconName}/></a>{sub}
          </li>);
      }
    });

    if(li.length) {
      return (
        <ul>
          {li}
        </ul>
      );
    }
  }

  render() {
    let props = _.omit(this.props, ['items']);

    return (
      <Box className={this.getStyles()} {...props}>
        {this.getMenuItems(this.state.items)}
      </Box>
    );
  }
}
