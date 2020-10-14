# Explaination of this Query

Javascript

```javascript
const query = Object.entries(params)
  .map((param) => {
    return `?${param[0]}=${param[1]}`;
  })
  .join("&");

console.log(`${url}${query}`);
```

Imagine we have Pass `{userId : 1}` as a Parameter ;

So params = {userId:1}

Object.entries(params) will makes params as Array encloses the object / json [{userId : 1}]

Then High Order Function MAP return the Array of key and value as `param`

Example `[key , value]` => we have to form this structure

`?key=value`

So , we return

javascript

```javascript
return `?${param[0]}=${param[1]}`;
```

We not only Going to Have One Params We will Have So Many Params Query like this

{userId : 1, completed : true}

==> structure 👇

`?userId=1&completed=true`

So we Join `&`

```javascript
 .join("&");
```
