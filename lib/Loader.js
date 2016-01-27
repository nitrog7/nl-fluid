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

var _reactCssTransitionReplace = require('react-css-transition-replace');

var _reactCssTransitionReplace2 = _interopRequireDefault(_reactCssTransitionReplace);

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Loader: {
    displayName: 'Loader'
  }
};

var _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/Loader.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/Loader.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2(_UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Loader = _wrapComponent('Loader')(function (_Component) {
  _inherits(Loader, _Component);

  _createClass(Loader, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        isLoading: _react3.default.PropTypes.bool,
        name: _react3.default.PropTypes.string.isRequired,
        size: _react3.default.PropTypes.string
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        size: ''
      };
    }
  }]);

  function Loader(props) {
    _classCallCheck(this, Loader);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Loader).call(this, props, 'loader'));

    _this.state = props;

    // Methods
    _this.getLoader = _this.getLoader.bind(_this);
    return _this;
  }

  _createClass(Loader, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState(props);
    }
  }, {
    key: 'getLoader',
    value: function getLoader() {
      if (this.state.isLoading) {
        return _react3.default.createElement(
          'div',
          { className: this.getStyles(), key: 'loader' },
          _react3.default.createElement(_Icon2.default, { key: 'loader_icon', name: this.props.name, size: this.props.size })
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        _reactCssTransitionReplace2.default,
        { transitionName: 'loader_spinner',
          transitionEnterTimeout: 1500,
          transitionLeaveTimeout: 1500 },
        this.getLoader()
      );
    }
  }]);

  return Loader;
}(_Component3.default));

exports.default = Loader;