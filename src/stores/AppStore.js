import { Dispatcher, Store } from 'nl-flux';
import { AppConstants } from 'constants';

class AppStore extends Store {
  constructor() {
    super();

    this.demo = {
      hello: 'Hello World',
      componentMenu: [
        {label: 'Box', to:'/components/Box'},
        {label: 'Button', to:'/components/Button'},
        {label: 'Date/Time Picker', to:'/components/DateTimePicker'},
        {label: 'Sidebar', to:'/components/SideBar'}
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
