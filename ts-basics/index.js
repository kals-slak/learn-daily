//is a todo object
var todo = {
    id: 1,
    task: "do something",
    isdone: false,
};
//an alternate syntax can be
var user = {
    id: 1,
    username: "abc",
};
//similarly for variables 
var username;
username = "abc";
//for arrays
var values = [1, 2, 3];
//functions
var fun = function (i) {
    console.log(i);
};
//when to use type annoatations
var json = "{'a':10,'b':20}";
var asjson = JSON.parse(json); //here the problem is, JSON.parse returns value of type any
//so in this case we have to use type annotations
var betterr = JSON.parse(json);
//holding multiple types of value
var optionall = false; //union
optionall = "comments"; // error will be shown if type annotation is not given
