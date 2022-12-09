let myJSON='{"firstName":"Jonh", "lastName":"Smith","age": 25}';
let myObj={
    firstName :"Jonh",
    lastName :"Smith",
    age : 25
}
//console.log(typeof(myJSON));
//console.log(myObj.firstName);
//function parse
let obj2 = JSON.parse(myJSON);
console.log(obj2,typeof(obj2));

//function stringify
let JSON2 = JSON.stringify(myObj);
console.log(JSON2,typeof(JSON2));
