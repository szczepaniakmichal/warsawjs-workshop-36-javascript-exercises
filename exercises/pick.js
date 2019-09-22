function pickVersja1(object, propertyNames) {
    // const entries = Object.entries(object);
    // console.log('entries', entries);

    const result = {};

    Object.entries(object).forEach(([propertyName, propertyValue]) => {
        // console.log('propertyName', propertyName);
        if (propertyNames.includes(propertyName)) {
            result[propertyName] = propertyValue;
            console.log('true');
        }
    });
    return result;
}

function pickVersja2(object, propertyNames) {
    const result = {};

    propertyNames.forEach((propertyName) => {
        if ( Object.keys(object).includes(propertyName)) {
            result[propertyName] = object [propertyName];
        }
    });
    return result;
}

const numbers = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
};

console.log(
    'pickVersja1(numbers, ["b", "c", "e"])',
    pickVersja1(numbers, ["b", "c", "e"])
);

console.log(
    'pickVersja2(numbers, ["b", "c"])',
    pickVersja2(numbers, ["b", "c"])
);

console.log(
    'pickVersja1(numbers, [])',
    pickVersja1(numbers, [])
);

console.log(
    'pickVersja2(numbers, [])',
    pickVersja2(numbers, [])
);

// zwraca wartości
console.log('Object.values(numbers)', Object.values(numbers));
// zwraca properties
console.log('Object.keys(numbers)', Object.keys(numbers));
// zwraca properties i wartosc
console.log('Object.entries(numbers)', Object.entries(numbers));

const result = ['foo', 'bar', 'baz']
    .map((item) => `${item}!`)
    .map((item) => `${item}!!`);

console.log('result', result);

// Przykłady
// const names = ['Jan', 'Kowalski'];
// const firstName = names[0];
// const lastName = names[1];
// LUB inny zapis. Krotszy.
// const [firstName, lastName] = ['Jan', 'Kowalski']

//mv only.js pick.js - komenda zmiany nazwy pliku z only.js na pick.js

//pick - wybieranie



