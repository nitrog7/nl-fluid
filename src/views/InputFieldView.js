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

    // Methods
    this.onChange = this.onChange.bind(this);
  }

  onChange(e, value, name) {
    let values = {};
    values[name] = value;

    this.setState(values);
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
        <Box type="align-top">
          <InputField name="demo" type="text" value={this.state.demo} onChange={this.onChange} />
          <p>{this.state.demo}</p>
        </Box>

        <Box type="align-top">
          <h3>Username</h3>
          <InputField name="username" type="username" value={this.state.username} onChange={this.onChange} />
        </Box>

        <Box type="align-top">
          <h3>Password</h3>
          <InputField name="password" type="password" value={this.state.password} onChange={this.onChange} />
        </Box>

        <Box type="align-top">
          <h3>Email</h3>
          <InputField name="email" type="email" value={this.state.email} onChange={this.onChange} />
        </Box>
      </Container>
    );
  }
}
