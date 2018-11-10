// Some async function that performs an operation then passes the result
// to a callback.  
const changeNumberLib = (num, cb) => {
  setTimeout((cb) => {
    num = num * 2;
    console.log('***');
    console.log(num);
    cb(num);
  }, 0, cb);
}

// Problem: The function of the library we are using does not return a value and
// our code cannot set our variable in the callback before our function has
// finished executing.
const sadFunc = () => {
  let myNumber = 5;
  changeNumberLib(myNumber, (num) => {
    myNumber = num;
  });
  console.log('^^^');
  console.log(myNumber);
}

// Solution: Wrap the call to your the library's function in a promise with the
// resolution set in the provided callback function.
const numberFunc = () => {
  let myNumber = 5;
  const promise = new Promise((resolve, reject) => {
    changeNumberLib(myNumber, (num) => {
      resolve(num);
    })
  })
  promise.then(num => {
    myNumber = num;
    console.log('---');
    console.log(myNumber);
    // setState, call dispatches, manipulate DOM etc...
  })
}

numberFunc();
// sadFunc();
