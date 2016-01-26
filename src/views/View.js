import React from 'react';
import { Component }  from 'components';

export default class View extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
}

View.contextTypes = {
  router: React.PropTypes.object
};
