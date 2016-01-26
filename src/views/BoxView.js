import React from 'react';
import View from 'views/View';
import * as components  from 'components';

const {
  Box,
  Code,
  Container
  } = components;

export default class BoxView extends View {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('boxView', this);
  }

  render() {
    return (
      <Container direction="column">
        <h1>Box</h1>
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
