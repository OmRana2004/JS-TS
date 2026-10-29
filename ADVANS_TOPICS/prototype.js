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
function User(name) {
    this.name = name
}

User.prototype.greet = function(){
    console.log(`Hello, ${this.name}`);
}

const user1 = new User("OM")
const user2 = new User("RAM")

user2.greet()
