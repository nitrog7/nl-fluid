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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Footer: {
    displayName: 'Footer'
  }
};

var _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/Footer.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/Footer.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2(_UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Footer = _wrapComponent('Footer')(function (_React$Component) {
  _inherits(Footer, _React$Component);

  _createClass(Footer, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        active: _react3.default.PropTypes.string,
        cols: _react3.default.PropTypes.number,
        items: _react3.default.PropTypes.array,
        logo: _react3.default.PropTypes.string,
        user: _react3.default.PropTypes.object
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        active: '',
        cols: 1,
        items: []
      };
    }
  }]);

  function Footer(props) {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).call(this, props));
  }

  _createClass(Footer, [{
    key: 'menuItems',
    value: function menuItems() {
      var _this2 = this;

      var items = this.props.items;

      console.log('items', items);
      var filtered = items.map(function (o, idx) {
        var styles = '';

        // Check if active
        if (_this2.props.active === o.path) {
          styles = 'footer-active';
        }

        if (o.to) {
          return _react3.default.createElement(
            'li',
            { key: 'footerItem-' + idx, className: styles },
            _react3.default.createElement(
              _reactRouter.Link,
              { to: o.to, title: o.label },
              o.label
            )
          );
        } else if (o.href) {
          return _react3.default.createElement(
            'li',
            { key: 'footerItem-' + idx, className: styles },
            _react3.default.createElement(
              'a',
              { href: o.href, title: o.label },
              o.label
            )
          );
        } else if (o.header) {
          return _react3.default.createElement(
            'li',
            { key: 'footerItem-' + idx, className: 'footer-header' },
            o.label
          );
        }
      });

      if (filtered.length) {
        var size = Math.ceil(filtered.length / this.props.cols);
        var chunks = _lodash2.default.chunk(filtered, size);

        return chunks.map(function (list, i) {
          return _react3.default.createElement(
            'ul',
            { key: 'footerMenu-' + i, className: 'footer_menu' },
            list
          );
        });
      }
    }
  }, {
    key: 'getLogo',
    value: function getLogo() {
      if (this.props.logo) {
        return _react3.default.createElement(
          'div',
          { className: 'footer_logo' },
          _react3.default.createElement(_reactRouter.Link, { to: '/', title: 'Home' })
        );
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: 'footer container-fluid' },
        this.getLogo(),
        this.menuItems()
      );
    }
  }]);

  return Footer;
}(_react3.default.Component));

exports.default = Footer;