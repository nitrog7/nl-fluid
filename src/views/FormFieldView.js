import React from 'react';
import * as components  from 'components';

const {
  Code,
  Component,
  Container,
  FormField
  } = components;

export default class FormFieldView extends Component {
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
        <h1>FormField</h1>
        <p>&nbsp;</p>

        <h3>Default</h3>
        <Code>
          <span className="code_comment">// Default</span><br/>
          &lt;Box&gt;&lt;/Box&gt;<br/>
        </Code>
        <FormField label="Demo Field:" name="demo" type="text" value={this.state.demo} onChange={this.onChange} />
        <p>{this.state.demo}</p>
        <FormField label="Email:" name="email" type="email" value={this.state.email} onChange={this.onChange} />
      </Container>
    );
  }
}
