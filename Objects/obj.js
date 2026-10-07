                                    //OBJECTS LITERALS

       /*                             
const user = {
    name: "om",
    lName: "rana",
    age: 21,
    city: "saura",
}
    // ADDING PROPERTIES
user.address = "saura"
    // UPDATING IN OBJECTS
user.age = 22
     

console.log(user.lName, user.address, user.age)

 // BRACKET NOTATION
user["name"] = "ram"
user["isLogin"] = true  

console.log(user["name"],user["isLogin"])

    //DELETING PROPERTIES
delete user.address;
console.log(user)
                    
           */

                                    // OBJECT METHODS
// const user = {
//     name: "Sita",
//     call: "Mata",

//     greet() {
//         console.log(this.name,this.call)
//     }
// }
// user.greet()

         // THIS
/*const myCoding = [
    {
        langNama: "JAVASCRIPT",
        syntax: "JS",
        price: 10
    },
    {
        langNama: "PYTHON",
        syntax: "PY",
        price: 20
    },
    {
        langNama: "JAVA",
        syntax: "JAVA",
        price: 30
    },
    {
        langNama: "RUST",
        syntax: "RS",
        price: 40
    }
]

myCoding.forEach((items)=>{
    console.log(items.langNama)
})
setTimeout(()=> {
    const total = myCoding.reduce((acc,val)=>acc+val.price,0)
    console.log(`your total value is ${total}`);
},2000)
*/
    

    // Method Shortand (MODERN AND SHORTER SYNTAX TO WRITE AN FUNCTION) 
// const user = {
//     name:"om",

// call() {
//     console.log(this.name)
// }
// }
// user.call()

     // OBJECT REST(..)
/*
     const user  = {
    name: 'om',
    age: 22,
    city: "uki",
    country: "India"
}
const {name, ...det} = user
console.log(name);
console.log(det);
*/

      // OBJECT SPREAD
    // COPY OBJECT
    /*
const user = {
  name: "Om",
  age: 22
};

const newUser = {
  ...user
};

console.log(newUser);
*/
               // OBJECT MERGE
/*
const user = {
    name: "om",
    age: 22
}
const address = {
    city: "uki",
    state: "uk"
}
const profilt = {...user, ...address};
console.log(profilt);
*/

     //OBJECT ITERATION
/*
const user = {
    name: "om",
    age: 22,
    city:"uki"
}
for(let key in user){
    console.log(key,user[key])
}
*/

           //OBJECT.KEYS()
/*
const user = {
    name: "om",
    age: 22,
    city:"uki"
}
const keys = Object.keys(user);
console.log(keys);

// Object.keys(user).forEach((x)=>{
//     console.log(x)
// })
*/

         // OBJECT.VALUES()
/*
const user = {
    name: "om",
    age: 22,
    city:"uki"
}
const values = Object.values(user);
console.log(values);
*/

         // OBJECT.ENTRIES()
/*
const user = {
    name: "om",
    age: 22,
    city:"uki"
}
const entries = Object.entries(user);
console.log(entries);
       // YEA DESTRUCTURING HA..
Object.entries(user).forEach(([keys,values])=> {
    console.log(keys,values)
})
*/


