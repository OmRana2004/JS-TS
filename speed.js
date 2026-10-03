const user = {
    name: "om rana",
    age: 22,

    greet: function(){
        console.log(this.age);
    }
}
user.greet();

const code = {
    lan: "js",
    new: "ts",

    compil(){
        console.log(this.lan);
        
    } 
}
code.compil()