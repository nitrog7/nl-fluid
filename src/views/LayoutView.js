import React from 'react';
import { AppStore } from 'stores';
import View from 'views/View';
import * as components  from 'components';

const {
  Box,
  Container,
  Footer,
  NavBar,
  SideBar
  } = components;

export default class LayoutView extends View {
  static propTypes() {
    return {
      children: React.PropTypes.object
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      menu: []
    }
  }

  componentWillMount() {
    this.setState({
      menu: AppStore.getData('siteMenu')
    });
  }

  render() {
    return (
      <Box direction="column">
        <NavBar items={this.state.menu} active={this.props.location.pathname} />
        <Container className="demo" type="fluid" hasNav>
          <SideBar items={this.state.menu} width={250} active={this.props.location.pathname} />
          <Box>
            {this.props.children}
          </Box>
        </Container>
        <Footer items={this.state.menu} cols={2} active={this.props.location.pathname} />
      </Box>
    );
  }
}
