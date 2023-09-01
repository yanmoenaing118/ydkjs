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

arr['2'] = false;

// arr['5'] = '5';
// console.log(arr)
// console.log(arr.length)
/** -------------------------------- */

