import React from 'react';
import * as components  from 'components';

const {
  Container
  } = components;

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container direction="column">
        <h1>NL Fluid</h1>
        <p>ReactJS Components</p>
      </Container>
    );
  }
}
