 
// { User class }

class User{
    constructor(id,username,subs = false){
        this.id = id;
        this.username = username;
        this.subs = subs;
    }

    hasAccess(){
        return this.subs === true;
    }
}

// { null User or Guest User class }

class NullUser{
    constructor(){
        this.id = -1;
        this.username = "Guest";
        this.subs = false;
    }

    hasAccess(){
        return this.subs === false;
    }
}



// Creating Users Arrays , It is Similar to Database 😇 

const Users = [
    new User(1,"Aravinda krishnan"),
    new User(2,"Tony Stark",true),
    new User(3,"Steve Rogers",false)
]


function getUser(id){
    // we will get the current user with that id with their properties
    const user =  Users.find(user=> user.id === id); 
    
    /* Check the User is null with that id if it is 
    We have a guest User or Null User  */

    if(user == null){
        return new NullUser(); // ref : line 18
    }else{
        return user; 
    }
}

/* This function Used for Check the User have Pro 
Access for the website */

function checkAccess(id){
    const user = getUser(id);
    if(user.subs != false && user.hasAccess() ){
        console.log(`${user.username} Has Access for Pro Version ✅` )
    }else{
        console.log(`${user.username} No Access for Pro Version ❌`)
    }
}

//  checkAccess(<id>)
checkAccess(1)

// Output => Aravinda krishnan No Access for Pro Version ❌