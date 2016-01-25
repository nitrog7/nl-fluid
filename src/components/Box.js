import React from 'react';
import Component from './Component';

export default class Box extends Component {
  static propTypes() {
    return {
      direction: React.PropTypes.string,
      children: React.PropTypes.string,
      grow: React.PropTypes.number,
      halign: React.PropTypes.string,
      order: React.PropTypes.number,
      shrink: React.PropTypes.number,
      valign: React.PropTypes.string,
      width: React.PropTypes.string,
      wrap: React.PropTypes.string
    };
  }

  constructor(props) {
    super(props, 'box');

    // methods
    this.getBoxStyles = this.getBoxStyles.bind(this);
  }

  getBoxStyles() {
    let styles = {
      display: 'flex'
    };

    if(this.props.grow) {
      styles.flexGrow = this.props.grow;
    }
    else if(this.props.shrink) {
      styles.flexShrink = this.props.shrink;
    }
    else if(this.props.width) {
      styles.flexBasis = this.props.width;
    } else {
      styles.flex = 1;
    }

    if(this.props.direction) {
      styles.flexDirection = this.props.direction;
    }

    if(this.props.halign) {
      styles.justifyContent = this.props.halign;
    }

    if(this.props.order) {
      styles.order = this.props.order;
    }

    if(this.props.valign) {
      styles.alignItems = this.props.valign;
    }

    if(this.props.wrap) {
      styles.flexWrap = this.props.wrap;
    }

    return styles;
  }

  render() {
    return (
      <div className={this.getStyles()} style={this.getBoxStyles()}>
        {this.props.children}
      </div>
    );
  }
}
