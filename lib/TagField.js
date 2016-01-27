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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _Icon = require('components/Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TagField: {
    displayName: 'TagField'
  },
  Tag: {
    displayName: 'Tag'
  },
  Suggestions: {
    displayName: 'Suggestions'
  }
};

var _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/TagField.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/TagField.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2(_UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

// Constants
var Keys = {
  ENTER: 13,
  TAB: 9,
  BACKSPACE: 8,
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  ESCAPE: 27
};

var TagField = _wrapComponent('TagField')(function (_React$Component) {
  _inherits(TagField, _React$Component);

  _createClass(TagField, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        allowDeleteFromEmptyInput: _react3.default.PropTypes.bool,
        autofocus: _react3.default.PropTypes.bool,
        delimeters: _react3.default.PropTypes.array,
        inline: _react3.default.PropTypes.bool,
        labelProp: _react3.default.PropTypes.string,
        suggestionProp: _react3.default.PropTypes.string,
        minQueryLength: _react3.default.PropTypes.number,
        onAdd: _react3.default.PropTypes.func.isRequired,
        onDelete: _react3.default.PropTypes.func.isRequired,
        onInputChange: _react3.default.PropTypes.func,
        placeholder: _react3.default.PropTypes.string,
        suggestions: _react3.default.PropTypes.array,
        tags: _react3.default.PropTypes.array
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        allowDeleteFromEmptyInput: true,
        autofocus: false,
        delimeters: [Keys.ENTER, Keys.TAB],
        inline: true,
        labelProp: 'id',
        suggestionProp: 'name',
        minQueryLength: 2,
        placeholder: 'Add tag...',
        suggestions: [],
        tags: []
      };
    }
  }]);

  function TagField(props) {
    _classCallCheck(this, TagField);

    // Set initial state

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TagField).call(this, props));

    _this.state = {
      suggestions: _this.props.suggestions,
      query: '',
      selectedIndex: -1,
      selectionMode: false
    };

    // Methods
    _this.onChange = _this.onChange.bind(_this);
    _this.onKeyDown = _this.onKeyDown.bind(_this);
    _this.onSuggestionClick = _this.onSuggestionClick.bind(_this);
    _this.onSuggestionHover = _this.onSuggestionHover.bind(_this);
    return _this;
  }

  _createClass(TagField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.autofocus) {
        this.refs.input.focus();
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var _this2 = this;

      var suggestions = props.suggestions.filter(function (item) {
        return item[_this2.props.suggestionProp].toLowerCase().search(_this2.state.query.toLowerCase()) === 0;
      });

      this.setState({
        suggestions: suggestions
      });
    }
  }, {
    key: 'onDelete',
    value: function onDelete(i) {
      this.props.onDelete(i);
      this.setState({
        query: ''
      });
    }
  }, {
    key: 'onChange',
    value: function onChange(e) {
      var _this3 = this;

      if (this.props.onInputChange) {
        this.props.onInputChange(e.target.value.trim());
      }

      var query = e.target.value.trim();
      var suggestions = this.props.suggestions.filter(function (item) {
        return item[_this3.props.suggestionProp].toLowerCase().search(query.toLowerCase()) === 0;
      });

      this.setState({
        query: query,
        suggestions: suggestions
      });
    }
  }, {
    key: 'onKeyDown',
    value: function onKeyDown(e) {
      var query = this.state.query;
      var suggestions = this.state.suggestions;

      // hide suggestions menu on escape
      if (e.keyCode === Keys.ESCAPE) {
        e.preventDefault();
        this.setState({
          selectedIndex: -1,
          selectionMode: false,
          suggestions: []
        });
      }

      // When one of the terminating keys is pressed, add current query to the tags.
      // If no text is typed in so far, ignore the action - so we don't end up with a terminating
      // character typed in.
      if (this.props.delimeters.indexOf(e.keyCode) !== -1) {
        e.preventDefault();
        if (query !== '') {
          if (this.state.selectionMode) {
            query = this.state.suggestions[this.state.selectedIndex];
          }
          this.addTag(query);
        }
      }

      // when backspace key is pressed and query is blank, delete tag
      if (e.keyCode === Keys.BACKSPACE && query === '' && this.props.allowDeleteFromEmptyInput) {
        this.onDelete(this.props.tags.length - 1);
      }

      // up arrow
      if (e.keyCode === Keys.UP_ARROW) {
        e.preventDefault();
        var selectedIndex = this.state.selectedIndex;

        // last item, cycle to the top
        if (selectedIndex <= 0) {
          this.setState({
            selectedIndex: this.state.suggestions.length - 1,
            selectionMode: true
          });
        } else {
          this.setState({
            selectedIndex: selectedIndex - 1,
            selectionMode: true
          });
        }
      }

      // down arrow
      if (e.keyCode === Keys.DOWN_ARROW) {
        e.preventDefault();

        this.setState({
          selectedIndex: (this.state.selectedIndex + 1) % suggestions.length,
          selectionMode: true
        });
      }
    }
  }, {
    key: 'onSuggestionClick',
    value: function onSuggestionClick(i) {
      this.addTag(this.state.suggestions[i]);
    }
  }, {
    key: 'onSuggestionHover',
    value: function onSuggestionHover(i) {
      this.setState({
        selectedIndex: i,
        selectionMode: true
      });
    }
  }, {
    key: 'addTag',
    value: function addTag(tag) {
      if (typeof tag === 'string') {
        var id = tag.trim();
        id = _lodash2.default.deburr(id);
        id = _lodash2.default.camelCase(id);
        id = _lodash2.default.replace(id, /\W/g, '');
        id = _lodash2.default.upperFirst(id);

        tag = {
          id: id,
          name: tag
        };
      }

      var input = this.refs.input;

      // Call method to add
      this.props.onAdd(tag);

      // Reset the state
      this.setState({
        query: '',
        selectionMode: false,
        selectedIndex: -1
      });

      // Focus back on the input box
      input.value = '';
      input.focus();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var tags = this.props.tags.map(function (tag, i) {
        return _react3.default.createElement(Tag, { key: tag.id, tag: tag, labelProp: _this4.props.labelProp, onDelete: _this4.onDelete.bind(_this4, i) });
      });

      // Get the suggestions for the given query
      var query = this.state.query.trim();

      var tagInput = _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement('input', { className: 'tagField_input',
          ref: 'input',
          type: 'text',
          placeholder: this.props.placeholder,
          onChange: this.onChange,
          onKeyDown: this.onKeyDown }),
        _react3.default.createElement(Suggestions, { query: query,
          labelProp: this.props.suggestionProp,
          suggestions: this.state.suggestions,
          selectedIndex: this.state.selectedIndex,
          onClick: this.onSuggestionClick,
          onHover: this.onSuggestionHover,
          minQueryLength: this.props.minQueryLength })
      );

      return _react3.default.createElement(
        'div',
        { className: 'tagField' },
        _react3.default.createElement(
          'div',
          { className: 'tagField_selected' },
          tags,
          this.props.inline && tagInput
        ),
        !this.props.inline && tagInput
      );
    }
  }]);

  return TagField;
}(_react3.default.Component));

