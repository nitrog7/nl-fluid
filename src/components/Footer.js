import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

export default class Footer extends React.Component {
  static get propTypes() {
    return {
      active: React.PropTypes.string,
      cols: React.PropTypes.number,
      items: React.PropTypes.array,
      logo: React.PropTypes.string,
      user: React.PropTypes.object
    };
  }

  static get defaultProps() {
    return {
      active: '',
      cols: 1,
      items: []
    };
  }

  constructor(props) {
    super(props);
  }

  menuItems() {
    let items = this.props.items;

    console.log('items', items);
    let filtered = items.map((o, idx) => {
      let styles = '';

      // Check if active
      if(this.props.active === o.path) {
        styles = 'footer-active';
      }

      if(o.to) {
        return <li key={`footerItem-${idx}`} className={styles}><Link to={o.to} title={o.label}>{o.label}</Link></li>;
      } else if(o.href) {
        return <li key={`footerItem-${idx}`} className={styles}><a href={o.href} title={o.label}>{o.label}</a></li>;
      } else if(o.header) {
        return (
          <li key={`footerItem-${idx}`} className="footer-header">
            {o.label}
          </li>
        );
      }
    });

    if(filtered.length) {
      let size = Math.ceil(filtered.length / this.props.cols);
      let chunks = _.chunk(filtered, size);

      return chunks.map((list, i) => {
        return <ul key={`footerMenu-${i}`} className="footer_menu">{list}</ul>;
      });
    }
  }

  getLogo() {
    if(this.props.logo) {
      return <div className="footer_logo"><Link to="/" title="Home"/></div>;
    }
  }

  render() {
    return (
      <div className="footer container-fluid">
        {this.getLogo()}
        {this.menuItems()}
      </div>
    );
  }
}
