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
      type: React.PropTypes.string,
      valign: React.PropTypes.string,
      width: React.PropTypes.string,
      wrap: React.PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      type: 'full'
    };
  }

  constructor(props) {
    super(props, 'box');

    // methods
    this.getBoxStyles = this.getBoxStyles.bind(this);
  }

  getBoxStyles() {
    let styles = {
      display: 'flex',
      position: 'relative'
    };

    if(this.props.grow) {
      styles.flexGrow = this.props.grow;
    }
    else if(this.props.shrink) {
      styles.flexShrink = this.props.shrink;
    }
    else if(this.props.width) {
      styles.flexBasis = this.props.width;
    }
    else if(this.props.type === 'full') {
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

    switch(this.props.type) {
      case 'align-left':
        styles.justifyContent = 'flex-start';
        styles.alignItems = 'center';
        break;
      case 'align-right':
        styles.justifyContent = 'flex-end';
        styles.alignItems = 'center';
        break;
      case 'align-top':
        styles.justifyContent = 'center';
        styles.alignItems = 'flex-start';
        break;
      case 'align-bottom':
        styles.justifyContent = 'center';
        styles.alignItems = 'flex-end';
        break;
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
