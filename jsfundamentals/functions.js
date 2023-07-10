//sum of arguments
function sum(...args){
    args = Array.isArray(args[0]) ? [...args[0]]: args;
    return args.reduce((acc,cur)=> acc+cur);
}

//circle object
let circle = {
    radius:1,
    get area(){
        return Math.PI * this.radius * this.radius;
    }
}

//count occurances
function occuranceCount(arr, ele){
    if(!Array.isArray(arr)) throw("not an valid array");
    return arr.reduce( (acc, cur)=> {
        if(cur===ele) return acc+1;
        return acc;
    }, 0);
}

try{
    console.log(occuranceCount(true,1));
}
catch(err){
    console.log(err);
}
