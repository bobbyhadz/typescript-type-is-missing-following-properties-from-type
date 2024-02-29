export {};

// Type 'X' is missing the following properties from type 'Y'

// EXAMPLE 1 - Providing initial values

type Person = {
  name: string;
  country: string;
};

const person: Person = {
  name: '',
  country: '',
};
console.log(person);

// ---------------------------------------------------

// // EXAMPLE 2 - Setting the properties to optional

// type Person = {
//   name?: string; // 👈️ marked optional
//   country?: string; // 👈️ marked optional
// };

// const person: Person = {};
// console.log(person);

// ---------------------------------------------------

// // EXAMPLE 3 - Specify all of the required properties in function calls

// type Person = {
//   name: string;
//   country: string;
// };

// function getPerson(person: Person = { name: '', country: '' }) {
//   return person;
// }

// getPerson();

// ---------------------------------------------------

// // EXAMPLE 4 - Define all required properties and methods when implementing an interface

// interface Employee {
//   id: number;
//   name: string;
// }

// class Developer implements Employee {
//   constructor(
//     public id: number,
//     public name: string,
//   ) {
//     this.id = id;
//     this.name = name;
//   }
// }
