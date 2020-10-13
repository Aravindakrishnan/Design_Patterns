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
    constructor(city,pincode){
        this.city = city;
        this.pincode = pincode;
    }
}

class User{
    constructor(name){
        this.name = name;
    }
}

class UserBuilder{
    constructor(name){
        this.user = new User(name);
    }

    setEmail(email){
        this.user.email = email;
        return this;
    }
    setStatus(status){
        this.user.status = status;
        return this;
    }
    setNumber(number){
        this.user.number = number;
        return this;
    }

    setPromember(check){
        this.user.promember = check;
        return this;
    }
    
    setAddress(address){
        this.user.address = address;
    }

    build(){
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




// Special in Javascript

class Userstate{
    constructor(name,{email,phone,address,status}){
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.address = address;
        this.status = status;
    }
}

const userstate = new Userstate("Elonmusk",{status:"Never Stops Learning",phone:1111111, email:"elonmusk@spacex.com"});

console.log(userstate);


// Don't Do this ❌

class Address1{
    constructor(city,pincode){
        this.city = city;
        this.pincode = pincode;
    }
}

class User1{
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

