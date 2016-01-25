import React from 'react';
import SideBar from 'components/SideBar';
import { AppStore } from 'stores/index';

export default class LayoutView extends React.Component {
  static propTypes() {
    return {
      children: React.PropTypes.object,
      route: React.PropTypes.object,
      routes: React.PropTypes.array
    };
  }

  static defaultProps() {
    return {
      route: {},
      routes: []
    };
  }

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.setState({
      sideBar: AppStore.getData('componentMenu')
    });
  }

  render() {
    return (
      <div className="container-fluid container-nav page page-layout">
        <SideBar items={this.state.sideBar} />
        <div className="view-sideBar-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
