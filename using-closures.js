// Exercise 1: Loaded Die

var rollDie = function () {
  return Math.floor(1 + Math.random() * 6);
}

console.log(rollDie());  // 1 (for example)



var loadedDie = (function () {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var cheat = -1;
  return function () {
    cheat += 1;
    return list[cheat];
  }
  // return list[loadedIndex];
  /* your code here */
})();

console.log(loadedDie());  // 5
console.log(loadedDie());  // 4
console.log(loadedDie());  // 6

// Exercise 2: Countdown

var countdownGenerator = function(x) {
  var time = x + 1;
  return function() {
    time -= 1;
    if (time > 0) {
      console.log('T-minus ' + time + '...');
    }
    else if (time == 0) {
      console.log('Blast Off!');
    }
    else {
      console.log('Rockets already gone, bub!');
    }
  }
};

var countdown = countdownGenerator(3);

countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!
