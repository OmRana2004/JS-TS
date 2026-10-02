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

const dataa = fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(res => res.json())
dataa.then(json => console.log(json)
)





   
    

