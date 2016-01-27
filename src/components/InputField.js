import React from 'react';
import _ from 'lodash';
import Component from './Component';
import Icon from './Icon';

export default class InputField extends Component {
  static get propTypes() {
    return {
      children: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object, React.PropTypes.array]),
      disabled: React.PropTypes.bool,
      hasPrefix: React.PropTypes.bool,
      hasSuffix: React.PropTypes.bool,
      name: React.PropTypes.string,
      onBlur: React.PropTypes.func,
      onChange: React.PropTypes.func,
      onClickPrefix: React.PropTypes.func,
      onClickSuffix: React.PropTypes.func,
      onFocus: React.PropTypes.func,
      placeholder: React.PropTypes.string,
      prefix: React.PropTypes.string,
      status: React.PropTypes.string,
      suffix: React.PropTypes.string,
      type: React.PropTypes.string,
      required: React.PropTypes.bool,
      value: React.PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      disabled: false,
      status: '',
      type: 'text',
      value: ''
    };
  }

  constructor(props) {
    super(props, 'inputField', false);

    // Set state
    let typeObj = this.getType();
    this.state = _.merge(typeObj, props);

    // Methods
    this.onChange = this.onChange.bind(this);
    this.onClickPrefix = this.onClickPrefix.bind(this);
    this.onClickSuffix = this.onClickSuffix.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
    this.validate = this.validate.bind(this);
    this.getType = this.getType.bind(this);
  }

  addStyles() {
    // Styles
    let cls = [];

    let status = this.props.status;
    status = status.trim().toLowerCase();

    // Status
    switch(status) {
      case 'success':
        cls.push('inputField-success');
        break;
      case 'error':
        cls.push('inputField-error');
        break;
      case 'warning':
        cls.push('inputField-warning');
        break;
    }

    // Type
    let type = this.state.type || 'default';
    type = type.trim().toLowerCase();
    cls.push('inputField-' + type);

    // Input type
    cls.push(`inputField-type-${this.state.inputType}`);

    // Focus
    if(this.state.focused) {
      cls.push('inputField-focus');
    }

    // Validation
    if(this.state.error) {
      cls.push('inputField-danger');
    }

    return cls;
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  onFocus(e) {
    this.setState({
      focused: true
    });

    if(this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  onBlur(e) {
    let error = this.validate();
    e.error = error;

    this.setState({
      focused: false,
      error
    });

    if(this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  onChange(e) {
    let value = e.target.value;

    this.setState({value});

    if(this.props.onChange) {
      this.props.onChange(e, value, this.props.name);
    }
  }

  onClickPrefix(e) {
    //let value = e.target.value;

    if(this.props.onClickPrefix) {
      this.props.onClickPrefix(e);
    }
  }

  onClickSuffix(e) {
    //let value = e.target.value;

    if(this.state.type === 'password') {
      this.togglePassword();
    }

    if(this.props.onClickSuffix) {
      this.props.onClickSuffix(e);
    }
  }

  togglePassword() {
    let suffix;
    let inputType;
    let hasSuffix;

    if(this.state.inputType === 'text') {
      inputType = 'password';
      suffix = 'eye-blocked';
      hasSuffix = true;
    } else {
      inputType = 'text';
      suffix = 'eye';
      hasSuffix = true;
    }

    this.setState({inputType, suffix, hasSuffix});
  }

  validate() {
    let val = this.input.value;
    let error = false;

    if(val !== '' || this.props.required) {
      if(this.state.type === 'email') {
        let regex = new RegExp(['^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)',
          '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.',
          '[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\\.)+',
          '[a-zA-Z]{2,}))$'].join(''));

        if(!regex.test(val)) {
          error = {
            message: 'Email address is invalid'
          };
        }
      }
    }

    return error;
  }

  getType() {
    console.log('getType');
    let prefix;
    let suffix;
    let inputType;
    let hasSuffix;

    switch(this.props.type) {
      case 'password':
        inputType = 'password';
        prefix = 'locked';
        suffix = 'eye-blocked';
        hasSuffix = true;
        break;
      case 'email':
        prefix = 'email';
        inputType = 'email';
        break;
      case 'username':
        prefix = 'user';
        break;
      default:
        inputType = 'text';
        break;
    }

    if(this.props.prefix) {
      prefix = null;
    }

    return {prefix, suffix, inputType, hasSuffix};
  }

  getPrefix() {
    if(this.state.hasPrefix && this.state.prefix) {
      return <div className="inputField-prefix" onClick={this.onClickPrefix}><Icon name={this.state.prefix}/></div>;
    }
  }

  getSuffix() {
    console.log('getSuffix', this.state.hasSuffix, this.state.suffix);
    if(this.state.hasSuffix && this.state.suffix) {
      let cls = ['inputField-suffix'];

      if(this.onClickSuffix) {
        cls.push('inputField-icon-active');
      }

      return <div className={cls.join(' ')} onClick={this.onClickSuffix}><Icon name={this.state.suffix}/></div>;
    }
  }

  render() {
    // Props
    let props = _.omit(this.props, ['type', 'ref', 'value', 'onChange', 'onFocus', 'onBlur']);

    return (
      <div className={this.getStyles()}>
        <input
          type={this.state.inputType}
          ref={o => this.input = o }
          value={this.state.value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          {...props}/>
        {this.getPrefix()}
        {this.getSuffix()}
      </div>
    );
  }
}
