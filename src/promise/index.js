// Promise: usado para computaciones asincrónicas
// Representa un valor que puede estar disponible ahora, en el futuro, o nunca.

const promise = new Promise(function (resolve, reject) {
  resolve('hey')
});

const cows = 9;

const countCows = new Promise(function (resolve, reject) {
  if (cows > 10) {
    resolve(`We have ${cows} on the farm`);
  } else {
    reject(`There is no cows on the farm`);s
  }
});

countCows.then( (result) => {
  console.log(result);
}).catch( (error) => {
  console.error(error);
}).finally(() => {
  console.log("Finally")
})