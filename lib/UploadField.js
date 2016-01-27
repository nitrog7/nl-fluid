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

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  UploadField: {
    displayName: 'UploadField'
  }
};

var _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/UploadField.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/grosales/dev/nl-fluid/src/components/UploadField.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersGrosalesDevNlFluidNode_modulesReactTransformHmrLibIndexJs2(_UsersGrosalesDevNlFluidNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var UploadField = _wrapComponent('UploadField')(function (_React$Component) {
  _inherits(UploadField, _React$Component);

  _createClass(UploadField, null, [{
    key: 'propTypes',
    get: function get() {
      return {
        onDrop: _react3.default.PropTypes.func,
        onDropAccepted: _react3.default.PropTypes.func,
        onDropRejected: _react3.default.PropTypes.func,
        onDragEnter: _react3.default.PropTypes.func,
        onDragLeave: _react3.default.PropTypes.func,

        children: _react3.default.PropTypes.node,
        style: _react3.default.PropTypes.object,
        activeStyle: _react3.default.PropTypes.object,
        rejectStyle: _react3.default.PropTypes.object,
        className: _react3.default.PropTypes.string,

        disablePreview: _react3.default.PropTypes.bool,
        disableClick: _react3.default.PropTypes.bool,

        inputProps: _react3.default.PropTypes.object,
        multiple: _react3.default.PropTypes.bool,
        accept: _react3.default.PropTypes.string,
        name: _react3.default.PropTypes.string
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        disablePreview: false,
        disableClick: false,
        multiple: true
      };
    }
  }]);

  function UploadField(props) {
    _classCallCheck(this, UploadField);

    // Set initial state

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(UploadField).call(this, props));

    _this.state = {
      isDragActive: false
    };

    // Methods
    _this.getStyles = _this.getStyles.bind(_this);
    _this.onClick = _this.onClick.bind(_this);
    _this.onDragEnter = _this.onDragEnter.bind(_this);
    _this.onDragLeave = _this.onDragLeave.bind(_this);
    _this.onDragOver = _this.onDragOver.bind(_this);
    _this.onDrop = _this.onDrop.bind(_this);
    return _this;
  }

  _createClass(UploadField, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.enterCounter = 0;
    }
  }, {
    key: 'onDragEnter',
    value: function onDragEnter(e) {
      e.preventDefault();

      // Count the dropzone and any children that are entered.
      ++this.enterCounter;

      // This is tricky. During the drag even the dataTransfer.files is null
      // But Chrome implements some drag store, which is accesible via dataTransfer.items
      var dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

      // Now we need to convert the DataTransferList to Array
      var allFilesAccepted = this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));

      this.setState({
        isDragActive: allFilesAccepted,
        isDragReject: !allFilesAccepted
      });

      if (this.props.onDragEnter) {
        this.props.onDragEnter.call(this, e);
      }
    }
  }, {
    key: 'onDragOver',
    value: function onDragOver(e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, {
    key: 'onDragLeave',
    value: function onDragLeave(e) {
      e.preventDefault();

      // Only deactivate once the dropzone and all children was left.
      if (--this.enterCounter > 0) {
        return;
      }

      this.setState({
        isDragActive: false,
        isDragReject: false
      });

      if (this.props.onDragLeave) {
        this.props.onDragLeave.call(this, e);
      }
    }
  }, {
    key: 'onDrop',
    value: function onDrop(e) {
      var _this2 = this;

      e.preventDefault();

      // Reset the counter along with the drag on a drop.
      this.enterCounter = 0;

      this.setState({
        isDragActive: false,
        isDragReject: false
      });

      var droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
      var max = this.props.multiple ? droppedFiles.length : 1;
      var files = [];

      var _loop = function _loop(g) {
        var file = droppedFiles[g];

        // We might want to disable the preview creation to support big files
        if (!_this2.props.disablePreview) {
          file.preview = window.URL.createObjectURL(file);
        }

        // Convert to Base64
        var reader = new FileReader();
        reader.onload = function (upload) {
          file.base64 = upload.target.result;
        };
        reader.readAsDataURL(file);

        // Add to array
        files.push(file);
      };

      for (var g = 0; g < max; g++) {
        _loop(g);
      }

      console.log('files', files);
      if (this.props.onDrop) {
        this.props.onDrop.call(this, files, e);
      }

      if (this.allFilesAccepted(files)) {
        if (this.props.onDropAccepted) {
          this.props.onDropAccepted.call(this, files, e);
        }
      } else {
        if (this.props.onDropRejected) {
          this.props.onDropRejected.call(this, files, e);
        }
      }
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      if (!this.props.disableClick) {
        this.open();
      }
    }
  }, {
    key: 'allFilesAccepted',
    value: function allFilesAccepted(files) {
      var _this3 = this;

      return files.every(function (file) {
        return _this3.accepts(file, _this3.props.accept);
      });
    }
  }, {
    key: 'accepts',
    value: function accepts(file, acceptedFiles) {
      if (file && acceptedFiles) {
        var _ret2 = function () {
          var acceptedFilesArray = acceptedFiles.split(',');
          var fileName = file.name || '';
          var mimeType = file.type || '';
          var baseMimeType = mimeType.replace(/\/.*$/, '');

          return {
            v: _lodash2.default.some(acceptedFilesArray, function (type) {
              var validType = type.trim();

              if (validType.charAt(0) === '.') {
                return _lodash2.default.endsWith(fileName.toLowerCase(), validType.toLowerCase());
              } else if (/\/\*$/.test(validType)) {
                // This is something like a image/* mime type
                return baseMimeType === validType.replace(/\/.*$/, '');
              }

              return mimeType === validType;
            })
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      }

      return true;
    }
  }, {
    key: 'open',
    value: function open() {
      this.fileInputEl.value = null;
      this.fileInputEl.click();
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var cls = ['uploadField'];

      if (this.state.isDragActive) {
        cls.push('uploadField-active');
      } else if (this.state.isDragReject) {
        cls.push('uploadField-rejected');
      }

      return cls.join(' ');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _props = this.props;
      var accept = _props.accept;
      var inputProps = _props.inputProps;
      var multiple = _props.multiple;
      var name = _props.name;

      var inputAttributes = {
        accept: accept,
        multiple: multiple,
        type: 'file',
        ref: function ref(el) {
          return _this4.fileInputEl = el;
        },
        onChange: this.onDrop
      };

      if (name && name.length) {
        inputAttributes.name = name;
      }

      return _react3.default.createElement(
        'div',
        {
          className: this.getStyles(),
          onClick: this.onClick,
          onDragEnter: this.onDragEnter,
          onDragOver: this.onDragOver,
          onDragLeave: this.onDragLeave,
          onDrop: this.onDrop },
        this.props.children,
        _react3.default.createElement('input', _extends({}, inputProps, inputAttributes))
      );
    }
  }]);

  return UploadField;
}(_react3.default.Component));

exports.default = UploadField;