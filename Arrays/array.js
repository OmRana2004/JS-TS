// const pri = ["coding", "gaming", "sleeping", "eating", "socializing"];
// const newPri = pri.filter((charS) => charS.startsWith('s') )
// console.log(newPri);
//  console.log(pri[4])

// setTimeout(() => {
//    pri [4] = "SOCILA", console.log(pri[4])
// },2000)

              // FINDING THE INDEX OF THE ARRAY AND ALL CURD METHODS
/*
const name = ["RAM", "SITA", "LAXMAN", "HANUMAN"];
name.pop();
name.push("hanuman");
name.shift();
name.unshift("RAM");
name.reverse();
console.log(name)
console.log(name.length)
*/


// setTimeout(() => {
//     console.log(name[name.length-1])
// },2000)

// TABEL OF 5 INSIDE AN AYYAY USING FOR LOOP
/*                        
arr = [];

for(let i = 1; i <= 10; i++) {
   t = (`5 x ${i} = ${i*5}`)
    arr.push(t)
}
console.log(arr)
*/
//SUM OF AN GIVEN ARRAY
/*
const arr = [10, 20, 30, 40, 50, 60];
sum = 0;

for (let i = 0; i < arr.length; i++) sum = sum + arr[i];

console.log(sum);
*/


          // USING forEach
    /*
const arr = [10,20,30,40];
sum = 0;

arr.forEach((ele) => {
    sum = sum + ele
})
    console.log(sum)
    */

                    //SHORTER VERSION USING REDUCE()
/*                


// const Sarr = [10,20,30,40,50,60]
// const sum = Sarr.reduce((n,o) => n+o)
// console.log(sum)
*/

// const arr = [10,20,30,40,50,60];
// const sum = arr.reduce(function(acc, n) {
//     return acc + n;
// })
// console.log(sum);

//     const res = ["hello", "by"]
//     const userChoice = "hello"

//         for(let i = 0; i <= 6; i++) {
//    if(userChoice === res[0]) {
//     console.log("Hello Ji")
//    } else if(userChoice === res[1]) {
//     console.log("!By Ji")
//    } else {
//         console.log("Choose atleast one options")
//         break;
//    }
// }

// let prices = [100, 200, 300];
// let fruits = ["Apple", "Mango", "Banana"];
// let scores = [80, 90, 75];
// let users = ["Om", "Rahul", "Aman"];

// for(let i = 0; i<prices.length; i++)
//     console.log(prices[i])

                                //FINDING THE 2 INDEX AND LAST INDEX OF AN ARRAY 
// const arr = ["om","rana","ram","sita","laxaman","hanuman","bali","akshat","bisht"]

// console.log(arr[2])
// console.log(arr[arr.length-3])

let arr = [30,50,80,10];

arr.sort((a,b)=>a-b);

console.log(arr);
console.log(arr.length)


let ar = [10,20,30,40,50,60]
ar.forEach(function(elem,idx) {
    console.log(elem,idx);
});
    