const extraPropertiesName = 'isEmployee';

const person = {
    firstName: 'Jan',
    lastName: 'Nowak',
    email: undefined,
    [extraPropertiesName]: false,
};

//person[extraPropertiesName] = true; // dynamiczne tworzenie properties
person.age = 70;
person['place of birth'] = 'Warszawa'; // to nie jest dobra praktyka
person.companyName;

console.log('person', person);

console.log('person.companyName', person.companyName);
console.log(person.hasOwnProperty("companyName"), person.hasOwnProperty('companyName') );

console.log('person.email', person.email);
console.log(person.hasOwnProperty("email"), person.hasOwnProperty('email') );



