const extraPropertiesName = 'isEmployee';

const person = {
    firstName: 'Jan',
    lastName: 'Nowak',
    [extraPropertiesName]: false,
};

//person[extraPropertiesName] = true; // dynamiczne tworzenie properties
person.age = 70;
person['place of birth'] = 'Warszawa'; // to nie jest dobra praktyka

console.log('person', person);


// funkcja,
