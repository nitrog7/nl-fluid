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

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Button: {
    displayName: 'Button'
  }
};

var _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/Button.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/Button.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2(_UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Button = _wrapComponent('Button')(function (_Component) {
  _inherits(Button, _Component);

  _createClass(Button, null, [{
    key: 'propTypes',
    value: function propTypes() {
      return {
        children: _react3.default.PropTypes.object,
        ghost: _react3.default.PropTypes.bool,
        loader: _react3.default.PropTypes.string,
        isLoading: _react3.default.PropTypes.bool,
        prefix: _react3.default.PropTypes.string,
        status: _react3.default.PropTypes.string,
        suffix: _react3.default.PropTypes.string,
        type: _react3.default.PropTypes.string
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
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
  }]);

  function Button(props) {
    _classCallCheck(this, Button);

    // Check if button is loading

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Button).call(this, props, 'btn'));

    var loadObj = _this.chkLoading(props);

    // Set initial state
    _this.state = {
      isLoading: _this.props.isLoading,
      prefix: loadObj.prefix || _this.props.prefix,
      suffix: loadObj.suffix || _this.props.suffix,
      prefixOrg: _this.props.prefix,
      suffixOrg: _this.props.suffix
    };
    return _this;
  }

  _createClass(Button, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var _chkLoading = this.chkLoading(props);

      var prefix = _chkLoading.prefix;
      var suffix = _chkLoading.suffix;

      this.setState({
        isLoading: props.isLoading,
        prefix: prefix,
        suffix: suffix
      });
    }
  }, {
    key: 'addStyles',
    value: function addStyles() {
      var cls = [];

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

      if (this.props.ghost) {
        cls.push('btn-ghost');
      }

      if (this.props.prefix !== '') {
        cls.push('btn-has-prefix');
      }

      if (this.props.suffix !== '') {
        cls.push('btn-has-suffix');
      }

      if (this.props.isLoading) {
        cls.push('btn-is-loading');
      }

      return cls;
    }
  }, {
    key: 'getIcon',
    value: function getIcon(type) {
      var icon = undefined;

      if (this.state[type] !== '') {
        icon = _react3.default.createElement(_Icon2.default, { className: 'btn_' + type, name: this.state[type] });
      }

      return icon;
    }
  }, {
    key: 'chkLoading',
    value: function chkLoading(props) {
      var prefix = '';
      var suffix = '';

      if (props.isLoading) {
        if (props.prefix !== '') {
          prefix = props.loader;
        }

        if (props.suffix !== '') {
          suffix = props.loader;
        }
      } else {
        if (this.state.prefixOrg) {
          prefix = this.state.prefixOrg;
        }

        if (this.state.suffixOrg) {
          suffix = this.state.suffixOrg;
        }
      }

      return { prefix: prefix, suffix: suffix };
    }
  }, {
    key: 'render',
    value: function render() {
      var props = _lodash2.default.omit(this.props, ['type', 'status', 'children']);

      return _react3.default.createElement(
        'button',
        _extends({ className: this.getStyles() }, props),
        this.getIcon('prefix'),
        this.props.children,
        this.getIcon('suffix')
      );
    }
  }]);

  return Button;
}(_Component3.default));

exports.default = Button;