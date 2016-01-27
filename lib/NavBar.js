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

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  NavBar: {
    displayName: 'NavBar'
  }
};

var _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/NavBar.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/NavBar.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2(_UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var NavBar = _wrapComponent('NavBar')(function (_React$Component) {
  _inherits(NavBar, _React$Component);

  _createClass(NavBar, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        active: _react3.default.PropTypes.string,
        items: _react3.default.PropTypes.array,
        router: _react3.default.PropTypes.object,
        user: _react3.default.PropTypes.object
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        active: '',
        items: []
      };
    }
  }]);

  function NavBar(props) {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NavBar).call(this, props));
  }

  _createClass(NavBar, [{
    key: 'menuItems',
    value: function menuItems() {
      var _this2 = this;

      var items = this.props.items;
      var user = this.props.user;

      return items.map(function (o, idx) {
        // Filter by component and user type
        var type = o.type || '';
        var isAuth = o.auth;

        // Check by authentication
        if (!user && isAuth) {
          return null;
        } else if (user && !isAuth) {
          return null;
        }

        // Check by type
        var typeList = type.split(',');
        typeList.map(function (item) {
          return item.trim().toLowerCase();
        });

        if (typeList.length !== 0) {
          if (typeList.indexOf('default') < 0) {

            if (typeList.indexOf('footer') >= 0) {
              return null;
            }
          }
        }

        var styles = '';

        // Check if active
        if (_this2.props.active === o.path) {
          styles = 'navBar-active';
        }

        if (o.to) {
          return _react3.default.createElement(
            'li',
            { key: 'navBarItem-' + idx, className: styles },
            _react3.default.createElement(
              _reactRouter.Link,
              { to: o.to, title: o.label },
              o.label
            )
          );
        } else if (o.href) {
          return _react3.default.createElement(
            'li',
            { key: 'navBarItem-' + idx, className: styles },
            _react3.default.createElement(
              'a',
              { href: o.href, title: o.label },
              o.label
            )
          );
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: 'navBar navBar-fixed' },
        _react3.default.createElement(
          'div',
          { className: 'navBar_logo' },
          _react3.default.createElement(_reactRouter.Link, { to: '/', title: 'Home' })
        ),
        _react3.default.createElement(
          'ul',
          { className: 'navBar_menu' },
          this.menuItems()
        )
      );
    }
  }]);

  return NavBar;
}(_react3.default.Component));

exports.default = NavBar;