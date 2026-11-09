// const orderFood = (hof) => {
//     console.log("YOUR FOOD IS PREPARIG!");
//     setTimeout(()=> {
//         hof()
//     },2000)
// }

const { use } = require("react");

// const ready = () => {
//     console.log("YOUR FOOD IS READY SIR!")
// }
// orderFood(ready);

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} x ${j} = ${i * j}`);
//   }
//   console.log(" ");
// }


// const vol = (str) => {
//     let c = 0;
//     for(let i = 0; i<str.length; i++){
//         if("aeiouAEIOU".includes(str[i])){
//             c++
//         }   
//     }
//     return c;
// }
// console.log(vol("omrana"));

// let a = 10;
// let b = 20;

// [a,b] = [b,a]

// console.log(a);



 



// const rvs = (str) => {
//     return str.split("").reverse("").join("")
// }
// console.log(rvs("omrana"));

// let str = "OMRANA";
// let rvss = str.split("").reverse().join("")
// console.log(rvss);

// function order(n){
//     console.log("YOUR FOOD IS PREPARING SIR");
//     setTimeout(()=>{
//         n();
//     },2000)
// }

// function ready(){
//     console.log("YOUR FOOD IS READY SIR!");
    
// }

// order(ready);

// let user = {
//     fName : "om",
//     lName : "rana",
//     add : "saura",
//     city : "uttarkashi"
// }

// console.log(user[lName]);

// let arr = [2,4,6,8,10]

// console.log(arr.reduce((acc,val)=>(acc+val)))

// let num = [2,4,6,8,10]
// let res = num.filter(num=>num>=78)
// console.log(res)

// const data = () => {
//  fetch('https://jsonplaceholder.typicode.com/posts/1')
//  .then(res => res.json())
//  .then(console.log);
// }
// data();

// const dataa = fetch('https://jsonplaceholder.typicode.com/posts/10')
// .then(res => res.json())
// dataa.then(json => console.log(json)
// )

// console.log("A");

// setTimeout(() => {
//   console.log("B");

//   Promise.resolve().then(() => {
//     console.log("C");
//   });
// }, 0);
    

// const promise = new Promise((resolve,reject) => {
//   reject(new Error("Failed To Create Order"))
// })
// .then(() => {
//   console.log("PRACTICING PROMISE");
// })
// .catch((e) => {
//   console.log(e.message);
// })

// let val;
// const promise = new Promise((re, rj) => {
//   val = true;
//   if(val === true){
//   re("PROMISE IS RESOLVED"); 
//   }else{
//   rj(new Error("PROMISE REJECTED")); 
//   }
// });

// promise.then((res)=> {
//   console.log(res);
// }).catch((err)=> {
//   console.log(err.message);
// })
             //DIFFERENCE CHECKER 
// let val;
// const promise = new Promise((re,rj)=>{
//   try{
//     val = OM
//     if(val===true){
//     re("PROMISE RESOLVED")
//     }else{
//       rj(new Error("PROMISE IS REJECTED"))
//     }
//   } catch(error){
//       rj(error)
//   }
// })
// .then((res)=>{
//   console.log(res);
// }).catch((err)=>{
//   console.log(err.message);
// })

// function check(){
//   return new Promise((re,rj)=>{
//     setTimeout(()=>{
//       console.log("CHECKING...CHECKING..CHECKING");
//       rj(new Error("we are rejecting"))
//     },2000)
//   })
// }

// function pass(){
//   return new Promise((re,rj)=>{
//     setTimeout(()=>{
//       console.log("PASSING..PASSING...PASSING");
//       re("we are passing")
//     },3000)
//   })
// }
// check().catch((err)=>{
//   console.log(err.message);
// }).then(pass)
// .then((res)=>{
//   console.log(res);
  
// })

// deconstruct

// let arr = ["om","rana","akshat","bist"]
// let [n,s,f,fs] = arr
// console.log(fs,f,s,n);

// SPREAD

// const arr = ["om","rana","akshat","bist"]
// console.log(arr);
// console.log(...arr);

// REST
// const [fn,...arr] = ["om","rana","akshat","bist"]
// console.log(arr);
// console.log(fn);

// let obj = {
//     name: "om",
//     age: 22,
//     city: "uk",
//     state: "utt"
// }

// const entries = Object.entries(obj)
// console.log(entries);
// entries.forEach(([p,k]) =>{
//     console.log(p,k);
    
// })

//  let user1 = {
//     name: "om",
//     age: 22,
//     city: "uk",
//     state: "utt"
// }
//  let user2 = {
//     name: "akshat",
//     age: 23,
//     city: "dhe",
//     state: "utt"
// }

// let alluser = {...user1, ...user2}
// console.log(alluser);


// console.log(Object.hasOwn(alluser,"city"));

// const user = {
//     name: "om",
//     age: 22,
//     address: {
//         city: "uttarkashi"
//     }
// }
// Object.freeze(user)
// user.age = 25
// user.address.city = "dehradun"
// console.log(user);

// const user = {
//     name: "om",
//     age: 22,
//     city: "uttarkashi",
//     hobbies: ["cricket", "cooking", "guitar"]
// }
// console.log(user.hobbies[2]);

// const arr = [
//     {
//         name: "om",
//         age: "22"
//     },
//     {
//         name: "om",
//         age: "22"
//     },
//     {
//         name: "om",
//         age: "22"
//     },
// ]
// const [
//     {name: fname, age: fage},
//     {name: sname, age: sage}
// ] = arr
// console.log(fname);

// class Phone {
//     constructor(brand){
//         this.brand = brand
//     }

// showBrand() {
//     console.log(`YOU ARE USING ${this.brand}`);
// }
// }

// const p1 = new Phone("APPLE")
// const p2 = new Phone("SAMSUNG")

// p1.showBrand()
// p2.showBrand()

// let str = "RACECAR"
// let revs = ""

// for(let i = str.length-1; i >=0; i--){
//     revs += str[i]
// }
// console.log(revs===str);

// const vol = (str)=> {
//     let count = 0;
//     for(let i = 0; i<str.length; i++){
//         if("aeiouAEIOU".includes(str[i])){
//             count++
//         }
        
//     }
//     return count;
// }
// console.log(vol("omrana"))

// let a = 10;
// let b = 200;

// [a,b] = [b,a]
// console.log(a);

// const people = [
//     { name: "om", age: 62},
//     { name: "ram", age: 23},
//     { name: "sita", age: 84},
//     { name: "sita", age: 24},
// ];

// const arr = people.filter(x=>x.age > 40).map(x=>x.name)
// console.log(people);

console.log("FIRST");
setTimeout(()=>{
    console.log("DONE!");
    console.log(Math.PI)
},2000)
    new Promise((reslove,reject)=>{
    reslove("Reslove Promise")
}).then((res) => {
    console.log(res);
    
})

for(let i = 0; i<10; i++){
    const random = Math.PI
    console.log(random);
    
}

















