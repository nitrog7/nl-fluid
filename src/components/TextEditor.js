import React from 'react';
import Quill from 'quill';

// Toolbar
let defaultItems = [
  {
    label: 'Formats',
    type: 'group',
    items: [
      {
        label: 'Size',
        type: 'size',
        items: [
          {label: 'Normal', value: '1rem'},
          {label: 'Small', value: '0.85rem'},
          {label: 'Large', value: '1.2rem'},
          {label: 'X-Large', value: '2rem'}
        ]
      },
      {type: 'separator'},
      {
        label: 'Alignment',
        type: 'align',
        items: [
          {label: '', value: 'left'},
          {label: '', value: 'center'},
          {label: '', value: 'right'},
          {label: '', value: 'justify'}
        ]
      }
    ]
  },
  {
    label: 'Text',
    type: 'group',
    items: [
      {type: 'bold', label: 'Bold'},
      {type: 'italic', label: 'Italic'},
      {type: 'strike', label: 'Strike'},
      {type: 'underline', label: 'Underline'},
      {type: 'separator'},
      {type: 'link', label: 'Link'}
    ]
  },
  {
    label: 'Blocks',
    type: 'group',
    items: [
      {type: 'bullet', label: 'Bullet'},
      {type: 'separator'},
      {type: 'list', label: 'List'}
    ]
  }
];

