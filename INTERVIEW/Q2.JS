 // REVERSE THE STRING WITH REVERSE METHOD AND WITHOUT REVERSE METHOD

          // USING REVERSE METHOD
 let str = "OM RANA";
 let reverse = str.split("").reverse("").join("");

 console.log(reverse);

    // WITHOUT REVERSE METHOD
let strr = "OMRANA";
let revs = "";
for(let i = strr.length-1; i >=0; i--){
    revs += strr[i];
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
 