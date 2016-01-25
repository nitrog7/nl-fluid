import React from 'react';
import * as components  from 'components';

const {
  Code,
  Component,
  Button
  } = components;

export default class ButtonView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };

    // Methods
    this.onToggleLoading = this.onToggleLoading.bind(this);
  }

  onToggleLoading() {
    this.setState({
      loading: !this.state.loading
    });
  }

  render() {
    return (
      <div className="container page-home">
        <div className="view-sideBar-content">
          <h1>Buttons</h1>
          <p>&nbsp;</p>

          <h3>Default</h3>
          <Code>
            <span className="code_comment">// Default</span><br/>
            &lt;Button&gt;Button&lt;/Button&gt;<br/>
          </Code>
          <Button>Default</Button>

          <h3>Type</h3>
          <ul>
            <li>primary</li>
            <li>secondary</li>
          </ul>
          <Code>
            <span className="code_comment">// Types</span><br/>
            &lt;Button <strong>type="primary"</strong>strong>&gt;Primary&lt;/Button&gt;<br/>
            &lt;Button <strong>type="secondary"</strong>&gt;Secondary&lt;/Button&gt;
          </Code>
          <div className="buttonSet">
            <Button type="primary">Primary</Button>
            <Button type="secondary">Secondary</Button>
          </div>

          <h3>Status</h3>
          <ul>
            <li>success</li>
            <li>warning</li>
            <li>danger</li>
          </ul>
          <Code>
            <span className="code_comment">// Secondary</span><br/>
            &lt;Button type="secondary"&gt;Button&lt;/Button&gt;<br/>
            <br/>
            <span className="code_comment">// Status</span><br/>
            &lt;Button <strong>status="success"</strong>&gt;Success&lt;/Button&gt;<br/>
            &lt;Button <strong>status="warning"</strong>&gt;Warning&lt;/Button&gt;<br/>
            &lt;Button <strong>status="danger"</strong>&gt;Danger&lt;/Button&gt;
          </Code>
          <div className="buttonSet">
            <Button status="success">Success</Button>
            <Button status="warning">Warning</Button>
            <Button status="danger">Danger</Button>
          </div>

          <h3>Link</h3>
          <Code>
            <span className="code_comment">// Link</span><br/>
            &lt;Button type="link"&gt;Button&lt;/Button&gt;<br/>
            <br/>
            <span className="code_comment">// Status</span><br/>
            &lt;Button type="link" <strong>status="success"</strong>&gt;Success&lt;/Button&gt;<br/>
            &lt;Button type="link" <strong>status="warning"</strong>&gt;Button&lt;/Warning&gt;<br/>
            &lt;Button type="link" <strong>status="danger"</strong>&gt;Button&lt;/Danger&gt;
          </Code>
          <div className="buttonSet">
            <Button type="link">Button</Button>
            <Button type="link" status="success">Success</Button>
            <Button type="link" status="warning">Warning</Button>
            <Button type="link" status="danger">Danger</Button>
          </div>

          <h3>Ghost</h3>
          <Code>
            <span className="code_comment">// Ghost</span><br/>
            &lt;Button <strong>ghost</strong>&gt;Button&lt;/Button&gt;
          </Code>
          <div className="buttonSet">
            <Button ghost>Default</Button>
            <Button ghost type="primary">Primary</Button>
            <Button ghost type="secondary">Secondary</Button>
            <Button ghost status="success">Success</Button>
            <Button ghost status="warning">Warning</Button>
            <Button ghost status="danger">Danger</Button>
          </div>

          <h3>Icons</h3>
          <Code>
            <span className="code_comment">// Prefix</span><br/>
            &lt;Button <strong>prefix="quill"</strong>&gt;Button&lt;/Button&gt;
          </Code>
          <div className="buttonSet">
            <Button prefix="quill">Prefix</Button>
            <Button suffix="quill">Suffix</Button>
          </div>


          <h3>Loading</h3>
          <ul>
            <li>isLoading</li>
            <li>loader</li>
          </ul>
          <Code>
            <span className="code_comment">// Loading</span><br/>
            &lt;Button prefix="quill" <strong>isLoading</strong>&gt;Button&lt;/Button&gt;
          </Code>
          <div className="buttonSet">
            <Button prefix="quill" isLoading={this.state.loading} onClick={this.onToggleLoading}>Loading</Button>
          </div>
        </div>
      </div>
    );
  }
}
