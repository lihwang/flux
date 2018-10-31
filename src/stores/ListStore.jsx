import {EventEmitter} from 'events'
import objectAssign from 'object-assign'

var ListStore=Object.assign({},EventEmitter.prototype,{ //继承EventEmitter.prototype事件监听
  items: [],

  getAll: function() {   //拿到全部数据
    return this.items;
  },

  addNewItemHandler: function (text) { //实际修改数据
    this.items.push(text);
  },

  emitChange: function () { //触发change事件
    this.emit('change');
  },
  addChangeListener: function(callback) { //添加绑定监听事件
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {  //移除绑定监听事件
    this.removeListener('change', callback);
  }
})

export default ListStore;