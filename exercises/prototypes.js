const a = {
    propertyA: 'A',
    sayHallo(){
        console.log('hello');
    }
};

const b = Object.create(a);
b.propertyB = 'B';


// const b = {
//     propertyB: 'B'
// };

console.log('a.propertyA', a.propertyA);
console.log('b.propertyB', b.propertyB);

console.log('b.propertyA', b.propertyA);
console.log(b.__proto__);

b.sayHallo();


