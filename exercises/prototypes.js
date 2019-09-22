const a = {
    propertyA: 'A',
    sayHallo(){
        console.log('hello');
    },
    propertyAB: 'in A'
};

const b = Object.create(a);
b.propertyB = 'B';
b.propertyAB = 'in B';


const c = Object.create(b);
c.propertyC = 'C';

// const b = {
//     propertyB: 'B'
// };

console.log('a.propertyA', a.propertyA);
console.log('a.propertyB', a.propertyB);
console.log('a.propertyC', a.propertyC);
console.log('a.propertyAB', a.propertyAB);
console.log('a.toString()', a.toString());

console.log('b.propertyA', b.propertyA);
console.log('b.propertyB', b.propertyB);
console.log('b.propertyC', b.propertyC);
console.log('b.propertyAB', b.propertyAB);
console.log('b.toString()', b.toString());

console.log('c.propertyA', c.propertyA);
console.log('c.propertyB', c.propertyB);
console.log('c.propertyC', c.propertyC);
console.log('c.propertyAB', c.propertyAB);
console.log('c.toString()', c.toString());

console.log('b.propertyA', b.propertyA);
b.sayHallo();

console.log('b.__proto__ === a', b.__proto__ === a);
console.log('a.isPrototypeOf(b)', a.isPrototypeOf(b));

console.log('c.__proto__ === b', c.__proto__ === b);
console.log('a.isPrototypeOf(c)', b.isPrototypeOf(c));

console.log('c.__proto__ === a', c.__proto__ === a);
console.log('c.__proto__.__proto__ === a', c.__proto__.__proto__ === a);

console.log('a.isPrototypeOf(c)', a.isPrototypeOf(c));
console.log('a.__proto__', a.__proto__);

console.log('a.__proto__ === Object.prototype', a.__proto__ === Object.prototype);

console.log('Object.prototype.__proto__', Object.prototype.__proto__);
console.log('Object.getOwnPropertyDescriptors(Object.prototype', Object.getOwnPropertyDescriptors(Object.prototype));



//getOwnPropertyDescriptors ??






