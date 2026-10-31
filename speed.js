// const user = {
//     name: "om rana",
//     age: 22,


//     greet: function(){
//         console.log(this.age);
//     }
// }
// user.greet();

// const code = {
//     lan: "js",
//     new: "ts",

//     compil(){
//         console.log(this.lan);
        
//     } 
// }
// code.compil()

// const course = {
//     cName: "AI_ML",
//     price: 999,
//     details: {
//         courseInstu: "harkirat",
//           vill: "saura"
//     }
// }
// const {cName, details: {vill, courseInstu}} = course

// console.log(vill, cName, courseInstu);

// function getData() {
//     return new Promise((reslove, reject) => {
//         reslove("Hello OM")
//     });
// }
// getData().then((res) => {
//     console.log(res);
// })

// async function getData() {
//     return "Hello Om"
// }
 
// async function main() {
//     const res = await getData()
//     console.log(res);
// }
// main()


// let user1 = {
//     name: "om",
//     age : 22,
// }

// console.log(user1.age);

// let user2 = {
//     name: "om",
//     age : 32,
// }

// console.log(user2.age);

// function Users(name,age) {
//     this.name = name
//     this.age = age
// }

// const admin = new Users("om",22)
// const user =  new Users("akshat",23)

// console.log(user);
// console.log(admin.age);

// const person = {
//   greet: function() {
//     console.log("Hello!");
//   }
// };

// const user = Object.create(person);

// user.name = "Om";

// user.greet();

// const person = {
//     name: "OM RNA",
//     greet(){
//         console.log(`Hello,${person.name}`);
//     }
// }
// person.greet()

// const User = function(name,age){
//     this.name=name
//     this.age=age
// }
// const u1 = new User("om",22)
// const u2 = new User("ram",32)

// console.log(u1.name);
// console.log(u2.name,u2.age);

// const user2 = {
//   name: "Rahul",
//   greet() {
//     console.log(`Hello, ${this.name}`);
//   }
// };

// user2.greet()

// function User (name){
//     this.name=name
// }
// User.prototype.greet=function(){
//     console.log(`Welcome, ${this.name}`);
    
// }
// const u1 = new User("OM")
// const u2 = new User("RAM")
// const u3 = new User("SITA")
// u1.greet()
// u2.greet()
// u3.greet()



const user = {
 name: "om",
 age: 22
}
console.log(user.__proto__);



 
    
    
    

 

