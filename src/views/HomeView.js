import React from 'react';

export default class HomeView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="container page-home">
        <h1>NL Fluid</h1>
        <p>ReactJS Components</p>
      </div>
    );
  }
}
