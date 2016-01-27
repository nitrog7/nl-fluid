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

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _FormField = require('./FormField');

var _FormField2 = _interopRequireDefault(_FormField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Form: {
    displayName: 'Form'
  }
};

var _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/Form.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/Form.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2(_UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Form = _wrapComponent('Form')(function (_Component) {
  _inherits(Form, _Component);

  _createClass(Form, null, [{
    key: 'propTypes',
    value: function propTypes() {
      return {
        items: _react3.default.PropTypes.string,
        cancelLabel: _react3.default.PropTypes.string,
        submitLabel: _react3.default.PropTypes.string,
        onCancel: _react3.default.PropTypes.func,
        onSubmit: _react3.default.PropTypes.func
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        items: [],
        cancelLabel: 'Cancel',
        submitLabel: 'Submit'
      };
    }
  }]);

  function Form(props) {
    _classCallCheck(this, Form);

    // Initial state

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Form).call(this, props, 'form', false));

    _this.state = {};

    // Methods
    _this.onChange = _this.onChange.bind(_this);
    _this.onSubmit = _this.onSubmit.bind(_this);
    return _this;
  }

  _createClass(Form, [{
    key: 'onChange',
    value: function onChange(e, value, name) {
      var values = {};
      values[name] = value;

      console.log('Form::value', value);
      this.setState(values);
    }
  }, {
    key: 'onSubmit',
    value: function onSubmit() {
      console.log('submit', this.state);

      if (this.props.onSubmit) {
        this.props.onSubmit(this.state);
      }
    }
  }, {
    key: 'getFields',
    value: function getFields() {
      var _this2 = this;

      var items = this.props.items;

      return items.map(function (props) {
        return _react3.default.createElement(_FormField2.default, _extends({ key: 'formField-' + props.name
        }, props, {
          value: _this2.state[props.name],
          onChange: _this2.onChange }));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _Box2.default,
        { className: this.getStyles(), direction: 'column', grow: 0 },
        this.getFields(),
        _react3.default.createElement(
          _Box2.default,
          { type: 'align-right' },
          _react3.default.createElement(
            _Button2.default,
            { type: 'link', onClick: this.props.onCancel },
            this.props.cancelLabel
          ),
          _react3.default.createElement(
            _Button2.default,
            { type: 'primary', onClick: this.onSubmit },
            this.props.submitLabel
          )
        )
      );
    }
  }]);

  return Form;
}(_Component3.default));

exports.default = Form;