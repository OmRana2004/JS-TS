  // CHECK WEATHER THE STRING IS PLANDROME OR NOT

  let str = "RACECAR";
  let reverse = "";

  for(let i = str.length-1; i >= 0; i--) {
    reverse += str[i]
  }

  console.log(reverse === str);
  