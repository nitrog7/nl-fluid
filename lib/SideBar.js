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

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Icon = require('./Icon');

var _Icon2 = _interopRequireDefault(_Icon);

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  SideBar: {
    displayName: 'SideBar'
  }
};

var _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/SideBar.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/SideBar.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2(_UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var SideBar = _wrapComponent('SideBar')(function (_Component) {
  _inherits(SideBar, _Component);

  _createClass(SideBar, null, [{
    key: 'propTypes',
    value: function propTypes() {
      return {
        items: _react3.default.PropTypes.array,
        active: _react3.default.PropTypes.string
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        items: []
      };
    }
  }]);

  function SideBar(props) {
    _classCallCheck(this, SideBar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SideBar).call(this, props, 'sideBar'));

    console.log('NavBar::router', _this);

    // Methods
    _this.getStyles = _this.getStyles.bind(_this);
    _this.getMenuItems = _this.getMenuItems.bind(_this);
    return _this;
  }

  _createClass(SideBar, [{
    key: 'getMenuItems',
    value: function getMenuItems(items) {
      var _this2 = this;

      items = items || [];

      var li = items.map(function (obj, i) {
        var props = _lodash2.default.omit(obj, ['label']);
        var cls = undefined,
            sub = undefined;
        var iconName = 'angle-right';
        var iconStyle = 'sideBar-open';

        if (obj.items) {
          var active = _this2.props.active.indexOf(obj.to) === 0;
          sub = _this2.getMenuItems(obj.items);
          iconName = 'angle-down';
          iconStyle = 'sideBar-expand';

          if (active) {
            cls = 'sideBar-active';
          }
        }

        if (obj.to) {
          if (obj.to === _this2.props.active) {
            cls = 'sideBar-active';
          }

          // If using React Router
          return _react3.default.createElement(
            'li',
            { key: _this2.name + '-item-' + i, className: cls },
            _react3.default.createElement(
              _reactRouter.Link,
              props,
              obj.label,
              ' ',
              _react3.default.createElement(_Icon2.default, { className: iconStyle, name: iconName })
            ),
            sub
          );
        } else {
          if (obj.href === _this2.props.active) {
            cls = 'sideBar-active';
          }

          // Otherwise use a normal link
          return _react3.default.createElement(
            'li',
            { key: _this2.name + '-item-' + i, className: cls },
            _react3.default.createElement(
              'a',
              props,
              obj.label,
              ' ',
              _react3.default.createElement(_Icon2.default, { className: iconStyle, name: iconName })
            ),
            sub
          );
        }
      });

      if (li.length) {
        return _react3.default.createElement(
          'ul',
          null,
          li
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var props = _lodash2.default.omit(this.props, ['items']);

      return _react3.default.createElement(
        _Box2.default,
        _extends({ className: this.getStyles() }, props),
        this.getMenuItems(this.state.items)
      );
    }
  }]);

  return SideBar;
}(_Component3.default));

exports.default = SideBar;