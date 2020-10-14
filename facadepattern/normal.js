function getUsers(){
    return fetch("https://jsonplaceholder.typicode.com/users",
    {
        method:"GET",
        headers:{"Content-Type":"application/json"}
    }).then(res=>res.json());
}

function getUserTodos(id){
    return fetch(`https://jsonplaceholder.typicode.com/todos?userId=${id}`,{
        method:"GET",
        headers:{"Content-Type":"application/json"}
    }).then(res=>res.json());
}

getUsers().then(users=>{
    console.log(users);
})

getUserPosts().then(todos=>{
    console.log(todos);
})