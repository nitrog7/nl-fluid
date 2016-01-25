import React from 'react';
import _ from 'lodash';

class UploadField extends React.Component {
  static get propTypes() {
    return {
      onDrop: React.PropTypes.func,
      onDropAccepted: React.PropTypes.func,
      onDropRejected: React.PropTypes.func,
      onDragEnter: React.PropTypes.func,
      onDragLeave: React.PropTypes.func,

      children: React.PropTypes.node,
      style: React.PropTypes.object,
      activeStyle: React.PropTypes.object,
      rejectStyle: React.PropTypes.object,
      className: React.PropTypes.string,

      disablePreview: React.PropTypes.bool,
      disableClick: React.PropTypes.bool,

      inputProps: React.PropTypes.object,
      multiple: React.PropTypes.bool,
      accept: React.PropTypes.string,
      name: React.PropTypes.string
    }
  }

  static get defaultProps() {
    return {
      disablePreview: false,
      disableClick: false,
      multiple: true
    };
  }

  constructor(props) {
    super(props);

    // Set initial state
    this.state = {
      isDragActive: false
    };

    // Methods
    this.getStyles = this.getStyles.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onDragEnter = this.onDragEnter.bind(this);
    this.onDragLeave = this.onDragLeave.bind(this);
    this.onDragOver = this.onDragOver.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    this.enterCounter = 0;
  }

  onDragEnter(e) {
    e.preventDefault();

    // Count the dropzone and any children that are entered.
    ++this.enterCounter;

    // This is tricky. During the drag even the dataTransfer.files is null
    // But Chrome implements some drag store, which is accesible via dataTransfer.items
    const dataTransferItems = e.dataTransfer && e.dataTransfer.items ? e.dataTransfer.items : [];

    // Now we need to convert the DataTransferList to Array
    const allFilesAccepted = this.allFilesAccepted(Array.prototype.slice.call(dataTransferItems));

    this.setState({
      isDragActive: allFilesAccepted,
      isDragReject: !allFilesAccepted
    });

    if(this.props.onDragEnter) {
      this.props.onDragEnter.call(this, e);
    }
  }

  onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    return false;
  }

  onDragLeave(e) {
    e.preventDefault();

    // Only deactivate once the dropzone and all children was left.
    if(--this.enterCounter > 0) {
      return;
    }

    this.setState({
      isDragActive: false,
      isDragReject: false
    });

    if(this.props.onDragLeave) {
      this.props.onDragLeave.call(this, e);
    }
  }

  onDrop(e) {
    e.preventDefault();

    // Reset the counter along with the drag on a drop.
    this.enterCounter = 0;

    this.setState({
      isDragActive: false,
      isDragReject: false
    });

    const droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
    const max = this.props.multiple ? droppedFiles.length : 1;
    const files = [];

    for(let g = 0; g < max; g++) {
      const file = droppedFiles[g];

      // We might want to disable the preview creation to support big files
      if(!this.props.disablePreview) {
        file.preview = window.URL.createObjectURL(file);
      }

      // Convert to Base64
      let reader = new FileReader();
      reader.onload = upload => {
        file.base64 = upload.target.result;
      };
      reader.readAsDataURL(file);

      // Add to array
      files.push(file);
    }

    console.log('files', files);
    if(this.props.onDrop) {
      this.props.onDrop.call(this, files, e);
    }

    if(this.allFilesAccepted(files)) {
      if(this.props.onDropAccepted) {
        this.props.onDropAccepted.call(this, files, e);
      }
    } else {
      if(this.props.onDropRejected) {
        this.props.onDropRejected.call(this, files, e);
      }
    }
  }

  onClick() {
    if(!this.props.disableClick) {
      this.open();
    }
  }

  allFilesAccepted(files) {
    return files.every(file => this.accepts(file, this.props.accept));
  }

  accepts(file, acceptedFiles) {
    if(file && acceptedFiles) {
      const acceptedFilesArray = acceptedFiles.split(',');
      const fileName = file.name || '';
      const mimeType = file.type || '';
      const baseMimeType = mimeType.replace(/\/.*$/, '');

      return _.some(acceptedFilesArray, type => {
        const validType = type.trim();

        if(validType.charAt(0) === '.') {
          return _.endsWith(fileName.toLowerCase(), validType.toLowerCase());
        } else if(/\/\*$/.test(validType)) {
          // This is something like a image/* mime type
          return baseMimeType === validType.replace(/\/.*$/, '');
        }

        return mimeType === validType;
      });
    }

    return true;
  }

  open() {
    this.fileInputEl.value = null;
    this.fileInputEl.click();
  }

  getStyles() {
    let cls = ['uploadField'];

    if(this.state.isDragActive) {
      cls.push('uploadField-active');
    }
    else if(this.state.isDragReject) {
      cls.push('uploadField-rejected');
    }

    return cls.join(' ');
  }

  render() {
    const {
      accept,
      inputProps,
      multiple,
      name
      } = this.props;

    const inputAttributes = {
      accept,
      multiple,
      type: 'file',
      ref: el => this.fileInputEl = el,
      onChange: this.onDrop
    };

    if(name && name.length) {
      inputAttributes.name = name;
    }

    return (
      <div
        className={this.getStyles()}
        onClick={this.onClick}
        onDragEnter={this.onDragEnter}
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}>
        {this.props.children}
        <input
          {...inputProps}
          {...inputAttributes}
        />
      </div>
    );
  }
}

export default UploadField;
