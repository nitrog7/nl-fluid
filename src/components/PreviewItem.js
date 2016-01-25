import React from 'react';
import Icon from 'components/Icon';

class PreviewItem extends React.Component {
  static get propTypes() {
    return {
      src: React.PropTypes.string,
      index: React.PropTypes.number,
      onClick: React.PropTypes.func
    };
  }

  static get defaultProps() {
    return {
      index: 0
    };
  }

  constructor(props) {
    super(props);

    // Methods
    this.onClick = this.onClick.bind(this);
  }

  onClick(e) {
    e.stopPropagation();
    this.props.onClick(this.props.index);
  }

  render() {
    return (
      <div
        onClick={this.onClick}
        className="previewItem"
        style={{backgroundImage:'url(' + this.props.src + ')'}}>
        <div className="previewItem_remove">
          <Icon name="cross"/>
        </div>
      </div>
    );
  }
}

export default PreviewItem;
