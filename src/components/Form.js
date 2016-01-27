import React from 'react';
import Box from './Box';
import Button from './Button';
import Component from './Component';
import FormField from './FormField';

export default class Form extends Component {
  static propTypes() {
    return {
      items: React.PropTypes.string,
      cancelLabel: React.PropTypes.string,
      submitLabel: React.PropTypes.string,
      onCancel: React.PropTypes.func,
      onSubmit: React.PropTypes.func
    };
  }

  static get defaultProps() {
    return {
      items: [],
      cancelLabel: 'Cancel',
      submitLabel: 'Submit'
    };
  }

  constructor(props) {
    super(props, 'form', false);

    // Initial state
    this.state = {};

    // Methods
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e, value, name) {
    let values = {};
    values[name] = value;

    console.log('Form::value', value);
    this.setState(values);
  }

  onSubmit() {
    console.log('submit', this.state);

    if(this.props.onSubmit) {
      this.props.onSubmit(this.state);
    }
  }

  getFields() {
    let items = this.props.items;

    return items.map(props => {
      return (
        <FormField key={`formField-${props.name}`}
          {...props}
          value={this.state[props.name]}
          onChange={this.onChange}/>
      );
    });
  }

  render() {
    return (
      <Box className={this.getStyles()} direction="column" grow={0}>
        {this.getFields()}

        <Box type="align-right">
          <Button type="link" onClick={this.props.onCancel}>{this.props.cancelLabel}</Button>
          <Button type="primary" onClick={this.onSubmit}>{this.props.submitLabel}</Button>
        </Box>
      </Box>
    );
  }
}
