import React from 'react';
import TextEditor from 'components/TextEditor';

class InputField extends React.Component {
  static get propTypes() {
    return {
      status: React.PropTypes.string,
      type: React.PropTypes.string,
      value: React.PropTypes.string,
      onChange: React.PropTypes.func,
      placeholder: React.PropTypes.string,
      disabled: React.PropTypes.bool,
      children: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.object, React.PropTypes.array])
    };
  }

  static get defaultProps() {
    return {
      status: '',
      type: 'text',
      value: '',
      placeholder: '',
      disabled: false,
      onChange: () => {
      }
    };
  }

  constructor(props) {
    super(props);

    // Set state
    this.state = props;

    // Styles
    this.setStyles(props);
  }

  componentWillReceiveProps(props) {
    // Styles
    this.setStyles(props);

    // Set state
    this.setState(props);
  }

  setStyles(props) {
    // Styles
    this.inputCls = ['inputField'];

    let status = props.status;

    switch(status) {
      case 'success':
        this.inputCls.push('inputField-success');
        break;
      case 'error':
        this.inputCls.push('inputField-error');
        break;
      case 'warning':
        this.inputCls.push('inputField-warning');
        break;
    }
  }

  createField() {
    // Validate
    let type = this.state.type || 'default';
    type = type.trim().toLowerCase();
    let inputType;

    switch(type) {
      case 'password':
        inputType = 'password';
        break;
      case 'username':
        inputType = 'text';
        break;
      default:
        inputType = 'text';
    }

    // Styles
    this.inputCls.push('inputField-' + type);

    // Generate element
    return (
      <input
        className={this.inputCls.join(' ')}
        type={inputType} ref={o => this.input = o }
        value={this.state.value}
        placeholder={this.state.placeholder}
        disabled={this.state.disabled}
        onChange={this.props.onChange} />
    );
  }

  createTextArea() {
    // Styles
    this.inputCls.push('inputField-textarea');

    // Generate element
    return (
      <textarea className={this.inputCls.join(' ')} value={this.state.value} onChange={this.props.onChange}>
        {this.props.children}
      </textarea>
    );

  }

  createEditor() {
    // Styles
    this.inputCls.push('inputField-editor');

    // Generate element
    return (
      <TextEditor className={this.inputCls.join(' ')} value={this.state.value} />
    );
  }

  createCheckbox() {
    // Generate element
    return (
      <input className={this.inputCls.join(' ')} type="checkbox" onChange={this.props.onChange} />
    );
  }

  createRadio() {
    // Generate element
    return (
      <input className={this.inputCls.join(' ')} type="radio" onChange={this.props.onChange} />
    );
  }

  createSelect() {
    // Styles
    this.inputCls.push('inputField-select');

    // Generate element
    return (
      <select
        value={this.state.value}
        disabled={this.state.disabled}
        className={this.inputCls.join(' ')}
        onChange={this.props.onChange}>
        {this.props.children}
      </select>
    );
  }

  createElement() {
    let input;
    let type = this.state.type || 'default';
    type = type.trim().toLowerCase();

    switch(type) {
      case 'editor':
        input = this.createEditor();
        break;
      case 'textarea':
        input = this.createTextArea();
        break;
      case 'checkbox':
        input = this.createCheckbox();
        break;
      case 'radio':
        input = this.createRadio();
        break;
      case 'select':
        input = this.createSelect();
        break;
      default:
        input = this.createField();
    }

    return input;
  }

  render() {
    return this.createElement();
  }
}

export default InputField;
