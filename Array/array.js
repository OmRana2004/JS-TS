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

const arr = [10,20,30,40,50,60];
const sum = arr.reduce(function(acc, n) {
    return acc + n;
})
console.log(sum);