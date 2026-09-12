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
const user = {
    name: "Sita",
    call: "Mata",

    greet() {
        console.log(this.name,this.call)
    }
}
user.greet()
