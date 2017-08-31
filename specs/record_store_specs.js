var assert = require('assert');
var RecordStore = require('../record_store.js')

describe("Record Store", function(){

  var recordStore1;

  beforeEach(function(){
    recordStore1 = new RecordStore("Keith's Records", "Edinburgh")
  })

  it("should have a name", function(){
    assert.strictEqual(recordStore1.name, "Keith's Records");
  })

  xit("should have a city", function(){
    assert.strictEqual(recordStore1.city, "Edinburgh");
  })

})
