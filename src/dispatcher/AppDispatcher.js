// dispatcher/AppDispatcher.js
import {Dispatcher} from 'flux';

import ListStore from '../stores/ListStore'

var AppDispatcher=new Dispatcher();


AppDispatcher.register(function (action) {  //分配器对应的事件
  switch(action.actionType) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text);
      ListStore.emitChange();
      break;
    default:
  }
})




export default AppDispatcher;