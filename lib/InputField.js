'use strict';

var _index = require('/Users/grosales/dev/nl-fluid/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/grosales/dev/nl-fluid/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/grosales/dev/nl-fluid/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  InputField: {
    displayName: 'InputField'
  }
};

var _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/InputField.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/InputField.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2(_UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var InputField = _wrapComponent('InputField')(function (_Component) {
  _inherits(InputField, _Component);

  _createClass(InputField, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        children: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.string, _react3.default.PropTypes.object, _react3.default.PropTypes.array]),
        disabled: _react3.default.PropTypes.bool,
        hasPrefix: _react3.default.PropTypes.bool,
        hasSuffix: _react3.default.PropTypes.bool,
        name: _react3.default.PropTypes.string,
        onBlur: _react3.default.PropTypes.func,
        onChange: _react3.default.PropTypes.func,
        onClickPrefix: _react3.default.PropTypes.func,
        onClickSuffix: _react3.default.PropTypes.func,
        onFocus: _react3.default.PropTypes.func,
        placeholder: _react3.default.PropTypes.string,
        prefix: _react3.default.PropTypes.string,
        status: _react3.default.PropTypes.string,
        suffix: _react3.default.PropTypes.string,
        type: _react3.default.PropTypes.string,
        required: _react3.default.PropTypes.bool,
        value: _react3.default.PropTypes.string
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        disabled: false,
        status: '',
        type: 'text',
        value: ''
      };
    }
  }]);

  function InputField(props) {
    _classCallCheck(this, InputField);

    // Set state

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(InputField).call(this, props, 'inputField', false));

    var typeObj = _this.getType();
    _this.state = _lodash2.default.merge(typeObj, props);

    // Methods
    _this.onChange = _this.onChange.bind(_this);
    _this.onClickPrefix = _this.onClickPrefix.bind(_this);
    _this.onClickSuffix = _this.onClickSuffix.bind(_this);
    _this.onFocus = _this.onFocus.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    _this.togglePassword = _this.togglePassword.bind(_this);
    _this.validate = _this.validate.bind(_this);
    _this.getType = _this.getType.bind(_this);
    return _this;
  }

  _createClass(InputField, [{
    key: 'addStyles',
    value: function addStyles() {
      // Styles
      var cls = [];

      var status = this.props.status;
      status = status.trim().toLowerCase();

      // Status
      switch (status) {
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
      var type = this.state.type || 'default';
      type = type.trim().toLowerCase();
      cls.push('inputField-' + type);

      // Input type
      cls.push('inputField-type-' + this.state.inputType);

      // Focus
      if (this.state.focused) {
        cls.push('inputField-focus');
      }

      // Validation
      if (this.state.error) {
        cls.push('inputField-danger');
      }

      return cls;
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      console.log('componentWillMount');
    }
  }, {
    key: 'onFocus',
    value: function onFocus(e) {
      this.setState({
        focused: true
      });

      if (this.props.onFocus) {
        this.props.onFocus(e);
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var error = this.validate();
      e.error = error;

      this.setState({
        focused: false,
        error: error
      });

      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      var value = e.target.value;

      this.setState({ value: value });

      if (this.props.onChange) {
        this.props.onChange(e, value, this.props.name);
      }
    }
  }, {
    key: 'onClickPrefix',
    value: function onClickPrefix(e) {
      //let value = e.target.value;

      if (this.props.onClickPrefix) {
        this.props.onClickPrefix(e);
      }
    }
  }, {
    key: 'onClickSuffix',
    value: function onClickSuffix(e) {
      //let value = e.target.value;

      if (this.state.type === 'password') {
        this.togglePassword();
      }

      if (this.props.onClickSuffix) {
        this.props.onClickSuffix(e);
      }
    }
  }, {
    key: 'togglePassword',
    value: function togglePassword() {
      var suffix = undefined;
      var inputType = undefined;
      var hasSuffix = undefined;

      if (this.state.inputType === 'text') {
        inputType = 'password';
        suffix = 'eye-blocked';
        hasSuffix = true;
      } else {
        inputType = 'text';
        suffix = 'eye';
        hasSuffix = true;
      }

      this.setState({ inputType: inputType, suffix: suffix, hasSuffix: hasSuffix });
    }
  }, {
    key: 'validate',
    value: function validate() {
      var val = this.input.value;
      var error = false;

      if (val !== '' || this.props.required) {
        if (this.state.type === 'email') {
          var regex = new RegExp(['^(([^<>()[\\]\\\\.,;:\\s@\"]+(\\.[^<>()[\\]\\\\.,;:\\s@\"]+)*)', '|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.', '[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\\.)+', '[a-zA-Z]{2,}))$'].join(''));

          if (!regex.test(val)) {
            error = {
              message: 'Email address is invalid'
            };
          }
        }
      }

      return error;
    }
  }, {
    key: 'getType',
    value: function getType() {
      console.log('getType');
      var prefix = undefined;
      var suffix = undefined;
      var inputType = undefined;
      var hasSuffix = undefined;

      switch (this.props.type) {
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

      if (this.props.prefix) {
        prefix = null;
      }

      return { prefix: prefix, suffix: suffix, inputType: inputType, hasSuffix: hasSuffix };
    }
  }, {
    key: 'getPrefix',
    value: function getPrefix() {
      if (this.state.hasPrefix && this.state.prefix) {
        return _react3.default.createElement(
          'div',
          { className: 'inputField-prefix', onClick: this.onClickPrefix },
          _react3.default.createElement(_Icon2.default, { name: this.state.prefix })
        );
      }
    }
  }, {
    key: 'getSuffix',
    value: function getSuffix() {
      console.log('getSuffix', this.state.hasSuffix, this.state.suffix);
      if (this.state.hasSuffix && this.state.suffix) {
        var cls = ['inputField-suffix'];

        if (this.onClickSuffix) {
          cls.push('inputField-icon-active');
        }

        return _react3.default.createElement(
          'div',
          { className: cls.join(' '), onClick: this.onClickSuffix },
          _react3.default.createElement(_Icon2.default, { name: this.state.suffix })
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      // Props
      var props = _lodash2.default.omit(this.props, ['type', 'ref', 'value', 'onChange', 'onFocus', 'onBlur']);

      return _react3.default.createElement(
        'div',
        { className: this.getStyles() },
        _react3.default.createElement('input', _extends({
          type: this.state.inputType,
          ref: function ref(o) {
            return _this2.input = o;
          },
          value: this.state.value,
          onChange: this.onChange,
          onFocus: this.onFocus,
          onBlur: this.onBlur
        }, props)),
        this.getPrefix(),
        this.getSuffix()
      );
    }
  }]);

  return InputField;
}(_Component3.default));

exports.default = InputField;