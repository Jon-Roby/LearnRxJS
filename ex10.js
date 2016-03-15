Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);
    });

  });
  return results;
}

var test = [ [1,2,3], [4,5,6], [7,8,9] ].concatAll()
console.log(test);
