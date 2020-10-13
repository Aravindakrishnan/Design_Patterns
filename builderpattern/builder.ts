/* Create Object that have Interlinking Parts or
     Many Optional or Required field We will Go for 🏗 Builder Pattern*/

/*
    Imagine We have a class <User> with a Contructor(20 arguments)

    example : constructor(name,age,email,city,pincode,.......) 😲

    while Creating Object for that 

    It will be 3x 😲

    const user = User("yoyo",20,"yoyo@gmail.com",......) 😦

    To Solve that we will go for builder~pattern 😍
*/


// Do this  ✅

class Address{
    public city : string;
    public pincode : string;
    constructor(city :string,pincode:string){
        this.city = city;
        this.pincode = pincode;
    }
}

class User{
    public name : string;
    constructor(name:string){
        this.name = name;
    }
}

class UserBuilder{
    public user;
    constructor(name :string){
        this.user = new User(name);
    }

    setEmail(email:string){
        this.user.email = email;
        return this;
    }
    setStatus(status:string){
        this.user.status = status;
        return this;
    }
    setNumber(number:number){
        this.user.number = number;
        return this;
    }

    setPromember(check:boolean){
        this.user.promember = check;
        return this;
    }
    
    setAddress(address){
        this.user.address = address;
    }

    build() {
        return this.user;
    }
}

//  Creating an Object

// one way single line
const user1 = new UserBuilder("Elon Musk").setEmail("elonmusk@gmail.com").build();

// 2nd way line by line

const user2 = new UserBuilder("Elon Musk");

user2.setEmail("example@com");
user2.setNumber(1111111111);
user2.setPromember(true)

//  finally

console.log(user2.build());


// Don't Do this ❌

class Address1{
    public city:string;
    public pincode : string;
    constructor(city,pincode){
        this.city = city;
        this.pincode = pincode;
    }
}

class User1{
    public name : string;
    public email : string;
    public promember : boolean;
    public address;
    public status : string;
    constructor(name,email,promember,address,status){
        this.name  = name;
        this.email = email;
        this.promember = promember;
        this.address = address;
        this.status = status;
    }


}


const user3 = new User1("Elon Musk","elonmusk@spacex.com",true,new Address1("Mars","404"),"Never stop Learning");
/* Here  we have to initiate everything if we didn't we will get
    example : {

        name : "Elonmusk",
        email : undefined,
        promember = undefined.
        address , undefined
        .
        .
        .
    }
*/
console.log(user3);

