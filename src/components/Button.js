import React from 'react';
import Component from './Component';
import Icon from './Icon';
import _ from 'lodash';

export default class Button extends Component {
  static propTypes() {
    return {
      children: React.PropTypes.object,
      ghost: React.PropTypes.bool,
      loader: React.PropTypes.string,
      isLoading: React.PropTypes.bool,
      prefix: React.PropTypes.string,
      status: React.PropTypes.string,
      suffix: React.PropTypes.string,
      type: React.PropTypes.string
    };
  }

  static get defaultProps() {
    return {
      ghost: false,
      loader: 'spinner5',
      isLoading: false,
      prefix: '',
      status: '',
      suffix: '',
      type: 'default'
    };
  }

  constructor(props) {
    super(props, 'btn');

    // Check if button is loading
    let loadObj = this.chkLoading(props);

    // Set initial state
    this.state = {
      isLoading: this.props.isLoading,
      prefix: loadObj.prefix || this.props.prefix,
      suffix: loadObj.suffix || this.props.suffix,
      prefixOrg: this.props.prefix,
      suffixOrg: this.props.suffix
    };
  }

  componentWillReceiveProps(props) {
    let {prefix, suffix} = this.chkLoading(props);

    this.setState({
      isLoading: props.isLoading,
      prefix,
      suffix
    });
  }

  addStyles() {
    let cls = [];

    switch (this.props.type) {
      case 'primary':
        cls.push('btn-primary');
        break;
      case 'secondary':
        cls.push('btn-secondary');
        break;
      case 'link':
        cls.push('btn-link');
        break;
      default:
        cls.push('btn-default');
        break;
    }

    switch (this.props.status) {
      case 'success':
        cls.push('btn-success');
        break;
      case 'warning':
        cls.push('btn-warning');
        break;
      case 'danger':
        cls.push('btn-danger');
        break;
    }

    if(this.props.ghost) {
      cls.push('btn-ghost');
    }

    if(this.props.prefix !== '') {
      cls.push('btn-has-prefix');
    }

    if(this.props.suffix !== '') {
      cls.push('btn-has-suffix');
    }

    if(this.props.isLoading) {
      cls.push('btn-is-loading');
    }

    return cls;
  }

  getIcon(type) {
    let icon;

    if(this.state[type] !== '') {
      icon = <Icon className={`btn_${type}`} name={this.state[type]} />;
    }

    return icon;
  }

  chkLoading(props) {
    let prefix = '';
    let suffix = '';

    if(props.isLoading) {
      if(props.prefix !== '') {
        prefix = props.loader;
      }

      if(props.suffix !== '') {
        suffix = props.loader;
      }
    } else {
      if(this.state.prefixOrg) {
        prefix = this.state.prefixOrg;
      }

      if(this.state.suffixOrg) {
        suffix = this.state.suffixOrg;
      }
    }

    return {prefix, suffix};
  }

  render() {
    let props = _.omit(this.props, ['type', 'status', 'children']);

    return (
      <button className={this.getStyles()} {...props}>
        {this.getIcon('prefix')}
        {this.props.children}
        {this.getIcon('suffix')}
      </button>
    );
  }
}
