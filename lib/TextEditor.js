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

var _quill = require('quill');

var _quill2 = _interopRequireDefault(_quill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  TextEditor: {
    displayName: 'TextEditor'
  }
};

var _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/TextEditor.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/TextEditor.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2(_UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

// Toolbar
var defaultItems = [{
  label: 'Formats',
  type: 'group',
  items: [{
    label: 'Size',
    type: 'size',
    items: [{ label: 'Normal', value: '1rem' }, { label: 'Small', value: '0.85rem' }, { label: 'Large', value: '1.2rem' }, { label: 'X-Large', value: '2rem' }]
  }, { type: 'separator' }, {
    label: 'Alignment',
    type: 'align',
    items: [{ label: '', value: 'left' }, { label: '', value: 'center' }, { label: '', value: 'right' }, { label: '', value: 'justify' }]
  }]
}, {
  label: 'Text',
  type: 'group',
  items: [{ type: 'bold', label: 'Bold' }, { type: 'italic', label: 'Italic' }, { type: 'strike', label: 'Strike' }, { type: 'underline', label: 'Underline' }, { type: 'separator' }, { type: 'link', label: 'Link' }]
}, {
  label: 'Blocks',
  type: 'group',
  items: [{ type: 'bullet', label: 'Bullet' }, { type: 'separator' }, { type: 'list', label: 'List' }]
}];

var TextEditor = _wrapComponent('TextEditor')(function (_React$Component) {
  _inherits(TextEditor, _React$Component);

  _createClass(TextEditor, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        id: _react3.default.PropTypes.string,
        className: _react3.default.PropTypes.string,
        children: _react3.default.PropTypes.object,
        style: _react3.default.PropTypes.object,
        value: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.string, _react3.default.PropTypes.number]),
        defaultValue: _react3.default.PropTypes.string,
        readOnly: _react3.default.PropTypes.bool,
        modules: _react3.default.PropTypes.object,
        toolbar: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.array, _react3.default.PropTypes.oneOf([false])]),
        formats: _react3.default.PropTypes.array,
        styles: _react3.default.PropTypes.oneOfType([_react3.default.PropTypes.object, _react3.default.PropTypes.oneOf([false])]),
        theme: _react3.default.PropTypes.string,
        pollInterval: _react3.default.PropTypes.number,
        onKeyPress: _react3.default.PropTypes.func,
        onKeyDown: _react3.default.PropTypes.func,
        onKeyUp: _react3.default.PropTypes.func,
        onChange: _react3.default.PropTypes.func,
        onChangeSelection: _react3.default.PropTypes.func
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        value: '',
        className: '',
        theme: 'snow',
        modules: {
          'link-tooltip': true
        }
      };
    }
  }]);

  function TextEditor(props) {
    _classCallCheck(this, TextEditor);

    // Methods

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextEditor).call(this, props));

    _this.getToolbar = _this.getToolbar.bind(_this);
    _this.getEditorConfig = _this.getEditorConfig.bind(_this);
    _this.setCustomFormats = _this.setCustomFormats.bind(_this);
    _this.isControlled = _this.isControlled.bind(_this);
    _this.getEditorContents = _this.getEditorContents.bind(_this);
    _this.onEditorChange = _this.onEditorChange.bind(_this);
    _this.onEditorChangeSelection = _this.onEditorChangeSelection.bind(_this);

    // Toolbar
    _this.renderItem = _this.renderItem.bind(_this);
    _this.renderSeparator = _this.renderSeparator.bind(_this);
    _this.renderGroup = _this.renderGroup.bind(_this);
    _this.renderChoiceItem = _this.renderChoiceItem.bind(_this);
    _this.renderChoices = _this.renderChoices.bind(_this);
    _this.renderAction = _this.renderAction.bind(_this);

    // State
    _this.state = {
      value: _this.isControlled() ? _this.props.value : _this.props.defaultValue
    };
    return _this;
  }

  _createClass(TextEditor, [{
    key: 'isControlled',
    value: function isControlled() {
      return 'value' in this.props;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      var editor = this.editor;
      // If the component is unmounted and mounted too quickly
      // an error is thrown in setEditorContents since editor is
      // still undefined. Must check if editor is undefined
      // before performing this call.

      if (editor) {
        // Update only if we've been passed a new `value`.
        // This leaves components using `defaultValue` alone.
        if ('value' in props) {
          // NOTE: Seeing that Quill is missing a way to prevent
          //       edits, we have to settle for a hybrid between
          //       controlled and uncontrolled mode. We can't prevent
          //       the change, but we'll still override content
          //       whenever `value` differs from current state.
          if (props.value !== this.getEditorContents()) {
            this.setEditorContents(editor, props.value);
          }
        }

        // We can update readOnly state in-place.
        if ('readOnly' in props) {
          if (props.readOnly !== this.props.readOnly) {
            this.setEditorReadOnly(editor, props.readOnly);
          }
        }
      }
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      var config = this.getEditorConfig();
      this.editor = new _quill2.default(this.refs.editor, config);
      this.hookEditor(this.editor);
      this.setCustomFormats(this.editor);
      this.setEditorContents(this.editor, this.state.value);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.editor) {
        this.editor.destroy();
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(props) {
      var dirtyProps = this.dirtyProps || [];

      // Check if one of the changes should trigger a re-render.
      for (var g = 0, l = dirtyProps.length; g < l; g++) {
        var prop = dirtyProps[g];

        if (props[prop] !== this.props[prop]) {
          return true;
        }
      }

      // Never re-render otherwise.
      return false;
    }

    /*
     If for whatever reason we are rendering again,
     we should tear down the editor and bring it up
     again.
     */

  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate() {
      this.componentWillUnmount();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.componentDidMount();
    }

    // Toolbar

  }, {
    key: 'renderSeparator',
    value: function renderSeparator(key) {
      return _react3.default.createElement('span', { key: key, className: 'ql-format-separator' });
    }
  }, {
    key: 'renderGroup',
    value: function renderGroup(item, key) {
      return _react3.default.createElement(
        'span',
        { key: item.label || key, className: 'ql-format-group' },
        item.items.map(this.renderItem)
      );
    }
  }, {
    key: 'renderChoiceItem',
    value: function renderChoiceItem(item, key) {
      return _react3.default.createElement(
        'option',
        { key: item.label || item.value || key, value: item.value },
        item.label
      );
    }
  }, {
    key: 'renderChoices',
    value: function renderChoices(item, key) {
      return _react3.default.createElement(
        'select',
        { key: item.label || key, title: item.label, className: 'ql-' + item.type },
        item.items.map(this.renderChoiceItem)
      );
    }
  }, {
    key: 'renderAction',
    value: function renderAction(item, key) {
      return _react3.default.createElement(
        'span',
        { key: item.label || item.value || key,
          className: 'ql-format-button ql-' + item.type,
          title: item.label },
        item.children
      );
    }
  }, {
    key: 'renderItem',
    value: function renderItem(item, key) {
      switch (item.type) {
        case 'separator':
          return this.renderSeparator(key);
        case 'group':
          return this.renderGroup(item, key);
        case 'font':
        case 'align':
        case 'size':
        case 'color':
        case 'background':
          return this.renderChoices(item, key);
        default:
          return this.renderAction(item, key);
      }
    }

    // Editor

  }, {
    key: 'hookEditor',
    value: function hookEditor(editor) {
      editor.on('text-change', function (delta, source) {
        if (this.onEditorChange) {
          this.onEditorChange(editor.getHTML(), delta, source);
        }
      }.bind(this));

      editor.on('selection-change', function (range, source) {
        if (this.onEditorChangeSelection) {
          this.onEditorChangeSelection(range, source);
        }
      }.bind(this));
    }
  }, {
    key: 'setEditorReadOnly',
    value: function setEditorReadOnly(editor, value) {
      value ? editor.editor.disable() : editor.editor.enable();
    }

    /*
     Replace the contents of the editor, but keep
     the previous selection hanging around so that
     the cursor won't move.
     */

  }, {
    key: 'setEditorContents',
    value: function setEditorContents(editor, value) {
      var sel = editor.getSelection();
      editor.setHTML(value || '');

      if (sel) {
        this.setEditorSelection(editor, sel);
      }
    }
  }, {
    key: 'setEditorSelection',
    value: function setEditorSelection(editor, range) {
      if (range) {
        // Validate bounds before applying.
        var length = editor.getLength();
        range.start = Math.max(0, Math.min(range.start, length - 1));
        range.end = Math.max(range.start, Math.min(range.end, length - 1));
      }

      editor.setSelection(range);
    }
  }, {
    key: 'setCustomFormats',
    value: function setCustomFormats(editor) {
      if (!this.props.formats) {
        return;
      }

      for (var g = 0, l = this.props.formats.length; g < l; g++) {
        var format = this.props.formats[g];
        editor.addFormat(format.name || format, format);
      }
    }
  }, {
    key: 'getEditorConfig',
    value: function getEditorConfig() {
      var config = {
        readOnly: this.props.readOnly,
        theme: this.props.theme,
        // Let Quill set the defaults, if no formats supplied
        formats: this.props.formats ? [] : undefined,
        styles: this.props.styles,
        modules: this.props.modules,
        pollInterval: this.props.pollInterval
      };

      // Unless we're redefining the toolbar, or it has been explicitly
      // disabled, attach to the default one as a ref.
      if (this.props.toolbar !== false && !config.modules.toolbar) {
        // Don't mutate the original modules
        // because it's shared between components.
        config.modules = JSON.parse(JSON.stringify(config.modules));
        config.modules.toolbar = {
          container: this.refs.toolbar
        };
      }

      return config;
    }
  }, {
    key: 'getEditorContents',
    value: function getEditorContents() {
      return this.state.value;
    }
  }, {
    key: 'getToolbar',
    value: function getToolbar() {
      if (this.props.toolbar !== false) {
        var items = this.props.toolbar || defaultItems;
        var children = items.map(this.renderItem);
        var html = children.map(function (item) {
          return _react3.default.createElement(item.type, _extends({ key: item.key, ref: item.ref }, item.props));
        });

        return _react3.default.createElement(
          'div',
          { key: 'ql-toolbar-' + Math.random(), ref: 'toolbar', className: 'quill-toolbar' },
          html
        );
      } else {
        return false;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        {
          id: this.props.id,
          style: this.props.style,
          className: this.props.className,
          onKeyPress: this.props.onKeyPress,
          onKeyDown: this.props.onKeyDown,
          onKeyUp: this.props.onKeyUp,
          onChange: this.preventDefault },
        this.getToolbar(),
        _react3.default.createElement('div', {
          key: 'editor-' + Math.random(),
          ref: 'editor',
          className: 'textEditor-contents',
          dangerouslySetInnerHTML: { __html: this.getEditorContents() } })
      );
    }
  }, {
    key: 'onEditorChange',
    value: function onEditorChange(value, delta, source) {
      if (value !== this.getEditorContents()) {
        this.setState({ value: value });

        if (this.props.onChange) {
          this.props.onChange(value, delta, source);
        }
      }
    }
  }, {
    key: 'onEditorChangeSelection',
    value: function onEditorChangeSelection(range, source) {
      var s = this.state.selection || {};
      var r = range || {};

      if (r.start !== s.start || r.end !== s.end) {
        this.setState({ selection: range });

        if (this.props.onChangeSelection) {
          this.props.onChangeSelection(range, source);
        }
      }
    }
  }, {
    key: 'focus',
    value: function focus() {
      this.editor.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.setEditorSelection(this.editor, null);
    }

    /*
     Stop change events from the toolbar from
     bubbling up outside.
     */

  }, {
    key: 'preventDefault',
    value: function preventDefault(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  }]);

  return TextEditor;
}(_react3.default.Component));

exports.default = TextEditor;