function outer(){
    let name = "OM"

function inner(){
    console.log(name);
}
return inner
}
const result = outer()
result()