function sum(a, b) {
    return a + b;
}

function calc(a, b, callback) {
    return callback(a, b);
}

console.log(calc(1, 2, sum));

setTimeout(function () {
    console.log('Buenas!')
}, 2000)

function greeting(name) {
    console.log(`Hola ${name}`)
}

// función que recibe otra función para ejecutarla
setTimeout(greeting, 2000, "Leonel")