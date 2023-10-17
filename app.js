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
// // logThis.call(obj2, 'some parar', 2, { name: 'hiel'});
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
    // console.log("from shit", this);
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

// loop(0);

var myObj = {};

var symb = Symbol("id");
var uiquesSymb = Symbol("id");
var mySymb = Symbol("id");

Object.defineProperty(myObj, mySymb, {
  value: "Hello mySymb",
});

var myId = "ID";
var myKey = "ID";

myObj[symb] = "symb";
myObj[uiquesSymb] = "imqadsfdffd";

// console.log(myObj[symb]);
// console.log(myObj[uiquesSymb])

Object.defineProperty(myObj, "a", {
  value: "Go Youn Jung",
  writable: true,
  enumerable: true,
  configurable: false,
});

Object.defineProperty(myObj, "b", {
  value: "Who are you",
  writable: false,
  enumerable: true,
  configurable: false,
});

const keys = Object.keys(myObj);
const values = Object.values(myObj);

// console.log(keys);
// console.log(values);

const ownKeys = Reflect.ownKeys(myObj);
ownKeys.forEach((key) => {
  // console.log(myObj[key]);
});

/**--- [[Get]]() and [[PUT]]()  */

var myLove = {
  get name() {
    return this._name_;
  },

  set name(value) {
    this._name_ = value;
  },
};

// myLove.name = "Go Youn Jung";

// for (let key in myLove) {
//   if (myLove.hasOwnProperty(key)) {
//     console.log(`${key}: ${myLove[key]}`.toLocaleUpperCase());
//   }
// }

var noProto = Object.create(null);

Object.defineProperty(noProto, "title", {
  value: "No [[Prototype]]",
  enumerable: true,
  configurable: false,
  writable: false,
});

// console.log(Object.prototype.hasOwnProperty.call(noProto, 'title'))
/** Enumerable */

var myObject = {};

Object.defineProperty(myObject, "a", {
  value: 2,
  enumerable: true,
});

Object.defineProperty(myObject, "b", {
  value: 3,
  enumerable: false,
});

// console.log("b" in myObject);
// console.log(myObject.hasOwnProperty("b"));
// for (let key in myObject) {
//   console.log(key, myObject[key]);
// }

// var arr = [1, 2, 3, 34];

// for (let key in arr) {
//   console.log(key, arr[key]);
// }

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// class Student extends Person {
//   constructor(name, id) {
//     super(name);
//     this.id = id;
//   }
// }

// var std = new Student("Yan", 32);

// console.log(std);
// console.log("name" in std);
// console.log(std.hasOwnProperty("name"));
// console.log("getName" in std); // in operator traveres the entire prototype chain
// console.log(std.hasOwnProperty("getName"));

/**
 * mixins
 */

function mixin(sourceObj, targetObj) {
  for (let key in sourceObj) {
    targetObj[key] = sourceObj[key];
  }
  return targetObj;
}

var Vehicle = {
  engines: 1,
  ignition: function () {
    console.log("Turning on my engines: " + this.engines);
    // console.log(this)
  },
  drive: function () {
    this.ignition();
    console.log("Steering and moving forward.");
  },
};

var Car = mixin(Vehicle, {});

mixin(
  {
    engines: 4,
    wheels: 4,
    drive: function () {
      Vehicle.drive.call(this);
      console.log("Rolling on all " + this.wheels);
    },
  },
  Car
);

// Car.drive();

function Person(name) {
  this.name = name;
}

Person.prototype.printInfo = function () {
  console.log(`My name is ${this.name}`);
};

function Student(name) {
  this.name = name;
  this.studentId = "MKPT-6313";
}



Student.prototype.printInfo = function () {
  Person.prototype.printInfo.call(this);
  console.log(`My stutend Id is ${this.studentId}`);
};



var std = new Student("Yan Moe Naing");
var psr = new Person("Go Yoon Jung");


// std.printInfo();
// psr.printInfo();


var Entity = {
  init: function (x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    return this;
  },

  update: function(dt) {
    console.log('update: ' + dt);
  },

  render: function(ctx) {
    console.log('render: ctx');
  }
}

var rect = Object.create(Entity)

rect.init(0,0,32,32);
rect.shape = 'rectangle';

rect.update(16.666);
rect.render();