exports.default = TagField;

var Tag = _wrapComponent('Tag')(function (_React$Component2) {
  _inherits(Tag, _React$Component2);

  function Tag() {
    _classCallCheck(this, Tag);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Tag).apply(this, arguments));
  }

  _createClass(Tag, [{
    key: 'render',
    value: function render() {
      var tag = this.props.tag || {};

      if (!tag.id) {
        return null;
      }

      var label = [this.props.tag[this.props.labelProp]];

      return _react3.default.createElement(
        'div',
        { className: 'tagField_tag' },
        '#',
        label,
        _react3.default.createElement(
          'div',
          { className: 'tagField_remove', onClick: this.props.onDelete },
          _react3.default.createElement(_Icon2.default, { name: 'cross' })
        )
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        labelProp: _react3.default.PropTypes.string,
        onDelete: _react3.default.PropTypes.func.isRequired,
        tag: _react3.default.PropTypes.object.isRequired
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        label: 'name'
      };
    }
  }]);

  return Tag;
}(_react3.default.Component));

var Suggestions = _wrapComponent('Suggestions')(function (_React$Component3) {
  _inherits(Suggestions, _React$Component3);

  function Suggestions() {
    _classCallCheck(this, Suggestions);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Suggestions).apply(this, arguments));
  }

  _createClass(Suggestions, [{
    key: 'markIt',
    value: function markIt(input, query) {
      var escapedRegex = query.trim().replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
      var r = RegExp(escapedRegex, 'gi');

      return { __html: input[this.props.labelProp].replace(r, '<mark>$&</mark>') };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var suggestions = this.props.suggestions.map(function (item, i) {
        return _react3.default.createElement(
          'li',
          { key: i,
            onClick: _this7.props.onClick.bind(null, i),
            onMouseOver: _this7.props.onHover.bind(null, i),
            className: i === _this7.props.selectedIndex ? 'active' : '' },
          _react3.default.createElement('span', { dangerouslySetInnerHTML: _this7.markIt(item, _this7.props.query) })
        );
      });

      var minQueryLength = this.props.minQueryLength || 2;

      if (suggestions.length === 0 || this.props.query.length < minQueryLength) {
        return null;
      }

      return _react3.default.createElement(
        'ul',
        { className: 'tagField_suggestions' },
        suggestions
      );
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        labelProp: _react3.default.PropTypes.string,
        query: _react3.default.PropTypes.string.isRequired,
        selectedIndex: _react3.default.PropTypes.number.isRequired,
        suggestions: _react3.default.PropTypes.array.isRequired,
        onClick: _react3.default.PropTypes.func.isRequired,
        onHover: _react3.default.PropTypes.func.isRequired,
        minQueryLength: _react3.default.PropTypes.number
      };
    }
  }]);

  return Suggestions;
}(_react3.default.Component));