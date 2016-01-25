import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import * as views from 'views';

const {
  BoxView,
  ButtonView,
  DateTimeView,
  HomeView,
  LayoutView
  } = views;

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={LayoutView}>
          <IndexRoute component={HomeView} />

          <Route path='components'>
            <IndexRoute component={HomeView} />
            <Route path='Box' component={BoxView} />
            <Route path='Button' component={ButtonView} />
            <Route path='DateTimePicker' component={DateTimeView} />
          </Route>
        </Route>
      </Router>
    );
  }
}

export default App;
