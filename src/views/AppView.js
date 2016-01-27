import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { RouteConstants } from 'constants';
import * as views from 'views';

const {
  BoxView,
  ButtonView,
  DateTimeView,
  FormView,
  FormFieldView,
  FooterView,
  HomeView,
  IconView,
  InputFieldView,
  LayoutView,
  LoaderView,
  NavBarView,
  PreviewItemView,
  SideBarView,
  TagFieldView,
  TextEditorView,
  UploadFieldView
  } = views;

export default class AppView extends React.Component {
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
          </Route>

          <Route path={RouteConstants.BOX} component={BoxView} />
          <Route path={RouteConstants.BUTTON} component={ButtonView} />
          <Route path={RouteConstants.DATE_TIME} component={DateTimeView} />
          <Route path={RouteConstants.FORM} component={FormView} />
          <Route path={RouteConstants.FORM_FIELD} component={FormFieldView} />
          <Route path={RouteConstants.FOOTER} component={FooterView} />
          <Route path={RouteConstants.ICON} component={IconView} />
          <Route path={RouteConstants.INPUT_FIELD} component={InputFieldView} />
          <Route path={RouteConstants.LOADER} component={LoaderView} />
          <Route path={RouteConstants.NAV_BAR} component={NavBarView} />
          <Route path={RouteConstants.PREVIEW_ITEM} component={PreviewItemView} />
          <Route path={RouteConstants.SIDE_BAR} component={SideBarView} />
          <Route path={RouteConstants.TAG_FIELD} component={TagFieldView} />
          <Route path={RouteConstants.TEXT_EDITOR} component={TextEditorView} />
          <Route path={RouteConstants.UPLOAD_FIELD} component={UploadFieldView} />
        </Route>
      </Router>
    );
  }
}
