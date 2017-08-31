var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.add = function(record){
  this.inventory.push(record);
}

RecordStore.prototype.listInventory = function(){
  return this.inventory;
}

RecordStore.prototype.sell = function(record){
  var index = this.inventory.indexOf(record)
  this.inventory.splice(index, 1)
  return this.balance += record.price;
}

module.exports = RecordStore;
