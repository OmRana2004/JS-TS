  // CHECK WEATHER THE STRING IS PLANDROME OR NOT

  let str = "RACECAR";
  let plandrome = "";

  for(let i = str.length-1; i>=0; i--){
    plandrome += str[i]
  }
  console.log(plandrome === str);
  
  
  