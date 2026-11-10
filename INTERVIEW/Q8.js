// console.log(Math.PI);

// const dscriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(dscriptor)

// const chai = {
//     name: "MAsala_Chai",
//     price: 60,
//     isAvailable: true
// }

// console.log(Object.getOwnPropertyDescriptors(chai, "name"));

class Car {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        console.log(`${this.brand} started`);
    }
}

const car1 = new Car("BMW");
const car2 = new Car("Audi");

car1.start()