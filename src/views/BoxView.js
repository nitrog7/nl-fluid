import React from 'react';
import * as components  from 'components';

const {
  Code,
  Component,
  Box
  } = components;

export default class BoxView extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
      <div className="container page-home">
        <div className="view-sideBar-content">
          <h1>Box</h1>
          <p>&nbsp;</p>

          <h3>Default</h3>
          <Code>
            <span className="code_comment">// Default</span><br/>
            &lt;Box&gt;&lt;/Box&gt;<br/>
          </Code>
          <Box>Test</Box>
        </div>
      </div>
    );
  }
}
