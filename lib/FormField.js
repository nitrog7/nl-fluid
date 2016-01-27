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

var _reactCssTransitionReplace = require('react-css-transition-replace');

var _reactCssTransitionReplace2 = _interopRequireDefault(_reactCssTransitionReplace);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _InputField = require('./InputField');

var _InputField2 = _interopRequireDefault(_InputField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  FormField: {
    displayName: 'FormField'
  }
};

var _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/FormField.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/FormField.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2(_UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var FormField = _wrapComponent('FormField')(function (_Component) {
  _inherits(FormField, _Component);

  _createClass(FormField, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        direction: _react3.default.PropTypes.string,
        label: _react3.default.PropTypes.string,
        name: _react3.default.PropTypes.string.isRequired,
        type: _react3.default.PropTypes.string.isRequired,
        onBlur: _react3.default.PropTypes.func
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        direction: 'column'
      };
    }
  }]);

  function FormField(props) {
    _classCallCheck(this, FormField);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FormField).call(this, props, 'formField'));

    _this.state = props;

    // Methods
    _this.getInput = _this.getInput.bind(_this);
    _this.getError = _this.getError.bind(_this);
    _this.onBlur = _this.onBlur.bind(_this);
    return _this;
  }

  _createClass(FormField, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState(props);
    }
  }, {
    key: 'addStyles',
    value: function addStyles() {
      var cls = [];

      if (this.state.error) {
        cls.push('formField-has-error');
      }

      return cls;
    }
  }, {
    key: 'getLabel',
    value: function getLabel() {
      if (this.props.label) {
        return _react3.default.createElement(
          'label',
          null,
          this.props.label
        );
      }
    }
  }, {
    key: 'getInput',
    value: function getInput() {
      var props = _lodash2.default.omit(this.props, ['label', 'direction', 'onBlur']);
      var input = undefined;

      switch (this.props.type) {
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
          input = _react3.default.createElement(_InputField2.default, _extends({}, props, { onBlur: this.onBlur }));
          break;
      }

      return input;
    }
  }, {
    key: 'getError',
    value: function getError() {
      if (this.state.error) {
        return _react3.default.createElement(
          'div',
          { className: 'formField_error', key: 'error' },
          _react3.default.createElement(_Icon2.default, { name: 'exclamation-triangle', size: 'sm' }),
          _react3.default.createElement(
            'span',
            null,
            this.state.error.message
          )
        );
      }
    }
  }, {
    key: 'onBlur',
    value: function onBlur(e) {
      var error = e.error;

      this.setState({ error: error });

      if (this.props.onBlur) {
        this.props.onBlur(e);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _Box2.default,
        { className: this.getStyles(), direction: this.props.direction, grow: 0 },
        this.getLabel(),
        this.getInput(),
        _react3.default.createElement(
          _reactCssTransitionReplace2.default,
          { transitionName: 'formField_error',
            transitionEnterTimeout: 300,
            transitionLeaveTimeout: 300 },
          this.getError()
        )
      );
    }
  }]);

  return FormField;
}(_Component3.default));

exports.default = FormField;