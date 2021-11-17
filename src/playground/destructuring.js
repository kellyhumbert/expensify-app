//
//
// object destructuring
//
//

// const person = {
//     age: 54,
//     location: {
//         city: 'Olympia',
//         temp: 37
//     }
// };

// console.log(`${person.name} is ${person.age}.`);

// //descruture to create
// const {name, age} = person;
// console.log(`(DS) ${name} is ${age}.`);

// if (person.location.city && person.location.temp) {
//     console.log(`It is ${person.location.temp} in ${person.location.city}.`);
// }

// const { city, temp } = person.location;
// if (city && temp) {
//     console.log(`(DS) It is ${temp} in ${city}.`);
// }

// //Renaming variables
// const { city: myCity, temp: temperature } = person.location;
// if (myCity && temperature) {
//     console.log(`(DS RENAME) It is ${temperature} in ${myCity}.`);
// }

// // default
// const { name : theName = 'Anonymous', age: theAge } = person;
// if (theName && theAge) {
//     console.log(`(DS DEFAULT) ${theName} is ${theAge}.`);
// }

// const book = {
//     title: 'Ego',
//     author: 'Ryan',
//     publisher: {
//        // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

//
//
// array destructuring
//
//
const address = ['123 Main', 'Olympia', 'WA', '98501'];

console.log(`You are in ${address[1]}, ${address[2]}.`);

const [street, city, state, zip] = address;

console.log(`(DS) You are in ${city}, ${state}.`);

// partial desctructuring
const [, myCity, myState] = address;
console.log(`(DS PARTIAL) You are in ${myCity}, ${myState}.`);

// defaults work the same way as objects