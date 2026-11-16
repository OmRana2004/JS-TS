class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}@om`
    }
    set password(value){
        this._password = value
    }
}

const om = new User("om@12334", "abc")
console.log(om.email);
console.log(om.password);

/*************************************************************************************************************************/

// const product = {
//   price: 100,

//   get price() {
//     return this._price;
//   },

//   set price(value) {
//     this._price = value * 2;
//   }
// };

// product.price = 500;

// console.log(product.price);

const product = {
    price : 100,

    get price() {
        return this._price;
    },

    set price(value) {
        this._price = value*2
    }
};

product.price = 500

console.log(product.price);

