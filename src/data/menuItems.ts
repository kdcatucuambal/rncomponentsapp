import {MenuItem} from '../interfaces/appInterfaces';

export const items: MenuItem[] = [
  {name: 'Animation 101', icon: 'account', component: 'Animation101Screen'},
  {name: 'Animation 102', icon: 'ab-testing', component: 'Animation102Screen'},
  {name: 'Switches', icon: 'toggle-switch', component: 'SwitchScreen'},
  {name: 'Alerts', icon: 'alert-rhombus', component: 'AlertScreen'},
  {name: 'Text Inputs', icon: 'cursor-text', component: 'TextInputScreen'},
  {name: 'Pull to refresh', icon: 'refresh', component: 'PullToRefScreen'},
  {
    name: 'Section List',
    icon: 'clipboard-list',
    component: 'SectionListScreen',
  },
  {name: 'Modals', icon: 'fullscreen-exit', component: 'ModalScreen'},
  {
    name: 'Infinite Scroll',
    icon: 'arrow-top-right',
    component: 'InfiniteScrollScreen',
  },
];
