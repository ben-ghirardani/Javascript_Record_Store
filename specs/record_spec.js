var assert = require('assert');
var Record = require('../record.js')

Describe("Record", function() {

  beforeEach(function(){
    record1 = new Record("Adele", "Hello", "Pop", 10)
  })

  it('should have an artist', function(){
    assert.strictEqual(record.artist, "Adele")
  })


})
