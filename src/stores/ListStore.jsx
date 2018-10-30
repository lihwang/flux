import {EventEmitter} from 'events'
import objectAssign from 'object-assign'

var ListStore=objectAssign({},EventEmitter.prototype,{
  items: [],

  getAll: function() {
    return this.items;
  },

  addNewItemHandler: function (text) {
    this.items.push(text);
  },

  emitChange: function () {
    this.emit('change');
  },
  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
})

export default ListStore;