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












