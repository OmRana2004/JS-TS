// console.log(Math.PI);

// const dscriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(dscriptor)

const chai = {
    name: "MAsala_Chai",
    price: 60,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptors(chai, "name"));
