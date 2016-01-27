'use strict';

var _index = require('/Users/grosales/dev/nl-fluid/node_modules/redbox-react/lib/index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('/Users/grosales/dev/nl-fluid/node_modules/react-transform-catch-errors/lib/index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('/Users/grosales/dev/nl-fluid/node_modules/react-transform-hmr/lib/index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Component: {
    displayName: 'Component'
  }
};

var _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/Component.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/Component.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2(_UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Component = _wrapComponent('Component')(function (_React$Component) {
  _inherits(Component, _React$Component);

  _createClass(Component, null, [{
    key: 'propTypes',
    value: function propTypes() {
      return {
        className: _react3.default.PropTypes.string
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        className: ''
      };
    }
  }]);

  function Component(props, name) {
    var updateState = arguments.length <= 2 || arguments[2] === undefined ? true : arguments[2];

    _classCallCheck(this, Component);

    // Component Name

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this, props));

    _this.name = name || 'component';
    _this.updateState = updateState;

    // Initial State
    if (updateState) {
      _this.state = props;
    }

    // Methods
    _this.addStyles = _this.addStyles.bind(_this);
    return _this;
  }

  _createClass(Component, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if (this.updateState) {
        this.setState(props);
      }
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var cls = this.props.className || '';
      cls = cls.split(' ');
      cls.push(this.name);

      // Add additional classes
      cls = cls.concat(this.addStyles());
      return cls.join(' ').trim();
    }
  }, {
    key: 'addStyles',
    value: function addStyles() {
      return [];
    }
  }]);

  return Component;
}(_react3.default.Component));

exports.default = Component;