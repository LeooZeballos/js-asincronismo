function* generator() {
  yield 1;
  yield 2;
  yield 3;
}

const g = generator();
console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);

function* iterable(array) {
    for (let i = 0; i < array.length; i++) {
        yield array[i];
    }
}

const it = iterable(['Leonel', 'Juan', 'Pedro', 'Luis', 'Pablo']);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
