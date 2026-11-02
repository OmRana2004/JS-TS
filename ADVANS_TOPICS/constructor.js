                                 // NORMAL OBJECT
 /*
let user1 = {
    name: "om",
    age: 22
}

let user2 = {
    name: "ram",
    age: 26
}

console.log(user1.name);
console.log(user2.name);
*/
  
                  // Constructor Function
/*....Basically constructor function humea same structure ke multiple objects bar-bar bana se help karta ha ...*/
function User(name, age) {
    this.name = name;
    this.age = age
}
const user1 = new User("OM",22)
const user2 = new User("RAM",26)

console.log(user1.name);
console.log(user2.name);

function Student(name,age){
    this.name=name,
    this.age=age
}
const s1 = new Student("om",22)
const s2 = new Student("akshat",24)

console.log(s1);



