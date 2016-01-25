import React from 'react';
import { Link } from 'react-router';

class Footer extends React.Component {
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

    return items.map((o, idx) => {
      // Filter by component and user type
      let nav = o.nav || '';

      if(typeof(nav) === 'boolean' && nav) {
        nav = 'public';
      }

      let navTypes = nav.split(',');
      navTypes.map(item => item.trim().toLowerCase());

      if(navTypes.indexOf('public') < 0) {
        let user = this.props.user;

        if(navTypes.indexOf('header') >= 0) {
          return null;
        }
        else if(user && navTypes.indexOf(user.type) < 0) {
          return null;
        }
        else if(user && navTypes.indexOf('isloggedin') >= 0) {
          return null;
        }
        else if(!user && navTypes.indexOf('isloggedout') >= 0) {
          return null;
        }
      }

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
      <div className="footer container-fluid">
        <div className="footer_logo"><Link to="/" title="Home">UFAT</Link></div>
        <ul className="footer_menu">
          {this.menuItems()}
        </ul>
      </div>
    );
  }
}

export default Footer;
