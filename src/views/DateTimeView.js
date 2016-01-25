import React from 'react';
import * as components  from 'components';

const {
  Code,
  Component,
  DateTimePicker
  } = components;

export default class DateTimeView extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };

  }

  render() {
    return (
      <div className="container page-home">
        <div className="view-sideBar-content">
          <h1>DateTimePicker</h1>
          <p>&nbsp;</p>

          <h3>Default</h3>
          <Code>
            <span className="code_comment">// Default</span><br/>
            &lt;DateTimePicker /&gt;<br/>
          </Code>
          <DateTimePicker />
        </div>
      </div>
    );
  }
}
