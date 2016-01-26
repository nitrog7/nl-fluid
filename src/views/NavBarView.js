import React from 'react';
import * as components  from 'components';

const {
  Box,
  Code,
  Component,
  Container
  } = components;

export default class NavBarView extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
      <Container direction="column">
        <h1>NavBar</h1>
        <p>&nbsp;</p>

        <h3>Default</h3>
        <Code>
          <span className="code_comment">// Default</span><br/>
          &lt;Box&gt;&lt;/Box&gt;<br/>
        </Code>
        <Box>Test</Box>
      </Container>
    );
  }
}
