import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import _ from 'lodash';
import Box from './Box';
import Component from './Component';
import Icon from './Icon';
import InputField from './InputField';

export default class FormField extends Component {
  static get propTypes() {
    return {
      direction: React.PropTypes.string,
      label: React.PropTypes.string,
      name: React.PropTypes.string.isRequired,
      type: React.PropTypes.string.isRequired,
      onBlur: React.PropTypes.func
    }
  }

  static get defaultProps() {
    return {
      direction: 'column'
    };
  }

  constructor(props) {
    super(props, 'formField');
    this.state = props;

    // Methods
    this.getInput = this.getInput.bind(this);
    this.getError = this.getError.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentWillReceiveProps(props) {
    this.setState(props);
  }

  addStyles() {
    let cls = [];

    if(this.state.error) {
      cls.push('formField-has-error');
    }

    return cls;
  }

  getLabel() {
    if(this.props.label) {
      return <label>{this.props.label}</label>;
    }
  }

  getInput() {
    let props = _.omit(this.props, ['label', 'direction', 'onBlur']);
    let input;


    switch(this.props.type) {
      case 'checkbox':
        break;
      case 'radio':
        break;
      case 'editor':
        break;
      case 'textarea':
        break;
      case 'select':
        break;
      default:
        input = <InputField {...props} onBlur={this.onBlur} />;
        break;
    }

    return input;
  }

  getError() {
    if(this.state.error) {
      return (
        <div className="formField_error" key="error">
          <Icon name="exclamation-triangle" size="sm" />
          <span>{this.state.error.message}</span>
        </div>
      );
    }
  }

  onBlur(e) {
    let error = e.error;

    this.setState({error});

    if(this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  render() {
    return (
      <Box className={this.getStyles()} direction={this.props.direction} grow={0}>
        {this.getLabel()}
        {this.getInput()}
        <ReactCSSTransitionReplace transitionName="formField_error"
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          {this.getError()}
        </ReactCSSTransitionReplace>
      </Box>
    );
  }
}
