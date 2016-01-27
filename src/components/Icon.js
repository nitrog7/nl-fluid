import React from 'react';
import Component from './Component';

export default class Icon extends Component {
  static get propTypes() {
    return {
      name: React.PropTypes.string.isRequired,
      size: React.PropTypes.string
    }
  }

  static get defaultProps() {
    return {
      size: ''
    };
  }

  constructor(props) {
    super(props, 'icon');
  }

  addStyles() {
    let cls = [];
    let size = this.props.size.toLowerCase();

    if(size !== '') {
      cls.push('icon-' + size);
    }

    return cls;
  }

  render() {
    let useTag = `<use xlink:href="icons.svg#${this.props.name}" />`;
    return <svg className={this.getStyles()} dangerouslySetInnerHTML={{__html: useTag }}/>;
  }
}
