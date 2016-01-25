import React from 'react';
import SideBar from 'components/SideBar';
import Container from 'components/Container';
import Box from 'components/Box';
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
      <Container className='test'>
        <SideBar items={this.state.sideBar} width={250} />
        <Box>
          {this.props.children}
        </Box>
      </Container>
    );
  }
}
