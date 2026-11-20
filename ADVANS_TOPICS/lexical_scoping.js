// function outer(){
//     const name = "om"

//     function inner(){
//         console.log(name);
//     }
//     inner();
// }
// outer();


name = "Om";

function outer() {
  const name = "ram";
  return inner();
}

function inner() {
  console.log(name);
}
outer();

