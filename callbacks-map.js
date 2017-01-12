var words = ["ground", "control", "to", "major", "tom"];

// should return [6, 7, 2, 5, 3]

function newMap(arr, callback) {
  var final = [];
  arr.forEach(function(word){final.push(callback(word))});
  return final;
}

function gimmeLength(word) {
  return word.length;
}

console.log(newMap(words, gimmeLength));
