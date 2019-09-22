function only(object, propertyName) {
    // Object.entries(object).forEach()
}

const numbers = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

console.log(
    'only(numbers, ["b", "c"])',
    only(numbers, ["b", "c"])
);

// zwraca wartości
console.log('Object.values(numbers)', Object.values(numbers));
// zwraca properties
console.log('Object.keys(numbers)', Object.keys(numbers));
// zwraca properties i wartosc
console.log('Object.entries(numbers)', Object.entries(numbers));

const result = ['foo', 'bar', 'baz'].map((item) => `${item}!`);
console.log('result', result);



