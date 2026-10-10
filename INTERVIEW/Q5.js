                              // PRINT AN ARRAY OF NAMES WITH ABOVE THE AGE OF 40

const people = [
    { name: "om", age: 62},
    { name: "ram", age: 23},
    { name: "sita", age: 84},
    { name: "sita", age: 24},
];

const res = people.filter(x=>x.age > 40).map(x=> x.name)
console.log(res);