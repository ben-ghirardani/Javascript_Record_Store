var assert = require('assert');
var Record = require('../record.js')

describe("Record", function() {

  var record1;

  beforeEach(function(){
    record1 = new Record("Adele", "Hello", "Pop", 10)
  })

  it('should have an artist', function(){
    assert.strictEqual(record1.artist, "Adele")
  })

  it('should have a title', function(){
    assert.strictEqual(record1.title, "Hello")
  })

  it('should have a genre', function(){
    assert.strictEqual(record1.genre, "Pop")
  })

  it('should have a price', function(){
    assert.strictEqual(record1.price, 10)
  })

  it("shpuld print out record properties", function(){
    assert.deepEqual(record1.print(), "Artist: Adele, Title: Hello, Genre: Pop, Price: 10")
  })

})
