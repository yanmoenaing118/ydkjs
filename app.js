function logThis(...args) {
  console.log(args, this);
}

function logThisRetain(time) {
  setTimeout(() => {
    console.log(`logThisRetain ${time}`, this);
  }, time);
}

function logThisLost(time) {
  setTimeout(function () {
    console.log(`logThisLost ${time}`, this);
  }, time);
}

var obj = {
  logMe: logThis,
  logStillMe: logThisRetain,
  logChangedMe: logThisLost,
};

var obj2 = {};

// obj.logMe();
// obj.logStillMe();
// obj.logChangedMe();
// logThis.call(obj2, 'some parar', 2, { name: 'hiel'});
/** ------------------------------- */

var priStr = "Lovely Go Youn Jung";
var objStr = new String("Lovely Go Youn Jung");

// console.log(Object.prototype.toString.call(function () {}))
// console.log(Object.prototype.toString.call(objStr))

// console.log(priStr.charAt(4))
/**-------------------------------- */

var arr = [1, "one", true];

arr["2"] = false;

// arr['5'] = '5';
// console.log(arr)
// console.log(arr.length)
/** -------------------------------- */

var anotherFunction = function () {};

var anotherObj = {};

var anotherArr = [];

var myObj = {
  a: 2,
  b: anotherFunction,
  c: anotherArr,
  d: anotherObj,
};

/** use Object.assign to shallow copy (not copied the reference) */
var assignedObj = Object.assign({}, myObj);

// console.log(assignedObj.b === myObj.b)
// console.log(assignedObj.c === myObj.c)
// console.log(assignedObj.d === myObj.d)

/** ----- Property Descriptors */

var obj3 = {
  a: 2,
  b: function shit() {
    console.log("from shit", this);
  },
};

Object.getOwnPropertyDescriptor(obj3, "b").value();

let max = 1000;
let count = 0;
let start = Date.now();
let dt = 0;
let last = 0;
let curr = 0;
let sec = 0;

function loop(timeEllaped) {
  dt = (timeEllaped - last) * 0.001;
  last = timeEllaped;

  if ((curr += dt) > 1) {
    console.log(`${++sec} s`);
    curr = 0;
  }

  setTimeout(() => {
    let timeEllaped = Date.now() - start;
    loop(timeEllaped);
  }, 1 / 60);
}

loop(0);
