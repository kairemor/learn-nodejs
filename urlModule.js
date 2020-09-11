const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=avtive'); 

//Serialezes Url 

console.log(myUrl.href);
console.log(myUrl.toString());

//host name  give the port number 
console.log(myUrl.host);

//hostname does not get port 
console.log(myUrl.hostname);

//pathnme 
console.log(myUrl.pathname);

//Serialezed query 
console.log(myUrl.search);

//Param object 
console.log(myUrl.searchParams);

//add param 
myUrl.searchParams.append('abc','123') ;
console.log(myUrl.searchParams);
//loop through the params 

myUrl.searchParams.forEach((value,name) => console.log(`${name}: ${value}`)) ; 
