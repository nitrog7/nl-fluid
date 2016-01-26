import React from 'react';

export default class Component extends React.Component {
  static propTypes() {
    return {
      className: React.PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      className: ''
    };
  }

  constructor(props, name) {
    super(props);

    // Component Name
    this.name = name || 'component';

    // Initial State
    this.state = props;
    this.addStyles = this.addStyles.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  getStyles() {
    let cls = this.props.className || '';
    cls = cls.split(' ');
    cls.push(this.name);

    // Add additional classes
    cls = cls.concat(this.addStyles());
    return cls.join (' ').trim();
  }

  addStyles() {
    return [];
  }
}
