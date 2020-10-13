 
// { User class }

class User{

    public id : number;
    public username : string;
    public subs : boolean = false;

    constructor(id,username){
        this.id = id;
        this.username = username;
    }

    setSub(status:boolean){
        this.subs = status;
        return this;
    }

    hasAccess() : boolean{
        return this.subs === true;
    }
}

// { null User or Guest User class }

class NullUser{
    public id :number;
    public username : string;
    public subs : boolean = false;
    constructor(){
        this.id = -1;
        this.username = "Guest";
    }

    hasAccess() : boolean{
        return this.subs === false;
    }
}



// Creating Users Arrays , It is Similar to Database 😇 

const Users = [
    new User(1,"Aravinda krishnan").setSub(true),
    new User(2,"Tony Stark"),
    new User(3,"Steve Rogers").setSub(true)
]


function getUser(id : number){
    // we will get the current user with that id with their properties
    
    const user =  Users.find(user => user.id === id); 
    

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

function checkAccess(id : number){
    
    const user = getUser(id);

    if(user.subs != false && user.hasAccess() ){
        console.log(`${user.username} Has Access for Pro Version ✅` )
    }
    
    else{
        console.log(`${user.username} No Access for Pro Version ❌`)
    }
}

//  checkAccess(<id>)
checkAccess(2);

// Output => Aravinda krishnan No Access for Pro Version ❌