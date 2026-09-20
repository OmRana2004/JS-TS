 // REVERSE THE STRING WITH REVERSE METHOD AND WITHOUT REVERSE METHOD

          // USING REVERSE METHOD
 let str = "OM RANA";
 let reverse = str.split("").reverse("").join("");

 console.log(reverse);

    // WITHOUT REVERSE METHOD
let strr = "OM RANA";
let reversing = "";

for(let i = str.length-1; i >= 0; i--) {
    reversing += str[i];
}
console.log(reversing)
 