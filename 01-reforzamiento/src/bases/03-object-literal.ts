interface Person{
    firstName: string;
    lastName: string;
    age: number;
    address: Address;
}

interface Address{
    postalCode: number;
    city: string;
    country: string;
}

const ironman:Person = {
  firstName: 'Tony',
  lastName: "Stark",
  age: 45,
  address : {
    postalCode: 12345,
    city: 'New York',
    country: 'USA'
  },
};

console.log(ironman);
// const spiderman = structuredClone(ironman);
// spiderman.firstName = 'Peter';
// spiderman.lastName = 'Parker';
// spiderman.age = 21;
// spiderman.address.postalCode = 54321;
// spiderman.address.city = 'Los Angeles';
// spiderman.address.country = 'USA';

// console.log(ironman);
// console.log(spiderman);
