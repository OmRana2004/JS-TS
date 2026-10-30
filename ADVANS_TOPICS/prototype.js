                                         // Without prototype — har object mein method
/*
const user1 = {
  name: "Om",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

const user2 = {
  name: "Rahul",
  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

user1.greet()
user2.greet()
*/
                                  //  With prototype — method shared
// function User(name) {
//     this.name = name
// }

// User.prototype.greet = function(){
//     console.log(`Hello, ${this.name}`);
// }

// const user1 = new User("OM")
// const user2 = new User("RAM")

// user2.greet()

function Student(name) {
    this.name = name;
}

Student.prototype.study = function() {
    console.log(`${this.name} is studying`);
};

const s1 = new Student("Om");
const s2 = new Student("Rahul");

s1.study()

// console.log(s1.study === s2.study);
console.log(s1.hasOwnProperty("name"));
console.log(s1.hasOwnProperty("study()"));


const num = 100;
    console.log(num);
    console.log(typeof(num));

const res = num.toString()
    console.log(res)
    console.log(typeof(res));










