import React from 'react';
import Component from './Component';

export default class Icon extends Component {
  static get propTypes() {
    return {
      name: React.PropTypes.string.isRequired
    }
  }

  constructor(props) {
    super(props, 'icon');
  }

  render() {
    let useTag = `<use xlink:href="icons.svg#${this.props.name}" />`;
    return <svg className={this.getStyles()} dangerouslySetInnerHTML={{__html: useTag }}/>;
  }
}
