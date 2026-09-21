                                    //OBJECTS LITERALS

const { use } = require("react")

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

const myCoding = [
    {
        langNama: "JAVASCRIPT",
        syntax: "JS",
        price: 999
    },
    {
        langNama: "PYTHON",
        syntax: "PY",
        price: 1999
    },
    {
        langNama: "JAVA",
        syntax: "JAVA",
        price: 2999
    },
    {
        langNama: "RUST",
        syntax: "RS",
        price: 3999
    }
]

myCoding.forEach((items) => {
    console.log(items.langNama);
})
setTimeout(() => {
        const total = myCoding.reduce((acc,items) => acc+items.price,0)
        console.log(`YOUR TOTAL VALUE IS: ${total}`)
    },2000)
    

    // Method Shortand (MODERN AND SHORTER SYNTAX TO WRITE AN FUNCTION) 
// const user = {
//     name:"om",

// call() {
//     console.log(this.name)
// }
// }
// user.call()

