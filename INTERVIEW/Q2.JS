 // REVERSE THE STRING WITH REVERSE METHOD AND WITHOUT REVERSE METHOD

          // USING REVERSE METHOD
// let str = "OMRANA"
// console.log(str.split("").reverse("").join(""));


    // WITHOUT REVERSE METHOD
let str = "OMRANA"
let revs = ""
for(let i = str.length-1; i >= 0; i--) {
    revs += str[i]
}
console.log(revs);

// function revs(str) {
//     let ree = ""
//     for(let i = str.length-1; i >=0; i--){
//         ree += str[i]
//     }
//     return ree
// }
// console.log(revs("omrana"));
 