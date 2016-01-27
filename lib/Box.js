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

var _Component2 = require('./Component');

var _Component3 = _interopRequireDefault(_Component2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Box: {
    displayName: 'Box'
  }
};

var _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/Box.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/Box.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2(_UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Box = _wrapComponent('Box')(function (_Component) {
  _inherits(Box, _Component);

  _createClass(Box, null, [{
    key: 'propTypes',
    value: function propTypes() {
      return {
        direction: _react3.default.PropTypes.string,
        children: _react3.default.PropTypes.string,
        grow: _react3.default.PropTypes.number,
        halign: _react3.default.PropTypes.string,
        order: _react3.default.PropTypes.number,
        shrink: _react3.default.PropTypes.number,
        type: _react3.default.PropTypes.string,
        valign: _react3.default.PropTypes.string,
        width: _react3.default.PropTypes.string,
        wrap: _react3.default.PropTypes.string
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        type: 'full'
      };
    }
  }]);

  function Box(props) {
    _classCallCheck(this, Box);

    // methods

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Box).call(this, props, 'box'));

    _this.getBoxStyles = _this.getBoxStyles.bind(_this);
    return _this;
  }

  _createClass(Box, [{
    key: 'getBoxStyles',
    value: function getBoxStyles() {
      var styles = {
        display: 'flex',
        position: 'relative'
      };

      if (this.props.grow !== undefined) {
        styles.flexGrow = this.props.grow;
      } else if (this.props.shrink !== undefined) {
        styles.flexShrink = this.props.shrink;
      } else if (this.props.width !== undefined) {
        styles.flexBasis = this.props.width;
      } else if (this.props.type === 'full') {
        styles.flex = 1;
      }

      if (this.props.direction !== undefined) {
        styles.flexDirection = this.props.direction;
      }

      if (this.props.halign !== undefined) {
        styles.justifyContent = this.props.halign;
      }

      if (this.props.order !== undefined) {
        styles.order = this.props.order;
      }

      if (this.props.valign !== undefined) {
        styles.alignItems = this.props.valign;
      }

      if (this.props.wrap !== undefined) {
        styles.flexWrap = this.props.wrap;
      }

      switch (this.props.type) {
        case 'align-left':
          styles.justifyContent = 'flex-start';
          styles.alignItems = 'center';
          styles.flexDirection = 'row';
          break;
        case 'align-right':
          styles.justifyContent = 'flex-end';
          styles.alignItems = 'center';
          styles.flexDirection = 'row';
          break;
        case 'align-top':
          styles.justifyContent = 'center';
          styles.alignItems = 'flex-start';
          styles.flexDirection = 'column';
          break;
        case 'align-bottom':
          styles.justifyContent = 'center';
          styles.alignItems = 'flex-end';
          styles.flexDirection = 'column';
          break;
      }

      return styles;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: this.getStyles(), style: this.getBoxStyles() },
        this.props.children
      );
    }
  }]);

  return Box;
}(_Component3.default));

exports.default = Box;