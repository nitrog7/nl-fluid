import React from 'react';
import * as components  from 'components';

const {
  Box,
  Code,
  Component,
  Container,
  InputField
  } = components;

export default class InputFieldView extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
      <Container direction="column">
        <h1>InputField</h1>
        <p>&nbsp;</p>

        <h3>Default</h3>
        <Code>
          <span className="code_comment">// Default</span><br/>
          &lt;Box&gt;&lt;/Box&gt;<br/>
        </Code>
        <Box type="align-left">
          <InputField type="user" />
        </Box>
      </Container>
    );
  }
}
