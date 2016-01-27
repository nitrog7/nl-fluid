import { Dispatcher, Store } from 'nl-flux';
import { AppConstants, RouteConstants } from 'constants';

class AppStore extends Store {
  constructor() {
    super();

    this.demo = {
      siteMenu: [
        {label: 'Components', to:'/' + RouteConstants.COMPONENTS, items:[
          {label: 'Box', to:'/' + RouteConstants.BOX},
          {label: 'Button', to:'/' + RouteConstants.BUTTON},
          {label: 'Date/Time Picker', to:'/' + RouteConstants.DATE_TIME},
          {label: 'Form', to:'/' + RouteConstants.FORM},
          {label: 'FormField', to:'/' + RouteConstants.FORM_FIELD},
          {label: 'Footer', to:'/' + RouteConstants.FOOTER},
          {label: 'Icon', to:'/' + RouteConstants.ICON},
          {label: 'InputField', to:'/' + RouteConstants.INPUT_FIELD},
          {label: 'Loader', to:'/' + RouteConstants.LOADER},
          {label: 'NavBar', to:'/' + RouteConstants.NAV_BAR},
          {label: 'PreviewItem', to:'/' + RouteConstants.PREVIEW_ITEM},
          {label: 'SideBar', to:'/' + RouteConstants.SIDE_BAR},
          {label: 'TagField', to:'/' + RouteConstants.TAG_FIELD},
          {label: 'TextEditor', to:'/' + RouteConstants.TEXT_EDITOR},
          {label: 'UploadField', to:'/' + RouteConstants.UPLOAD_FIELD}
        ]}
      ]
    };
  }

  onAction(action) {
    switch(action.type) {
      case AppConstants.APP_GET:
        this.getData(action.data);
        break;

      default:
        return true;
    }
  }

  addChangeListener(callback) {
    this.on(AppConstants.CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(AppConstants.CHANGE_EVENT, callback);
  }

  getData(id) {
    return this.demo[id];
  }
}

let appStore = new AppStore();
Dispatcher.registerStore(appStore);
export default appStore;
