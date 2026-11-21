// let title: (string | number)[] = [1,"one",2,"two"]
// console.log(title);

// const user:{name:string, age:number, engineer: (boolean|string)[]} = {
//     name: "OM",
//     age: 22,
//     engineer: ["yes",true]
// }
// console.log(user);

interface User {
    name: string;
    age: number;
    engineer: (boolean | string)[]
}
let user1: User = {
    name: "RAM",
    age: 22,
    engineer: [true, "yes"]
}
console.log(user1);




// const userName = "RAM"
// console.log(userName);


// function greet(name: string): string {
//     return `Hello ${name}`
// }
// console.log(greet('om-rana'));
// // console.log(greet(22));




