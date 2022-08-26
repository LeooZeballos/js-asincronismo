const fnAsync =  () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Async!!'), 2000)
            : reject(new Error('Test Error'))
    } );
}

const anotherFn = async () => {
    const data = await fnAsync();
    console.log(data);
    console.log('Finished');
}

console.log('Before');
anotherFn();
console.log('After');