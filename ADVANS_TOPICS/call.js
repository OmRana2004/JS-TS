function SetUsername(username){
    this.username=username
    console.log("CALLED");
    
}

function CreateUser(username,pass,mail){
    SetUsername.call(this,username)

    this.pass=pass
    this.mail=mail
}

const om = new CreateUser("omrana", "1233456", "omrana@gmail.com")
console.log(om);
