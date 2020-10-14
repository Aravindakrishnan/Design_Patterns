/*
    Facade Design Pattern

        It allows as to Query API and get Certain Data from 
        the API in the clean manner :)
*/

function getUsers(){
    return getFetch("https://jsonplaceholder.typicode.com/users");
}

function getUserTodos(params= {}){
    return getFetch("https://jsonplaceholder.typicode.com/todos",params);
}


function getFetch(url,params = {}){
    // explaination in ./readme.md
    const query = Object.entries(params).map(param=>{
        return `?${param[0]}=${param[1]}`;
    }).join("&");

    console.log(`${url}${query}`);
    return fetch(`${url}/${query}`,{
        method:"GET",
        headers:{"Content-Type":"application/json"}
    }).then(res=>res.json());
}

// get the Users

getUsers().then(users=>{
    console.log(users);
})

// we can query Anything in the params
getUserTodos({userId:1 , completed : false }).then(todos=>{
    console.log(todos);
})
getUserTodos({userId:2 , completed : true }).then(todos=>{
    console.log(todos);
})