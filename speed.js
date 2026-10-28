// const user = {
//     name: "om rana",
//     age: 22,

//     greet: function(){
//         console.log(this.age);
//     }
// }
// user.greet();

// const code = {
//     lan: "js",
//     new: "ts",

//     compil(){
//         console.log(this.lan);
        
//     } 
// }
// code.compil()

// const course = {
//     cName: "AI_ML",
//     price: 999,
//     details: {
//         courseInstu: "harkirat",
//           vill: "saura"
//     }
// }
// const {cName, details: {vill, courseInstu}} = course

// console.log(vill, cName, courseInstu);

// function getData() {
//     return new Promise((reslove, reject) => {
//         reslove("Hello OM")
//     });
// }
// getData().then((res) => {
//     console.log(res);
// })

// async function getData() {
//     return "Hello Om"
// }
 
// async function main() {
//     const res = await getData()
//     console.log(res);
// }
// main()

const vol = (str) => {
    let count = 0
    for(let i = 0; i <= str.length; i++){
        if("aeiouAEIOU".includes(str[i])){
            count++
        }
    }
    return count;
}
console.log(vol("aeu"));

    
    
    

 