export default class TextEditor extends React.Component {
  static get propTypes() {
    return {
      id: React.PropTypes.string,
      className: React.PropTypes.string,
      children: React.PropTypes.object,
      style: React.PropTypes.object,
      value: React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.number]),
      defaultValue: React.PropTypes.string,
      readOnly: React.PropTypes.bool,
      modules: React.PropTypes.object,
      toolbar: React.PropTypes.oneOfType([React.PropTypes.array, React.PropTypes.oneOf([false])]),
      formats: React.PropTypes.array,
      styles: React.PropTypes.oneOfType([React.PropTypes.object, React.PropTypes.oneOf([false])]),
      theme: React.PropTypes.string,
      pollInterval: React.PropTypes.number,
      onKeyPress: React.PropTypes.func,
      onKeyDown: React.PropTypes.func,
      onKeyUp: React.PropTypes.func,
      onChange: React.PropTypes.func,
      onChangeSelection: React.PropTypes.func
    }
  }

  static get defaultProps() {
    return {
      value: '',
      className: '',
      theme: 'snow',
      modules: {
        'link-tooltip': true
      }
    };
  }

  constructor(props) {
    super(props);

    // Methods
    this.getToolbar = this.getToolbar.bind(this);
    this.getEditorConfig = this.getEditorConfig.bind(this);
    this.setCustomFormats = this.setCustomFormats.bind(this);
    this.isControlled = this.isControlled.bind(this);
    this.getEditorContents = this.getEditorContents.bind(this);
    this.onEditorChange = this.onEditorChange.bind(this);
    this.onEditorChangeSelection = this.onEditorChangeSelection.bind(this);

    // Toolbar
    this.renderItem = this.renderItem.bind(this);
    this.renderSeparator = this.renderSeparator.bind(this);
    this.renderGroup = this.renderGroup.bind(this);
    this.renderChoiceItem = this.renderChoiceItem.bind(this);
    this.renderChoices = this.renderChoices.bind(this);
    this.renderAction = this.renderAction.bind(this);

    // State
    this.state = {
      value: this.isControlled() ? this.props.value : this.props.defaultValue
    };
  }

  isControlled() {
    return 'value' in this.props;
  }

  componentWillReceiveProps(props) {
    let editor = this.editor;
    // If the component is unmounted and mounted too quickly
    // an error is thrown in setEditorContents since editor is
    // still undefined. Must check if editor is undefined
    // before performing this call.

    if(editor) {
      // Update only if we've been passed a new `value`.
      // This leaves components using `defaultValue` alone.
      if('value' in props) {
        // NOTE: Seeing that Quill is missing a way to prevent
        //       edits, we have to settle for a hybrid between
        //       controlled and uncontrolled mode. We can't prevent
        //       the change, but we'll still override content
        //       whenever `value` differs from current state.
        if(props.value !== this.getEditorContents()) {
          this.setEditorContents(editor, props.value);
        }
      }

      // We can update readOnly state in-place.
      if('readOnly' in props) {
        if(props.readOnly !== this.props.readOnly) {
          this.setEditorReadOnly(editor, props.readOnly);
        }
      }
    }
  }

  componentDidMount() {
    let config = this.getEditorConfig();
    this.editor = new Quill(this.refs.editor, config);
    this.hookEditor(this.editor);
    this.setCustomFormats(this.editor);
    this.setEditorContents(this.editor, this.state.value);
  }

  componentWillUnmount() {
    if(this.editor) {
      this.editor.destroy();
    }
  }

  shouldComponentUpdate(props) {
    let dirtyProps = this.dirtyProps || [];

    // Check if one of the changes should trigger a re-render.
    for(let g = 0, l = dirtyProps.length; g < l; g++) {
      let prop = dirtyProps[g];

      if(props[prop] !== this.props[prop]) {
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
  componentWillUpdate() {
    this.componentWillUnmount();
  }

  componentDidUpdate() {
    this.componentDidMount();
  }

  // Toolbar

  renderSeparator(key) {
    return <span key={key} className="ql-format-separator"></span>;
  }

  renderGroup(item, key) {
    return <span key={item.label || key} className="ql-format-group">{item.items.map(this.renderItem)}</span>;
  }

  renderChoiceItem(item, key) {
    return <option key={item.label || item.value || key} value={item.value}>{item.label}</option>;
  }

  renderChoices(item, key) {
    return (
      <select key={item.label || key} title={item.label} className={'ql-' + item.type}>
        {item.items.map(this.renderChoiceItem)}
      </select>
    );
  }

  renderAction(item, key) {
    return (
      <span key={item.label || item.value || key}
        className={'ql-format-button ql-' + item.type}
        title={item.label}>
        {item.children}
      </span>
    );
  }

  renderItem(item, key) {
    switch(item.type) {
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
  hookEditor(editor) {
    editor.on('text-change', function(delta, source) {
      if(this.onEditorChange) {
        this.onEditorChange(editor.getHTML(), delta, source);
      }
    }.bind(this));

    editor.on('selection-change', function(range, source) {
      if(this.onEditorChangeSelection) {
        this.onEditorChangeSelection(range, source);
      }
    }.bind(this));
  }

  setEditorReadOnly(editor, value) {
    value ? editor.editor.disable() : editor.editor.enable();
  }

  /*
   Replace the contents of the editor, but keep
   the previous selection hanging around so that
   the cursor won't move.
   */
  setEditorContents(editor, value) {
    let sel = editor.getSelection();
    editor.setHTML(value || '');

    if(sel) {
      this.setEditorSelection(editor, sel);
    }
  }

  setEditorSelection(editor, range) {
    if(range) {
      // Validate bounds before applying.
      let length = editor.getLength();
      range.start = Math.max(0, Math.min(range.start, length - 1));
      range.end = Math.max(range.start, Math.min(range.end, length - 1));
    }

    editor.setSelection(range);
  }

  setCustomFormats(editor) {
    if(!this.props.formats) {
      return;
    }

    for(let g = 0, l = this.props.formats.length; g < l; g++) {
      let format = this.props.formats[g];
      editor.addFormat(format.name || format, format);
    }
  }

  getEditorConfig() {
    let config = {
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
    if(this.props.toolbar !== false && !config.modules.toolbar) {
      // Don't mutate the original modules
      // because it's shared between components.
      config.modules = JSON.parse(JSON.stringify(config.modules));
      config.modules.toolbar = {
        container: this.refs.toolbar
      };
    }

    return config;
  }

  getEditorContents() {
    return this.state.value;
  }

  getToolbar() {
    if(this.props.toolbar !== false) {
      let items = this.props.toolbar || defaultItems;
      let children = items.map(this.renderItem);
      let html = children.map(item => {
        return <item.type key={item.key} ref={item.ref} {...item.props}></item.type>;
      });

      return (
        <div key={'ql-toolbar-' + Math.random()} ref="toolbar" className="quill-toolbar">{html}</div>
      );
    } else {
      return false;
    }
  }

  render() {
    return (
      <div
        id={this.props.id}
        style={this.props.style}
        className={this.props.className}
        onKeyPress={this.props.onKeyPress}
        onKeyDown={this.props.onKeyDown}
        onKeyUp={this.props.onKeyUp}
        onChange={this.preventDefault}>

        {this.getToolbar()}

        <div
          key={'editor-' + Math.random()}
          ref="editor"
          className="textEditor-contents"
          dangerouslySetInnerHTML={{__html: this.getEditorContents()}}></div>
      </div>
    );
  }

  onEditorChange(value, delta, source) {
    if(value !== this.getEditorContents()) {
      this.setState({value});

      if(this.props.onChange) {
        this.props.onChange(value, delta, source);
      }
    }
  }

  onEditorChangeSelection(range, source) {
    let s = this.state.selection || {};
    let r = range || {};

    if(r.start !== s.start || r.end !== s.end) {
      this.setState({selection: range});

      if(this.props.onChangeSelection) {
        this.props.onChangeSelection(range, source);
      }
    }
  }

  focus() {
    this.editor.focus();
  }

  blur() {
    this.setEditorSelection(this.editor, null);
  }

  /*
   Stop change events from the toolbar from
   bubbling up outside.
   */
  preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
  }
}
