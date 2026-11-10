class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get password(){
        return `${this._password}@om`
    }

    set password(value){
        this._password = value
    }
}

const om = new User("omrana", "abc")
console.log(om.password);
