import React from 'react';
import * as components  from 'components';

const {
  Code,
  Component,
  Container,
  Form
  } = components;

export default class FormView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {label: 'Demo Field:', name: 'demo', type: 'text'},
        {label: 'Email:', name: 'email', type: 'email'},
      ]
    };

    // Methods
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit() {
  }

  render() {
    return (
      <Container direction="column">
        <h1>Form</h1>
        <p>&nbsp;</p>

        <h3>Default</h3>
        <Code>
          <span className="code_comment">// Default</span><br/>
          &lt;Box&gt;&lt;/Box&gt;<br/>
        </Code>
        <Form items={this.state.items} />
        <p>{this.state.demo}</p>
      </Container>
    );
  }
}
