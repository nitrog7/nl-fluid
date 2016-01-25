import React from 'react';
import { Link } from 'react-router';

class SideBar extends React.Component {
  static get propTypes() {
    return {
      active: React.PropTypes.string,
      items: React.PropTypes.array,
      user: React.PropTypes.object
    };
  };

  static get defaultProps() {
    return {
      active: '',
      items: []
    };
  }

  constructor(props) {
    super(props);
  }

  menuItems() {
    let items = this.props.items;

    return items.map((o, idx) => {
      // Create a unique key
      let key = 'sideMenuItem-' + idx;
      let styles = '';

      // Check if active
      if(this.props.active === o.path) {
        styles = 'active';
      }

      return <li key={key} className={styles}><Link to={o.path} title={o.name}>{o.name}</Link></li>;
    });
  }

  render() {
    return (
      <ul className="sideMenu">
        {this.menuItems()}
      </ul>
    );
  }
}

export default SideBar;
