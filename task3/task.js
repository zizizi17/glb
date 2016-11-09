function compareObjects(obj1, obj2, key) {
    obj1[key] > obj2[key] ? console.log(obj1[key]) : console.log(obj2[key]);
}

var x = { sum: 22 };
var z = new Object({sum :24 });
compareObjects(x,z, 'sum');


//=======================================


var music = [
  {"name": "Bon Jovi: It's my life", "played": Math.round(Math.random()*10)},
  {"name": "Coldplay: Paradise", "played": Math.round(Math.random()*10)},
  {"name": "RHCP: Otherside", "played": Math.round(Math.random()*10)},
  {"name": "Maroon 5: Sugar", "played": Math.round(Math.random()*10)},
  {"name": "Coldplay: Magic", "played": Math.round(Math.random()*10)}
];

function favoriteSong(list) {
  var res = list.reduce(function(oldVal, newVal) {
    return oldVal.played < newVal.played ? newVal : oldVal;
  });
  var resIndex = list.indexOf(res);
  console.log(res.name + " - " + res.played + " index: " + resIndex);
}
favoriteSong(music);



//========================================

function Calculator() {
  this.result = [];
}

Calculator.prototype.add = function(num) {
  var prev = this.result[this.result.length - 1] || 0;
  this.result.push(num + prev);
}
Calculator.prototype.getCurrentSum = function(index) {
  return !index ? this.result[this.result.length-1] : this.result[index-1];
}

var calc1 = new Calculator();
calc1.add(3);
calc1.add(8);
calc1.add(11);

var calc2 = new Calculator();
calc2.add(5);
calc2.add(12);
calc2.add(17);

// the sum of all instances
console.log(calc1.getCurrentSum() + calc2.getCurrentSum());
// the sum of all instancec at second step
console.log(calc1.getCurrentSum(2) + calc2.getCurrentSum(2));
// the sum of the number after 3 step, and the sum at all(they are equal)
console.log(calc1.getCurrentSum() + " = " + calc1.getCurrentSum(3));







//=============================
function cloneObject(obj) {
    if (typeof obj !== 'object') {
        return obj;
    }

    var temp = {};

    for (var key in obj) {
        temp[key] = cloneObject(obj[key]);
    }

    return temp;
}

var a = {b: {c: {d: {e: 4}}}};
var b = {h : 4};
console.log(cloneObject(a));
console.log(cloneObject(b));
