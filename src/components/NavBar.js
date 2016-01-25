import React from 'react';
import { Link } from 'react-router';

class NavBar extends React.Component {
  static get propTypes() {
    return {
      active: React.PropTypes.string,
      items: React.PropTypes.array,
      user: React.PropTypes.object
    };
  }

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
    let user = this.props.user;

    return items.map((o, idx) => {
      // Filter by component and user type
      let type = o.type || '';
      let isAuth = o.auth;

      // Check by authentication
      if(!user && isAuth) {
        return null;
      }
      else if(user && !isAuth) {
        return null;
      }

      // Check by type
      let typeList = type.split(',');
      typeList.map(item => item.trim().toLowerCase());

      if(typeList.length !== 0) {
        if(typeList.indexOf('default') < 0) {

          if(typeList.indexOf('footer') >= 0) {
            return null;
          }
        }
      }

      console.log('step2');
      // Create a unique key
      let key = 'navBarItem-' + idx;
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
      <div className="navBar navBar-fixed">
        <div className="navBar_logo"><Link to="/" title="Home">UFAT</Link></div>
        <ul className="navBar_menu">
          {this.menuItems()}
        </ul>
      </div>
    );
  }
}

export default NavBar;
