var RecordStore = function(name, city){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.balance = 0;
}

RecordStore.prototype.add = function(record){
  this.inventory.push(record);
}




module.exports = RecordStore;
