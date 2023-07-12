
//is used to describe the object properties and their types
interface Todo{
    id: number;
    task: string;
    isdone: boolean;
}

//is a todo object
const todo:Todo = {            //mentioning that the todo object is of type Todo
    id: 1,                     //this can help in identifying errors 
    task: "do something",      
    isdone: false,
}

//an alternate syntax can be
const user:{ id:number ; username:string } = {
    id:1,
    username:"abc",
}


//similarly for variables 
let username:string;
username = "abc";

//for arrays
let values:number[] = [1, 2, 3];

//functions
const fun:(i:number)=> void = (i:number) =>{
    console.log(i);
}

//when to use type annoatations
const json = "{'a':10,'b':20}";
const asjson = JSON.parse(json); //here the problem is, JSON.parse returns value of type any
                                 //so in this case we have to use type annotations
const betterr: {a:number; b:number} = JSON.parse(json);        


//holding multiple types of value
let optionall: boolean | string = false;        //union
optionall = "comments";     // error will be shown if type annotation is not given