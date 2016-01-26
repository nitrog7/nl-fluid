import React from 'react';
import View from 'views/View';
import * as components  from 'components';

const {
  Box,
  Button,
  Code,
  Container,
  Loader
  } = components;

export default class BoxView extends View {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false
    };

    // Methods
    this.startLoader = this.startLoader.bind(this);
    this.stopLoader = this.stopLoader.bind(this);
  }

  startLoader() {
    console.log('startLoader');
    this.setState({
      isLoading: true
    });

    this.timer = setTimeout(this.stopLoader, 5000);
  }

  stopLoader() {
    console.log('stopLoader');
    if(this.timer) {
      clearTimeout(this.timer);
    }

    this.setState({
      isLoading: false
    });
  }

  render() {
    return (
      <Container direction="column">
        <h1>Loader</h1>
        <p>Adds a loader within the parent.</p>

        <h3>Default</h3>
        <Code>
          <span className="code_comment">// Default</span><br/>
          &lt;Loader isLoading={this.state.isLoading} name="spinner5" size="lg" /&gt;<br/>
        </Code>
        <Box type="align-left">
          <Button onClick={this.startLoader}>Start for 5s</Button>
          <Button onClick={this.startLoader}>Start for 5s</Button>
          <Button onClick={this.startLoader}>Start for 5s</Button>
        </Box>
        <Loader isLoading={this.state.isLoading} name="spinner5" size="lg"/>
      </Container>
    );
  }
}
