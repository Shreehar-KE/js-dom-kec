// setTimeout

// function hello() {
//   console.log("hello from setTimout");
// }

// setTimeout(() => console.log("hello from setTimout"), 5000);

// console.log("hello from Js");

// setInterval
// let count = 0;

// const timer = setInterval(() => {
//   count++;
//   console.log("Hello again");
//   if (count > 5) {
//     clearInterval(timer);
//   }
// }, 2000);

// console.log("Hello from async.js");

// Callbacks
// function doTask(taskName, callback) {
//   console.log(`Starting ${taskName}....`);
//   setTimeout(() => {
//     console.log(`${taskName} completed!`);
//     callback();
//   }, 5000);
// }

// doTask("Reading Book", () => {
//   console.log("Now reading chapter 10");
// });

// Callback Hell - nested callback logic

// Promises
// let order = new Promise((resolve, reject) => {
//   let isWorking = true;

//   setTimeout(() => {
//     if (isWorking) {
//       resolve("Order is ready");
//     } else {
//       reject("Order delay");
//     }
//   }, 3000);
// });

// order
//   .then((message) => console.log("Success: ", message))
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

// Try Catch Finally

// try {
//   // let result = 10 / 0;
//   // console.log(result);
//   let name = undefined;
//   console.log(name.toUpperCase());
// } catch(error) {
//   console.log(`Error: ${error}`);
// } finally {
//   console.log("Task completed");
// }

// Async / Await

function orderFunction() {
  let order = new Promise((resolve, reject) => {
    let isWorking = false;

    setTimeout(() => {
      if (isWorking) {
        resolve("Order is ready");
      } else {
        reject("Order delay");
      }
    }, 3000);
  });
  return order;
}

async function orderFood() {
  try {
    const orderStatus = await orderFunction();
    console.log(orderStatus);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

orderFood();
