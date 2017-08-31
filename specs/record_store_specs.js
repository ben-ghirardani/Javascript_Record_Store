var assert = require('assert');
var RecordStore = require('../record_store.js')
var Record = require('../record.js')

describe("Record Store", function(){

  var recordStore1;
  var record1;
  var record2;

  beforeEach(function(){
    recordStore1 = new RecordStore("Keith's Records", "Edinburgh")
    record1 = new Record("Adele", "Hello", "Pop", 10)
    record2 = new Record("Ed Sheeran", "Goodbye", "Pop", 20)
  })

  it("should have a name", function(){
    assert.strictEqual(recordStore1.name, "Keith's Records");
  })

  it("should have a city", function(){
    assert.strictEqual(recordStore1.city, "Edinburgh");
  })

  it("should have empty inventory", function(){
    assert.strictEqual(recordStore1.inventory.length, 0);
  })

  it("should have empty balance", function(){
    assert.strictEqual(recordStore1.balance, 0);
  })

  it("should have a record in the inventory", function(){
    recordStore1.add(record1)
    assert.strictEqual(recordStore1.inventory.length, 1);
  })

  it("should have many records in the inventory", function(){
    recordStore1.add(record1)
    recordStore1.add(record2)
    assert.strictEqual(recordStore1.inventory.length, 2);
  })

  it("should list the inventory", function(){
    recordStore1.add(record1)
    recordStore1.add(record2)
    console.log(recordStore1.listInventory());
    assert.deepEqual(recordStore1.listInventory(), [record1, record2])
  })

  it("should remove record from inventory and add amount to balance", function(){
    recordStore1.add(record1)
    assert.strictEqual(recordStore1.inventory.length, 1)
    recordStore1.sell(record1)
    assert.strictEqual(recordStore1.inventory.length, 0)
    assert.strictEqual(recordStore1.balance, 10)
  })

})
