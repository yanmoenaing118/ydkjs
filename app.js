function logThis() {
  console.log(this);
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

var obj2 = {}

// obj.logMe();
// obj.logStillMe();
// obj.logChangedMe();
logThis.call(obj2);
