const accountId = '12345' //Create a constant  whose value can't be modified
let accountEmail = 'shabaj@google.com' //Create a scoped varable
var userName = 'some user' //Create a global variable
password = 'somePassword' // Create a global variable

/*
Always prefer using let on var as let is a creates a scoped variables;
*/

console.table([accountId, accountEmail, userName, password])