                            // Without prototype — har object mein method
/*.............................................................................................
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
...........................................................................................*/

                                  //  With prototype — method shared
/*.............................................................................
function User(name) {
    this.name = name
}

User.prototype.greet = function(){
    console.log(`Hello, ${this.name}`);
}

const user1 = new User("OM")
const user2 = new User("RAM")

user2.greet()
....................................................................................*/

                        // Why not to use arrow function while using prototype or constructor
/*...............................................................................................
    function User(name,age){
   this.name = name
   this.age = age,
   
   User.prototype.greet = () => {
    console.log(`hello your name is- ${this.name}, And your age is- ${this.age}`);
    
   }
}
const user1 = new User("om",22)
const user2 = new User("ram",108)

user1.greet()
user2.greet()
          // both user1.greet() and user2.greet() will print "ram" and 108, Because-
// 1. Arrow functions do not have their own this: Instead of looking at the object that called the method (user1 or user2), 
//an arrow function permanently locks onto the this value from the scope where it was created.
//2. Overwriting inside the constructor: Because User.prototype.greet = () => ... is placed inside the User constructor, it gets overwritten every time new User() runs:
	//• When new User("om", 22) runs, User.prototype.greet is bound to user1.
	//• When new User("ram", 108) runs, User.prototype.greet is overwritten and permanently bound to user2.
	//• If you defined the arrow function outside the constructor, this would point to the global window object, resulting in undefined for both name and age.
  ..............................................................................................................................*/

                         //PROTOTYPE_CHAIN

function Student(name) {
    this.name = name;
}

Student.prototype.study = function() {
    console.log(`${this.name} is studying`);
};

const s1 = new Student("Om");
const s2 = new Student("Rahul");

s1.study()

console.log(s1.study === s2.study);
console.log(s1.hasOwnProperty("name"));
console.log(s1.hasOwnProperty("study()"));

     //in → Object aur uski complete prototype chain check karta hai.
console.log("toString" in s1);// true

    //hasOwnProperty() → Sirf object ki khud ki property check karta hai.
console.log(s1.hasOwnProperty("toString"));// false

