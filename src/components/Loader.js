import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import Component from './Component';
import Icon from './Icon';

export default class Loader extends Component {
  static get propTypes() {
    return {
      isLoading: React.PropTypes.bool,
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
    super(props, 'loader');
    this.state = props;

    // Methods
    this.getLoader = this.getLoader.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  getLoader() {
    if(this.state.isLoading) {
      return (
        <div className={this.getStyles()} key="loader">
          <Icon key="loader_icon" name={this.props.name} size={this.props.size}/>
        </div>
      );
    }
  }

  render() {
    return (
      <ReactCSSTransitionReplace transitionName="loader_spinner"
        transitionEnterTimeout={1500}
        transitionLeaveTimeout={1500}>
        {this.getLoader()}
      </ReactCSSTransitionReplace>
    );
  }
}
