class User{
    constructor(name,age){
        this.name = name
        this.age = age
    }

    client(){
        console.log(`Hello Client_ ${this.name}`);
    }

    admin(){
        console.log(`Hello Admin_ ${this.name}, ${this.age}`);
    }
}
const u1 = new User("om",22)
const u2 = new User("ram",26)

u1.client()
u2.admin()

